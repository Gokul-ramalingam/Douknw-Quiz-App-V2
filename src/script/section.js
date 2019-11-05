let htmlAr = [];
let cssAr = [];
let jsAr = [];

//Ajax request is made to receive all the questions from mongodb database using node api.
$(document).ready(function(){
   
    $.ajax({
        url:'http://localhost:9000/api/questions',
        type: 'GET',
        headers: {
         "Content-Type":"application/x-www-form-urlencoded",
         "token":localStorage.getItem('token')
     },
        success:function(data){
           //Filtering of question from a pool of multiple type questions
            let htmlQuestions = data.filter(dt=>{
                return dt[Object.getOwnPropertyNames(dt)[1]]["type"] === 'html';
             })
             randomPicker(htmlQuestions,htmlAr);//Filtered question of particular type and a empty array for that type is passed as parameter
             count1 = -1;
             let cssQuestions = data.filter(dt=>{
                return dt[Object.getOwnPropertyNames(dt)[1]]["type"] === 'css';
             })
             randomPicker(cssQuestions,cssAr);//Filtered question of particular type and a empty array for that type is passed as parameter
            count1 = -1;
             let jsQuestions = data.filter(dt=>{
                return dt[Object.getOwnPropertyNames(dt)[1]]["type"] === 'js';
             })
             randomPicker(jsQuestions,jsAr);//Filtered question of particular type and a empty array for that type is passed as parameter
        },
        error : () => {
           window.location= 'http://localhost:5501/index.html'
        }
    }
    )
 
  });
//If the localstorage has the particular item then opacity of that section is reduced to indicate it is not clickable.
if(localStorage.getItem("htm")==="yes")
    $("#htm").css("opacity",0.5);
 
 if(localStorage.getItem("cs")==="yes")
    $("#cs").css("opacity",0.5);

 if(localStorage.getItem("js")==="yes")
    $("#jst").css("opacity",0.5);

    //Only if the particular section is being clicked for first time then user gets navigated to that page
    $("#htm").click(()=>{
      if(!localStorage.hasOwnProperty("htm"))
      {
      localStorage.setItem("htm","yes");
      localStorage.setItem("htmlArray",JSON.stringify(htmlAr));
     location.href='questions.html?html';
      }
   })
  
  $("#cs").click(()=>{
   if(!localStorage.hasOwnProperty("cs"))
   {
     localStorage.setItem("cs","yes");
     localStorage.setItem("cssArray",JSON.stringify(cssAr));
     location.href='questions.html?css';
   }
  })
  
  
  $("#jst").click(function(){
   if(!localStorage.hasOwnProperty("js"))
   {
     localStorage.setItem("js","yes");
     localStorage.setItem("jsArray",JSON.stringify(jsAr));
     location.href='questions.html?js';
   }
  })


//This function generate ten random question from a pool of  multiple questions which are all of different type.
let randomPicker=(json,ar)=>{
    for(let i = 0;i < 10;i++){
    let randIndex = Math.floor(Math.random()*json.length)
    ar.push(json[randIndex])
    json.splice(randIndex,1);
    }
}