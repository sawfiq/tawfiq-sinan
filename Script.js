function myMenuFuntion(){
	var menuBth = document.getElementById("myNavmenu");
	if (menuBth.className === "nav-menu"){
		menuBth.className += "responsive";
	} else {
		menuBth.className = "nav-menu";
	}
}
const body = document.querySelector("body"),
	toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=> {
	body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText",{
	strings: ["Graphic Designer","Coder","Developer","Leader"],

	loop:true,
	typeSpeed:100,
	backspeed:80,
	backDelay:2000,

})