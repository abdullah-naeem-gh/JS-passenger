let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    let prevENT = count + " - "
    saveEl.textContent += prevENT
    count = 0
    countEL.textContent = count

}



