// Search
$('#serverSearch-submit').click(function(){
	var server = $('#serverSearch').val();
	if (server.length > 0) {
		window.location.href = 'results.html?server=' + server;
	}
	else {
		alert('Please enter a server name');
	}
});