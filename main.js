// // DOM - document object model - объектная модель документа
//
// // Selectors
// const buttonSelector = ".button"
// const inputNameSelector = ".input-name"
// const resultSelector = ".result"
//
// // Elements
// const $button = document.querySelector(buttonSelector)
// const $inputName = document.querySelector(inputNameSelector)
// const $result = document.querySelector(resultSelector)
//
// // Logics
// function sayHello() {
//     const message = "Привет, " + $inputName.value
//     $result.innerHTML = message
// }
//
// // Events
// $button.addEventListener('click', sayHello)
//
//
//
// const chessSelector = ".chess"
// const $chess = document.querySelector(chessSelector)
//
// function chess(num) {
//
//     const blackBlock = `<div class="black-block"></div>`
//     const whiteBlock = `<div class="white-block"></div>`
//
//     $chess.innerHTML = ''
//
//     let col = num
//     let row = num
//
//     let rowContent = ''
//
//     for (let i = 1; i <= row; i++) {
//         rowContent = '<div class="row">'
//
//         for (let j = 1; j <= col; j++) {
//             if (i % 2 == 0) {
//                 if (j % 2 == 0) {
//                     rowContent += blackBlock
//                 } else {
//                     rowContent += whiteBlock
//                 }
//             } else {
//                 if (j % 2 == 0) {
//                     rowContent += whiteBlock
//                 } else {
//                     rowContent += blackBlock
//                 }
//             }
//         }
//
//         $chess.innerHTML += rowContent + '</div>'
//     }
//
// }


const buttonSelector = ".equally"
const resultSelector = ".result"
const firstSelector = ".first"
const secondSelector = ".second"
const thirdSelector = ".third"

const $button = document.querySelector(buttonSelector)
let $result = document.querySelector(resultSelector)
let $first = document.querySelector(firstSelector)
let $second = document.querySelector(secondSelector)
let $third = document.querySelector(thirdSelector)

function sayAnswer(a, b) {

    // Преобразование в Number
    a = a * 1
    b = b * 1

    if ($third.value === "+") {
        return a + b
    } else if ($third.value === "-") {
        return a - b
    } else if ($third.value === "*") {
        return a * b
    } else if ($third.value === "/") {
        return a / b
    }

}


function setError(message) {
    $result.innerHTML = message
    $result.classList.add("error")
}

function clearError() {
    $result.innerHTML = ""
    $result.classList.remove("error")
}

function check() {

    if ($first.value.length === 0 || $second.value.length === 0 || $third.value.length === 0) {
        setError("Данные отсутствуют")
        return false
    }

    if (isNaN($first.value * 1) && isNaN($second.value * 1)) {
        setError("Данные введены неправильно")
        return false
    }

    if ($third.value !== '+' && $third.value !== '-' && $third.value !== '/' && $third.value !== '*') {
        setError("Оператор введён неправильно")
        return false
    }



    return true
}

/*
*
* Если
*
* */

$button.addEventListener('click', function() {
    if (check()) {
        clearError()
        let answer = sayAnswer($first.value, $second.value)
        $result.innerHTML = answer
    }
})




