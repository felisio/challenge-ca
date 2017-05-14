export const loadStorage = (stateName) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveStorage = (stateName, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (e) {
    console.error('Erro ao gravar no storage:', e);
  }
};

export const removeStorage = (stateName) => {
  try {
    localStorage.removeItem(stateName);
  } catch (e) {
    console.error('Erro ao remover no storage:', e);
  }
};
