let dropTwo = document.getElementById("dropTwo");
let dropOne = document.getElementById("dropOne");
let bars = document.getElementById("bars")
let menuLeft = document.getElementById("menuLeft")
let closemenu = document.getElementById("close")
let company = document.getElementById("company")
let features = document.getElementById("features")
let dropnum1 = document.querySelectorAll(".dropnum1")
let dropnum2 = document.querySelectorAll(".dropnum2")

bars.addEventListener("click", () => {
    menuLeft.classList.remove("none")
})

closemenu.addEventListener("click", () => {
    menuLeft.classList.add("none")
})

dropnum1.forEach((ele) => {
    ele.addEventListener("click", () => {
        console.log(ele.parentElement)
        if (ele.parentElement.classList.contains("identifer")) {
            features.classList.toggle("none")
            console.log(ele)
            arrow(features , ele)
        }
        else {
            dropOne.classList.toggle("none")
            arrow(dropOne , ele)
        }
    })
})
dropnum2.forEach((ele) => {
    ele.addEventListener("click", () => {
        console.log(ele.parentElement)
        if (ele.parentElement.classList.contains("identifer")) {
            company.classList.toggle("none")
            arrow(company , ele)
        }
        else {
            dropTwo.classList.toggle("none")
            arrow(dropTwo , ele)
        }
    })
})

function arrow(element , ele) {
    if (element.classList.contains("none")) {
        ele.src = "images/icon-arrow-down.svg"
    }
    else {
        ele.src = "images/icon-arrow-up.svg"
    }
}