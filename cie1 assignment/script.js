// script.js

// Function to extract cake name from URL
function getCakeName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cake');
}

// Function to update the cake details
function updateCakeDetails(cakeName) {
    const cakeDetails = {
        "birthday-cake": {
            name: "Birthday Cake",
            image: "cake1.jpeg",
            description: "Celebrate every birthday with a cake that’s as unique as the person you're honoring. From classic flavors like chocolate and vanilla to fun, themed designs featuring favorite characters, hobbies, or colors, our birthday cakes are crafted to make the day extra special. Personalize it with a name, age, or message, and choose from buttercream or fondant finishes for a cake that looks just as amazing as it tastes!"
        },
        "wedding-cake": {
            name: "Wedding Cake",
            image: "wedidingcake.jpg",
            description: "Our wedding cakes are designed to be the centerpiece of your special day. With elegant, multi-tiered designs, delicate floral accents, and luxurious flavors like red velvet, almond, or champagne, we create cakes that reflect your unique love story. Customization options include intricate lace patterns, fresh flowers, and personalized cake toppers to match your wedding theme and vision."
        },
        "custom-cake": {
            name: "Custom Cake",
            image: "custom.jpg",
            description: "Make any event unforgettable with a custom cake tailored to your exact preferences. Whether it’s for a corporate event, baby shower, or anniversary, we offer complete creative freedom in flavors, design, and decorations. From fun novelty shapes to sleek and sophisticated designs, our custom cakes are perfect for making a bold statement or adding a personal touch to any celebration."
        }
    };

    return cakeDetails[cakeName];
}

// Add to Cart functionality
const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const cakeName = getCakeName();
    const details = updateCakeDetails(cakeName);

    if (details) {
        document.getElementById("cake-name").textContent = details.name;
        document.getElementById("cake-image").src = details.image;
        document.getElementById("cake-description").textContent = details.description;
    }

    document.getElementById("add-to-cart").addEventListener("click", () => {
        const selectedFlavor = document.getElementById("flavor").value;
        const selectedSize = document.getElementById("size").value;

        const cake = {
            name: details.name,
            flavor: selectedFlavor,
            size: selectedSize
        };

        cart.push(cake);
        alert(`${cake.name} added to cart!`);
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    // Create a new testimonial element
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    
    // Add the testimonial content
    newTestimonial.innerHTML = `<strong>${name}</strong><p>${review}</p>`;
    
    // Append the new testimonial to the testimonials container
    document.getElementById('testimonials-container').appendChild(newTestimonial);
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});


