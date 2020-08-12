const options = document.querySelectorAll(".option");
const solution = document.querySelector(".solution");
const right = document.querySelector(".right-img");
const wrong = document.querySelector(".wrong-img");
const next = document.querySelector(".next");

//console.log(options);

options.forEach((option)=>{
    option.addEventListener("click",answered);
});

function answered() {
    solution.style.display = "block";
    next.style.display = "inline-block";
    if(this.classList.contains("right")){
        right.style.display = "block";
        wrong.style.display = "none";
        solution.style.color = "#04c800"
    }else{
        wrong.style.display = "block";
        right.style.display = "none";
        solution.style.color = "rgba(255,77,0,1)"
    }
    window.scrollTo(0,document.body.scrollHeight);
    //to make it so that it doesn't trigger other options when you click on others
    // options.forEach((option)=>{
    //     //option.disabled = true;
    //     option.removeEventListener("click",answered);
    // });
}