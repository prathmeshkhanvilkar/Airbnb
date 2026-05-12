document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.cursor-glow');
    const card = document.getElementById('tiltCard');
    const form = document.getElementById('ultraContactForm');
    const successMsg = document.getElementById('formSuccess');

    // 1. Mouse Follow Glow
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';

        // 2. 3D Card Tilt
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // 3. Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            
            // Revert tilt on success
            card.style.transform = 'rotate(0deg)';
        }, 2000);
    });
});