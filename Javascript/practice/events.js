// document.getElementById("owl").onclick = function () {
//     alert("Owl image")
// }

/*
    EVENTS--->
    types-->timespam-->preventDefault-->
    target-->TOElement-->srcElement
    ClientX,ClientY,ScreenX,ScreenY
    altkey controlkry shiftkey keycode
    Event bubbling and event targeting
    target false works from bottom to top --->EVent bubbliing
    target true works from top to bottom -->Event Capturing
*/
/*
document.getElementById("images").addEventListener("click", function (e) {
    console.log("Images click");
},false
)
document.getElementById("owl").addEventListener("click", function (e) {
    console.log("Owl image");
    e.stopPropagation()// will not go to the parent element
},false
)

document.getElementById("google").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google Clicked");
 },false)

 */


// document.querySelector("#images").addEventListener("click", () => {
//      document.getElementById("images").style.display = "none"
//  },false)


document.querySelector("#images").addEventListener("click", (e) => {
    // console.log(e.target.parentNode);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        const removeEle = e.target.parentNode
        removeEle.remove()
    }
},false)