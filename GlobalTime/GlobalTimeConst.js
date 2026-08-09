const posDomTemp1 = '<div class="timePos" />';
const posDomTemp2 =
	'<div class="timePosDesc">' +
	'	<span class="posName">{{posName}}</span><br/>' +
	'	<span class="timeStr" tz="{{timeZone}}"></span><br/>' +
	'</div>';
// const posDomTemp3 = '<a class="posReference" href="{{url}}" target="_new" title="{{desc}}">🔗</a>&nbsp;';
const posDomTemp3 = '<a class="posReference" href="{{url}}" target="_new"><img src="./link_32.png" style="width:12px;" title="{{desc}}"></a>&nbsp;';
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
		x: 41.3, y: 50.9, timeZone: 8, offset: {x: -0.5, y: 2.5},
		references: [
			'https://www.google.com.tw/maps/@24.9795201,121.5405383,92a,35y,194.77h,62.54t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@25.0261969,121.5598102,647a,35y,32.34h,67.36t/data=!3m1!1e3?entry=ttu'
		],
		descriptions: [
			'',
			'台北 101'
		]
	},{
		name: '東京 / Tokyo',
		x: 46.2, y: 44.9, timeZone: 9, offset: {x: 4, y: 0},
		references: [
			'https://www.google.com.tw/maps/@35.7109263,139.7963622,3a,75y,359.5h,95.84t/data=!3m6!1e1!3m4!1s23bp0awV0LC-X5RhgbyM9Q!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7144681,139.7889532,3a,75y,94.43h,103.9t/data=!3m6!1e1!3m4!1snxDvNnsXYYoRPqg-b8SOOA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.6593256,139.7451034,3a,75y,152.32h,131.64t/data=!3m6!1e1!3m4!1sAVQYJqPn9Ok5yfPCLHJRJA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7097419,139.8114995,3a,75y,287.69h,144.49t/data=!3m6!1e1!3m4!1sUpKX9iG7jdweLr6gv8vhPA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7104853,139.7981818,3a,75y,92.17h,108.08t/data=!3m6!1e1!3m4!1sKHTG4BM3V29NekMGqqx8qw!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.7059054,139.7545075,3a,75y,281.77h,119.01t/data=!3m6!1e1!3m4!1spkipj8H4Dfv5XxvQRv0TIQ!2e0!7i16384!8i8192?entry=ttu'
		],
		descriptions: [
			'淺草寺雷門',
			'合羽橋道具街',
			'東京鐵塔',
			'晴空塔',
			'淺草吾妻橋上看向朝日啤酒總部',
			'不小心路過的東京巨蛋和旁邊的雲霄飛車'
		]
	},{
		name: '北海道 / Hokkaido',
		x: 47.2, y: 39.9, timeZone: 9, offset: {x: 2, y: -2},
		references: [
			'https://www.google.com.tw/maps/@41.7721508,140.7069229,3a,39.1y,142.41h,97.9t/data=!3m6!1e1!3m4!1s-Gdif6W-eviPEhMFf9SK3A!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.7685518,142.4774965,3a,47y,100.57h,97.24t/data=!3m6!1e1!3m4!1s2nyheTy2Qxp4CXcY4MEU0A!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@42.5661507,140.8225251,3a,75y,348.11h,95.05t/data=!3m8!1e1!3m6!1sAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCkANtT15BaZzeM8sRfr6UePPXl5PB-ryqnn84%3Dw203-h100-k-no-pi-0-ya18.755905-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@43.1975999,141.0029596,3a,49.6y,174.39h,103.53t/data=!3m6!1e1!3m4!1svXFLuMuEJJylxcuOvyYM1w!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@43.342485,142.3605757,3a,75y,273.51h,93.76t/data=!3m7!1e1!3m5!1sAF1QipOI_TiTg-GIztbobjIoc2XiIN05FzqGmkW1RusY!2e10!3e12!7i13312!8i6656?entry=ttu'
		],
		descriptions: [
			'獨棟的古蹟旅館',
			'旭山動物園',
			'湖景飯店 - 洞爺乃之風',
			'小樽運河旁商店',
			'富良野 - Hotel Naturwald Furano'
		]
	},{
		name: '京都, 大阪, 神戶',
		x: 45.6, y: 45.5, timeZone: 9, offset: {x: -8, y: -6},
		references: [
			'https://www.google.com.tw/maps/@34.6692635,135.5013025,3a,75y,174.61h,111.43t/data=!3m6!1e1!3m4!1s7ksTbl8b1t4kWBQlQV7tGQ!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@34.9940965,135.7854214,2a,75y,323.54h,84.77t/data=!3m6!1e1!3m4!1shHkLHDIby-kpTuEZhE81Fg!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@35.0165558,135.6704913,3a,75y,62.05h,102.23t/data=!3m7!1e1!3m5!1slmrRDAe38hnChb7OX-VnTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlmrRDAe38hnChb7OX-VnTg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D317.8427%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@35.011276,135.6038915,3a,75y,67h,94.5t/data=!3m7!1e1!3m5!1s_veSygKCchQYfyRUCWsE0A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_veSygKCchQYfyRUCWsE0A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D91.7136%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@34.6835263,135.8397708,3a,75y,35.9h,93.01t/data=!3m6!1e1!3m4!1sCntphI3BZ0n2_4-UJ-YqXw!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@34.6792469,135.1853982,3a,75y,39.93h,99.25t/data=!3m7!1e1!3m5!1sAF1QipMizRq8niTwr8x8LnmGMpm4ar84AIL44syoi22N!2e10!3e11!7i5760!8i2880?entry=ttu',
			'https://www.google.com.tw/maps/@34.7012056,135.1897717,3a,75y,175.18h,117.13t/data=!3m8!1e1!3m6!1sAF1QipMvc0BLmjPi1HxcTkBonuoN2qmHBX0XCyBBtSHX!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMvc0BLmjPi1HxcTkBonuoN2qmHBX0XCyBBtSHX%3Dw203-h100-k-no-pi0-ya358.5443-ro-0-fo100!7i6080!8i3040?entry=ttu'
		],
		descriptions: [
			'道頓堀 - 戎橋',
			'清水寺',
			'嵐山竹林小徑',
			'往龜岡車站路旁',
			'奈良東大寺外鹿園',
			'神戶港',
			'風見雞之館'
		]
	},{
		name: '沖繩 / Okinawa',
		x: 42.9, y: 49.5, timeZone: 9, offset: {x: 5.9, y: 1.5},
		references: [
			'https://www.google.com.tw/maps/@26.2161595,127.6878388,3a,75y,239.96h,106.06t/data=!3m6!1e1!3m4!1sF1bn5AejtTFfVylNXWpYGg!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@26.4332902,127.7187226,3a,46.7y,179.93h,94.94t/data=!3m6!1e1!3m4!1sp6R7KBNamNhwvaFktBnImA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@26.6109506,127.9910609,3a,75y,42.9h,70.72t/data=!3m6!1e1!3m4!1syR_zNpMM8gpJlPrKTB1plA!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@26.6943944,127.8780518,3a,75y,352.4h,96.17t/data=!3m8!1e1!3m6!1sAF1QipOreE23JT9w3xWjYZj1HqpZImaWAljXx3AS0U2V!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOreE23JT9w3xWjYZj1HqpZImaWAljXx3AS0U2V%3Dw203-h100-k-no-pi-0-ya234.46684-ro0-fo100!7i5660!8i2830?entry=ttu',
			'https://www.google.com.tw/maps/@26.5050261,127.8497957,2a,75y,290.88h,65.67t/data=!3m7!1e1!3m5!1s-9nMW_oUDYdzF3Irf4GdCw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-9nMW_oUDYdzF3Irf4GdCw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D76.35966%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@26.2181754,127.7167613,3a,75y,107.65h,86.97t/data=!3m6!1e1!3m4!1sd-LuW5noUPeO-1s8L6JWUw!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@26.2170094,127.7191288,3a,75y,173.51h,94.78t/data=!3m8!1e1!3m6!1sAF1QipO9nRUaQzdFmM8XzWfPvspnQo6daQVxcKdKhi74!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO9nRUaQzdFmM8XzWfPvspnQo6daQVxcKdKhi74%3Dw203-h100-k-no-pi-0-ya0.7663465-ro-0-fo100!7i2508!8i1254?entry=ttu'
		],
		descriptions: [
			'國際通',
			'殘波岬皇家渡假飯店外面的商店',
			'沖繩自然動植物公園 - 不小心發現有點搞笑的景點',
			'沖繩美麗海水族館, 鯨鯊的眼睛好震撼',
			'萬座毛',
			'首里城',
			'首里城御庭'
		]
	},{
		name: '北京',
		x: 39.7, y: 42.8, timeZone: 8, offset: {x: -8, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@39.914342,116.3971927,2a,75y,359.57h,102.28t/data=!3m7!1e1!3m5!1smvIxTGcVEYQAAAREq-bR4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DmvIxTGcVEYQAAAREq-bR4A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D200.95447%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@40.3608848,116.0158768,3a,75y,211.66h,84.18t/data=!3m8!1e1!3m6!1sAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPNM0zRvEIC2cTb9N-izMGQlvAXzXbHdhZVWlFC%3Dw203-h100-k-no-pi0-ya8.705296-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@39.8958911,116.3957232,3a,75y,215.53h,110.66t/data=!3m8!1e1!3m6!1sAF1QipMcGgyV-NAnKl7ORd9EHl1FagmTHMdRXlS0ApNf!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcGgyV-NAnKl7ORd9EHl1FagmTHMdRXlS0ApNf%3Dw203-h100-k-no-pi-0-ya173.7572-ro-0-fo100!7i5376!8i2688?entry=ttu',
			'https://www.google.com.tw/maps/@39.881495,116.406645,3a,75y,350.16h,99.7t/data=!3m8!1e1!3m6!1sAF1QipPsjblF1V2lEycfh4h-FHJ-zjql3fW1qIJMtuzW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPsjblF1V2lEycfh4h-FHJ-zjql3fW1qIJMtuzW%3Dw203-h100-k-no-pi0-ya316.9202-ro-0-fo100!7i5376!8i2688?entry=ttu',
			'https://www.google.com.tw/maps/@39.997877,116.271868,3a,75y,269.15h,96.93t/data=!3m8!1e1!3m6!1sAF1QipNbSlE9Tpg5l1YbPcEysvIqsYktHzZb7BMf3ox6!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNbSlE9Tpg5l1YbPcEysvIqsYktHzZb7BMf3ox6%3Dw203-h100-k-no-pi-0-ya273.72595-ro0-fo100!7i8395!8i3811?entry=ttu',
			'https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E8%A5%BF%E9%83%8A%E8%B3%93%E9%A4%A8/@12952103.68,4838606.29,21z,87t,-110.87h?querytype=s&da_src=shareurl&wd=%E5%8C%97%E4%BA%AC%E8%A5%BF%E9%83%8A%E8%B3%93%E9%A4%A8&c=131&src=0&pn=0&sug=0&l=15&b=(12946819.5363,4836358.33128;12959178.95851,4840792.41402)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2#panoid=09002200121901291527055739Z&panotype=street&heading=91.32&pitch=10.74&l=21&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=09002200121901291527055739Z',
			'https://map.baidu.com/search/%E4%BA%94%E9%81%93%E5%8F%A3-%E5%9C%B0%E9%93%81%E7%AB%99/@12951565.25,4838018.99,21z,87t,92.17h?querytype=s&da_src=shareurl&wd=%E4%BA%94%E9%81%93%E5%8F%A3-%E5%9C%B0%E9%93%81%E7%AB%99&c=131&src=0&wd2=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA&pn=0&sug=1&l=18&b=(12950890.33415,4837587.13578;12953289.40903,4838447.83108)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=fc272e4a8d1788696040a9de&device_ratio=2#panoid=09002200121902081213223227N&panotype=street&heading=275.31&pitch=6.46&l=21&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=09002200121902081213223227N'
		],
		descriptions: [
			'紫禁城',
			'長城 - 八達嶺段',
			'大柵欄',
			'天壇',
			'頤和園',
			'北京西郊賓館',
			'五道口地鐵站'
		]
	},{
		name: '香港 / Hong Kong',
		x: 39.8, y: 52.3, timeZone: 8, offset: {x: -7.5, y: 1},
		references: [
			'https://www.google.com.tw/maps/@22.2710413,114.1503332,3a,73.7y,355.46h,79.73t/data=!3m8!1e1!3m6!1sAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMiGztBEfFYWEmY4mHVGvFFoBEMLv5G7e2a6865%3Dw203-h100-k-no-pi-0-ya145.51648-ro0-fo100!7i10240!8i5120?entry=ttu',
			'https://www.google.com.tw/maps/@22.2929688,114.1732326,3a,75y,199.5h,103.82t/data=!3m7!1e1!3m5!1sOh5zsDc0COGYnXWRxP_jQA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DOh5zsDc0COGYnXWRxP_jQA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D108.070244%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@22.3190078,114.1765665,3a,75y,232.5h,104.67t/data=!3m6!1e1!3m4!1s4kfP6yUcLPIXpnPnDUJnBA!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@22.2905439,114.1940751,3a,75y,304.6h,119.57t/data=!3m6!1e1!3m4!1sTXXMA-YqH9xaE5H9KEtGjg!2e0!7i16384!8i8192?entry=ttu'
		],
		descriptions: [
			'太平山頂夜景',
			'維多利亞港 - 星光大道',
			'香港女青年會栢顏露斯會所',
			'城市花酒店...對面的密集大樓'
		]
	},{
		name: '瑞士 / Switzerland',
		x: 9.9, y: 37.8, timeZone: 1, offset: {x: 0.5, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@46.5179569,6.629601,98a,35y,16.7h,40.66t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@46.5183788,6.6301591,3a,75y,351.61h,119.31t/data=!3m6!1e1!3m4!1skrzhYIBBemitJNHIirhzWQ!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.5203255,6.6314648,3a,75y,194.77h,102.72t/data=!3m7!1e1!3m5!1snXxBOqUENi4VoJBowrawQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnXxBOqUENi4VoJBowrawQg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D153.6764%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@46.506375,6.625701,3a,75y,186.64h,100.95t/data=!3m8!1e1!3m6!1sAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNf3gWGvmpO_2k_onipCym42X4oNLejMx8-XZfU%3Dw203-h100-k-no-pi-0-ya292.01563-ro0-fo100!7i5760!8i2880?entry=ttu',
			'https://www.google.com.tw/maps/@46.5222858,6.6345746,3a,87.7y,49.17h,119.11t/data=!3m8!1e1!3m6!1sAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN5PFb4XcXJa1NdFKjk2wWI2CpH_2yW4neDwrHi%3Dw203-h100-k-no-pi0-ya304.58078-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@46.9482771,7.4599197,3a,75y,245.98h,95.73t/data=!3m7!1e1!3m5!1svvm-qcy1BtEcwjIVg3rSHg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dvvm-qcy1BtEcwjIVg3rSHg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D242.5472%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@46.9480269,7.448185,3a,75y,241.7h,117.36t/data=!3m8!1e1!3m6!1sAF1QipNRyauv9gV-xH6I6CbkLnR79B8eyZQOogQV5AIk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNRyauv9gV-xH6I6CbkLnR79B8eyZQOogQV5AIk%3Dw203-h100-k-no-pi0-ya358.34283-ro-0-fo100!7i4000!8i2000?entry=ttu',
			'https://www.google.com.tw/maps/@46.2060376,6.1491322,3a,75y,34.28h,107.5t/data=!3m8!1e1!3m6!1sAF1QipOiy1sA9bxq1qNZxDM3SwtpfZUqLdAs3ET7hIco!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOiy1sA9bxq1qNZxDM3SwtpfZUqLdAs3ET7hIco%3Dw203-h100-k-no-pi0-ya214.17435-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@46.6901975,7.8686849,3a,75y,104.2h,98.72t/data=!3m7!1e1!3m5!1sYd0lrAMOa03-sUtY9CNf0g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DYd0lrAMOa03-sUtY9CNf0g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D155.25082%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/place/%E8%A5%BF%E5%BA%B8%E5%A0%A1/@46.4155776,6.925843,54a,35y,130.92h,78.84t/data=!3m1!1e3!4m14!1m7!3m6!1s0x478e9a5baedd65c3:0x22994259155c8307!2z6KW_5bq45aCh!8m2!3d46.4142131!4d6.9274924!16zL20vMDRkZHB6!3m5!1s0x478e9a5baedd65c3:0x22994259155c8307!8m2!3d46.4142131!4d6.9274924!16zL20vMDRkZHB6?entry=ttu',
			'https://www.google.com.tw/maps/@46.5087417,6.6341168,3a,20.6y,23.91h,73.76t/data=!3m7!1e1!3m5!1sCIHM0ogKEICAgIDEzPvpKw!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6Hb7WuFwIW2rOS4eCwNryq3gdEzckRCUH29RQkWwMqTrDcNmbKOynKUWuJl5tPGCvWOho19DXlspXhyOnLxH6GbQOzXcORQJejtprr_pbAS9SqdSBYri_SnmsEEveJX5ne6JNe4%3Dw900-h600-k-no-pi16.237764787445144-ya135.98934139787548-ro0-fo100!7i8192!8i4096?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@46.5220973,6.5649785,3a,60y,163.26h,109.54t/data=!3m7!1e1!3m5!1sK1OaFR2VuEsL-XJ7n_0I8A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-19.538430889232558%26panoid%3DK1OaFR2VuEsL-XJ7n_0I8A%26yaw%3D163.260036599522!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@46.5203074,6.565645,3a,75y,287.39h,85.4t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgID4od-qiQE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYD8FJbGdi1zK8MbNmOlkr0eYxPDQPr2cL9kD-S90Qx5ap-aRogHfOG-pXeA6rgsM1QScnc5BycdRErRcEIeMBGB_oo41Id4WJV9YvQZY9411u5V7udGYqL1FZoSoPMM96YEusk8A%3Dw900-h600-k-no-pi4.600809602263709-ya287.39349766804366-ro0-fo100!7i7680!8i3840?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D'
		],
		descriptions: [
			'飯店 - Hotel Alpha-Palmiers 3D',
			'飯店 - Hotel Alpha-Palmiers 實景',
			'Lausanne-Flon 地鐵站',
			'洛桑萊芒湖邊',
			'洛桑大教堂',
			'伯恩熊園',
			'伯恩時鐘塔',
			'日內瓦大噴泉',
			'因特拉肯',
			'西庸堡',
			'奧林匹克博物館 蔣經國記念碑',
			'洛桑地鐵 EPFL 站',
			'EPFL 餐廳'
		]
	},{
		name: '費爾班克斯 / Fairbanks',
		x: 66.3, y: 20.8, timeZone: -9, offset: {x: 1, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@64.8605397,-147.6991619,55a,35y,223.07h,70.44t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@64.8597333,-147.7015103,3a,75y,308.7h,89.59t/data=!3m8!1e1!3m6!1sAF1QipOJunSNYR7QUD2KmgXk7folVnVvUuCR_AgDov1e!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOJunSNYR7QUD2KmgXk7folVnVvUuCR_AgDov1e%3Dw203-h100-k-no-pi0-ya259.66318-ro-0-fo100!7i8704!8i4352?entry=ttu',
			'https://www.google.com.tw/maps/@65.0373842,-147.4559392,3a,75y,117.65h,105.38t/data=!3m6!1e1!3m4!1si3Kg2wtKHRioGvU5uPyKCw!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@65.0459114,-147.4090063,3a,75y,330.99h,83.21t/data=!3m8!1e1!3m6!1sAF1QipP3Ng0fccHrl3P0b2jXz0S8KvBTtFbMm62DVOQy!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP3Ng0fccHrl3P0b2jXz0S8KvBTtFbMm62DVOQy%3Dw203-h100-k-no-pi-0-ya300.42426-ro-0-fo100!7i8704!8i4352?entry=ttu'
		],
		descriptions: [
			'飯店 - Hampton Inn 3D',
			'飯店 - Hampton Inn 內部',
			'看到極光超級大爆發的地方',
			'山頂滑雪場 - Ski Land Ski and Snowboard Area'
		]
	},{
		name: '拉斯維加斯 / Las Vegas',
		x: 75.7, y: 44.7, timeZone: -8, offset: {x: 0.5, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@36.1122134,-115.1769481,270a,35y,26.19h,73.32t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@36.1215393,-115.1690917,3a,75y,105.23h,109.25t/data=!3m8!1e1!3m6!1sAF1QipMkg3Zffq6OUyIEuM_aOouTRIJutMnaySrbiUlY!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMkg3Zffq6OUyIEuM_aOouTRIJutMnaySrbiUlY%3Dw203-h100-k-no-pi-0-ya17.334097-ro-0-fo100!7i8192!8i4096?entry=ttu',
			'https://www.google.com.tw/maps/@36.1740093,-115.1447917,3a,75y,292.87h,105.78t/data=!3m7!1e1!3m5!1sUbndO-aDfgC20DZT1z-cKw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DUbndO-aDfgC20DZT1z-cKw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D104.443%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@36.1211955,-115.1724458,3a,75y,277.08h,109.13t/data=!3m8!1e1!3m6!1sAF1QipNlvgdsDIyNeSEK0yISmRBJEgug7FzgZtJDCecM!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNlvgdsDIyNeSEK0yISmRBJEgug7FzgZtJDCecM%3Dw203-h100-k-no-pi-0-ya203.89415-ro0-fo100!7i8704!8i4352?entry=ttu'
		],
		descriptions: [
			'拉斯維加斯賭城 3D',
			'威尼斯人酒店',
			'Main Streen - 超棒的下午茶吃到飽',
			'幻景賭場度假村 - 晚上有火焰秀'
		]
	},{
		name: '舊金山 / San Francisco',
		x: 73.7, y: 44.0, timeZone: -8, offset: {x: -10, y: 0.5},
		references: [
			'https://www.google.com.tw/maps/@37.8076006,-122.4110992,76a,35y,31.64h,66.53t/data=!3m1!1e3?entry=ttu',
			'https://www.google.com.tw/maps/@37.8086682,-122.4101669,3a,75y,350.51h,89.61t/data=!3m8!1e1!3m6!1sAF1QipMnlXKOg8ptYiB-rMGJq1FgfDYnJz-7ZxpzSdAx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMnlXKOg8ptYiB-rMGJq1FgfDYnJz-7ZxpzSdAx%3Dw203-h100-k-no-pi-0-ya19.953331-ro-0-fo100!7i7200!8i3600?entry=ttu',
			'https://www.google.com.tw/maps/@37.8097069,-122.4161624,3a,75y,329.28h,95.4t/data=!3m8!1e1!3m6!1sAF1QipMUwUhbXzcl9lcEIDDLoSF1hvErJvguJY3lZvVS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMUwUhbXzcl9lcEIDDLoSF1hvErJvguJY3lZvVS%3Dw203-h100-k-no-pi-0.6388225-ya305.79068-ro-4.7389746-fo100!7i7200!8i3600?entry=ttu',
			'https://www.google.com.tw/maps/@37.8087768,-122.4717975,3a,88.3y,313.6h,96.44t/data=!3m6!1e1!3m4!1sTLT9GDLs3tEmSSAJm3lWEg!2e0!7i13312!8i6656?entry=ttu',
			'https://www.google.com.tw/maps/@37.8078727,-122.418567,3a,75y,169.61h,100.25t/data=!3m6!1e1!3m4!1sDVbUYoAJtM60_W77hhjo0Q!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@37.7505282,-122.2018705,3a,75y,254.89h,106.71t/data=!3m8!1e1!3m6!1sAF1QipMBoKgxc_YXi4hXAjYGw9F3eI1a8GVdT4Rj2VnK!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMBoKgxc_YXi4hXAjYGw9F3eI1a8GVdT4Rj2VnK%3Dw203-h100-k-no-pi-0-ya174.27858-ro0-fo100!7i8704!8i4352?entry=ttu'
		],
		descriptions: [
			'漁人碼頭 3D',
			'漁人碼頭',
			'潛艇博物館 - 潘帕尼多號',
			'金門大橋',
			'漁人碼頭 In-n-Out',
			'Oracle 球場'
		]
	},{
		name: '西雅圖 / Seattle',
		x: 73.7, y: 38.5, timeZone: -8, offset: {x: -9, y: -1},
		references: [
			'https://www.google.com.tw/maps/@47.6208581,-122.3484483,3a,75y,235.58h,134.92t/data=!3m7!1e1!3m5!1stBLGYnKb8CgZB9T2bo0ziQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtBLGYnKb8CgZB9T2bo0ziQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.84805%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@47.6087743,-122.3404439,3a,60y,215.48h,90t/data=!3m6!1e1!3m4!1sYq1R-41F_y3IbRS_F6n71w!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@45.1557859,-122.8779215,3a,75y,310.74h,100.29t/data=!3m6!1e1!3m4!1sBXftnazAIpBiR9G2DishXg!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@45.4281444,-122.5742803,3a,75y,283.57h,92.08t/data=!3m7!1e1!3m5!1so9ygf6j8qJTXaxxXM2tXfQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Do9ygf6j8qJTXaxxXM2tXfQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D96.07843%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu'
		],
		descriptions: [
			'太空針塔',
			'派克市場',
			'買到手軟的 Woodburn Premium Outlets',
			'波特蘭的 Costco, Pizza 超好吃'
		]
	},{
		name: '洛杉磯 / Los Angeles',
		x: 74.4, y: 45.6, timeZone: -8, offset: {x: -4.5, y: 4},
		references: [
			'https://www.google.com.tw/maps/@34.1016013,-118.3409685,3a,75y,357.75h,105.65t/data=!3m6!1e1!3m4!1sbs6opyW_oCSErAxrSBc1sQ!2e0!7i16384!8i8192?entry=ttu',
			'https://www.google.com.tw/maps/@34.1289299,-118.3224647,326a,35y,7.03h,71.88t/data=!3m1!1e3?entry=ttu'
		],
		descriptions: [
			'好萊塢大道 - 中國戲院',
			'好萊塢字標'
		]
	},{
		name: '墨爾本 / Melbourne',
		x: 48.1, y: 83.8, timeZone: 10, offset: {x: -8, y: 1},
		references: [
			'https://www.google.com.tw/maps/@-37.8089179,144.9555487,56a,35y,33.11h,73.17t/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-37.8188617,144.9723339,97a,35y,260.74h,79.05t/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-37.8146211,144.9637964,3a,75y,72.97h,96.9t/data=!3m7!1e1!3m5!1sPTobpA4iMERmbwoNmO_OQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.902196233416532%26panoid%3DPTobpA4iMERmbwoNmO_OQg%26yaw%3D72.96908072853017!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-38.6658562,143.104546,2a,75y,312.59h,84.68t/data=!3m7!1e1!3m5!1sky6ybbk4pHZMjwU4EbHvTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.317578897013249%26panoid%3Dky6ybbk4pHZMjwU4EbHvTg%26yaw%3D312.59281808191963!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-38.1438159,144.3626348,3a,75y,67.31h,99.3t/data=!3m7!1e1!3m5!1se0JwVjECti9ZRwSHsMzEGw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-9.296128755714577%26panoid%3De0JwVjECti9ZRwSHsMzEGw%26yaw%3D67.31365983224369!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-37.1494789,142.4588623,3a,50.8y,125.36h,72.74t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICujdejPA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFP8RcOgLM7SVPpeGpJarraaHwvVMSTOZCGkYvzGwKugHBrm1YYojxvr2jok-dxtHv0s2eb8S71dZvcNEQaoOTvGpgEVAhld_tdwwIaKmsSUi-JzPjJn7XzF3m_JT_3Eiuls6zh2cUIH%3Dw900-h600-k-no-pi17.260403748475085-ya358.1035262361306-ro0-fo100!7i7296!8i3648?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D'
		],
		descriptions: [
			'維多利亞女王市場',
			'雅拉河邊景點',
			'皇家拱廊',
			'十二使徒岩',
			'木偶公園',
			'惡魔之口'
		]
	},{
		name: '雪梨 / Sydney',
		x: 49.9, y: 80.8, timeZone: 10, offset: {x: 2, y: -3},
		references: [
			'https://www.google.com.tw/maps/@-33.8516912,151.2178224,188a,35y,209.5h,78.31t/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-33.8716563,151.2066508,2a,75y,17.51h,110.45t/data=!3m7!1e1!3m5!1s0Jc61WkofFfvHbd5xXlaDg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-20.45015471688373%26panoid%3D0Jc61WkofFfvHbd5xXlaDg%26yaw%3D17.51217964636635!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-33.7311313,150.3018364,2a,75y,359.81h,103.62t/data=!3m7!1e1!3m5!1sMdy8XNEqkyrr2lzK1h_1Dg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-13.624002719968743%26panoid%3DMdy8XNEqkyrr2lzK1h_1Dg%26yaw%3D359.8079639425058!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D'
		],
		descriptions: [
			'雪梨歌劇院',
			'維多利亞女王大廈',
			'Scenic World'
		]
	},{
		name: '布里斯本 / Brisbane',
		x: 50.2, y: 77.8, timeZone: 10, offset: {x: 0, y: -5},
		references: [
			'https://www.google.com.tw/maps/@-27.4640557,153.0322714,3a,75y,84.24h,102.89t/data=!3m7!1e1!3m5!1sw8O2X8UN4FboIibDWcss1g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-12.887367895620656%26panoid%3Dw8O2X8UN4FboIibDWcss1g%26yaw%3D84.24411925763303!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-27.4739992,153.0202456,3a,75y,38.76h,99.52t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDq3NawjAE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFP8RcMVjYDtJAO3joXwDi6jaj-HwYR0Ep1WErtE2P9exciWXSkmXfXB6SucxPwUnRpdqHotrYvt3SuXXQE4vPfGKK2Oh58w_eUfcUuyraUqmIlhtRW1jzv91UQjzHGE86kzy4-qmgiHJg%3Dw900-h600-k-no-pi-9.524562114859378-ya356.7261314689366-ro0-fo100!7i7680!8i3840?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-27.4784974,153.0233376,3a,60y,31.1h,97.56t/data=!3m7!1e1!3m5!1smM7iR8svupkfppITlkdplA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.563632753029978%26panoid%3DmM7iR8svupkfppITlkdplA%26yaw%3D31.098670512643253!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
			'https://www.google.com.tw/maps/@-27.5340265,152.9677084,3a,23.5y,328.41h,90.82t/data=!3m7!1e1!3m5!1sAB_U_1MPpPRyzyb2CF0Gsw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.8159079919065135%26panoid%3DAB_U_1MPpPRyzyb2CF0Gsw%26yaw%3D328.40732699159446!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D'
		],
		descriptions: [
			'故事橋',
			'Brisbane Sign',
			'Streets Beach',
			'龍柏動物園'
		]
	}
];
