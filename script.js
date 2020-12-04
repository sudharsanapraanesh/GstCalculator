const calculate = document.querySelector('#calculate');
calculate.addEventListener('click', (e)=> {
	e.preventDefault();
	const initialAmount = parseInt(document.querySelector('#initial-amount').value);
	const GSTRate = parseInt(document.querySelector('#gst-rate').value);
	const netAmount = document.querySelector('#net-amount').value = initialAmount;
	const gstAmount = document.querySelector('#gst-amount').value = (initialAmount / 100 * GSTRate).toFixed(2);
	document.querySelector('#total-amount').value = parseInt(netAmount) + parseInt(gstAmount);
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', (e)=> {
	document.querySelector('#initial-amount').value = '';
	document.querySelector('#gst-rate').value = '';
	document.querySelector('#net-amount').value = '';
	document.querySelector('#gst-amount').value = '';
	document.querySelector('#total-amount').value = '';
});
