let tools = [
	{ name: 'Open Multiple Urls',   id: 'MultipleLinks'  },
	{ name: 'Exchange Rate',        id: 'ExchangeRate'   },
	// { name: 'Online Bookmarks',     id: 'OnlineBookmark' },
	{ name: 'Global Time',          id: 'GlobalTime'     },
	{ name: 'Coffee Counter',       id: 'CoffeeWhite'    },
];

let htmlTemplate = '<li><a href="{id}/{id}.html">{name}</a></li>';

$(document).ready(function(){
	for (var n=0; n<tools.length; ++n) {
		let toolHtml = htmlTemplate.replace(/\{id\}/g, tools[n].id).replace(/\{name\}/g, tools[n].name);
		$('#tools-links').append(toolHtml);
	}
});
