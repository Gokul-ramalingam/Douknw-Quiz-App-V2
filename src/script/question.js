let timer = ()=>{
    console.log("here")
   let timer2 = "3:01";
   let interval = setInterval(() =>{

   let timer = timer2.split(':');
   //by parsing integer, I avoid all extra string processing
   let minutes = parseInt(timer[0], 10);
   let seconds = parseInt(timer[1], 10);
   --seconds;
   minutes = (seconds < 0) ? --minutes : minutes;
   if (minutes < 0) clearInterval(interval);
   seconds = (seconds < 0) ? 59 : seconds;
   seconds = (seconds < 10) ? '0' + seconds : seconds;
   //minutes = (minutes < 10) ?  minutes : minutes;
   $('#time').html(minutes + ':' + seconds);
   timer2 = minutes + ':' + seconds;
   if(minutes===0&&seconds==="00")      
   location.href="section.html";               //If time reaches 0:00 taking back user to section page
}, 1000);
}

let answerArray = [];
let selectedOptions = [];
let questions;

//query return html or css or js from url 
//Eg : douknw.com/questions?html
let query = window.location.search.substring(1,); // ==> html

if(query === 'html')
{
questions = JSON.parse( localStorage.getItem("htmlArray")); //Getting an array from local storage which is populated with 10 html questions
localStorage.removeItem('htmlArray');//Removing it from local storage
$('#sec').text(1);
}
else if(query === 'css')
{
    questions = JSON.parse(localStorage.getItem("cssArray"));//Getting an array from local storage which is populated with 10 html questions
    localStorage.removeItem('cssArray');//Removing it from local storage
    $('#sec').text(2);
}
else
 {
   questions = JSON.parse(localStorage.getItem("jsArray"));   //Getting an array from local storage which is populated with 10 html questions
   localStorage.removeItem('jsArray');   //Removing it from local storage
   $('#sec').text(3);
 }


$(document).ready(()=>{
//To generate first question an automatic click is made to avoid conflicts
$('#img-forward').click(()=>{
 });
 $('#img-forward').click();
 timer();
})


let questionNumber = 0;
$("#img-forward").click(()=>{
        // This will protect next question does not exceed beyond the limit of 10 questions
       
       if(questionNumber < 10)
       {
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC'); //As soon as a new question gets loaded all the options background are given same background color
        action('add'); // Here a function is being called and passed a parameter 'add' so that using that argument next question will get incremented
        //The below if statement checks whether selectedOption array has any value in the particular index based on the questionnumber.  
        if(selectedOptions[questionNumber-1]!=undefined) 
       $("#option"+selectedOptions[questionNumber-1]).css('background-color','#78909C');//If that array have any option among 1,2,3&4 that particular option will get highlighted
       }
})


$("#img-backward").click(()=>{

    //Samething happens for this but in the opposite manner compared to img-forward.It check whether question doesn't exeed below 1;
    if(questionNumber > 1)
    {
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        action('sub');
       if(selectedOptions[questionNumber-1]!=undefined)
        $("#option"+selectedOptions[questionNumber-1]).css('background-color','#78909C') ; 
    }
})
let key;

//In this function 'add' or 'sub' is passed as parameter using that argument function increments the question or decrements the question from array of 10 questions.
let action =((option)=>{
 option==='add'?questionNumber++:questionNumber--;
if(questionNumber>=1 && questionNumber <= 10)
{
    key = Object.keys(questions[questionNumber-1])[1];
    $("#num").text(questionNumber);
    $("#question").text(questions[questionNumber-1][key].question);
    $("#opt1").text(questions[questionNumber-1][key]["options"][0]);
    $("#opt2").text(questions[questionNumber-1][key]["options"][1]);
    $("#opt3").text(questions[questionNumber-1][key]["options"][2]);
    $("#opt4").text(questions[questionNumber-1][key]["options"][3]);
}
})
//When the user clicks on particular option that particular option gets highlighted and remaining options are changed to default color to avoid conflicts.
 $("#option1").click(()=>{
  selector(1);
  $("#option2, #option3, #option4").css('background-color','#CFD8DC');
 })

 $("#option2").click(()=>{
    selector(2);
    $("#option1, #option3, #option4").css('background-color','#CFD8DC');
   })

   $("#option3").click(()=>{
    selector(3);
    $("#option1, #option2, #option4").css('background-color','#CFD8DC');
   })

   $("#option4").click(()=>{
    selector(4);
    $("#option1, #option2, #option3").css('background-color','#CFD8DC');
   })
//Selector stores the question number along with answer which was answer by user in local storage in form of array of objects.
let selector = ((option)=>{
    answerArray[questionNumber-1] ={key:key,answer : $("#opt"+option).text()};
    selectedOptions[questionNumber-1]=option;
    $("#option"+option).css('background-color','#78909C');
})


   $("#submitButton").click(()=>{
       localStorage.setItem(query+"Answers",JSON.stringify(answerArray));
       location.href = 'result.html'
   })

   $("#sectionButton").click(()=>{
       localStorage.setItem(query+"Answers",JSON.stringify(answerArray));
       if(localStorage.hasOwnProperty('htm') && localStorage.hasOwnProperty('cs')&&localStorage.hasOwnProperty('js'))
       location.href = 'result.html';
       else
       location.href = 'section.html';
   })
 