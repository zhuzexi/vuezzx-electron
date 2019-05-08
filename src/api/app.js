// import { resolve } from "path";
// import { reject } from "q";

export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if(!err) {
        resolve({ code: 200, info: { appName: 'newAPPName'}})
      }else{
        reject(err)
      }
    })
  })
}


