const inner = document.querySelectorAll(".inner");

inner[0].style.opacity = 1;
inner[1].style.opacity = 1;
window.onscroll =()=>{
   inner.forEach((element, index) => {
      let rect = element.getBoundingClientRect().top;
      if(rect < innerHeight){
         element.style.opacity = 1;
         if(element.className.includes("img")){
            element.style.transform = "scale(1)";
         }
      }else{
         element.style.opacity = 0;
         if(element.className.includes("img")){
            element.style.transform = "scale(.9)";
         }
      }
   });
};
