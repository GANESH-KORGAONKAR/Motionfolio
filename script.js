let nav = document.querySelector("#navbar i")
let cross = document.querySelector("#cross")

let tl = gsap.timeline()

tl.to("#menu", {
    right: 0,
    duration: 0.5
})

tl.from("#menu h3", {
    x : 50,
    duration: 0.5,
    stagger : 0.2,
    opacity : 0
})

tl.from("#cross", {
    opacity : 0
})

tl.pause()

nav.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})

