import axios from "axios"

export default function request(config) {
  const axiosObj = axios.create({
    baseURL: config.baseURL || "http://152.136.185.210:7878/api/m5",
    timeout: config.timeout || null
  })
  // axios及其实例对象的返回值是promise对象
  return axiosObj(config)
}



