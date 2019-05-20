$(function () {
  var socket = io();
  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    console.log(msg)
    var frame = document.querySelector( 'iframe' );
    frame.contentWindow.postMessage( JSON.stringify({ method: 'slide', args: [ msg ] }), '*' );

  });
});


function goInFullScreen() {
  var frame = document.querySelector( 'iframe' );
  console.log("TESTING")
  // Post a message into the frame
  frame.contentWindow.postMessage( JSON.stringify({ method: 'slide', args: [ 2 ] }), '*' );
	// console.log("PRESEED THE FUCLL SCREEN BUTTON")
	// if(element.requestFullscreen)
	// 	element.requestFullscreen();
	// else if(element.mozRequestFullScreen)
	// 	element.mozRequestFullScreen();
	// else if(element.webkitRequestFullscreen)
	// 	element.webkitRequestFullscreen();
	// else if(element.msRequestFullscreen)
	// 	element.msRequestFullscreen();
}
