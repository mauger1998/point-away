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




