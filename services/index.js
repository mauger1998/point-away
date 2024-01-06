//Loading Animations

const h1 = document.querySelector('h1')

gsap.to(h1, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
})
gsap.to('main .wrapper p', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    delay: 0.25,
})
gsap.to('main .wrapper button', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    delay: 0.35,
})

// Dropdown
document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// CMS

let URL =
    'https://wimgb4h5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22servicesPageServices%22+%5D+%7C+order%28order%29+%7B%0A++%22imgUrl%22%3A+serviceImage.asset-%3Eurl%2C%0A++servicesName%2C%0A++order%2C%0A%7D'

// fetch the content
fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        const fullServicesGrid = document.querySelector('.full-services-grid')
        if (result.length > 0) {
            fullServicesGrid.innerHTML = ''

            result.forEach((result) => {
                const fullServiceGridItem = document.createElement('div')
                fullServiceGridItem.classList.add('full-services-grid-item')
                fullServicesGrid.appendChild(fullServiceGridItem)
                const serviceImage = document.createElement('img')
                serviceImage.src = result.imgUrl
                fullServiceGridItem.appendChild(serviceImage)

                const serviceName = document.createElement('h3')
                serviceName.textContent = result.servicesName
                fullServiceGridItem.appendChild(serviceName)
            })
        }
    })
    .catch((err) => console.error(err))
