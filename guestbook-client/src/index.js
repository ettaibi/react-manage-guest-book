import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  TextField,
  Title,
  TextArea,
  CommentCard,
  Button,
  Container
} from "./components";
import { usePersistedState, useFormState } from "./hooks";
import { useCreateComment } from "./api";

function App() {
  const {
    initialState,
    form,
    setValue,
    action,
    handleChange,
    edit
  } = useFormState();
  const { handleAction, comments, deleteComment } = usePersistedState(
    "comments"
  );

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Title label="Guest Book" />
        <TextField
          name="full_name"
          value={form.full_name.value}
          onChange={handleChange}
          label="Enter your full name"
        />
        <TextField
          name="email"
          id="standard-error-helper-text"
          error={!!form.email.error}
          value={form.email.value}
          onChange={handleChange}
          helperText={form.email.error}
          label="Enter your Email"
        />
        <TextArea
          name="comment"
          value={form.comment.value}
          onChange={handleChange}
          placeholder="Leave comment here"
        />
        <Button
          disabled={!!form.email.error}
          label={action}
          onClick={e => {
            handleAction(form, action);
            setValue(initialState);
          }}
        />
      </Container>

      {comments.length > 0 && (
        <React.Fragment>
          <Title label="Manage Previous Comments" style={{ padding: "50px" }} />

          <Container
            fixed
            style={{
              display: "flex",
              backgroundColor: "#cfe8fc",
              borderRadius: "25px",
              padding: "30px",
              flexFlow: "row wrap",
              justifyContent: "space-around"
            }}
          >
            {comments.map((item, idx) => (
              <CommentCard
                onUpdate={edit}
                onDelete={deleteComment}
                key={idx}
                last_updated={item.last_updated}
                created_at={item.created_at}
                form={item}
              />
            ))}
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
