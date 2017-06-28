$(document).ready(function(){
  $('#custom-order-form').on('submit',function(){
     $('#order-confirmation').removeClass('display-none');
     $('#custom-order-form').addClass('display-none');
  });
});
