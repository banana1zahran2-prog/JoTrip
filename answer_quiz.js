/* when click close */
var close = document.querySelector(".answer-quiz-box .close .icon");
var answerQuizBox = document.querySelector(".answer-quiz-box");
close.addEventListener("click",function(){
    answerQuizBox.style.display = "none";
});
/*when click button submit*/
var btn_submit = document.querySelector(".discover .submit");
var answerQuizBox = document.querySelector(".answer-quiz-box");
var quiz_Box = document.querySelector(".quiz-box");
btn_submit.addEventListener("click",function(){
    answerQuizBox.style.display = "block";
    quiz_Box.style.display = "none";
});
/*****************************************************************************************/

/* اختيارات اليوزر داخل متغيرات */
document.getElementById("submit").addEventListener("click",function(){
    let Budget = document.querySelector(`input[name=budget]:checked`).value;
    let Weather = document.querySelector(`input[name="weather"]:checked`).value;
    let Activity = document.querySelector(`input[name="activity"]:checked`).value;
    let Type = document.querySelector(`input[name="type"]:checked`).value;
    let Camping = document.querySelector('input[name="camping"]:checked').value;



/* نقارن الاختيارات مع الاماكن */
let results = [];
places.forEach(place=>{   /*place : المكان الحالي الذي يتم فحصه */
let score = 0;

if(place.budget == Budget){ score++; }
if(place.weather == Weather){ score++; }
if(place.activity.includes(Activity)){ score++;}
if(place.type.includes(Type)){ score++; }
if(place.camping == Camping){ score++; }

if(score>=4){ results.push(place.name) }
});



/*عرض النتيجة */
document.getElementById("result").innerHTML=results.join("<br>");

});