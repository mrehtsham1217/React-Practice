const start = document.querySelector("#start")

const stop = document.querySelector("#stop")

let IntervalId;
const sayHi = (() => {
    console.log("Ehtsham",Math.floor(Math.random() * 100+1))
})

// setInterval(sayHi,1000)

start.addEventListener("click", () => {
    IntervalId=setInterval(sayHi,1000)
})

stop.addEventListener("click", () => {
    clearInterval(IntervalId)
})

