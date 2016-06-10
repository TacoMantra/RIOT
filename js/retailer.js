(function(){
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