const btns = document.querySelectorAll("button");
let counter = 0;
for (let btn of btns) {
  btn.addEventListener("click",()=>{
    counter++;
    console.log("Button was clicked "+counter+" times")
  });
}
