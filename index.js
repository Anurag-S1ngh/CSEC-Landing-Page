// Animating header elements
gsap.from(".logo_container", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: -50,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".menu_list", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: -20,
    ease: "power3.out",
    stagger: 0.3,  // Increased stagger time
    delay: 0.7
});

gsap.from(".login_container a", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: -20,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1
});

// Animating the home section title and text
gsap.from(".title_box h1", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: -30,
    ease: "power2.out",
    delay: 1.5
});

gsap.from(".title_box p", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 1.8  // Adjusted delay for smoother transition
});

// Button animations
gsap.from(".buttons button", {
    duration: 1.5,  // Increased duration
    y: 30,
    ease: "power2.out",
    stagger: 0.3,  // Increased stagger time
    delay: 2
});

// Floating icons animation
gsap.from(".float", {
    duration: 2,  // Increased duration
    opacity: 0,
    scale: 0.5,
    rotation: 360,
    ease: "elastic.out(1, 0.5)",  // Adjusted elasticity
    stagger: 0.4,  // Increased stagger time
    delay: 2.5
});

// Main image animation
gsap.from(".main_img", {
    duration: 1.5,  // Increased duration
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 3
});


// Function to update the rotation of the floating icons
function updateFloatRotation(e) {
    // Get the mouse position relative to the viewport
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get all float elements
    const floats = document.querySelectorAll(".float");

    // Loop through each float element
    floats.forEach((float) => {
        // Get the center of the float element
        const floatRect = float.getBoundingClientRect();
        const floatCenterX = floatRect.left + floatRect.width / 2;
        const floatCenterY = floatRect.top + floatRect.height / 2;

        // Calculate the angle based on mouse position
        const deltaX = mouseX - floatCenterX;
        const deltaY = mouseY - floatCenterY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert to degrees

        // Apply the rotation using GSAP
        gsap.to(float, {
            rotation: angle,
            duration: 0.5,  // Duration for smoothness
            ease: "power2.out"
        });
    });
}

// Event listener for mouse movement
window.addEventListener("mousemove", updateFloatRotation);


