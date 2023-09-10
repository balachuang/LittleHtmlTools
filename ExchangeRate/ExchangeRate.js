let currRates = [];

$(document).ready(function(){
	parseCurrencyRate();

	$('#addCurrency').click(inputCurrency);
	$('#showCurrency').click(showCurrency);
});

function inputCurrency()
{
	let curr = prompt('請輸入貨幣名稱', '美金');
	let rate = prompt('請輸入一 ' + curr + ' 等於多少台幣?', '1.0');
	addCurrencyToCookie(curr, rate);
}

function addCurrencyToCookie(curr, rate)
{
	let currRate = Cookies.get('currency-rate');

	if (currRate == undefined) 
	{
		Cookies.set('currency-rate', curr + ':' + rate);
	}else{
		Cookies.set('currency-rate', currRate + ',' + curr + ':' + rate);
	}
}

function parseCurrencyRate()
{
	currRates = [];
	let currRateStr = Cookies.get('currency-rate');
	if (currRateStr != undefined)
	{
		let currRateStrAry = currRateStr.split(',');
		for (let n=0; n<currRateStrAry.length; ++n)
		{
			let currRateStrAryItem = currRateStrAry[n].split(':');
			currRates.push({
				currName: currRateStrAryItem[0],
				currRate: currRateStrAryItem[1]
			});
		}
	}
}

function showCurrency()
{
	alert(Cookies.get('currency-rate').replace(/,/g, '\r\n'));
}