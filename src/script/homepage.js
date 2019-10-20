let init = () => {
    toggleSignin();
    $('.usernameError,.emailError,.passwordError,.progress').hide();
}

$( init );

let toggleSignup = () => {
    $('#signinForm').hide();
    $('#signupForm').show();
    $('.signinToggleButton').css('border-bottom','none');
    $('.signupToggleButton').css('border-bottom','5px solid #91909F');
    $('.signupToggleButton').css('padding','5px solid #91909F')
}

let toggleSignin = () => {
    $('#signupForm').hide();
    $('#signinForm').show();
    $('.signupToggleButton').css('border-bottom','none');
    $('.signinToggleButton').css('border-bottom','5px solid #91909F');
    $('.signinToggleButton').css('padding','5px solid #91909F');
}

let passwordStrength = false;

$("#signup").click(() => {

    let dataString = {}
    dataString.username = $('#username').val();
    dataString.email = $('#email').val();
    dataString.password = $('#password').val();
    dataString.username === ''?$('#username').css('border','1px solid red'):null;
    dataString.email === ''?$('#email').css('border','1px solid red'):null;
    dataString.password === ''?$('#password').css('border','1px solid red'):null;
    passwordStrength === false?$('#password').css('border','1px solid red')&&$('.passwordError').show():null;
})


$("#signin").click(() => {
    let dataString = {}
    dataString.username = $('#signinUsername').val();
    dataString.password = $('#signinPassword').val();
    dataString.username === ''?$('#signinUsername').css('border','1px solid red'):null;
    dataString.password === ''?$('#signinPassword').css('border','1px solid red'):null;
})




$("#username").click(() => {
    $('#username').css('border','none')&&$('.usernameError').hide();
})

$("#email").click(() => {
    $('#email').css('border','none')&&$('.emailError').hide();
})

$("#password").click(() => {
    $('.progress').show();
    $('#password').css('border','none')&&$('.passwordError').hide();
})


$("#password").keyup((e)=>{
    e.target.value.length == 0?$('.bar').css('background-color','red')&&$('.bar').css('width','0%'):null;
    e.target.value.length >=1  &&e.target.value.length <= 3?
    $('.bar').css('background-color','red')&&$('.bar').css('width','10%'):null;
    e.target.value.length >= 4 &&e.target.value.length < 6?
    $('.bar').css('background-color','red')&&$('.bar').css('width','20%'):null;
    e.target.value.length >= 6 &&e.target.value.length <= 7?
    $('.bar').css('background-color','red')&&$('.bar').css('width','30%'):null;
    e.target.value.length >= 8?
    $('.bar').css('background-color','red')&&$('.bar').css('width','40%'):null;
    e.target.value.length >= 8&&(e.target.value.match(/[0-9]+/)||
    e.target.value.match(/[a-z]+/)||e.target.value.match(/[A-Z]+/)||e.target.value.match(/\W|_/g))?
    $('.bar').css('background-color','red')&&$('.bar').css('width','50%'):null;
    e.target.value.length >= 8&&((e.target.value.match(/[0-9]+/)&&
    e.target.value.match(/[a-z]+/))||(e.target.value.match(/[0-9]+/)&&e.target.value.match(/[A-Z]+/))
    ||(e.target.value.match(/[0-9]+/)&&e.target.value.match(/\W|_/g))||
    (e.target.value.match(/[a-z]+/)&&e.target.value.match(/[A-Z]+/))||
    (e.target.value.match(/[a-z]+/)&&e.target.value.match(/\W|_/g))||(e.target.value.match(/[A-Z]+/)&&e.target.value.match(/\W|_/g)))?
    $('.bar').css('background-color','yellow')&&$('.bar').css('width','60%'):null;
    e.target.value.length >= 8&&(e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")||
    e.target.value.match("^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\\d).+$")||
    e.target.value.match("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\\d).+$")||
    e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).+$"))?
    $('.bar').css('background-color','yellow')&&$('.bar').css('width','80%'):null;
    // e.target.value.length >= 8&&e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\\d).+$")?
    // $('.bar').css('background-color','green')&&$('.bar').css('width','100%'):null;
    if(e.target.value.length >= 8&&e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\\d).+$"))
    {
        $('.bar').css('background-color','green')&&$('.bar').css('width','100%');
       passwordStrength = true;
    }
    else
    passwordStrength = false;
})


  