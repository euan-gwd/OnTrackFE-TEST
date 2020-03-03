export const loadState = () => {
  try {
    const savedStateInLocalStorage = sessionStorage.getItem('state');
    if (savedStateInLocalStorage === null) {
      return undefined;
    }

    return JSON.parse(savedStateInLocalStorage);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const savedState = JSON.stringify(state);
    sessionStorage.setItem('state', savedState);
  } catch (error) {
    console.error(error);
  }
};
