(function(){
	// Get query params
	function getQueryVariable(variable)
	{
	   var query = window.location.search.substring(1);
	   var vars = query.split("&");
	   for (var i=0;i<vars.length;i++) {
	           var pair = vars[i].split("=");
	           if(pair[0] == variable){return pair[1];}
	   }
	   return(false);
	}

	$.getJSON('js/ajax/sample.json', function(data){
		var serverQuery = getQueryVariable('server');
		var serverName;
		var itemsFound = false;

		$.each(data, function(i, item) {
			serverName = item.serverName;

			if (serverName.toLowerCase().indexOf(serverQuery.toLowerCase()) >= 0) {
				serverName = item.serverName;

				itemsFound = true;

				for (var i; i < serverName.length; i++) {
					var serverItem = '<li id="item-' + serverName + '"><a href="server.html?server=' + serverName + '">' + serverName + '</a></li>';

					$('#server-detail-list').append(serverItem);
				}
			} // Endif query matches server
		});

		if (itemsFound === false) {
			alert('No results found');
			var serverItem = '<li><a href="index.html">Start a New Search</a></li>';
			$('#server-detail-list').append(serverItem);
		}
	});
})();