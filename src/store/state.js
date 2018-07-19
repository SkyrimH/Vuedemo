let defaultCity = '北京'
// 为防止页面禁止localstorage或者隐身模式，用 try catch 来防止错误
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
