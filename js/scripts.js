$(document).ready(function(){
 $('form#appointment').submit(function(event){
  event.preventDefault();

    var name =$('#name').val();
    var description = $('#description').val();
    var date = $('#date').val();
    var start = $('#start').val();
    var end = $('#end').val();
    $('#output').text("thanks for booking");



 });
});