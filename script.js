const button = document.getElementById('dodge-btn');

// This function handles the actual dodging logic
function dodge() {
    // Calculate random position percentages (keeping it safely away from screen edges)
    const randomX = Math.floor(Math.random() * 70) + 15;
    const randomY = Math.floor(Math.random() * 70) + 15;
    
    // Teleport the button
    button.style.left = randomX + '%';
    button.style.top = randomY + '%';
    button.style.transform = 'none';
    
    // TROLL UPGRADE: Change the text temporarily to taunt them
    button.innerText = "Too Slow! 😜";
    
    // Reset the text back after half a second
    setTimeout(() => {
        button.innerText = "Click Me!";
    }, 600);
}

// 1. For Computers: Run dodge when the mouse hovers over it
button.addEventListener('mouseover', dodge);

// 2. For Mobile Phones: Run dodge the instant a finger touches it
button.addEventListener('touchstart', function(e) {
    e.preventDefault(); // CRITICAL: Stops the phone from triggering a regular click!
    dodge();
});

// 3. Cheating Catch: Handles keyboard cheaters or extreme speed
button.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Impossible! You actually caught it! but since you did, it shows that you tried, or atleast you cared and attempted to click it. So, here's a cookie 🍪 for you! also, if you actually did it, then message uhuh with the sparkle and hand waving emojis!");
});
