import swiper from 'swiper'
import axios from 'axios'
import jquery from 'jquery'
export default {
	install : function(Vue){
		Object.defineProperty(Vue.prototype,'$swiper',{
			value : swiper
		}),
		Object.defineProperty(Vue.prototype,'$http',{
			value : axios
		}),
		Object.defineProperty(Vue.prototype,'$',{
			value : jquery
		})
	}
}