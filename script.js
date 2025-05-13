const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click' , () => {
    navlinks.classList.toggle('active');
});

const text ="Hi, I'm Er.Sajan | ";
const typeText = document.getElementById('typed-text');
let index = 0;
function type(){
    if(index < text.length){
        typeText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

const projects = [
{
    image : "ai.webp",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},
{
    image : "coding.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and" 
},
{
image : "ai.webp",
title : " Animated Navbar",
description : "A responsive navigation bar with smooth animation and"
},
];
const container = document.getElementById("project-container");
projects.forEach(project=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${project.image}" alt = "${project.title}"/>
    <h3> ${project.title}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card)
});

const services = [
    {
        Image : "coding.jpg",
        Title :"service box",
        Description : "This is a service div "
    },
    ];
    const containers = document.getElementById("service-div");
services.forEach(projects=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${projects.Image}" alt = "${projects.title}"/>
    <h3> ${projects.Title}</h3>
    <p>${projects.Description}</p>
    `;
    containers.appendChild(card)
});

const reviews=[
{
  image: "ai.webp",
  title:"Elon Musk",
  description:"\"Great work very creative and professional\"",
},
{
  image: "coding.jpg",
  title:"Mark Zuckerberg",
  description:"\"Love the design and animations.Highly recommended\"",
},
{
  image: "ai.webp",
  title:"Steve Jobs",
  description:"\"Clean code and responsive layout. Impressive\"",
},
];
const container2 = document.getElementById("review-container");
reviews.forEach(review=>{
  const card2= document.createElement("div");
  card2.className="card-review";
  card2.innerHTML=`
  <img src="${review.image}" alt="${reviews.title}"/>
  <h4>${review.title}</h4>
  <p>${review.description}</p>
  `;
  container2.appendChild(card2);
});

