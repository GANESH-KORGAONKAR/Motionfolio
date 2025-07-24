function cursor() {
  let cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", function (dets) {
    // Move the main cursor slightly offset from the actual mouse position
    cursor.style.left = dets.x - 12 + "px";
    cursor.style.top = dets.y - 12 + "px";
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

let page1h1 = document.querySelector("#page1h1");
let page1h1Text = page1h1.textContent;
let splittedText = page1h1Text.split("");
let halfValue = splittedText.length / 2;
let clutter = "";

// splittedText.forEach((element, idx) => {
//     if (idx < halfValue) {
//         clutter += `<span class="a">${element}</span>`;
//     }else{
//         clutter += `<span class="b">${element}</span>`;
//     }

// });

// loop through each character and wrap in span with class a or b
splittedText.forEach((element, idx) => {
  // Replace space character with &nbsp; to preserve spacing
  let char = element === " " ? "&nbsp;" : element;

  if (idx < halfValue) {
    clutter += `<span class="a">${char}</span>`;
  } else {
    clutter += `<span class="b">${char}</span>`;
  }
});

page1h1.innerHTML = clutter;

gsap.from("#page1h1 .a", {
  y: 100,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
  opacity: 0,
});

gsap.from("#page1h1 .b", {
  y: 100,
  duration: 0.5,
  delay: 0.5,
  stagger: -0.1,
  opacity: 0,
});

cursor();
navAndMenu();
