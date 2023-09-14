
const nav = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const services = document.getElementById("services");
const changeAbleH1 = document.getElementById("change-h1");
const navLinks = document.getElementById("nav-links");
const toggleImage = document.getElementById("toggleImage");

const logo = document.getElementById("logo");

const navToggle = document.querySelector(".nav-toggle");

const change = document.querySelector(".change");

      if(window.matchMedia("(max-width: 600px)").matches) 
      {
      /* La largeur minimum de l'affichage est 600 px inclus */
            navToggle.style.position="absolute";
            navToggle.style.right="15px";

            navToggle.classList.remove("hidden");
            navLinks.style.display="none";
            // navLinks.classList.add("hidden");

      } 
      else 
      {
      /* L'affichage est inférieur à 600px de large */
      }

      navToggle.addEventListener("click",()=>
      {

                  logo.classList.toggle("hidden");

                 


                  if(logo.classList.contains("hidden"))
                  {
                       
                        navLinks.style.display="flex";
                        toggleImage.setAttribute("src","cross.svg");
                        toggleImage.style.transition="all";
                        toggleImage.style.transitionDelay=".1s";
                        toggleImage.style.transitionDuration=".10s";
                        toggleImage.style.transitionTimingFunction="ease-in-out"

                        

                        toggleImage.style.rotate ="45deg";
                        
                  }
                  else
                  {
                        toggleImage.setAttribute("src","menu.svg");
                        navLinks.style.display="none";
                        toggleImage.style.rotate ="0deg";
                  }



      })



home.addEventListener("click",function()
{
      bottomContainer.classList.add("hidden");
      change.classList.remove("hidden");
      changeAbleH1.innerText = "HomePage";

})

about.addEventListener("click",function()
{
      bottomContainer.classList.add("hidden");
      change.classList.remove("hidden");
      changeAbleH1.innerText = "About";


})

contact.addEventListener("click",function()
{
      bottomContainer.classList.add("hidden");
      change.classList.remove("hidden");
      changeAbleH1.innerText = "Contact Us";



})

services.addEventListener("click",function()
{
      bottomContainer.classList.add("hidden");
      change.classList.remove("hidden");
      changeAbleH1.innerText = "Services";


})




window.addEventListener("scroll",function()
{
    if(window.scrollY >bottomContainer.offsetTop-nav.offsetHeight-50)
    {
      nav.classList.add("active");

        
    }
    else 
    {
      nav.classList.remove("active");
      // toggleImage.setAttribute("src","white-cross.svg");

    }
});



