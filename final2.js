// Function to check if an element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in effect on scroll
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Initial check for fade-in elements
handleScroll();

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Function to fetch unique ID from the URL and update the prize pool section
