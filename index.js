gsap.from(".logo_container", {
    duration: 1.5,  
    opacity: 0,
    y: -50,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".menu_list", {
    duration: 1.5,  
    opacity: 0,
    y: -20,
    ease: "power3.out",
    stagger: 0.3,  
    delay: 0.7
});

gsap.from(".login_container a", {
    duration: 1.5,  
    opacity: 0,
    y: -20,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1
});

gsap.from(".title_box h1", {
    duration: 1.5,  
    opacity: 0,
    y: -30,
    ease: "power2.out",
    delay: 1.5
});

gsap.from(".title_box p", {
    duration: 1.5,  
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 1.8  
});

gsap.from(".float", {
    duration: 2,  
    opacity: 0,
    scale: 0.5,
    rotation: 360,
    ease: "elastic.out(1, 0.5)",  
    stagger: 0.4,  
    delay: 2.5
});


gsap.from(".main_img", {
    duration: 1.5,  
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 3
});

function updateFloatRotation(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const floats = document.querySelectorAll(".float");

    floats.forEach((float) => {
        const floatRect = float.getBoundingClientRect();
        const floatCenterX = floatRect.left + floatRect.width / 2;
        const floatCenterY = floatRect.top + floatRect.height / 2;

        const deltaX = mouseX - floatCenterX;
        const deltaY = mouseY - floatCenterY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 

        gsap.to(float, {
            rotation: angle,
            duration: 0.5,  
            ease: "power2.out"
        });
    });
}

window.addEventListener("mousemove", updateFloatRotation);


