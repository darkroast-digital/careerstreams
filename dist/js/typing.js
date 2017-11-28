$(document).ready (function () {
  $('#name').keyup(function(){
$('.name').addClass('typing');
if( $(this).val().length == 0 ) {
    $('.name').removeClass('typing');
}
});
$('#email').keyup(function(){
$('.email').addClass('typing');
if( $(this).val().length == 0 ) {
    $('.email').removeClass('typing');
}
});
$('#subject').keyup(function(){
$('.subject').addClass('typing');
if( $(this).val().length == 0 ) {
    $('.subject').removeClass('typing');
}
});
$('#message').keyup(function(){
$('.message').addClass('typing');
if( $(this).val().length == 0 ) {
    $('.message').removeClass('typing');
}
});
});
