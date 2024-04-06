







document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const bin = element.getAttribute('Id');
        }
)})});


let prevclickCount=null;


document.addEventListener('DOMContentLoaded',()=>{

document.querySelector('.backStep').addEventListener('click',()=>{
    const box = document.querySelector('.w-layout-blockcontainer.w-container');
    const block12 = document.querySelector('.div-block-12')
    block12.style.display='none';
    document.querySelector('.step1').style.display='flex';

            box.style.display = 'flex';
            const box2= document.querySelector('.step2');
            box2.style.display='none';
            document.getElementById('steptext').innerHTML="Step 01";
            document.getElementById('stepdes').innerHTML='Select the load size<br>View the <a href="/loads-info" class="link-9">load chart</a> for more information about each option<br>';
        


})})

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.nextStep').addEventListener('click',()=>{
    const box = document.querySelector('.w-layout-blockcontainer.w-container');


            box.style.display = 'none';
            const box2= document.querySelector('.step2');
            const block12 = document.querySelector('.div-block-12')
            block12.style.display='none';
            box2.style.display='none';

            setTimeout(() => {
                block12.style.opacity = 0; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
            document.querySelector('.div-block-41').style.display='flex';
            const step4= document.querySelector('.div-block-13');
            step4.style.display ='flex';
            document.getElementById('steptext').innerHTML="Step 03";
            document.getElementById('stepdes').innerHTML="Select the time-slot you would like the junk removal team to arrive"
        
            setTimeout(() => {
                step4.style.opacity = 1; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
           


})})

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('iframe'); // Replace 'iframe' with a more specific selector if necessary

    // Wait for the iframe to fully load
    iframe.addEventListener('load', () => {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const nextStepButton = iframeDocument.querySelector('.nextStep');
        if (nextStepButton) {
            nextStepButton.addEventListener('click', () => {
                const box = iframeDocument.querySelector('.w-layout-blockcontainer.w-container');
                const block12 = iframeDocument.querySelector('.div-block-12');
                const box2 = iframeDocument.querySelector('.step2');
                const divBlock41 = iframeDocument.querySelector('.div-block-41');
                const step4 = iframeDocument.querySelector('.div-block-13');

                if (block12) block12.style.display = 'none';
                if (box2) box2.style.display = 'none';
                if (divBlock41) divBlock41.style.display = 'flex';
                if (step4) step4.style.display = 'flex';
            });
        }
    });
});




document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const box = document.querySelector('.w-layout-blockcontainer.w-container');
            box.style.display = 'none';
            document.querySelector('.step1').style.display='none';
            const block12 = document.querySelector('.div-block-12');
            

            block12.style.display='flex';
            setTimeout(() => {
                block12.style.opacity = 1; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
            const box2= document.querySelector('.step2');
            box2.style.display='flex';
            document.getElementById('steptext').innerHTML="Step 02";
            document.getElementById('stepdes').innerHTML="Select the date you would like the junk removal team to arrive"
            const id = element.id;
            binselected += element.id ;
            console.log(id); 
        }
        )
        
        })
        


})


let FinalRecord=" ";
let binselectedfinal = document.getElementById('Bin');
let timeselectedfinal = document.getElementById('Time');
let binselected = " ";
let timeselected = " ";
binselectedfinal.disabled=true;



document.querySelector('.nav-wrapper').addEventListener('click',()=>{



   

     
        
        document.querySelector('.container-6').style.opacity=1;

}
)

console.log("New2");
timeselectedfinal.disabled = true;






    document.addEventListener('DOMContentLoaded',()=>{
        document.querySelectorAll('.select.w-button').forEach(element=>{
            element.addEventListener('click',()=>{
                const step4= document.querySelector('.div-block-41');
                step4.style.display ='none';

                const steplast = document.querySelector('.menu-wrapper.two');
                    steplast.style.display='none';
                    

                   
               
               


                
              
                timeselected +=" at " + element.id ;
                console.log(FinalRecord);

                const step5 = document.querySelector('.pony');
                step5.style.display ='flex';
                binselectedfinal.value= binselected;
                timeselectedfinal.value =timeselected;
    
            })
           
    
    
        })
    })
    
    
    


    



const months= [
    "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
]

const bins =[
 "7-yard",
 "10-yard",
 "12-yard",
 "20-yard",
 "30-yard",
 "40-yard"

]

document.querySelector('.nextStep').addEventListener('click',()=>{

    timeselected += document.querySelector('.clicked').innerHTML + ' ' +  months[date.getMonth()];
    console.log(69);
    console.log()
})


