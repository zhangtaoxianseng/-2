function callApp(url) {

	// window.location.href='lanjingfm://action_name=open?action=radio&param0=1';

	setTimeout(function() {
				var ua = navigator.userAgent;
				var platform = /MicroMessenger/i.test(ua) ? "weixin"
						: /Android/i.test(ua) ? "android" : /iPhone|iPad|iPod/i
								.test(ua) ? "ios" : "pc";
				if (platform == "android") {
					location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cctbn.radio";
				} else if (platform == "ios") {
					location.href = 'https://itunes.apple.com/app/id1015204941';
				} else if (platform == "weixin") {
					location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cctbn.radio";
				} else if (platform == "pc") {
					location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cctbn.radio";
				}
			}, 1000);

	window.location.href="lanjingfm://action_name=open?"+url;
	// location = "lanjingfm://" + url;
	//javascript:callApp('action=radio&actionId=${radio.radioId}');
};