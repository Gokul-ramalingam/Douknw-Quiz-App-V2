let init = () => {
    signin();
}

$( init );

let signup = () => {
    $('#signinForm').hide();
    $('#signupForm').show();
    $('.signinToggleButton').css('border-bottom','none');
    $('.signupToggleButton').css('border-bottom','5px solid #91909F');
    $('.signupToggleButton').css('padding','5px solid #91909F')
}

let signin = () => {
    $('#signupForm').hide();
    $('#signinForm').show();
    $('.signupToggleButton').css('border-bottom','none');
    $('.signinToggleButton').css('border-bottom','5px solid #91909F');
    $('.signinToggleButton').css('padding','5px solid #91909F');
}
