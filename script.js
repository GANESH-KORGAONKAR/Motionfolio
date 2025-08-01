function cursor() {
  let cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", function (dets) {
    // Move the main cursor slightly offset from the actual mouse position
    cursor.style.left = dets.x - 12 + "px";
    cursor.style.top = dets.y - 12 + "px";
  });
}

function navh1() {
  let page1h1 = document.querySelector("#navbarh1");
  let navbarh1Text = navbarh1.textContent;
  let splittedWords = navbarh1Text.split(" "); 
  let clutter = "";

  // Wrap each word in a span and add a space after it
  splittedWords.forEach((word) => {
    clutter += `<span class="word">${word}&nbsp;</span>`;
  });

  page1h1.innerHTML = clutter;

  // Animate each word from left to right
  gsap.from("#navbarh1 .word", {
    x: -150, 
    opacity: 0, // fade in
    duration: 0.8, // animation speed for each word
    stagger: 0.4, // delay between words
    ease: "power2.out",
  });
}

function navAndMenu() {
  let nav = document.querySelector("#navbar i");
  let cross = document.querySelector("#cross");

  let tl = gsap.timeline();

  tl.to("#menu", {
    right: 0,
    duration: 0.5,
  });

  tl.from("#menu h3", {
    x: 100,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
  });

  tl.from("#cross", {
    opacity: 0,
  });

  tl.pause();

  nav.addEventListener("click", function () {
    tl.play();
  });

  nav.addEventListener("dblclick", function () {
    tl.reverse();
  });

  cross.addEventListener("click", function () {
    tl.reverse();
  });
}



cursor();
navh1();
navAndMenu();
