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
			'https://www.google.com.tw/maps/@24.9795201,121.5405383,92a,35y,194.77h,62.54t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@25.0261969,121.5598102,647a,35y,32.34h,67.36t/data=!3m1!1e3?entry=ttu'
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
		name: '北海道 / Hokkaido',
		x: 47.6, y: 40.6, timeZone: 9, offset: {x: 2, y: -2},
		references: [
			'https://www.google.com.tw/maps/@41.7721508,140.7069229,3a,39.1y,142.41h,97.9t/data=!3m6!1e1!3m4!1s-Gdif6W-eviPEhMFf9SK3A!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.7685518,142.4774965,3a,47y,100.57h,97.24t/data=!3m6!1e1!3m4!1s2nyheTy2Qxp4CXcY4MEU0A!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@42.5661507,140.8225251,3a,75y,348.11h,95.05t/data=!3m8!1e1!3m6!1sAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84%3Dw203-h100-k-no-pi-0-ya18.755905-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@43.1975999,141.0029596,3a,49.6y,174.39h,103.53t/data=!3m6!1e1!3m4!1svXFLuMuEJJylxcuOvyYM1w!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.342485,142.3605757,3a,75y,273.51h,93.76t/data=!3m7!1e1!3m5!1sAF1QipOI_TiTg-GIztbobjIoc2XiIN05FzqGmkW1RusY!2e10!3e12!7i13312!8i6656?entry=ttu'
		]
	},{
		name: '京都, 大阪, 神戶',
		x: 46.0, y: 46.2, timeZone: 9, offset: {x: -8, y: -6},
		references: [
			'https://www.google.com.tw/maps/@34.6692635,135.5013025,3a,75y,174.61h,111.43t/data=!3m6!1e1!3m4!1s7ksTbl8b1t4kWBQlQV7tGQ!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@34.9940965,135.7854214,2a,90y,306.7h,91.7t/data=!3m6!1e1!3m4!1shHkLHDIby-kpTuEZhE81Fg!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@35.0165558,135.6704913,3a,75y,62.05h,102.23t/data=!3m7!1e1!3m5!1slmrRDAe38hnChb7OX-VnTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlmrRDAe38hnChb7OX-VnTg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D317.8427%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.011276,135.6038915,3a,75y,67h,94.5t/data=!3m7!1e1!3m5!1s_veSygKCchQYfyRUCWsE0A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_veSygKCchQYfyRUCWsE0A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D91.7136%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@34.6835263,135.8397708,3a,75y,35.9h,93.01t/data=!3m6!1e1!3m4!1sCntphI3BZ0n2_4-UJ-YqXw!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@34.6792469,135.1853982,3a,75y,39.93h,99.25t/data=!3m7!1e1!3m5!1sAF1QipMizRq8niTwr8x8LnmGMpm4ar84AIL44syoi22N!2e10!3e11!7i5760!8i2880?entry=ttu',
			'https://www.google.com.tw/maps/@34.7012056,135.1897717,3a,75y,175.18h,117.13t/data=!3m8!1e1!3m6!1sAF1QipMvc0BLmjPi1HxcTkBonuoN2qmHBX0XCyBBtSHX!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMvc0BLmjPi1HxcTkBonuoN2qmHBX0XCyBBtSHX%3Dw203-h100-k-no-pi0-ya358.5443-ro-0-fo100!7i6080!8i3040?entry=ttu'
		]
	},{
		name: '北海道 / Hokkaido',
		x: 47.6, y: 40.6, timeZone: 9, offset: {x: 2, y: -2},
		references: [
			'https://www.google.com.tw/maps/@41.7721508,140.7069229,3a,39.1y,142.41h,97.9t/data=!3m6!1e1!3m4!1s-Gdif6W-eviPEhMFf9SK3A!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.7685518,142.4774965,3a,47y,100.57h,97.24t/data=!3m6!1e1!3m4!1s2nyheTy2Qxp4CXcY4MEU0A!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@42.5661507,140.8225251,3a,75y,348.11h,95.05t/data=!3m8!1e1!3m6!1sAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84%3Dw203-h100-k-no-pi-0-ya18.755905-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@43.1975999,141.0029596,3a,49.6y,174.39h,103.53t/data=!3m6!1e1!3m4!1svXFLuMuEJJylxcuOvyYM1w!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.342485,142.3605757,3a,75y,273.51h,93.76t/data=!3m7!1e1!3m5!1sAF1QipOI_TiTg-GIztbobjIoc2XiIN05FzqGmkW1RusY!2e10!3e12!7i13312!8i6656?entry=ttu'
		]
	},{
		name: '北京',
		x: 40.1, y: 43.5, timeZone: 8, offset: {x: -8, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@39.914342,116.3971927,2a,75y,359.57h,102.28t/data=!3m7!1e1!3m5!1smvIxTGcVEYQAAAREq-bR4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DmvIxTGcVEYQAAAREq-bR4A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D200.95447%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@40.3608848,116.0158768,3a,75y,211.66h,84.18t/data=!3m8!1e1!3m6!1sAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC%3Dw203-h100-k-no-pi0-ya8.705296-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@39.8958911,116.3957232,3a,75y,215.53h,110.66t/data=!3m8!1e1!3m6!1sAF1QipMcGgyV-NAnKl7ORd9EHl1FagmTHMdRXlS0ApNf!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcGgyV-NAnKl7ORd9EHl1FagmTHMdRXlS0ApNf%3Dw203-h100-k-no-pi-0-ya173.7572-ro-0-fo100!7i5376!8i2688?entry=ttu',
			'https://www.google.com.tw/maps/@39.881495,116.406645,3a,75y,350.16h,99.7t/data=!3m8!1e1!3m6!1sAF1QipPsjblF1V2lEycfh4h-FHJ-zjql3fW1qIJMtuzW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPsjblF1V2lEycfh4h-FHJ-zjql3fW1qIJMtuzW%3Dw203-h100-k-no-pi0-ya316.9202-ro-0-fo100!7i5376!8i2688?entry=ttu',
			'https://www.google.com.tw/maps/@39.9955221,116.2702142,3a,75y,313.58h,107.97t/data=!3m8!1e1!3m6!1sAF1QipOZedd9xZDs6d2CXBZmoJbWulhU-G6epBkxj06Y!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOZedd9xZDs6d2CXBZmoJbWulhU-G6epBkxj06Y%3Dw203-h100-k-no-pi0-ya268.91107-ro-0-fo100!7i8704!8i4352?entry=ttu'
		]
	},{
		name: '香港 / Hong Kong',
		x: 40.2, y: 52.7, timeZone: 8, offset: {x: -7.5, y: 1},
		references: [
			'https://www.google.com.tw/maps/@22.2710413,114.1503332,3a,73.7y,355.46h,79.73t/data=!3m8!1e1!3m6!1sAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865%3Dw203-h100-k-no-pi-0-ya145.51648-ro0-fo100!7i10240!8i5120?entry=ttu',
			'https://www.google.com.tw/maps/@22.2929688,114.1732326,3a,75y,199.5h,103.82t/data=!3m7!1e1!3m5!1sOh5zsDc0COGYnXWRxP_jQA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DOh5zsDc0COGYnXWRxP_jQA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D108.070244%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@22.3190078,114.1765665,3a,75y,232.5h,104.67t/data=!3m6!1e1!3m4!1s4kfP6yUcLPIXpnPnDUJnBA!2e0!7i16384!8i8192?entry=ttu'
		]
	},{
		name: '瑞士 / Switzerland',
		x: 10.3, y: 38.5, timeZone: 1, offset: {x: 0.5, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@46.5179569,6.629601,98a,35y,16.7h,40.66t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@46.5183788,6.6301591,3a,75y,351.61h,119.31t/data=!3m6!1e1!3m4!1skrzhYIBBemitJNHIirhzWQ!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.5203255,6.6314648,3a,75y,194.77h,102.72t/data=!3m7!1e1!3m5!1snXxBOqUENi4VoJBowrawQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnXxBOqUENi4VoJBowrawQg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D153.6764%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.506375,6.625701,3a,75y,186.64h,100.95t/data=!3m8!1e1!3m6!1sAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU%3Dw203-h100-k-no-pi-0-ya292.01563-ro0-fo100!7i5760!8i2880?entry=ttu',
			'https://www.google.com.tw/maps/@46.5222858,6.6345746,3a,87.7y,49.17h,119.11t/data=!3m8!1e1!3m6!1sAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi%3Dw203-h100-k-no-pi0-ya304.58078-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@46.9482771,7.4599197,3a,75y,245.98h,95.73t/data=!3m7!1e1!3m5!1svvm-qcy1BtEcwjIVg3rSHg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dvvm-qcy1BtEcwjIVg3rSHg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D242.5472%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@46.9480269,7.448185,3a,75y,241.7h,117.36t/data=!3m8!1e1!3m6!1sAF1QipNRyauv9gV-xH6I6CbkLnR79B8eyZQOogQV5AIk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNRyauv9gV-xH6I6CbkLnR79B8eyZQOogQV5AIk%3Dw203-h100-k-no-pi0-ya358.34283-ro-0-fo100!7i4000!8i2000?entry=ttu',
			'https://www.google.com.tw/maps/@46.2060376,6.1491322,3a,75y,34.28h,107.5t/data=!3m8!1e1!3m6!1sAF1QipOiy1sA9bxq1qNZxDM3SwtpfZUqLdAs3ET7hIco!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOiy1sA9bxq1qNZxDM3SwtpfZUqLdAs3ET7hIco%3Dw203-h100-k-no-pi0-ya214.17435-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@46.6901975,7.8686849,3a,75y,104.2h,98.72t/data=!3m7!1e1!3m5!1sYd0lrAMOa03-sUtY9CNf0g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DYd0lrAMOa03-sUtY9CNf0g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D155.25082%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu'
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
			'https://www.google.com.tw/maps/@37.8078727,-122.418567,3a,75y,169.61h,100.25t/data=!3m6!1e1!3m4!1sDVbUYoAJtM60_W77hhjo0Q!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@37.7505282,-122.2018705,3a,75y,254.89h,106.71t/data=!3m8!1e1!3m6!1sAF1QipMBoKgxc_YXi4hXAjYGw9F3eI1a8GVdT4Rj2VnK!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMBoKgxc_YXi4hXAjYGw9F3eI1a8GVdT4Rj2VnK%3Dw203-h100-k-no-pi-0-ya174.27858-ro0-fo100!7i8704!8i4352?entry=ttu'
		]
	},{
		name: '西雅圖 / Seattle',
		x: 74.1, y: 39.2, timeZone: -8, offset: {x: -9, y: -1},
		references: [
			'https://www.google.com.tw/maps/@47.6208581,-122.3484483,3a,75y,235.58h,134.92t/data=!3m7!1e1!3m5!1stBLGYnKb8CgZB9T2bo0ziQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtBLGYnKb8CgZB9T2bo0ziQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.84805%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@47.608788,-122.340647,2a,75y,197.73h,107.32t/data=!3m6!1e1!3m4!1sL1OnTzm4oo0Zj1qAb4QNhA!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@45.1557859,-122.8779215,3a,75y,310.74h,100.29t/data=!3m6!1e1!3m4!1sBXftnazAIpBiR9G2DishXg!2e0!7i16384!8i8192?entry=ttu'
		]
	},{
		name: '洛杉磯 / Los Angeles',
		x: 74.8, y: 46.3, timeZone: -8, offset: {x: -5.5, y: 4},
		references: [
			'https://www.google.com.tw/maps/@34.1016013,-118.3409685,3a,75y,357.75h,105.65t/data=!3m6!1e1!3m4!1sbs6opyW_oCSErAxrSBc1sQ!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@34.1289299,-118.3224647,326a,35y,7.03h,71.88t/data=!3m1!1e3?entry=ttu'
		]
	}
];
