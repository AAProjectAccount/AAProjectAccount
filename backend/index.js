let myHeight = document.getElementById('navigationBar').offsetHeight;
document.getElementById('main').style.marginTop = myHeight + 10 + "px";

function toggleMenu() {
    document.getElementById("dropD").classList.toggle("show");
	console.log("toggle");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var dropD = document.getElementById("dropD");
      if (dropD.classList.contains('show')) {
		console.log("removed")
        dropD.classList.remove('show');
      }
  }
}