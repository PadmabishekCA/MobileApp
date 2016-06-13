
var app = {
		
    // Application Constructor
		
    initialize: function() {
    	console.log('Received Event: ' );
       // this.bindEvents();
    	this.getContactList();
    },
    getContactList: function(){
    	 console.log("Entering getContactList()");
    	    console.log("Exiting getContactList()");
    }
    
};
$( "#target" ).click(function() {
	  $.ajax({
	      url : "http://www.w3schools.com/angular/customers_mysql.php",
	      dataType:"json",
	      cache: false,
	      error:function (xhr, ajaxOptions, thrownError){
	        debugger;
	                alert(xhr.statusText);
	                alert(thrownError);
	            },
	      success : function(json) {
	        console.log("Entering getContactList.success()");
	        console.log(JSON.stringify(json.records));
	       
	        	$.each(json.records, function(index,jsonObject){
	        	    $.each(jsonObject, function(key,val){
	        	    
	        	    	
	        	        console.log("key : "+key+" ; value : "+val);
	        	        var html = '<li>' + key 
	      	          + ' ' + val +'</li>';
	      	          $('#contactList').append(html);
	        	    	} );
	        	});
	         
	        console.log("Exiting getContactList.success()");
	        console.log(JSON.stringify(contactList));
	      } 
	    });
	  console.log("End geeee");
	});

$( "#submitforcheck" ).click(function() {
	var uname=$('#uname').val();
	$.ajax({
		url : "http://localhost:8080//confirmUser/"+uname,
	      dataType:"json",
	      cache: false,
	      error:function (xhr, ajaxOptions, thrownError){
		        debugger;
		                alert(xhr.statusText);
		                alert(thrownError);
		            },
		            success : function(json) {
		            	console.log(JSON.stringify(json));
			        	    $.each(json, function(key,val){
			        	    console.log("key : "+key+" ; value : "+val);
			        	       if(val ==$('#password').val() ){
			        	    	   $.mobile.changePage($('#Home'));
			        	    	   $.ajax({
			        	    			url : "http://localhost:8080//getAllDetails",
			        	    		      dataType:"json",
			        	    		      cache: false,
			        	    		      error:function (xhr, ajaxOptions, thrownError){
			        	    			        debugger;
			        	    			                alert(xhr.statusText);
			        	    			                alert(thrownError);
			        	    			            },
			        	    			            success : function(json) {
			        	    			            	console.log(JSON.stringify(json.cuisine));
			        	    			            	
			        	    			            	$.each(json.cuisine, function(index,jsonObject){
			        	    			            		var i=0;
			        	    			            		var html='<li>';
			        	    				        	    $.each(jsonObject, function(key,val){
			        	    				        	    i=i+1;
			        	    				        	    console.log("key : "+key+" ; value : "+val+ "index "+i);
			        	    				        	    
			        	    				        	    	
			        	    				        	    if(key=='name')
			        	    				        	    	{
				        	    				        	   html +=val;
			        	    				        	    	}
			        	    				        	    else if(key=='description')
			        	    				        	    	{
			        	    				        	    	html +=val;
			        	    				        	    	}
			        	    				        	    if(key=='name')
			        	    				        	    	{
			        	    				        	    	html+='<img src="/img/cusine/'+val+'.jpg"' +'>'
			        	    				        	    	}
			        	    				        	    	if(i==3)
			        	    				        	    		{
			        	    				        	    		html+='</li>';
			        	    				        	    		console.log("html ---> "+html);
			        	    				        	    		$('#foodList').append(html);
			        	    				        	    		}
			        	    				        	    
			        	    				        	    } );
			        	    			            	});
			        	    				        	
			        	    			            	$.each(json.games, function(index,jsonObject){
			        	    			            		var i=0;
			        	    			            		var html='<li>';
			        	    				        	    $.each(jsonObject, function(key,val){
			        	    				        	    i=i+1;
			        	    				        	    console.log("key : "+key+" ; value : "+val+ "index "+i);
			        	    				        	    
			        	    				        	    	
			        	    				        	    if(key=='names')
			        	    				        	    	{
				        	    				        	   html +=val;
			        	    				        	    	}
			        	    				        	    else if(key=='description')
			        	    				        	    	{
			        	    				        	    	html +=val;
			        	    				        	    	}
			        	    				        	    if(key=='names')
			        	    				        	    	{
			        	    				        	    	html+='<img src="/img/cusine/'+val+'.jpg"' +'>'
			        	    				        	    	}
			        	    				        	    	if(i==3)
			        	    				        	    		{
			        	    				        	    		html+='</li>';
			        	    				        	    		console.log("html ---> "+html);
			        	    				        	    		$('#gamesList').append(html);
			        	    				        	    		}
			        	    				        	    
			        	    				        	    } );
			        	    			            	});
			        	    			            	
			        	    			            	
			        	    			            	 
			        	    			    	      }
			        	    			            
			        	    		 });
			        	       }
			        	       else
			        	    	   alert("Invalid credentila");
			        	    	} );
			        	
		            	 
		    	      }
		            
	 });
	
});
$( "#fooditems" ).click(function() {
	$.ajax({
		url : "http://localhost:8080//getCuisines",
	      dataType:"json",
	      cache: false,
	      error:function (xhr, ajaxOptions, thrownError){
		        debugger;
		                alert(xhr.statusText);
		                alert(thrownError);
		            },
		            success : function(json) {
		            	console.log(JSON.stringify(json));
			        	    $.each(json, function(key,val){
			        	    console.log("key : "+key+" ; value : "+val);
			        	    var html = '<li>' + key + ' ' + val +'<img src="/img/cusine/'+key+'.jpg"' +'>'+'</li>';
			        	    $('#foodList').append(html);
			        	    } );
			        	
		            	 
		    	      }
		            
	 });
});
$("#tab-1a").on(function(){
	alert("heeello");
});

app.initialize();
