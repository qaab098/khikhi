(function (window) {
	
var byespeaker={};
var speakword="GoodBye";
byespeaker.speak=function (name) {
	console.log(speakword+ " " +name);
}
	window.byespeaker= byespeaker;
})(window);