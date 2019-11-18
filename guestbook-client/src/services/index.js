export const getParsedItemsByKey = key => {
  return JSON.parse(localStorage.getItem(key));
};
export const getItemByKey = key => {
  return localStorage.getItem(key);
};
export const persistStringifiedItem = (key, state) =>
  localStorage.setItem(key, JSON.stringify(state));
