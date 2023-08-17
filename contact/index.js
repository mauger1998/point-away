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



//Loading Animations

const h1 = document.querySelector("h1")

gsap.to(h1, {
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
});
gsap.to("main .wrapper p", {
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  delay:0.25,
});
gsap.to("main .wrapper button", {
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  delay:0.35,
});
