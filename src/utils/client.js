export const _localStorage = typeof localStorage !== 'undefined' ? localStorage : {
  setItem: () => { },
  getItem: () => { },
};