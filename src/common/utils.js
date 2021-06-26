// 工具文件
// 防抖
export function fangdou(func, timeout) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}



// 将时间戳转换为日期对象
export function formatDateChuo(timestamp, format) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000 6
  let config = {
    yyyy: "",
    mm: "",
    dd: "",
    hh: "",
    MM: "",
    ss: "",
  };

  config.yyyy = date.getFullYear();
  config.mm =
    date.getMonth() + 1 < 10
      ? "-" + "0" + (date.getMonth() + 1)
      : "-" + date.getMonth() + 1;
  config.dd =
    date.getDate() < 10
      ? "-" + "0" + date.getDate() + " "
      : "-" + date.getDate();
  config.hh = " " + date.getHours();
  config.MM = ":" + date.getMinutes();
  config.ss = ":" + date.getSeconds();

  let result = "";
  for (let item in config) {
    if (format.indexOf(item) != -1) {
      result += config[item];
    }
  }
  return result;
}
