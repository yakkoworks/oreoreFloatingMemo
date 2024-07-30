document.addEventListener('long-press', function(e) {
	console.log(e.target);
});

function insert(char){
	var memo = document.getElementById("memo");
	memo.value += char;
}