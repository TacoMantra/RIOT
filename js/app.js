(function(){
	// Search
	$('#serverSearch-submit').click(function(){
		var server = $('#serverSearch-input').val();
		if (server.length > 0) {
			window.location.href = 'results.html?server=' + server;
		}
		else {
			alert('Please enter a server name');
		}
	});

	var servers;

	$.getJSON('js/ajax/sample.json', function(data){
		servers = data;

		var serverName = "DtOfIisPrd05";
		for (var i = 0; i < data.length; i++) {
			if (data[i].serverName == serverName) {
				console.log('success!');
			}
		}
	});
})();