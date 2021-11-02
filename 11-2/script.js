//querySelector 
//querySelectorAll 
//input has value
//innerHTML to add html to DOM

document.querySelector('h1').style.color = 'magenta'

// document.querySelector('h1').addEventListener('mouseover', (event) => {
//     console.log(event)
// })

document.querySelector('h1').onclick = function (e) {
    document.querySelector('h1').style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`//"#" + ((1 << 24) * Math.random() | 0).toString(16)
    //Alternatives
    //this.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`//"#" + ((1 << 24) * Math.random() | 0).toString(16)
    //e.target.style.color = 'purple'
    document.querySelector(`#theList`).innerHTML += `<li> <h3>cool</h3><button>Remove</button></li>`
    wireButtons()
}


// function wireButtons() {
//     let allButtons = document.querySelectorAll('#theList button')
//     for (let button of allButtons) {
//         button.onclick = function (e) {
//             e.target.parentElement.remove()
//         }
//     }
// }


function wireButtons() {
    let allLis = document.querySelectorAll('#theList li')
    for (let li of allLis) {
        li.querySelector('button').onclick = function (e) {
            li.remove()
        }
    }
}

wireButtons()





// document.querySelectorAll('#theList button')[2].onclick = function (e) {
//     document.querySelectorAll('#theList li')[2].remove()
// }

// document.querySelector('h1').onmousemove = (e) => {
//     console.log(e)
// }





document.querySelector('#addButton').onclick = function (e) {
    console.log(e.target)
    let text = document.querySelector('#addItem').value
    document.querySelector(`#theList`).innerHTML += `<li> <h3>${text}</h3><button>Remove</button></li>`
    wireButtons()

}


document.querySelectorAll('li')