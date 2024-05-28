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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// header scroll color
document.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    const homeSection = document.getElementById("Home");
    const servicesSection = document.getElementById("Services");
    const aboutSection = document.getElementById("About");
    const gallerySection = document.getElementById("Gallery");

    const homeTop = homeSection.getBoundingClientRect().top;
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const galleryTop = gallerySection.getBoundingClientRect().top;

    if (homeTop <= 0 && homeTop + homeSection.offsetHeight > 0) {
        header.classList.add("bg-accent-200");
        header.classList.remove("bg-blue-500", "bg-green-500", "bg-yellow-500");
    } else if (servicesTop <= 0 && servicesTop + servicesSection.offsetHeight > 0) {
        header.classList.add("bg-black");
        header.classList.remove("bg-accent-200", "bg-green-500", "bg-yellow-500");
    } else if (aboutTop <= 0 && aboutTop + aboutSection.offsetHeight > 0) {
        header.classList.add("bg-green-500");
        header.classList.remove("bg-accent-200", "bg-blue-500", "bg-yellow-500");
    } else if (galleryTop <= 0 && galleryTop + gallerySection.offsetHeight > 0) {
        header.classList.add("bg-yellow-500");
        header.classList.remove("bg-accent-200", "bg-blue-500", "bg-green-500");
    }
});
  // for button change

  document.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    const contactButton = document.getElementById("contact-button");
    const homeSection = document.getElementById("Home");
    const servicesSection = document.getElementById("Services");
    const aboutSection = document.getElementById("About");
    const gallerySection = document.getElementById("Gallery");

    const homeTop = homeSection.getBoundingClientRect().top;
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const galleryTop = gallerySection.getBoundingClientRect().top;

    if (homeTop <= 0 && homeTop + homeSection.offsetHeight > 0) {
        header.classList.add("bg-accent-200");
        header.classList.remove("bg-accent-500", "bg-green-500", "bg-yellow-500");
        contactButton.classList.add("bg-accent-500");
        contactButton.classList.remove("bg-accent-700", "bg-green-700", "bg-yellow-700");
    } else if (servicesTop <= 0 && servicesTop + servicesSection.offsetHeight > 0) {
        header.classList.add("bg-accent-500");
        header.classList.remove("bg-accent-200", "bg-green-500", "bg-yellow-500");
        contactButton.classList.add("bg-accent-700");
        contactButton.classList.remove("bg-accent-500", "bg-green-700", "bg-yellow-700");
    } else if (aboutTop <= 0 && aboutTop + aboutSection.offsetHeight > 0) {
        header.classList.add("bg-green-500");
        header.classList.remove("bg-accent-200", "bg-accent-500", "bg-yellow-500");
        contactButton.classList.add("bg-green-700");
        contactButton.classList.remove("bg-accent-500", "bg-accent-700", "bg-yellow-700");
    } else if (galleryTop <= 0 && galleryTop + gallerySection.offsetHeight > 0) {
        header.classList.add("bg-yellow-500");
        header.classList.remove("bg-accent-200", "bg-accent-500", "bg-green-500");
        contactButton.classList.add("bg-yellow-700");
        contactButton.classList.remove("bg-accent-500", "bg-accent-700", "bg-green-700");
    }
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

  new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 30,
    autoplay: 5000 // Adjust the interval as needed
}).mount();