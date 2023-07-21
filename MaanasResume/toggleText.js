

const HideText = () => {
	
    const img = document.querySelector(".pro");
    const projects = document.querySelector("#Projects");
	const titletext = document.querySelector("#aboutText");
	const about_me = document.querySelector("#About");


    img.style.display = "none";
    projects.style.color = "white"

	if (titletext.style.display === "" || titletext.style.display === "none") {
        titletext.style.display = "block";
        about_me.style.color = "red";
    } else {
        titletext.style.display = "none";
        about_me.style.color = "white";
    }
}




const HideImg = () => {


	const titletext = document.querySelector("#aboutText");
    const about_me = document.querySelector("#About");
	const img = document.querySelector(".pro");
	const projects = document.querySelector("#Projects");


    titletext.style.display = "none";
    about_me.style.color = "white"


	if (img.style.display === "" ||img.style.display === "none") {
        img.style.display = "inline-block";
        projects.style.color = "red";
    } else {
        img.style.display = "none";
        projects.style.color = "white";
    }
}







