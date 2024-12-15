var initTableCnt = 5;
var lastReadTableIdx = 0;

$(document).ready(init);
function init()
{
	// create first 20 Unicode table
	while(lastReadTableIdx < initTableCnt)
	{
		let currUniInfo = unicodeInfo[lastReadTableIdx++];
		let currBodyHtml = generateUnicodeBody(currUniInfo);
		$('#unicode-table-body').append(currBodyHtml);
	}

	// event handler
	$(window).scroll(checkIsLoadNewTable);
	$(document).on('mouseenter', 'table.unicode-body td', enlargeChar);
}

function generateUnicodeBody(uinfo)
{
	let tableHtml = uniTableTemplate;

	// prepare unicode info
	let info = `${uinfo.plane}<br>${uinfo.nameCht}<br><br>${uinfo.description.replace('、', '<br>')}`;
	tableHtml = tableHtml.replace('{{info}}', info);

	// prepare real unicode
	let hexStart = uinfo.codeStart.substring(2);
	let hexEnd = uinfo.codeEnd.substring(2);
	let decP1Start = parseInt(hexStart.substring(0, 3), 16);
	let decP1End = parseInt(hexEnd.substring(0, 3), 16);
	let decP2Start = parseInt(hexStart.substring(3), 16);
	let decP2End = parseInt(hexEnd.substring(3), 16);

	let uTbody = '';
	for (let d=decP1Start; d<=decP1End; ++d)
	{
		let uTr = uniTrTemplate;
		uTr = uTr.replace('{{unicode}}', d.toString(16).toUpperCase().padStart(3, '0')+'x');
		for (let n=0; n<16; ++n)
		{
			let isBeforeStart = (d == decP1Start) && (n < decP2Start);
			let isAfterEnd = (d == decP1End) && (n > decP2End);
			let tmpStr = `{{unicode${n.toString(16).toUpperCase()}}}`;
			let repStr = (isBeforeStart || isAfterEnd) ? '' : `&#x${(d*16+n).toString(16).padStart(4,'0')};`;
			uTr = uTr.replace(tmpStr, repStr);
		}
		uTbody += uTr;
	}
	tableHtml = tableHtml.replace('{{unicode-body}}', uTbody);
	return tableHtml;
}

function checkIsLoadNewTable()
{
	if (lastReadTableIdx >= unicodeInfo.length) return;

	var scTop = $(window).scrollTop();
	if (scTop < ($(document).height() - 2 * $(window).height())) return;

	let loadCnt = 0;
	while((loadCnt++) < initTableCnt)
	{
		if (lastReadTableIdx >= unicodeInfo.length) break;

		let currUniInfo = unicodeInfo[lastReadTableIdx++];
		let currBodyHtml = generateUnicodeBody(currUniInfo);
		$('#unicode-table-body').append(currBodyHtml);
	}
}

function enlargeChar()
{
	let str = $(this).text();
	console.log(str);

	let idx = $(this).index();
	$('td.highlight').removeClass('highlight');
	$('th.highlight').removeClass('highlight');
	$(this).addClass('highlight');
	$(this).closest('tr').find('td:first-child').addClass('highlight');
	$(this).closest('table').find(`th:nth-child(${idx+1})`).addClass('highlight');
}


// function initializeTree()
// {
// 	// set slide toggle animation
// 	$('h3').click(function(e){
// 		let thisH3 = $(this);
// 		let nxtDL = thisH3.next('dl');
// 		thisH3.removeClass('hide-content');
// 		if (nxtDL.length > 0) {
// 			nxtDL.slideToggle(function(){
// 				if (!nxtDL.is(':visible')) thisH3.addClass('hide-content');
// 			});
// 		}
// 	});

// 	// put icon in all link
// 	$('a').each(function(){
// 		let iconData = $(this).attr('icon');
// 		$(this).prepend('<img src="' + iconData + ' ">&nbsp;&nbsp;');
// 		$(this).removeAttr('add_date');
// 		$(this).removeAttr('icon');
// 		$(this).attr('target', '_new');
// 	});

// 	// pre-process all titles
// 	$('h3').each(function(){
// 		let isShow = (titleShowOnInit.indexOf($(this).text()) >= 0);
// 		let nxtDL = $(this).next('dl');
// 		$(this).removeClass('hide-content');
// 		if (!isShow && (nxtDL.length > 0)) {
// 			nxtDL.hide();
// 			$(this).addClass('hide-content');
// 		}
// 	});
// }

// function openAllLinks(e)
// {
// 	e.stopPropagation();

// 	let isIncludeSub = $(this).hasClass('include-sub');
// 	let thisDT = $(this).closest('dt');
// 	let links = isIncludeSub ? thisDT.find('a') : thisDT.children('dl').children('dt').children('a');

// 	if (links.length <= 0) console.log('No Links in this Category.');
// 	if ((links.length >= 30) && !confirm('Really want to open ' + links.length + ' pages ??')) return;

// 	links.each(function(){
// 		console.log($(this).attr('href'));
// 		window.open($(this).attr('href'), '_blank');
// 	});
// }

// function generateBookmarkFileName(date)
// {
// 	// set search file name
// 	var yyyy = date.getFullYear();
// 	var mm = ('0' + (date.getMonth()+1)).slice(-2);
// 	var dd = ('0' + date.getDate()).slice(-2);
// 	var bkFileName = bkFileTemp.replace('{yyyy}', yyyy).replace('{mm}', mm).replace('{dd}', dd);
// 	return bkFileName;
// }

// // Just Backup: load files by XMLHttpRequest
// function findLastBookmark_org()
// {
// 	var bkFileTemp = './bookmarks/bookmarks_{yyyy}_{mm}_{dd}.html';
// 	var searchDay = new Date();

// 	var fileNotFound = true;
// 	do
// 	{
// 		// set search file name
// 		var yyyy = searchDay.getFullYear();
// 		var mm = ('0' + (searchDay.getMonth()+1)).slice(-2);
// 		var dd = ('0' + searchDay.getDate()).slice(-2);
// 		var bkFileName = bkFileTemp.replace('{yyyy}', yyyy).replace('{mm}', mm).replace('{dd}', dd);

// 		// get file if exist
// 		var xmlhttp = new XMLHttpRequest();
// 		xmlhttp.open("GET", bkFileName, false);
// 		xmlhttp.send();
// 		if (xmlhttp.status == 200) {
// 		  result = xmlhttp.responseText;
// 		  $('#bk').html(result);
// 		  fileNotFound = false;
// 		  console.log('found bookmark file: ' + bkFileName);
// 		}

// 		// set next search date
// 		searchDay.setDate(searchDay.getDate() - 1);
// 	}
// 	while(fileNotFound)
// }
