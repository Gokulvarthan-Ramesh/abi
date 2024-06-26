document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }
    
    function scrollToSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const targetOffset = targetSection.offsetTop;
            const duration = 1000; // Adjust the duration as needed (in milliseconds)
            const startTime = performance.now();
            const startScroll = window.pageYOffset || document.documentElement.scrollTop;
            const distance = targetOffset - startScroll;
            
            function scrollStep(timestamp) {
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const easeInOutCubic = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                window.scrollTo(0, startScroll + distance * easeInOutCubic);
                
                if (progress < 1) {
                    requestAnimationFrame(scrollStep);
                }
            }
            
            requestAnimationFrame(scrollStep);
        }
    }
});
 

// for button

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function addAnimation() {
    const element = document.querySelector('.fade-out');
    if (!isInViewport(element)) {
        element.classList.add('hide');
    } else {
        element.classList.remove('hide');
    }
}

// Add scroll event listener
window.addEventListener('scroll', addAnimation);

// Initial check on page load
addAnimation();


//service scroll right

document.addEventListener("DOMContentLoaded", function() {
    const headerLinks = document.querySelectorAll("#header a[href^='#']");
    
    headerLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetOffset - startPosition;
                const duration = 1000; // Adjust duration as needed (in milliseconds)
                const startTime = performance.now();
                
                function scrollStep(timestamp) {
                    const elapsedTime = timestamp - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    window.scrollTo(0, startPosition + distance * progress);
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(scrollStep);
                    }
                }
                
                window.requestAnimationFrame(scrollStep);
            }
        });
    });
});

// // header scroll color
document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const sections = [
        { id: "Home", classList: ["bg-black"], exclude: ["bg-accent-200", "bg-accent-500", "bg-green-500", "bg-yellow-500"] },
        { id: "Services", classList: ["bg-black"], exclude: ["bg-accent-200", "bg-accent-500", "bg-green-500"] },
        { id: "About", classList: ["bg-black"], exclude: ["bg-accent-200", "bg-accent-500", "bg-green-500", "bg-yellow-500"] },
        { id: "Testimonials", classList: ["bg-black"], exclude: ["bg-accent-200", "bg-accent-500", "bg-green-500", "bg-yellow-500"] },
        { id: "Gallery", classList: ["bg-black"], exclude: ["bg-accent-200", "bg-accent-500", "bg-green-500"] }
    ];

    sections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        const sectionTop = sectionElement.getBoundingClientRect().top;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (sectionTop <= 0 && sectionBottom > 0) {
            header.classList.add(...section.classList);
            header.classList.remove(...section.exclude);
        }
    });
});




// text top to aactual 
document.addEventListener('DOMContentLoaded', function() {
    const animateOnVisible = document.querySelectorAll('.animate-on-visible');

    function checkAnimation() {
      animateOnVisible.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          element.classList.add('animated');
        }
      });
    }

    window.addEventListener('scroll', checkAnimation);
    window.addEventListener('resize', checkAnimation);
    checkAnimation();  });
//fadein 1 src
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('fade-in');
      } else {
        element.classList.remove('fade-in');
      }
    });
  });

  //carosal


// 
function filterImages(category) {
    // First, hide all images
    var allImages = document.querySelectorAll('#imageContainer img');
    allImages.forEach(function(img) {
        img.style.display = 'none';
    });

    // Then, show only the images with the specified category
    var filteredImages = document.querySelectorAll('#imageContainer img.' + category);
    filteredImages.forEach(function(img) {
        img.style.display = 'block';
    });
}


    



document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to toggle the mobile menu when the navbar-toggler button is clicked
    document.getElementById("navbar-toggler").addEventListener("click", function() {
        var mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    });

    // Add event listeners to each menu item to close the mobile menu when clicked
    var menuItems = document.querySelectorAll("#mobile-menu ul li a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.add("hidden");
        });
    });

    // Add event listener to close the mobile menu when the contact button is clicked (assuming you also want to close it when the contact button is clicked)
    document.getElementById("contact-button-mobile").addEventListener("click", function() {
        var mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.add("hidden");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        autoplay: true,
        animationDuration: 4000,
        perView: 1,
        breakpoints: {
            768: { perView: 1 },
            1024: { perView: 2 },
            1280: { perView: 2 },
            1536: { perView: 2 }
        },
        pagination: {
            el: '.glide__bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.glide__arrow--right',
            prevEl: '.glide__arrow--left'
        }
    }).mount();
});

// const images = ['assests/images/clientimages/c1.jpg', 'img/testimonials/testimonials2.jpg', 'img/testimonials/testimonials3.jpg'];
// let currentIndex = 0;

// function changeBackground() {
//     const section = document.getElementById('Testimonials');
//     section.style.backgroundImage = `url('${images[currentIndex]}')`;
//     currentIndex = (currentIndex + 1) % images.length;
// }

// changeBackground();

// setInterval(changeBackground, 500 * 1000);