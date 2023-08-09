gsap.registerPlugin(ScrollTrigger);

// Dropdown
document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
  })


// GSAP Match Media
let mm = gsap.matchMedia();

// Video

gsap.to("video", {
    scrollTrigger: {
      trigger: "video",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=400px"
    },
    scale:1,
    opacity:1,
});


// const video = document.querySelector("video")

// // media query handler function
// function mqHandler(e) {
 
//   console.log(
//     e.matches ? 'large' : 'not large'
//   );
//   video.setAttribute("poster", "public/images/before-grid-one.png")
// }



// const mqLarge  = window.matchMedia( '(max-width: 1024px)' );
// mqLarge.addEventListener('change', mqHandler);






// CMS

let URL = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22mainImages%22%5D+%7B%0A++++%22imageUrl%22%3A+mainImage.asset-%3Eurl%0A%7D%0A"

  // fetch the content
  fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    const mainImages = document.querySelector(".images-section .wrapper")
    if (result.length > 0) {
      mainImages.innerHTML = ""
      result.forEach((result) => {
        const mainImage = document.createElement("img")
        mainImage.src = result.imageUrl
        mainImages.appendChild(mainImage)

      });
     
      
    }
  })
  .catch((err) => console.error(err));


let URLTWO = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22ethos%22%5D+"

  // fetch the content
  fetch(URLTWO)
  .then((res) => res.json())
  .then(({ result }) => {
    const ethos = document.querySelector(".green-section .wrapper h2")
    if (result.length > 0) {
      
        ethos.textContent = result[0].ethos

 
     
      
    }
  })
  .catch((err) => console.error(err));
