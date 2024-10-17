
 
const characterContainer = document.querySelector("#characterContainer")
const charactertemplete = document.querySelector("#charactertemplete")

const showProductContainer = (data) => {
    if (!data) {
      return false;
    }
  
    data.forEach((curProd) => {
      const { name, description, id, image } =
        curProd;
  
      const productClone = document.importNode(charactertemplete.content, true);
  
  
      productClone.querySelector(".card-name").textContent = name;
      productClone.querySelector(".card-img").src = image;
      productClone.querySelector(".card-img").alt = name;
   
      productClone.querySelector(".card-des").textContent = description;
  
      characterContainer.append(productClone);
    });
  };

let apiScript = document.createElement('script');
apiScript.src = 'api.js';
document.head.appendChild(apiScript);

apiScript.onload = function() {
  let data = getData();
  console.log(data);
  showProductContainer(data);
}

// navabar
let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
        

        // owl carousel

   

        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:true,
          autoplay:true,
          autoplayTimeout:1000,
          autoplayHoverPause:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:5,
                  nav:true,
                  loop:false
              }
          }
      })
     