function sayYes() {
    document.getElementById('proposalText').innerText = "hehehe mwa ❤️";
    document.getElementById('subText').innerText = "dapat lang hahaha";
    document.getElementById('valentineGif').src = "https://media.giphy.com/media/Xv0aLD5YZyLvI2l4ts/giphy.gif";
    
    // Hide the buttons
    document.getElementById('buttons').style.display = "none";
}

function moveNo(button) {
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
