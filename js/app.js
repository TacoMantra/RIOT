(function(){
	$('#serverSearch-submit').click(function(){
		var server = $('#serverSearch-input').val();
		if (server.length > 0) {
			window.location.href = 'results.html?server=' + server;
		}
		else {
			alert('Please enter a server name');
		}
	});
})();