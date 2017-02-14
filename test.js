// 点击按钮打开弹窗
function displayDiv(){
	document.getElementById('myModal').style.display = "block";
}

// 点击 <span> (x), 关闭弹窗
function displaySpan(){
	document.getElementById('myModal').style.display = "none";
}

// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
	if (event.target == document.getElementById('myModal')) {
		document.getElementById('myModal').style.display = "none";
	}
}

function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");