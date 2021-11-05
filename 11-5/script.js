const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = 500
const ctx = canvas.getContext('2d')

const santaImg = new Image()
santaImg.src = `santaIdleLeft.png`
santaImg.src = `santaIdle.png`
// santaImg.src = `santaWalkLeft.png`
// santaImg.src = `santaWalk.png`
santaImg.onload = () => { }


let counter = 0;
let sx = 0
let keys = {}


let santa = {
    x: 0,
    y: 100,
    w: (santaImg.width / 16) * .5,
    h: santaImg.height * .5,
    direction: 'right'
}

let x = 0
//Game Engine 
function animate() {
    //This causes the loop
    window.requestAnimationFrame(animate)

    // console.log('loop')

    //to counts from 0 to infinity 
    counter++;

    //Clears the canvas ... Flips the page
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Resets sprite so it goes backs to beginning when reaches end. 
    if (sx >= (santaImg.width - santaImg.width / 16)) {
        sx = 0
    }
    //It it controls the speed of how fast its going through the sheet
    if (counter % 5 === 0) {
        sx += santaImg.width / 16
    }

    //Draws the picture
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    ctx.drawImage(
        santaImg, //img 
        sx,  //sx
        0,  //sy
        santaImg.width / 16, //swidth
        santaImg.height, //sheight
        santa.x, //x
        santa.y, //y
        santa.w, //width
        santa.h//height
    )

    // console.log(keys)
    swapSanta()
}

animate()



function swapSanta() {
    for (let key in keys) {
        console.log(key, keys[key])
        if (key === "ArrowLeft" && keys[key]) { //If he is running 
            if (santa.direction == 'right') {
                santaImg.src = 'santaIdleLeft.png'
                santa.direction = 'left'
            }
            santa.x -= 5
        }

        if (key === "ArrowRight" && keys[key]) {//if he is running 
            if (santa.direction == 'left') {
                santaImg.src = 'santaIdle.png'
                santa.direction = 'right'
            }
            santa.x += 5
        }
    }
}

// window.onkeydown = function (e) {
//     switch (e.key) {
//         case 'ArrowUp':
//             break;
//         case 'ArrowLeft':
//             if(keys['left']){
//                 santa.direction == 'right' ? santaImg.src = 'santaIdleLeft.png' : null

//             } else {

//                 santa.direction == 'right' ? santaImg.src = 'santaIdleLeft.png' : null
//             }
//             santa.direction = 'left'
//             santa.x -= 5
//             break;
//         case 'ArrowRight':
//             santa.direction == 'left' ? santaImg.src = 'santaIdle.png' : null
//             santa.direction = 'right'
//             santa.x += 5
//             break;
//         case 'ArrowDown':
//             break;
//     }
// }


window.onkeyup = function (e) {
    keys[e.key] = false;
}

window.onkeydown = function (e) {
    keys[e.key] = true;
};









// class Santa {
//     constructor(x,y,src){
//         this.x = x
//         this.y = y
//         this.src = src
//         this.image = new Image() 
//     }

// } 
