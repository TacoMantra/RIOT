(function(){
	$.getJSON('js/ajax/sample.json', function(data){
		var RetailerName;
		
		$.each(data, function(i, item) {
			var de = item.de;
			$.each(de, function(i, item){
				var dr = item.dr;

				$.each(dr, function(i, item){
					RetailerName = item.RetailerName;
				});
			});
		});

		var retailerItem = '<li><a href="retailer.html?retailer=' + RetailerName + '">' + RetailerName + '</li>';
		$('#retailer-list').append(retailerItem);
	});
})();