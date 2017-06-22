$(document).ready(function(){
  $('#custom-order-form').submit(function(){
    var name = $('input[name=name]').val();
    console.log(name);
    alert('Thank you for your order, ' +
    name +
    '! We will get back to you shortly.');
  });
});
