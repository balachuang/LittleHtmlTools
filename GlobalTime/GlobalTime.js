$(document).ready(function(){
	var bgMap = new Image();
	bgMap.onload = function(){
		$('#earth-map').css('background-image', 'url(' + bgMap.src + ')');
		generateMapPoints();
	};
	bgMap.src = 'map/global-map.jpg';
});

function generateMapPoints()
{
	// read all position and put on screen
	for (let i in positions)
	{
		// 產生位置點和說明框
		let pntPos = {
			x: toViewX(positions[i].x) - 5,
			y: toViewY(positions[i].y) - 5
		};
		let decPos = {
			x: toViewX(positions[i].x) + toViewX(positions[i].offset.x),
			y: toViewY(positions[i].y) + toViewX(positions[i].offset.y)
		};
		let posDom = $(posDomTemp1).css({ left: pntPos.x, top: pntPos.y });
		let posDescDom = $(posDomTemp2
				.replace('{{timeZone}}', positions[i].timeZone)
				.replace('{{posName}}', positions[i].name))
				.css({ left: decPos.x, top:  decPos.y });

		// 產生連結
		let descLen = positions[i].descriptions ? positions[i].descriptions.length : -1;
		for (let j=0; j<positions[i].references.length; ++j)
		{
			let descText = (j < descLen) ? positions[i].descriptions[j] : 'Link';
			let refDom = posDomTemp3.replace('{{url}}', positions[i].references[j]).replace('{{desc}}', descText);
			posDescDom.append(refDom);
		}

		// 加到畫面上
		$('#pos-container').append(posDom);
		$('#pos-container').append(posDescDom);
		posDescDom.find('.timeStr').text('0000/00/00 00:00:00');

		// 產生箭頭 ==> 連續方型
		// * 要先把 DIV 加到畫面上, 才能抓到寬高.
		// * 要先預設一個時間字串, 這樣抓出來的寬度才會正確
		let divSteps = 100;
		// let wStart = posDescDom.width()  / 2;
		// let hStart = posDescDom.height() / 2;
		let wStart = 30;
		let hStart = 30;
		let startPos = { x: decPos.x + posDescDom.width()  / 2, y: decPos.y + posDescDom.height() / 2 };
		let distance = { x: pntPos.x - startPos.x + 5,          y: pntPos.y - startPos.y + 5          };
		for (var k=0; k<divSteps; ++k)
		{
			let currPos = {
				x: startPos.x + distance.x * k / divSteps,
				y: startPos.y + distance.y * k / divSteps
			};
			let currW = wStart - wStart * Math.sin(0.5 * Math.PI * k / divSteps);
			let currH = hStart - hStart * Math.sin(0.5 * Math.PI * k / divSteps);
			let arrawDom = $(posDomTemp4).css({
				width:  currW,
				height: currH,
				left: currPos.x - currW / 2,
				top:  currPos.y - currH / 2
			});
			posDescDom.prepend(arrawDom);
		}
	}

	// update time
	updateTimeStr();
}

function updateTimeStr()
{
	$('.timeStr').each(function(){
		$(this).text(getDateStr(eval($(this).attr('tz'))));
	});
	setTimeout(() => {
		updateTimeStr();
	}, 1000);
}

// get current time by time zone
function getDateStr(tz)
{
	let now = new Date();
	now.setUTCHours(now.getUTCHours() + tz);
	let yyyy = now.getUTCFullYear();
	let mm = len2('' + now.getUTCMonth());
	let dd = len2('' + now.getUTCDate());
	let hh = len2('' + now.getUTCHours());
	let mi = len2('' + now.getUTCMinutes());
	let ss = len2('' + now.getUTCSeconds());

	return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;
}

function toViewX(x) { return xMappingByDoc(x); }
function toViewY(y) { return yMappingByDoc(y); }
function xMappingByDoc(x){ return $(document).width()  * x / 100.0; }
function yMappingByDoc(y){ return $(document).height() * y / 100.0; }
// function xMappingByMap(x) { return $('#earth-map').width()  * x / 100.0; }
// function yMappingByMap(y) { return $('#earth-map').height() * y / 100.0; }
function len2(s) { return ('0' + s).slice(-2); }
