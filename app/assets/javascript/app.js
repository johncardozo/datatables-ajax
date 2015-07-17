(function () {
	
    console.log('running...');
    
    $('#example').dataTable( {
        "ajax": 'assets/json/datos.json'
    } );

}());