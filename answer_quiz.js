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
/*********************************************************************************************/



document.getElementById("submit").addEventListener("click", function () {
    let questions = document.querySelectorAll(".question");
    let answered = 0;

    questions.forEach(question => {
        if (question.querySelector("input:checked")) { answered++; }
    });

    let output = "";
    if (answered == 0) {output = `<h5>Please select your preferences</h5>`;  } 
    else if (answered < questions.length) { output = `<h5>Please answer all questions</h5>`; } 
    else {//حفظ اختيارات المستخدم
        let Budget = document.querySelector('input[name="budget"]:checked').value;
        let Weather = document.querySelector('input[name="weather"]:checked').value;
        let Activity = document.querySelector('input[name="activity"]:checked').value;
        let Type = document.querySelector('input[name="type"]:checked').value;
        let Camping = document.querySelector('input[name="camping"]:checked').value;

        //نقارن الاختيارات مع الاماكن 
        let results = [];
        places.forEach(place => {
            let score = 0;
            if(place.budget == Budget){ score++; }
            if(place.weather == Weather){ score++; }
            if(place.activity.includes(Activity)){ score++; }
            if(place.type.includes(Type)){ score++; }
            if(place.camping == Camping){ score++; }
            if(score >= 3){ results.push(place); }
        });

        if(results.length == 0){ output = `<h5>No destinations match your preferences , try again</h5>`; }
        /*عرض النتيجة */
        else {
            results.slice(0,6).forEach(place => {
                output += `
                <div class="place-card">
                    <h2>${place.name}</h2><br>
                    <p>${place.description}</p><br>
                    <div class="img-result">
                        <div class="img">
                            <img src="${place.image[0]}">
                            <img src="${place.image[1]}">
                            <img src="${place.image[2]}">
                              <!-- تكرار الصور -->
                              <img src="${place.image[0]}">
                              <img src="${place.image[1]}">
                              <img src="${place.image[2]}">
                        </div>
                    </div>
                </div> `;
            });
        }}
    document.getElementById("result").innerHTML = output;
});

//});

/*********************************************************************************************/
