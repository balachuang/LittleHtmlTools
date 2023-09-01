function openUrls()
{
	let urls = $('#urls').val().trim();

	if (urls && (urls != ''))
	{
		urls = urls.split('\n');
		for (var n=0; n<urls.length; ++n)
		{
			let url = urls[n].trim();
			window.open(url, '_blank');
		}
	}
}
