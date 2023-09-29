var currIdx = 0;
var invTime = 0;
var urls = null;
var ctrlClick = null;

$(document).ready(function(){
	$('#openUrsl').click(openUrls);
});

function openUrls()
{
	ctrlClick = jQuery.Event('click');
	ctrlClick.ctrltKey = true;

	invTime = eval($('#open-int').val()) * 1000 + 100;

	currIdx = 0;
	urls = $('#urls').val().trim();

	if (urls && (urls != ''))
	{
		urls = urls.split('\n');
		for (let n=0; n<urls.length; ++n)
		{
			let url = urls[n].trim();
			let wait = invTime * n;
			window.open('MultipleLinks_delay.html?url=' + encodeURIComponent(url) + '&wait=' + wait, '_blank');
		}
	}
}
