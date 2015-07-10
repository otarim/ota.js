// localStorage,cookie
// 不能把cookies域属性设置成与设置它的服务器的所在域不同的值。
// cookie.js
module.exports = {
	setCookie: function(config){
		if(!config){return}
		var expires = '; expires=' + new Date(+new Date() + config.expires * 24 * 3600 * 1000).toGMTString()
		return document.cookie = encodeURIComponent(config.name) + "=" + encodeURIComponent(config.value) + expires + (config.domain ? '; domain=' + config.domain : '') + (config.path ? '; path=' + config.path : '') + (config.secure ? '; secure' : '');
	},
	getCookie: function(name){
		return decodeURIComponent(document.cookie.replace(new RegExp('.*(?:^|; )' + name + '=([^;]*).*|.*'), '$1'))
	},
	removeCookie: function(name){
		// expires=Thu, 01 Jan 1970 00:00:00 GMT
		var value = this.getCookie(name)
		if(value){
			return document.cookie = name + '=' + value + '; expires=' + 'Thu, 01 Jan 1970 00:00:00 GMT'
		}
	}
}
// storage.js
// 通过localStorage存储的数据是永久性的,除非手动删除个人信息，遵循同源可访问规则，作用域取决于是否同源（文档源）。（子域也不能跨域）
;['setItem','getItem','removeItem'].forEach(function(key){
	exports[key] = localStorage[key].bind(localStorage)
})
exports.clearItem = localStorage['clear'].bind(localStorage)
exports.storageKeys = function(){
	return Object.keys(localStorage)
}
exports.hasItem = function(key){
	return this.getItem(key) !== null
}
console.log('storage加载完毕')