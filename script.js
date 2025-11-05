// ===== FADE-IN ANIMATION ON SCROLL =====
// This creates smooth fade-in effects as you scroll through the portfolio

// Create an Intersection Observer to watch when pages come into view
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly early trigger for smoother effect
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class when page scrolls into view
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all portfolio pages
const portfolioPages = document.querySelectorAll('.portfolio-page');
portfolioPages.forEach(page => {
    observer.observe(page);
});


// ===== YOUTUBE HOTSPOT DISCOVERY ANIMATION =====
// Trigger border drawing animation when user scrolls to pages with hotspots

// Track which hotspots have already animated to prevent repeat
const animatedHotspots = new Set();

// Create observer for YouTube hotspot discovery
const hotspotObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const hotspot = entry.target.querySelector('.youtube-hotspot');
            
            // Only animate if this hotspot hasn't been animated yet
            if (hotspot && !animatedHotspots.has(hotspot)) {
                // Wait 2.5 seconds after page comes into view, then animate
                setTimeout(() => {
                    hotspot.classList.add('discover');
                    animatedHotspots.add(hotspot);
                    
                    // Remove discover class after animation completes (2 rotations x 3 seconds = 6 seconds)
                    setTimeout(() => {
                        hotspot.classList.remove('discover');
                    }, 6000);
                }, 2500);
            }
        }
    });
}, {
    threshold: 0.3, // Trigger when 30% of page is visible
    rootMargin: '0px'
});

// Observe pages 6 and 7 which have YouTube hotspots
const page6 = document.querySelector('.portfolio-page[data-page="6"]');
const page7 = document.querySelector('.portfolio-page[data-page="7"]');

if (page6) hotspotObserver.observe(page6);
if (page7) hotspotObserver.observe(page7);


// ===== YOUTUBE MODAL FUNCTIONALITY =====
// Opens YouTube videos in a beautiful modal popup

const modal = document.getElementById('youtube-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const youtubePlayer = document.getElementById('youtube-player');
const hotspots = document.querySelectorAll('.youtube-hotspot');

// Function to open modal with specific video
function openModal(videoId) {
    // Set the YouTube embed URL with autoplay using privacy-enhanced mode
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
    youtubePlayer.src = embedUrl;
    
    // Show modal with animation
    modal.classList.add('active');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    // Remove active class to hide modal
    modal.classList.remove('active');
    
    // Stop video by clearing the iframe src
    youtubePlayer.src = '';
    
    // Re-enable body scrolling
    document.body.style.overflow = '';
}

// Add click listeners to all YouTube hotspots
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const videoId = hotspot.getAttribute('data-video-id');
        openModal(videoId);
    });
    
    // Add keyboard accessibility (Enter/Space to activate)
    hotspot.setAttribute('tabindex', '0');
    hotspot.setAttribute('role', 'button');
    
    hotspot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const videoId = hotspot.getAttribute('data-video-id');
            openModal(videoId);
        }
    });
});

// Close modal when clicking the close button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking the overlay (outside the video)
modalOverlay.addEventListener('click', closeModal);

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});


// ===== SMOOTH PERFORMANCE ENHANCEMENTS =====
// These optimizations make scrolling and animations butter-smooth

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading="lazy" to images for better performance
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.portfolio-page img');
    images.forEach((img, index) => {
        // Load first 2 images immediately, lazy load the rest
        if (index > 1) {
            img.setAttribute('loading', 'lazy');
        }
    });
});


// ===== OPTIONAL: SMOOTH SCROLL TO TOP =====
// Uncomment this section if you want a "scroll to top" button

/*
// Create scroll-to-top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-to-top';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.2s ease;
    z-index: 1000;
    pointer-events: none;
`;
document.body.appendChild(scrollButton);

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
        scrollButton.style.opacity = '1';
        scrollButton.style.pointerEvents = 'all';
    } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.pointerEvents = 'none';
    }
}, 100));

// Scroll to top when clicked
scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
*/

