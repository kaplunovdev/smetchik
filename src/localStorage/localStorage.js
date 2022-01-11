export const getStorage = (value) => {
  return localStorage.getItem(value)
}
export const setStorage = (key,value) => {
  return localStorage.setItem(key,value)
}