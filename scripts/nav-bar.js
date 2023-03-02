let navBar = document.getElementById("nav-bar");

let pageList = ["Home", "Work", "Projects", "About", "Contact"]


//test
/*
let btnTest = document.createElement("button");
btnTest.classList.add("btn");
btnTest.classList.add("btn-primary");
btnTest.innerHTML = "Test Button";

navBar.appendChild(btnTest);

*/

for (i =0; i < pageList.length; i++)
{
let btnTest = document.createElement("button");
btnTest.classList.add("btn");
btnTest.classList.add("btn-primary");
btnTest.innerHTML = pageList[i];

navBar.appendChild(btnTest);
}