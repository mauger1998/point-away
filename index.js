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

gsap.to("main .wrapper .svg-wrapper svg", {
  y:0,
  delay:0.5,
  duration:0.500,
  ease:
  Power1.ease,
})

const textLines = document.querySelectorAll(".text1")


textLines.forEach(textLine => {
  const split = new SplitType(textLine, {
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



// Three Card grid text Split

const textLinesH3 = document.querySelectorAll(".h3")


textLinesH3.forEach(textLine => {
  const split = new SplitType(textLine, {
      type: "chars"
  })
})


gsap.to(".three-card-grid .icon", {
  scrollTrigger: {
    trigger: ".three-card-grid .icon",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=400px"
  },
y: 0,
stagger: 0.25,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})
gsap.to(".three-card-grid .char", {
  scrollTrigger: {
    trigger: ".three-card-grid .word",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=450px"
  },
y: 0,
stagger: 0.0075,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

// Restoration Title

const textLinesRestorationH2 = document.querySelectorAll(".restoration-section .restoration-h2")


textLinesRestorationH2.forEach(textLine => {
  const split = new SplitType(textLine, {
      type: "chars"
  })
})

gsap.to(".restoration-section .notice-titles h2 .char", {
  scrollTrigger: {
    trigger: ".restoration-section .notice-titles h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
y: 0,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

// Restoration Grid

gsap.to(".restoration-section .overlap-card-grid .card-grid-item", {
  scrollTrigger: {
    trigger: ".restoration-section .overlap-card-grid .card-grid-item",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=1000px"
  },
x: 0,
stagger: 0.1,
ease:
Power1.ease,
scale:1,

})

// Heritage Title
let textLinesHeritageH2 = document.querySelectorAll(".heritage h2")
let split;


textLinesHeritageH2.forEach(textLine => {
      split = new SplitType(textLine, {
      type: "chars"
  })
})

gsap.to(".heritage h2 .char", {
  scrollTrigger: {
    trigger: ".heritage h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
y: 0,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  split.revert();
  
  textLinesHeritageH2.forEach(textLine => {
    // issue is here
    split = new SplitType(textLine, {
    type: "chars"
})
})
})


//Personalised Approach Cards

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

// Overlap Grid Cards
gsap.to(".carbon-section .overlap-card-grid .card-grid-item", {
  scrollTrigger: {
    trigger: ".carbon-section .overlap-card-grid .card-grid-item",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=1600px"
  },
x: 0,
stagger: 0.15,
ease:
Power1.ease,
scale:1,

})

