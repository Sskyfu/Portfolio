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

for (i =0; i < pageList.length; i++){
let btnTemp = document.createElement("a");
btnTemp.classList.add("btn");
btnTemp.classList.add("btn-primary");
btnTemp.innerHTML = pageList[i];
btnTemp.setAttribute('href', './' + pageList[i] + '.html')

//home workaround
//TODO - try to find a more elegant way to handle this 

if(pageList[i] == "Home"){btnTemp.setAttribute('href', './'+  "index" + '.html')}


navBar.appendChild(btnTemp);
}