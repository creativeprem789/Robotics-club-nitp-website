// --- RANDOM CODE BACKGROUND v2 ---
console.log("Robotics Club Common Script Loaded");

const canvas = document.getElementById('bg-canvas');
let ctx;
if (canvas) {
    ctx = canvas.getContext('2d');
}

let width, height;
let codeLines = [];
const fontSize = 14;
const lineHeight = 20;

// Dummy code snippets to simulate a "hacker" or "developer" screen
const codeSnippets = [
    "function init() {",
    "  const data = await fetchData();",
    "  if (!data) return false;",
    "  return data.map(x => x.id);",
    "}",
    "class Robot extends Machine {",
    "  constructor(id) {",
    "    super(id);",
    "    this.status = 'active';",
    "  }",
    "  activate() {",
    "    this.systems.online = true;",
    "  }",
    "}",
    "// Optimizing neural network...",
    "const offset = Math.random() * 100;",
    "import { Engine } from './core';",
    "const MAX_RETRIES = 5;",
    "try {",
    "  connectToMainframe();",
    "} catch (e) {",
    "  console.error('Connection failed');",
    "}",
    "<div><span class='highlight'></span></div>",
    ".container { display: flex; }",
    "git commit -m 'Initial commit'",
    "npm install robotics-core",
    "while(true) { process(); }",
    "const matrix = calculateTrajectory();",
    "if (detectCollision()) { stop(); }",
    "const matrix = calculateTrajectory();",
    "if (detectCollision()) { stop(); }",
];

// Mouse tracking
const mouseParams = { x: null, y: null, radius: 125 };


function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    codeLines = [];

    const colWidth = 300; // Approximate width of a code block
    const cols = Math.ceil(width / colWidth);
    const rows = Math.ceil(height / lineHeight);

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            // Randomly determine if we place a line here to create a "scattered" look
            if (Math.random() > 0.25) {
                codeLines.push({
                    x: c * colWidth + Math.random() * 50, // Slight horizontal offset
                    y: r * lineHeight + Math.random() * 10, // Slight vertical jitter
                    text: getRandomCode(),
                    speed: Math.random() * 0.5 + 0.2,
                    opacity: Math.random() * 0.4 + 0.05 // Faint opacity
                });
            }
        }
    }
}

function getRandomCode() {
    const indent = "  ".repeat(Math.floor(Math.random() * 4));
    return indent + codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
}

function draw() {
    // Clear the main canvas
    ctx.clearRect(0, 0, width, height);

    // 1. Dark Background
    ctx.fillStyle = '#050a14';
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + 'px "Courier New", monospace';
    ctx.textBaseline = 'top';

    for (let i = 0; i < codeLines.length; i++) {
        const line = codeLines[i];
        ctx.fillStyle = `rgba(148, 163, 184, 0.2)`;
        ctx.fillText(line.text, line.x, line.y);

        // Randomly update text
        if (Math.random() > 0.995) {
            line.text = getRandomCode();
        }
    }
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

// Window Events for Canvas
window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => {
    mouseParams.x = e.clientX;
    mouseParams.y = e.clientY;
});
window.addEventListener('mouseout', () => {
    mouseParams.x = null;
    mouseParams.y = null;
});

// Initialize Canvas
if (canvas) {
    init();
    animate();
}

// --- SHARED UI INTERACTIONS ---
const initCommonInteractions = () => {
    // Add 'active' class handling for Dock
    const items = document.querySelectorAll('.dock-item');
    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- GLOBAL SCROLL ANIMATION OBSERVER ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Optional: Stop observing once visible to save resources
                // scrollObserver.unobserve(entry.target); 
            }
            // Removed the else block so elements don't fade out when scrolling up
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.glass-panel');
    scrollElements.forEach(el => scrollObserver.observe(el));
    console.log(`Initialized Scroll Observer on ${scrollElements.length} elements.`);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommonInteractions);
} else {
    initCommonInteractions();
}
