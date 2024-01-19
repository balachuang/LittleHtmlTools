console.log(window.location.search);

// get query strings
let queries = window.location.search.substring(1);
if (queries && queries != '') queries = queries.split('&');

// parse
let url = '';
let wait = 0;
for (let n=0; n<queries.length; ++n)
{
	let params = queries[n].split('=');
	if(params[0].trim() == 'url') url = decodeURIComponent(params[1].trim());
	if(params[0].trim() == 'wait') wait = eval(params[1].trim());
}

// go navigate
if ((url != '') && (wait != 'number')) {
	window.setTimeout(function(){
		window.location.href = url;
	}, wait);
}
