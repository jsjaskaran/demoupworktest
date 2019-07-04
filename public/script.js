$(document).ready(function(){
				
	// get factorial
	$("#formfactorial").on('submit', function(e){
		e.preventDefault();
		var ftext = $("#factorial").val();
		
		if(ftext == ""){
			return false;
		}

		$.ajax({
			url: '/v1/get/factorial',
			type: 'POST',
			data: {ftext: ftext},
			success: function(data){
				// console.log(data);
				if(data['status']){
					$("#factorialresult span").text(data['data']);
				}
			},
			error: function(err){
				console.log(err);
			}
		})
	})


	// get sha256 
	$("#getsha256").on('click', function(){
		var shtext = $("#sha256num").val();
		
		if(shtext == ""){
			return false;
		}

		$.ajax({
			url: '/v1/get/sha256',
			type: 'POST',
			data: {shtext: shtext},
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.log(err);
			}
		})
	})
})