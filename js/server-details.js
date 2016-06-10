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
		var serverName, de, EnvType, dr, RetailerName, dst, ServerType, ip, IPAddress, ah, AppType;

		$.each(data, function(i, item) {
			serverName = item.serverName;

			if (serverName == serverQuery) {
				serverName = item.serverName;
				de = item.de;

				$.each(de, function(i, item) {
					EnvType = item.EnvType;
					dr = item.dr;

					$.each(dr, function(i, item) {
						RetailerName = item.RetailerName;
					});

					$.each(dr, function(i, item) {
						dst = item.dst;

						$.each(dst, function(i, item) {
							ServerType = item.ServerType;
							var serverTypeItem = '<li>' + ServerType + '</li>';
							$('#serverType-detail-list').append(serverTypeItem);
						});

						$.each(dst, function(i, item) {
							ip = item.ip;

							$.each(ip, function(i, item) {
								IPAddress = item.IPAddress;

								for(var i; i < IPAddress.length; i++) {
									var IPITem = '<li>' + IPAddress + '</li>';
									$('#ip-detail-list').append(IPITem);
								}					
							});

							$.each(ip, function(i, item) {
								ah = item.ah;

								$.each(ah, function(i, item) {
									AppType = item.AppType;
									var appItem = '<li>' + AppType + '</li>';
									$('#apps-detail-list').append(appItem);
								});
							});
						});
					});
				});
				

				$('#server-headline').text(serverName + ' - ' + RetailerName + ' ' + EnvType + ' Server');

				// $.each(IPAddress, function(i, item) {
				// 	var IPITem = '<li>' + item + '</li>';
				// 	$('#ip-detail-list').append(IPITem);
				// });
			} // Endif query matches server
		});




		// if (serverQuery.length > 0) {
		// 	$.each(data, function(i, item) {
		// 		if (item.serverName == serverQuery) {
		// 			$('#server-headline').text(item.serverName);
		// 		}
		// 		// No match returned
		// 		// else {
		// 		// 	$('#server-headline').text('Server Not Found');
		// 		// }
		// 	});			
		// }
		// No Query String
		// else {
		// 	alert('No Server Selected!');
		// }
	});
})();