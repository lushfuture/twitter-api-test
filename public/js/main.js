$( document ).ready(function() {

	var socket = io.connect('http://54.221.206.170');
	// socket.on('news', function (data) {
	// 	console.log(data);
	// 	socket.emit('my other event', { my: 'data' });
	// });
	$('#getTweetsButton').on('click', function(){
		var username = $('#username').val();
		console.log(username);
		socket.emit('get-twitter-stream', username );
	});
	
	socket.on('twitter-data-update', function (tweets) {
		console.log(tweets);
		$('#tweets').html('');
		$.each(tweets, function (i, tweet){
			$('#tweets').append('<p>'+tweet.text+'</p>');
		});
	});

});