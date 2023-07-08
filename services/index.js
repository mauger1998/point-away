gsap.registerPlugin(ScrollTrigger);

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


// GSAP

gsap.to(".line-cover", {
    scrollTrigger: {
      trigger: ".services-titles",
      start: "top center", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=1100",

    },
    width:0,
    stagger:0.75,
  });