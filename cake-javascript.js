$(document).ready(function(){
  $('#cake-header').on('click', function(){
    $('#cake-menu').removeClass('display-none');
    $('#other-menu').addClass('display-none');
  });
});

$(document).ready(function(){
  $('#other-header').on('click', function(){
      $('#other-menu').removeClass('display-none');
      $('#cake-menu').addClass('display-none');
  });
});
