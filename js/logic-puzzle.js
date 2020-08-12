const answerButton = document.querySelector(".answer");
const nextButton = document.querySelector(".next");
const solution = document.querySelector(".solution");

console.log(answerButton);
console.log(nextButton);
console.log(solution);

answerButton.addEventListener("click",()=>{
    nextButton.style.display = "block";
    solution.style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
});