var bkFileTemp = 'bookmarks/bookmarks_{yyyy}_{mm}_{dd}.html';
var titleShowOnInit = ['書籤列', '我的書籤'];
var bookmarks = [];

$(document).ready(function(){ findBookmark(new Date()); });

function findBookmark(searchDay)
{
	// set search file name
	var bkFileName = generateBookmarkFileName(searchDay);

	// get file if exist
	$("#bookmark-content").html('');
	$("#bookmark-content").load(bkFileName, function( response, status, xhr ) {
		if (status == "error") {
			// check stop criterion
			var diff = Math.floor(((new Date()) - searchDay) / (1000*60*60*24));
			if (diff > 365) return console.error('Cannot find backmark for the last 1 year, please check your data.');

			// get previous date
			searchDay.setDate(searchDay.getDate() - 1);
			findBookmark(searchDay);
		}else{
			console.log('Bookmark found: ' + bkFileName);
			initializeTree();
		}
	});
}

function initializeTree()
{
	$('dl').click(function(e){e.preventDefault();});
	// $('a').click(function(e){
	// 	console.log('click');
	// 	console.dir(e);
	// });

	// set slide toggle animation
	$('h3').click(function(){
		let nxtDL = $(this).next('dl');
		if (nxtDL.length > 0) nxtDL.slideToggle();
	});

	// put icon in all link
	$('a').each(function(){
		let iconData = $(this).attr('icon');
		$(this).prepend('<img src="' + iconData + ' ">&nbsp;&nbsp;');
		$(this).removeAttr('add_date');
		$(this).removeAttr('icon');
		$(this).attr('target', '_new');
	});

	// initial slide up
	$('h3').each(function(){
		let isShow = (titleShowOnInit.indexOf($(this).text()) >= 0);
		let nxtDL = $(this).next('dl');
		if (!isShow && (nxtDL.length > 0)) nxtDL.hide();
	});
}

function generateBookmarkFileName(date)
{
	// set search file name
	var yyyy = date.getFullYear();
	var mm = ('0' + (date.getMonth()+1)).slice(-2);
	var dd = ('0' + date.getDate()).slice(-2);
	var bkFileName = bkFileTemp.replace('{yyyy}', yyyy).replace('{mm}', mm).replace('{dd}', dd);
	return bkFileName;
}

// Just Backup: load files by XMLHttpRequest
function findLastBookmark_org()
{
	var bkFileTemp = './bookmarks/bookmarks_{yyyy}_{mm}_{dd}.html';
	var searchDay = new Date();

	var fileNotFound = true;
	do
	{
		// set search file name
		var yyyy = searchDay.getFullYear();
		var mm = ('0' + (searchDay.getMonth()+1)).slice(-2);
		var dd = ('0' + searchDay.getDate()).slice(-2);
		var bkFileName = bkFileTemp.replace('{yyyy}', yyyy).replace('{mm}', mm).replace('{dd}', dd);

		// get file if exist
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", bkFileName, false);
		xmlhttp.send();
		if (xmlhttp.status == 200) {
		  result = xmlhttp.responseText;
		  $('#bk').html(result);
		  fileNotFound = false;
		  console.log('found bookmark file: ' + bkFileName);
		}

		// set next search date
		searchDay.setDate(searchDay.getDate() - 1);
	}
	while(fileNotFound)
}