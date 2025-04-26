console.log("HTD Blog loaded successfully!");
// Hiệu ứng hiện dần phần hero khi load trang
window.addEventListener('load', function () {
    document.getElementById('hero').classList.add('visible');
    startTypingEffect();
});

// Hàm typing effect
function startTypingEffect() {
    const text = "SAP ABAP Developer | Sharing Knowledge | Lifelong Learner";
    const speed = 80; // tốc độ gõ (ms/1 ký tự)
    let i = 0;
    const typingTarget = document.getElementById('typing-text');

    function type() {
        if (i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ScrollReveal hiệu ứng các section
ScrollReveal().reveal('section', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
});
