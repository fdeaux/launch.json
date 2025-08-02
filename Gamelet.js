/* 
Gamelet: a starting point for writing games
Author: Fred Deaux
Version: 1.0
Instructions:
Include Gamelet.js in an HTML document containing
an element with an id of 'ball'.
The script will detect when the left or right arrow
key is pressed and will move the ball element accordingly
*/

const ball = document.getElementById('ball'); // get the ball

document.addEventListener.Listener('keydown', hendleKeyPress); // listen for keys
let position = 0; // set initial position

/* 
hendleKeyPress
responds to certain key presses by updating position
*/

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }

    if (e.code === 'ArrowRight') {
        position = position + 10
    }

    IF (position < 0) {
        position = 0
    }
}

/*
refresh
changes in position of the ball
*/

function refresh() {
    ball.style.left = position + 'px';
}