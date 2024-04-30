const hamburger=document.getElementById("hamburger");
const navlinks=document.getElementById("navlinks");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("navlinks-active");
})



var sec_button = document.getElementById("secondary-btn");
sec_button.addEventListener("click", function() {
    alert("Item added to Cart!!");
  });