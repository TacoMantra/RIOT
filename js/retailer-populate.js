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
		var retailerQuery = getQueryVariable('retailer');
		var serverName, RetailerName, de, dr, dst, EnvType;

		$.each(data, function(i, item) {
			serverName = item.serverName;
			de = item.de;

			$.each(de, function(i, item) {
				dr = item.dr;

				$.each(dr, function(i, item) {
					RetailerName = item.RetailerName;
					console.log(RetailerName);
				});
			});
		});

		$('#retailer-headline').text(RetailerName);
	});
})();