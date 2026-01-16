
// --- INDEX PAGE SPECIFIC LOGIC ---

// --- TYPING ANIMATION ---
class TypeWriter {
    constructor(element, text, loop = true) {
        this.element = element;
        this.fullText = text;
        this.loop = loop;
        this.currentText = text;
        this.isDeleting = true; // Start by deleting existing text
        this.speed = 50;
        this.delay = 2000; // Wait before typing/deleting

        this.tick();
    }

    tick() {
        let typeSpeed = this.speed;

        if (this.isDeleting) {
            this.currentText = this.fullText.substring(0, this.currentText.length - 1);
            typeSpeed /= 2; // Delete faster
        } else {
            this.currentText = this.fullText.substring(0, this.currentText.length + 1);
        }

        this.element.textContent = this.currentText;

        if (!this.isDeleting && this.currentText === this.fullText) {
            // Finished typing
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            // Finished deleting
            this.isDeleting = false;
            typeSpeed = 500; // Pause before typing
        }

        setTimeout(() => this.tick(), typeSpeed);
    }
}

// Initialize TypeWriter if element exists
const initIndex = () => {
    const typeEl = document.getElementById('typing-text');
    if (typeEl && !typeEl.dataset.typed) { // Prevent double init
        typeEl.dataset.typed = "true";
        new TypeWriter(typeEl, "Join the Robotics Club of NIT Patna. We build, code, and innovate the machines of tomorrow.");
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndex);
} else {
    initIndex();
}
