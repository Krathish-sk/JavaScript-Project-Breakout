const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 50
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
