
$(document).ready(function()
{
	// find the latest bookmark file
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

	// update bookmark content
	// $('DL').hide();
	// $('DL').eq(0).show();
});
