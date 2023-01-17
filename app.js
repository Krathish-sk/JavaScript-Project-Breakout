const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 50

const userStart = [230,10]
let currentPosition = userStart

const ballStartPosition = [270,30]
let ballCurrentPosition = ballStartPosition

let timerId


//Create Block

class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis+blockWidth,yAxis]
        this.topLeft = [xAxis, blockHeight+yAxis]
        this.topRight = [xAxis+blockWidth, yAxis+blockHeight]
    }
}

// All my blocks 
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210)
]


// Draw all my block
function addBlocks(){
    for(let i=0;i<blocks.length;i++){
    const addBlock = document.createElement('div')
    addBlock.classList.add('block')
    grid.appendChild(addBlock)
    addBlock.style.left=blocks[i].bottomLeft[0]+'px'
    addBlock.style.bottom=blocks[i].bottomLeft[1] +'px'
    }
    
}

addBlocks()


// Adding user
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

// Draw the user
function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

// Draw the ball 
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}


//Move user 

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft' :
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10
                drawUser()
            }
            break;
        case 'ArrowRight' :
            if(currentPosition[0] < 560 - blockWidth){
                currentPosition[0] += 10
                drawUser()
             }    
    }
}

document.addEventListener('keydown', moveUser)


// Adding the ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)


// Moving the ball 

function moveBall(){
    ballCurrentPosition[0] += 2
    ballCurrentPosition[1] += 2
    drawBall()
}

timerId = setInterval(moveBall,30)


