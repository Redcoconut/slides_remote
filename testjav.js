// $(function () {
//   var socket = io();
//   $('form').submit(function(e){
//     e.preventDefault(); // prevents page reloading
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
//   });
//   socket.on('chat message', function(msg){
//     $('#messages').append($('<li>').text(msg));
//   });
// });

function refresh(currentSlide) {
  console.log(currentSlide)
  var socket = io();
  socket.emit('chat message', currentSlide);
  return false;
}


function callNext() {
	console.log("GOING TO NEXT SIDE")
	console.log(document.getElementById("test").innerText)
	currentSlide = document.getElementById("test").innerText
	currentSlide = parseInt(currentSlide) + 1;
	document.getElementById("test").innerHTML = currentSlide;
	console.log(currentSlide)
	refresh(currentSlide)
}

function callPrev() {
	console.log("GOING TO Prev SIDE")
	console.log(document.getElementById("test").innerText)
	currentSlide = document.getElementById("test").innerText
	currentSlide = parseInt(currentSlide) - 1;
	document.getElementById("test").innerHTML = currentSlide;
	console.log(currentSlide)
	refresh(currentSlide)
}
