let correct = document.getElementById('correct');
let img1 = document.getElementById('img1');
let img2 =document.getElementById('img2');


function answer() {
let count = 0;
let qz1 = document.quiz.question1.value;
let qz2 = document.quiz.question2.value;
let qz3 = document.quiz.question3.value;
let qz4 = document.quiz.question4.value;
let qz5 = document.quiz.question5.value;


if(qz1 == "Yash") {
    count++;
}  if(qz2 == "Mercedes") {
    count++;
}  if(qz3 == "Dead") {
    count++;
}  if(qz4 == "Diamond") {
    count++;
}  if(qz5 == "Donkey") {
    count++;
}

if(count >= 3) {
    img1.style.display = "block";
} if(count <= 2) {
    img2.style.display = "block";
}
if(count >= 3) {
    img2.style.display = "none";
} if(count <= 2) {
    img1.style.display = "none"
}

if(count < 3) {
    correct.innerHTML = `<h2>Your score is ${count}. Don't Give Up!</h2>`
} else {
    correct.innerHTML = `<h2>Your score is ${count}. Well Done!</h2>`
}
document.documentElement.scrollTop = 0;
}

let retrybtn = document.getElementById('retry');

retrybtn.addEventListener('click', (e) => {
    window.location.reload();
    document.documentElement.scrollTop = 0;
})
