/*--------------------------------------------------------nav bar----------------------------------------------------------------------*/
/*nav---point active */
const sections = document.querySelectorAll("div[id]");
const items = document.querySelectorAll(".fixed-side-navbar .item");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ //تعامل مع الأقسام التي حدث معها تغيير أثناء المراقبة
        if(entry.isIntersecting){
            let id = entry.target.id;

            //Remove 'active' from all
            items.forEach(item=>{  item.classList.remove("active");  });

            let activeItem = document.querySelector(`.fixed-side-navbar a[href="#${id}"]`);
            if(activeItem){ activeItem.parentElement.classList.add("active"); }
        }});  }, 

{
    threshold: 0.3 //When 10% of the section appears: it activates.
});

//جهّز المراقبة لكل الأقسام
sections.forEach(section=>{
    observer.observe(section);  }); 

/*-----------------------------------------------------------end nav bar -------------------------------------------------------------------*/
/*--------------------------------------------------------------about-----------------------------------------------------------------------*/

/*about---animation img right*/
const imgsRight = document.querySelectorAll(".autoshow-img-right");
imgsRight.forEach(img => {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                img.classList.add("show");
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
});

/*about---animation img left*/
const imgsLeft = document.querySelectorAll(".autoshow-img-left");
imgsLeft.forEach(img => {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                img.classList.add("show");
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
});
/*------------------------------------------------------------- end about --------------------------------------------------------------------*/
/*------------------------------------------------------------- discover ----------------------------------------------------------------------*/
/*------------ quiz-box -------------*/
 /* when click close */
var close = document.querySelector(".close .icon");
var quizBox = document.querySelector(".quiz-box");
close.addEventListener("click",function(){
    quizBox.style.display  = "none";
});
/*when click button discover */ 
var btnDiscover = document.querySelector(".discover .button");
var quiz_Box = document.querySelector(".quiz-box");
btnDiscover.addEventListener("click",function(){
    quiz_Box.style.display = "block";
})

/*------------------------------------------------------------ end discover -------------------------------------------------------------------*/
/*----------------------------------------------------------- scroll to top ------------------------------------------------------------------*/
const topBtn = document.querySelector(".top");
window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
        topBtn.classList.add("active");
    }
    else{
        topBtn.classList.remove("active");
    }
})
/*---------------------------------------------------------- end scroll to top ----------------------------------------------------------------*/
