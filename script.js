const images = [
    {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: 'https://unsplash.com/photos/1506744038136-46273834b3fb'
    },
    {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: 'https://unsplash.com/photos/1501785888041-af3ef285b470'
    },
    {
        url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: 'https://unsplash.com/photos/1447752875215-b2761acb3c5d'
    },
    {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: 'https://unsplash.com/photos/1470071459604-3b5ec3a7fe05'
    }
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const sliderLink = document.getElementById('slider-link');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the image and link displayed
function updateImage() {
    sliderImage.src = images[currentIndex].url;
    sliderLink.href = images[currentIndex].link;
    
    // Disable previous button if at first image
    prevButton.disabled = currentIndex === 0;
    // Disable next button if at last image
    nextButton.disabled = currentIndex === images.length - 1;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize the slider with the first image
updateImage();

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevButton.click();
    } else if (e.key === 'ArrowRight') {
        nextButton.click();
    }
});