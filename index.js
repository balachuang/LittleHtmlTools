let tools = [
	{
		id: 'MultipleLinks',
		name: 'Open Multiple Urls'
	},
	{
		id: 'ExchangeRate',
		name: 'Exchange Rate'
	},
];
let htmlTemplate = '<li><a href="{id}/{id}.html">{name}</a></li>';

$(document).ready(function(){
	for (var n=0; n<tools.length; ++n) {
		let toolHtml = htmlTemplate
							.replace(/\{id\}/g, tools[n].id)
							.replace(/\{name\}/g, tools[n].name);
		$('#tools-links').append(toolHtml);
	}
});