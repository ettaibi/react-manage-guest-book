import { useState } from "react";
import moment from "moment";
import * as commentsService from "../services";
import { createComment, updateComment, deleteComment } from "../api";

export function usePersistedState(key) {
  const commentsFromStorage = commentsService.getItemByKey(key);
  const commentsFromState =
    commentsFromStorage && commentsService.getParsedItemsByKey(key);
  if (!commentsFromState) commentsService.persistStringifiedItem(key, []);
  const [comments, setter] = useState(commentsFromState || []);
  const persistedState = commentsService.getParsedItemsByKey(key);

  return {
    handleAction: async (data, action) => {
      switch (action) {
        case "submit":
          data.id = +new Date();
          data.created_at = moment(data.id).format("DD-MM-YYYY HH:mm:ss");
          setter([...comments, data]);
          persistedState.push(data);
          createComment(data.id);
          commentsService.persistStringifiedItem(key, persistedState);
          break;
        case "update":
          let newComment = data;
          const filteredComments = comments.filter(
            comment => comment.id !== data.id
          );
          data.last_updated = moment(+new Date()).format("DD-MM-YYYY HH:mm:ss");
          filteredComments.push(newComment);
          setter(filteredComments);
          updateComment(String(+new Date()));
          commentsService.persistStringifiedItem(key, filteredComments);
          break;
        default:
          console.log("default");
      }
    },
    deleteComment: data => {
      const filteredComments = comments.filter(comment => comment.id !== data);
      setter(filteredComments);
      deleteComment(String(+new Date()));
      commentsService.persistStringifiedItem(key, filteredComments);
    },
    comments
  };
}

export function useFormState() {
  const initialState = {
    full_name: { value: "" },
    email: { value: "", error: "" },
    comment: { value: "" }
  };
  const [form, setValue] = useState(initialState);

  const [action, setAction] = useState("submit");

  return {
    form,
    action,
    setValue,
    initialState,
    edit: form => {
      setAction("update");
      setValue(form);
    },
    handleChange: e => {
      const value = e.target.value;
      const name = e.target.name;
      let error = "";
      const emailValidator = value.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      if (name === "email") {
        if (value && !emailValidator) {
          error = "Invalid email";
        }
      }
      setValue({ ...form, [name]: { value, error } });
    }
  };
}
