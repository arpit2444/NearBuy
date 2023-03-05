// this is a function for getting a data from localstorage.
export const getData = (key) => {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (err) {
    return undefined;
  }
};

// this is a function for saving a data into localstorage.
export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// this is a function for deleteing a data from localstorage.
export const deleteData = (key) => {
  localStorage.removeItem(key);
};
