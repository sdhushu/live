export default function() {
	// #ifdef APP-PLUS
	return new Promise((resolve, reject) => {
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			console.log(plus.runtime.appid,plus.runtime.version)
			uniCloud.callFunction({
				name: 'check-version',
				data: {
					appid: '__UNI__9F0D4B6',
					appVersion: plus.runtime.version,
					wgtVersion: widgetInfo.version
				},
				success: (e) => {
					resolve(e)
				},
				fail: (error) => {
					reject(error)
				}
			})
		})
	})
	// #endif
	// #ifndef APP-PLUS
	return new Promise((resolve, reject) => {
		reject({
			message: '请在App中使用'
		})
	})
	// #endif
}
