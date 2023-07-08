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

let mm = gsap.matchMedia();

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

let textLines = document.querySelectorAll(".text1")
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

window.addEventListener("resize", () => {

  firstSplit.revert()
  textLinesH3.forEach(textLine => {
    firstSplit = new SplitType(textLine, {
    type: "chars"
})

firstSplit.revert()
  })    
})

gsap.to("main .wrapper a button", {
  y:0,
  delay:1.75,
  duration:0.400,
  ease:
  Power1.ease,
})



// Three Card grid text Split

let textLinesH3 = document.querySelectorAll(".h3")
let splitedUp;


textLinesH3.forEach(textLine => {
      splitedUp = new SplitType(textLine, {
      type: "chars"
  })
})


gsap.from(".three-card-grid .icon", {
  scrollTrigger: {
    trigger: ".three-card-grid .icon",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=400px"
  },
yPercent: -220,
stagger: 0.25,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})
gsap.from(".three-card-grid .char", {
  scrollTrigger: {
    trigger: ".three-card-grid .word",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=450px"
  },
yPercent: -220,
stagger: 0.0075,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})
window.addEventListener("resize", () => {

  splitedUp.revert()
  textLinesH3.forEach(textLine => {
    splitedUp = new SplitType(textLine, {
    type: "chars"
})

splitedUp.revert()
  })    
})

// Restoration Title

let textLinesRestorationH2 = document.querySelectorAll(".restoration-section .restoration-h2")
let splitted;


textLinesRestorationH2.forEach(textLine => {
      splited = new SplitType(textLine, {
      type: "chars"
  })
})

gsap.from(".restoration-section .notice-titles h2 .char", {
  scrollTrigger: {
    trigger: ".restoration-section .notice-titles h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  splited.revert()
  textLinesRestorationH2.forEach(textLine => {
    splited = new SplitType(textLine, {
    type: "chars"
})
splited.revert()
  })    
})


// Restoration Grid

gsap.to(".restoration-section .overlap-card-grid .card-grid-item", {
  scrollTrigger: {
    trigger: ".restoration-section .overlap-card-grid .card-grid-item",
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

// Heritage Title


let textLinesHeritageH2 = document.querySelectorAll(".heritage h2")
let split;

split = new SplitType(textLinesHeritageH2, {
    type: "chars"
})


gsap.from(".heritage h2 .char", {
  scrollTrigger: {
    trigger: ".heritage h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=400px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  
    split.revert()
    split = new SplitType(textLinesHeritageH2, {
      type: "chars"
  })
    split.revert()

    
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


mm.add("(min-width: 801px)", () =>  {
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

})
mm.add("(max-width: 800px)", () =>  {
  // Overlap Grid Cards
  gsap.to(".carbon-section .overlap-card-grid .card-grid-item", {
    scrollTrigger: {
      trigger: ".carbon-section .overlap-card-grid .card-grid-item",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=1000px"
    },
  x: 0,
  stagger: 0.15,
  ease:
  Power1.ease,
  scale:1,

})

})

// Two Column h2

let twoColumnlines = document.querySelectorAll(".two-columns-section .h2")
let twoColumnSplit;

twoColumnlines.forEach(textLine => {
  twoColumnSplit = new SplitType(textLine, {
      type: "chars"
  })
  console.log(twoColumnSplit)
})




gsap.from(".two-columns-section .h2 .char", {
  scrollTrigger: {
    trigger: ".two-columns-section .h2",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})


window.addEventListener("resize", () => {
  twoColumnlines.forEach(textLine => {
    twoColumnSplit.revert()
    twoColumnSplit = new SplitType(textLine, {
        type: "chars"
    })
    twoColumnSplit.revert()

    
  })
})


// Minimal Carbon

let twoCarbonLines = document.querySelectorAll(".carbon-h2")
let carbonSplit;

twoCarbonLines.forEach(textLine => {
  carbonSplit = new SplitType(textLine, {
      type: "chars"
  })
})




gsap.from(".carbon-h2 .char", {
  scrollTrigger: {
    trigger: ".carbon-h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  twoCarbonLines.forEach(textLine => {
    carbonSplit.revert()
    carbonSplit = new SplitType(textLine, {
        type: "chars"
    })
    carbonSplit.revert()

    
  })
})

let sundayTextLines = document.querySelectorAll(".sunday-h2")
let sundaySplit;


sundayTextLines.forEach(textLine => {
  sundaySplit = new SplitType(textLine, {
      type: "chars"
  })
})

gsap.from(".sunday-h2 .char", {
  scrollTrigger: {
    trigger: ".sunday-h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  sundaySplit.revert()
  sundayTextLines.forEach(textLine => {
    sundaySplit = new SplitType(textLine, {
    type: "chars"
})
sundaySplit.revert()
  })    
})

let quoteTextLines = document.querySelectorAll(".quote-h2")
let quoteSplit;


quoteTextLines.forEach(textLine => {
  quoteSplit = new SplitType(textLine, {
      type: "chars"
  })
})

gsap.from(".quote-h2 .char", {
  scrollTrigger: {
    trigger: ".quote-h2 .char",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=350px"
  },
yPercent: -220,
stagger: 0.05,
duration:0.75,
delay:0.3,
ease:
Power1.ease,

})

window.addEventListener("resize", () => {
  quoteSplit.revert()
  quoteTextLines.forEach(textLine => {
    quoteSplit = new SplitType(textLine, {
    type: "chars"
})
quoteSplit.revert()
  })    
})