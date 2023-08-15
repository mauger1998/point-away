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


// let URLTWO = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22ethos%22%5D+"

//   // fetch the content
//   fetch(URLTWO)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     const ethos = document.querySelector(".green-section .wrapper h3")
//     if (result.length > 0) {
      
//         ethos.textContent = result[0].ethos

 
     
      
//     }
//   })
//   .catch((err) => console.error(err));


let URLTHREE = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testimonials%22%5D+%7B%0A++profileImage%2C%0A++name%2C%0A++review%2C%0A++++%22imgUrl%22%3A+profileImage.asset-%3Eurl%0A%7D"

  // fetch the content
  fetch(URLTHREE)
  .then((res) => res.json())
  .then(({ result }) => {
    const testimonialsGrid = document.querySelector(".testimonials-grid")
    if (result.length > 0) {
      testimonialsGrid.innerHTML = ""
      result.forEach((result, index) => {
        const testimonialsCard = document.createElement("div")
        testimonialsCard.classList.add("testimonials-card")
        testimonialsGrid.appendChild(testimonialsCard)

        const profile = document.createElement("div")
        profile.classList.add("profile")

        testimonialsCard.appendChild(profile)

        const profileImage = document.createElement("img")
        profileImage.src = result.imgUrl

        profile.appendChild(profileImage)

        const profileName = document.createElement("p")
        profileName.classList.add("name")
        profileName.textContent = result.name

        profile.appendChild(profileName)

        const review = document.createElement("p")
        review.textContent = result.review
        testimonialsCard.appendChild(review)
      })
      
    }
  })
  .catch((err) => console.error(err));

let URLFOUR = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22featureWallsHome%22%5D+%7B%0A++text%2C%0A++%22topImgUrl%22%3A+imageTopRight.asset-%3Eurl%2C%0A++%22bottomLeftImgUrl%22%3A+imageBottomLeft.asset-%3Eurl%2C%0A++%22bottomRightImgUrl%22%3A+imageBottomRight.asset-%3Eurl%2C%0A++%0A%7D"

  // fetch the content
  fetch(URLFOUR)
  .then((res) => res.json())
  .then(({ result }) => {
    const featureGrid = document.querySelector(".feature-walls-section .wrapper")
    const featureText = document.querySelector("#edit-text")
    const featureTopRight = document.querySelector("#top-right")
    const featureBottomLeft = document.querySelector("#bottom-left")
    const featureBottomRight = document.querySelector("#bottom-right")

    featureText.textContent = result[0].text
    featureTopRight.src = result[0].topImgUrl
    featureBottomLeft.src = result[0].bottomLeftImgUrl
    featureBottomRight.src = result[0].bottomRightImgUrl
   
  })
  .catch((err) => console.error(err));

let URLFIVE = "https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22agriculturalImages%22%5D+%7B%0A++%22imgUrlOne%22%3A+imageOne.asset-%3Eurl%2C%0A++%22imgUrlTwo%22%3A+imageTwo.asset-%3Eurl%2C%0A%7D"

  // fetch the content
  fetch(URLFIVE)
  .then((res) => res.json())
  .then(({ result }) => {
    const agImageOne = document.querySelector(".boards-images img:nth-child(1)")
    const agImageTwo = document.querySelector(".boards-images img:nth-child(2)")

    agImageOne.src = result[0].imgUrlOne
    agImageTwo.src = result[0].imgUrlTwo
   
   
  })
  .catch((err) => console.error(err));
