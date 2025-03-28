const icons = document.querySelectorAll(".icon img");
const divs = document.querySelectorAll(".questions__info--answers");
const answers = document.querySelectorAll(".answer")


const handleAnswers = (icon, index) => {
   icon.addEventListener("click", e => {
      divs[index].classList.toggle("active");
      answers[index].classList.toggle("active");
      if (divs[index].className === "questions__info--answers active") {
         e.target.src = "img/Remove_Minus_Circle.png";
      } else {
         e.target.src = "img/plus-icon.png"
      }
   })
}

icons.forEach(handleAnswers)







