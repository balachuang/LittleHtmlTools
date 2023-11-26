const posDomTemp1 = '<div class="timePos" />';
const posDomTemp2 =
	'<div class="timePosDesc">' +
	'	<span class="posName">{{posName}}</span><br/>' +
	'	<span class="timeStr" tz="{{timeZone}}"></span><br/>' +
	'</div>';
const posDomTemp3 = '<a class="posReference" href="{{url}}" target="_new">🔗</a>&nbsp;';
const posDomTemp4 = '<div class="posArrow"></div>';

// 要顯示的地點
// name: 名稱
// x: 畫面上的 X 座標, 單位 %
// y: 畫面上的 Y 座標, 單位 %, 不使用經緯度, 因為網路上的地圖緯線距離會隨緯改變
// timeZone: 時區
// offset: 框框位置量, 單位 %
const positions = [
	{
		name: '台北 / Taipei',
		x: 41.4, y: 51.6, timeZone: 8, offset: {x: 1, y: -0.5},
		references: [
			'https://www.google.com.tw/maps/@24.9785702,121.5401237,3a,75y,137.66h,103.21t/data=!3m6!1e1!3m4!1s4lhMMnF4Y2vRmG729KhiNA!2e0!7i16384!8i8192?entry=ttu'
		]
	},{
		name: '東京 / Tokyo',
		x: 46.6, y: 45.6, timeZone: 9, offset: {x: 4, y: 0},
		references: [
			'https://www.google.com.tw/maps/@35.7108445,139.7961992,3a,90y,37.26h,104.46t/data=!3m6!1e1!3m4!1s3_OyvdBSsyuZPrwox4fRFw!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.6593256,139.7451034,3a,75y,152.32h,131.64t/data=!3m6!1e1!3m4!1sAVQYJqPn9Ok5yfPCLHJRJA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7144681,139.7889532,3a,75y,94.43h,103.9t/data=!3m6!1e1!3m4!1snxDvNnsXYYoRPqg-b8SOOA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7104853,139.7981818,3a,75y,92.17h,108.08t/data=!3m6!1e1!3m4!1sKHTG4BM3V29NekMGqqx8qw!2e0!7i16384!8i8192?entry=ttu'
		]
	},{
		name: '北京',
		x: 40.1, y: 43.5, timeZone: 8, offset: {x: -8, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@39.914342,116.3971927,2a,75y,359.57h,102.28t/data=!3m7!1e1!3m5!1smvIxTGcVEYQAAAREq-bR4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DmvIxTGcVEYQAAAREq-bR4A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D200.95447%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@40.3608848,116.0158768,3a,75y,211.66h,84.18t/data=!3m8!1e1!3m6!1sAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC%3Dw203-h100-k-no-pi0-ya8.705296-ro-0-fo100!7i8704!8i4352?entry=ttu'
		]
	},{
		name: '香港 / Hong Kong',
		x: 40.2, y: 52.7, timeZone: 8, offset: {x: -7.5, y: 1},
		references: [
			'https://www.google.com.tw/maps/@22.2710413,114.1503332,3a,73.7y,355.46h,79.73t/data=!3m8!1e1!3m6!1sAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865%3Dw203-h100-k-no-pi-0-ya145.51648-ro0-fo100!7i10240!8i5120?entry=ttu'
		]
	},{
		name: '洛桑 / Lausanne',
		x: 10.3, y: 38.5, timeZone: 1, offset: {x: 0.5, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@46.5179569,6.629601,98a,35y,16.7h,40.66t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@46.5183788,6.6301591,3a,75y,351.61h,119.31t/data=!3m6!1e1!3m4!1skrzhYIBBemitJNHIirhzWQ!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.5203255,6.6314648,3a,75y,194.77h,102.72t/data=!3m7!1e1!3m5!1snXxBOqUENi4VoJBowrawQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnXxBOqUENi4VoJBowrawQg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D153.6764%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.506375,6.625701,3a,75y,186.64h,100.95t/data=!3m8!1e1!3m6!1sAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU%3Dw203-h100-k-no-pi-0-ya292.01563-ro0-fo100!7i5760!8i2880?entry=ttu',
			'https://www.google.com.tw/maps/@46.5222858,6.6345746,3a,87.7y,49.17h,119.11t/data=!3m8!1e1!3m6!1sAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi%3Dw203-h100-k-no-pi0-ya304.58078-ro-0-fo100!7i8704!8i4352?entry=ttu'
		]
	},{
		name: '費爾班克斯 / Fairbanks',
		x: 66.7, y: 21.5, timeZone: -9, offset: {x: 1, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@64.8605397,-147.6991619,55a,35y,223.07h,70.44t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@64.8597333,-147.7015103,3a,75y,308.7h,89.59t/data=!3m8!1e1!3m6!1sAF1QipOJunSNYR7QUD2KmgXk7folVnVvUuCR_AgDov1e!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOJunSNYR7QUD2KmgXk7folVnVvUuCR_AgDov1e%3Dw203-h100-k-no-pi0-ya259.66318-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@65.0373842,-147.4559392,3a,75y,117.65h,105.38t/data=!3m6!1e1!3m4!1si3Kg2wtKHRioGvU5uPyKCw!2e0!7i13312!8i6656?entry=ttu'
		]
	},{
		name: '拉斯維加斯 / Las Vegas',
		x: 76.1, y: 45.4, timeZone: -8, offset: {x: 0.5, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@36.1122134,-115.1769481,270a,35y,26.19h,73.32t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@36.1215393,-115.1690917,3a,75y,105.23h,109.25t/data=!3m8!1e1!3m6!1sAF1QipMkg3Zffq6OUyIEuM_aOouTRIJutMnaySrbiUlY!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMkg3Zffq6OUyIEuM_aOouTRIJutMnaySrbiUlY%3Dw203-h100-k-no-pi-0-ya17.334097-ro-0-fo100!7i8192!8i4096?entry=ttu',
			'https://www.google.com.tw/maps/@36.1740093,-115.1447917,3a,75y,292.87h,105.78t/data=!3m7!1e1!3m5!1sUbndO-aDfgC20DZT1z-cKw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DUbndO-aDfgC20DZT1z-cKw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D104.443%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@36.1211955,-115.1724458,3a,75y,277.08h,109.13t/data=!3m8!1e1!3m6!1sAF1QipNlvgdsDIyNeSEK0yISmRBJEgug7FzgZtJDCecM!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNlvgdsDIyNeSEK0yISmRBJEgug7FzgZtJDCecM%3Dw203-h100-k-no-pi-0-ya203.89415-ro0-fo100!7i8704!8i4352?entry=ttu'
		]
	},{
		name: '舊金山 / San Francisco',
		x: 74.1, y: 44.7, timeZone: -8, offset: {x: -10, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@37.8076006,-122.4110992,76a,35y,31.64h,66.53t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@37.8086682,-122.4101669,3a,75y,350.51h,89.61t/data=!3m8!1e1!3m6!1sAF1QipMnlXKOg8ptYiB-rMGJq1FgfDYnJz-7ZxpzSdAx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMnlXKOg8ptYiB-rMGJq1FgfDYnJz-7ZxpzSdAx%3Dw203-h100-k-no-pi-0-ya19.953331-ro-0-fo100!7i7200!8i3600?entry=ttu',
			'https://www.google.com.tw/maps/@37.8097069,-122.4161624,3a,75y,329.28h,95.4t/data=!3m8!1e1!3m6!1sAF1QipMUwUhbXzcl9lcEIDDLoSF1hvErJvguJY3lZvVS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMUwUhbXzcl9lcEIDDLoSF1hvErJvguJY3lZvVS%3Dw203-h100-k-no-pi-0.6388225-ya305.79068-ro-4.7389746-fo100!7i7200!8i3600?entry=ttu',
			'https://www.google.com.tw/maps/@37.8087768,-122.4717975,3a,88.3y,313.6h,96.44t/data=!3m6!1e1!3m4!1sTLT9GDLs3tEmSSAJm3lWEg!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@37.8078727,-122.418567,3a,75y,169.61h,100.25t/data=!3m6!1e1!3m4!1sDVbUYoAJtM60_W77hhjo0Q!2e0!7i16384!8i8192?entry=ttu'
		]
	}
];
