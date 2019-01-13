var btn = document.querySelector('#refresh');
var rate = document.querySelector('#rate');
var lastupdate = document.querySelector('#last');
var result = document.querySelector('#result');
var error = document.querySelector('#error');
var error_text = document.querySelector('#error-text');

btn.addEventListener('click', function() {
	var url = 'http://api.coindesk.com/v1/bpi/currentprice.json';
	fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		rate.innerHTML = data.bpi.EUR.symbol + data.bpi.EUR.rate_float;
		lastupdate.innerHTML = data.time.updated;
		result.style.display = '';
		error.style.display = 'none';
	})
	.catch(function(err) {
		result.style.display = 'none';
		error_text.innerHTML = err;
		error.style.display = '';
	})
});