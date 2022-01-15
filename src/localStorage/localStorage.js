export const getStorage = (value) => {
  return localStorage.getItem(value)
}
export const setStorage = (key,value) => {
  if(key==null || value !== null ){
    return localStorage.setItem(key,value)
  }

}