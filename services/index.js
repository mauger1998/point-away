gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();


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

  let textLines = document.querySelectorAll(".text1, .text2")
  let firstSplit;
  
  
  textLines.forEach(textLine => {
    firstSplit = new SplitType(textLine, {
        type: "chars"
    })
  })
  gsap.to("main .char", {
  y: 0,
  stagger: 0.005,
  duration:0.5,
  delay:0.6,
  ease:
  Power1.ease,
  
  })
  gsap.to("main .wrapper a button", {
    y:0,
    delay:1.75,
    duration:0.400,
    ease:
    Power1.ease,
  })

window.addEventListener("resize", (e) => {
    SplitType.revert('.text1, .text2')
  })

  mm.add("(min-width: 801px)", () =>  {
    // Overlap Grid Cards
    gsap.to(".notice .card-grid-item", {
      scrollTrigger: {
        trigger: ".notice .card-grid-item",
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        end:"+=700px"
      },
    x: 0,
    stagger: 0.1,
    ease:
    Power1.ease,
    scale:1,
    
    })
  
  })
  mm.add("(max-width: 800px)", () =>  {
    // Overlap Grid Cards
    gsap.to(".notice .card-grid-item", {
      scrollTrigger: {
        trigger: ".notice .card-grid-item",
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        end:"+=500px"
      },
    x: 0,
    stagger: 0.1,
    ease:
    Power1.ease,
    scale:1,
    
    })
  })