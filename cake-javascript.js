$(document).ready(function(){
    $('#cake-header').addClass('current-tab');
});

$(document).ready(function(){
  $('#cake-header').on('click', function(){
    $('#cake-menu').removeClass('display-none');
    $('#cake-header').addClass('current-tab');
    $('#other-menu').addClass('display-none');
    $('#other-header').removeClass('current-tab');
  });
});

$(document).ready(function(){
  $('#other-header').on('click', function(){
      $('#other-menu').removeClass('display-none');
      $('#other-header').addClass('current-tab');
      $('#cake-menu').addClass('display-none');
      $('#cake-header').removeClass('current-tab');
  });
});
