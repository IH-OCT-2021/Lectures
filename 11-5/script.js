const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = 500
const ctx = canvas.getContext('2d')

const santaImg = new Image()
santaImg.src = `santaIdleLeft.png`

santaImg.src = `santaWalkLeft.png`
santaImg.src = `santaWalk.png`
santaImg.src = `santaIdle.png`
santaImg.onload = () => { }


let counter = 0;
let sx = 0
let keys = {}


let santa = {
    x: 0,
    y: 100,
    w: (santaImg.width / 16) * .5,
    h: santaImg.height * .5,
    direction: 'right',
    frames: 16,
    img: santaImg
}





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
    if (sx >= (santa.img.width - santa.img.width / santa.frames)) {
        sx = 0
    }
    //It it controls the speed of how fast its going through the sheet
    if (counter % 5 === 0) {
        sx += santa.img.width / santa.frames
    }

    //Draws the picture
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    ctx.drawImage(
        santa.img, //img 
        sx,  //sx
        0,  //sy
        santa.img.width / santa.frames, //swidth
        santa.img.height, //sheight
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
        if (key === "ArrowLeft") {
            if (keys[key]) {
                santa.img.src = 'santaWalkLeft.png'
                santa.frames = 13
                santa.x -= 5
                santa.direction = 'left'
            }
        }
        if (key === "ArrowRight") {
            if (keys[key]) {
                santa.img.src = 'santaWalk.png'
                santa.x += 5
                santa.frames = 13
                santa.direction = 'right'
            }
        }

    }
}

window.onkeyup = function (e) {
    keys[e.key] = false;
    if (santa.direction == 'right') {
        santa.img.src = 'santaIdle.png'
        santa.frames = 16

        return
    }
    if (santa.direction == 'left') {
        santa.img.src = 'santaIdleLeft.png'
        santa.frames = 16

        return

    }

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
