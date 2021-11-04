console.log("WELCOME TO CANVAS")

//Selects the element from the html file
const canvas = document.querySelector('canvas')

//Sets the size of the element aka canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//Something we have to do
const ctx = canvas.getContext("2d")

//Initializes our hero 
let hero = {
    x: 0,
    y: 0,
    w: 150,
    h: 150
}


let hulk = new Image()
hulk.src = 'https://i.pinimg.com/originals/d7/85/9a/d7859a2b7f23a50f5d41181736ddf037.png'
hulk.onload = () => {
    ctx.drawImage(hulk, 0, 0, 150, 150)
}


//Listening to you pressing your arrow keys
window.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            //Moves hero up
            hero.y -= 10
            break;

        case 'ArrowDown':
            hero.y += 10
            break;

        case 'ArrowLeft':
            hero.x -= 10
            break;

        case 'ArrowRight':
            hero.x += 10
            break;
    }
}






// let enemy = {
//     x: canvas.width,
//     y: 300,
//     w: 25,
//     h: 25
// }

// let enemy2 = {
//     x: canvas.width,
//     y: 200,
//     w: 25,
//     h: 25,
// }

// let enemy3 = {
//     x: canvas.width,
//     y: 100,
//     w: 25,
//     h: 25,
// }


//Initializing enemies
const enemies = []
let speed = 0

//Spawing enemies in random place aka adding enemy objects to enemy array
setInterval(() => {
    console.log("add a new enemy", enemies)
    enemies.push({
        x: canvas.width,
        y: Math.random() * canvas.height,
        w: 25,
        h: 25,
        speed: speed
    })
    speed++;
}, 500)



//Lets you cancel your animationFrame
let int;

//Your game engine ... The page turner ... Infinite loop
function animate() {
    int = window.requestAnimationFrame(animate)

    //Clear entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Draw Hero
    ctx.fillStyle = 'red'
    //ctx.fillRect(hero.x, hero.y, hero.w, hero.h) //x, y, w, have
    ctx.drawImage(hulk, hero.x, hero.y, hero.w, hero.h)


    //Draw Enemies
    ctx.fillStyle = 'purple'
    for (let enemy of enemies) { //Draws each enemy one to the left
        ctx.fillRect(enemy.x -= enemy.speed, enemy.y, enemy.w, enemy.h)
        detectCollision(hero, enemy)
    }
    // ctx.fillRect(enemy.x--, enemy.y, enemy.w, enemy.h)
    // ctx.fillRect(enemy2.x--, enemy2.y, enemy2.w, enemy2.h)
    // ctx.fillRect(enemy3.x--, enemy3.y, enemy3.w, enemy3.h)
}

animate()


function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        console.log('collision')
        window.cancelAnimationFrame(int)
        // window.location.reload()
    }
    // collision detected!
}