//Selectors
const divs = document.querySelectorAll('.field')
const fields = Array.from(document.querySelectorAll(".field"));
// const bottomFieldsSlice = fields.slice(Math.max(fields.length - 20, 10));
// const bottomFields10 = fields - bottomFieldsSlice;
// console.log(bottomFieldsSlice)
// bottomFieldsSlice.map((el)=>el.style.backgroundColor = 'blue')
// console.log('this is:'+bottomFields10)
const colors = ["red", "blue", "green", "red", "yellow", "orange"];
// let widths = [181,182,18,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200];
let scoreDisplay = document.querySelector('.score');
const width = 10;

let shapeL = [[0, 10, 20, 21],[2,10,11,12],[1, 2, 12, 22],[1,2,3,11]];
let shapeI = [[0,10,20,30,],[0,1,2,3],[0,10,20,30],[0,1,2,3]];
let shapeZ = [[0,1,11,12], [1,10,11,20],[0,1,11,12],[1,10,11,20]];
let shapeZy = [[1,2,10,11],[1,11,12,22],[1,2,10,11],[1,11,12,22]];
let shapeT = [[0,1,2,11],[1,10,11,21], [1,10,11,12],[1,11,12,21]]

//
const shapes = [shapeL, shapeI, shapeZ, shapeZy, shapeT]
// let drawShape = shapeOne.forEach(element => draw(element));

// 


let currentPosition = 4;
let currentRotation = 0;
let speed = 300;
// speed = 1000;
// speed = 100000;
let random = Math.floor(Math.random()*shapes.length);
randomColor = colors[Math.floor(Math.random()*colors.length)];
let currentShape = shapes[random][currentRotation];



function draw() {
    // currentShape.forEach(element => fields[element+currentPosition].style.background = "blue")
    currentShape.map(index=> fields[currentPosition +index].style.backgroundColor = randomColor)
}
function undraw() {
    currentShape.forEach(element => fields[element+currentPosition].style.background = "")
}

function freeze() {
    if (currentShape.some(index=> fields[currentPosition + index + 10].classList.contains('taken'))) {
        currentShape.forEach(element=> fields[currentPosition + element].classList.add('taken'));
        nextRandom = Math.floor(Math.random()*shapes.length);
        nextRandomColor = colors[Math.floor(Math.random()*colors.length)];
        random = nextRandom;
        randomColor = nextRandomColor;
        currentShape = shapes[random][currentRotation];
        currentPosition = 4;
    }
}




let game = setInterval(() => {
    undraw();
    currentPosition +=10;
    draw();
    freeze();
    // addScore();
    gameover();
}, speed);

function moveLeft() {
    undraw()
    const isAtLeftEdge = currentShape.some(index => (currentPosition + index) % 10 === 0)
    if(!isAtLeftEdge) currentPosition -=1
    if(currentShape.some(index => fields[currentPosition + index].classList.contains('taken'))) {
      currentPosition +=1
    }
    draw()
  }

  function moveRight() {
    undraw()
    const isAtRightEdge = currentShape.some(index => (currentPosition + index) % 10 === 10 -1)
    if(!isAtRightEdge) currentPosition +=1
    if(currentShape.some(index => fields[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
    draw()
  }

function rotate() {
    undraw()
    currentRotation +=1
    if(currentRotation === 4) { //if the current rotation gets to 4, make it go back to 0
      currentRotation = 0
      currentShape = shapes[random][currentRotation];
    }
    currentShape = shapes[random][currentRotation];
    console.log(currentRotation)
    draw()
}

function moveDown() {
    undraw()
    currentPosition += 10
    draw()
    freeze()
  }

function control(e) {
    if(e.keyCode === 37) {
        // console.log('left')
      moveLeft()
    } else if (e.keyCode === 32) {
      rotate()
    } else if (e.keyCode === 39) {
        // console.log('right')
      moveRight()
    } else if (e.keyCode === 40) {
      moveDown()
    }
}

function fullLine() {
    // if (fields[])
    
}

document.addEventListener('keydown', control)

let score = 0;
// function addScore() {
//     for (let i = 0; i < 199; i +=width) {
//       const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

//       if(row.every(index => fields[index].classList.contains('taken'))) {
//         score +=10
//         scoreDisplay.innerHTML = 'Your score: '+score
//         row.forEach(index => {
//           fields[index].classList.remove('taken')
//           fields[index].style.backgroundColor = ''
//         })
//         const squaresRemoved = fields.splice(i, width)
//         fields = squaresRemoved.concat(fields)
//         fields.forEach(cell => grid.appendChild(cell))
//       }
//     }
//   }

function gameover() {
    if(currentShape.some(index=> fields[currentPosition +index].classList.contains('taken'))) {
        alertos()
        clearInterval(game)
    }
}
let gameoverText = document.querySelector('.gameover');
function alertos() {
    gameoverText.style.display = "flex"
    gameoverText.innerHTML = "Game over"
}

// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
// ---------------------------
// function() 
