// let currRates = [];
let currTemplate = '{excIn} {currSrc}可以換 {excRes} {currTrg}';

$(document).ready(function(){
	parseCurrencyRate();

	$('#addCurrency').click(inputCurrency);
	$('#showCurrency').click(showCurrency);
	$('#clearCurrency').click(clearCurrency);
	$('#input-curr').change(parseCurrencyRate);
});

function inputCurrency()
{
	let curr = prompt('請輸入貨幣名稱', '美金');
	let rate = prompt('請輸入一 ' + curr + ' 等於多少台幣?', '30.0');
	addCurrencyToCookie(curr, rate);
	parseCurrencyRate();
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
	let excInput = eval($('#input-curr').val());
	$('#output-curr-area').html('');
	// currRates = [];
	let currRateStr = Cookies.get('currency-rate');
	if (currRateStr != undefined)
	{
		let currRateStrAry = currRateStr.split(',');
		for (let n=0; n<currRateStrAry.length; ++n)
		{
			let currRateStrAryItem = currRateStrAry[n].split(':');
			let currName = currRateStrAryItem[0];
			let currRate = eval(currRateStrAryItem[1]);
			// currRates.push({
			// 	currName: currName,
			// 	currRate: currRate
			// });

			$('#output-curr-area').append(generateExcHtml('新台幣', currName, excInput, excInput*1.0/currRate));
			$('#output-curr-area').append(generateExcHtml(currName, '新台幣', excInput, excInput*currRate));
		}
	}
}

function generateExcHtml(currSrc, currTrg, excIn, excRes)
{
	return '<div class="curr-exc">' + generateExcStr(currSrc, currTrg, excIn, excRes) + '</div>';
}

function generateExcStr(currSrc, currTrg, excIn, excRes)
{
	return currTemplate
			.replace('{currSrc}', currSrc)
			.replace('{currTrg}', currTrg)
			.replace('{excIn}', Math.round(10000.0 * excIn) / 10000)
			.replace('{excRes}', Math.round(10000.0 * excRes) / 10000);
}

function showCurrency()
{
	let dispStr = '';
	let currRateStr = Cookies.get('currency-rate');
	if (currRateStr != undefined)
	{
		let currRateStrAry = currRateStr.split(',');
		for (let n=0; n<currRateStrAry.length; ++n)
		{
			let currRateStrAryItem = currRateStrAry[n].split(':');
			let currName = currRateStrAryItem[0];
			let currRate = eval(currRateStrAryItem[1]);
			dispStr += generateExcStr(currName, '新台幣', 1, currRate) + '\r\n';
		}
	}

	// alert(Cookies.get('currency-rate').replace(/,/g, '\r\n'));
	alert(dispStr);
}

function clearCurrency()
{
	Cookies.remove('currency-rate');
	parseCurrencyRate();
}