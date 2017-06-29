$(document).ready(function(){
  $('#submit-button').on('click',function(event){
     event.preventDefault();
     $('#order-confirmation').removeClass('display-none');
     $('#custom-order-section').addClass('display-none');
     $('#name, #phone, #details, #submit-button').addClass('display-none');
  });
});
