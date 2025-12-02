const lightBtn = document.querySelector(".light");
const darkBtn  = document.querySelector(".dark");
const gamerBtn = document.querySelector(".lightc");
const chillBtn = document.querySelector(".darkc");
const body     = document.querySelector("body");
const card = document.querySelectorAll(".card");
const StyleClass = [
  "lightMode",
  "darkMode",
  "gamerMode",
  "chillMode"
]

lightBtn.addEventListener("click", () => {
  body.className = "lightMode";
  card.forEach(c=>{
    for(let i = 0; i < 4; i++){
      c.classList.remove(StyleClass[i])
    }
    c.classList.add("lightMode")
  })
});

darkBtn.addEventListener("click", () => {
  body.className = "darkMode";
  card.forEach(c=>{
    for(let i = 0; i < 4; i++){
      c.classList.remove(StyleClass[i])
    }
    c.classList.add("darkMode")
  })
});

gamerBtn.addEventListener("click", () => {
  body.className = "gamerMode";
  card.forEach(c=>{
    for(let i = 0; i < 4; i++){
      c.classList.remove(StyleClass[i])
    }
    c.classList.add("gamerMode")
  })
});

chillBtn.addEventListener("click", () => {
  body.className = "chillMode";
  card.forEach(c=>{
    for(let i = 0; i < 4; i++){
      c.classList.remove(StyleClass[i])
    }
    c.classList.add("chillMode")
  })
});


