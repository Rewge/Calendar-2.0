

const date = new Date();


function renderCalender(){
   
    const thisMonth = date.getMonth();
    const thisDate = date.getDate();
    const thisYear= date.getFullYear();
    
    
    

const lastMonthlastDate = new Date(thisYear,thisMonth,0).getDate();
const lastMonthlastDay = new Date(thisYear,thisMonth,0).getDay();



const thisMonthlastDate = new Date(thisYear,thisMonth+1,0).getDate();
const thisMonthlastDay = new Date(thisYear,thisMonth+1,0).getDay();

let lastMonthCalendar = " ";
let thisMonthCalendar = " "; 
let monthCounter=0;

const months= [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
]




document.querySelector('.todayData').innerHTML= "TODAY, " + months[new Date().getMonth()]+ " " + new Date().getDate();




document.querySelector('.monthData').innerHTML= months[date.getMonth()];



for(let i=0;i<lastMonthlastDay+1;i++){
    lastMonthCalendar+= "<div class='lastMonthCalendarClass'>"+(lastMonthlastDate-i)+"</div>";    
    monthCounter++;
}

for(let i=0;i<thisMonthlastDate;i++){
    if(i+1===date.getDate()&& date.getMonth()=== new Date().getMonth()){
        lastMonthCalendar += "<div class='today'>"+(i+1)+"</div>";
        monthCounter++;
        i++;


    }
    lastMonthCalendar += "<div class='thisMonthCalendarClass'>"+(i+1)+"</div>";
    monthCounter++;
}

for(let i=0;i<(35-monthCounter);i++){
    lastMonthCalendar+="<div class='nextMonthCalendarClass'>" + (i+1)+"</div>";
}


document.querySelector('.dates').innerHTML=lastMonthCalendar;

let prevClicked = null;

document.querySelectorAll('.dates div').forEach(element =>{
    element.addEventListener('click',()=>{
        if (prevClicked !== null ){
        element.classList.add('clicked')
        prevClicked.classList.remove('clicked')
        prevClicked=element;}
        else{
            element.classList.add('clicked')
           
            prevClicked=element;}


        })
    })
    
}


document.querySelector('.arrow1').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalender();


});

document.querySelector('.arrow2').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalender();


});





renderCalender();


