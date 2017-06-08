$(".fa-plus-circle").on("click", function(){
  $(".fa-plus-circle").fadeOut();
  $(".fa-times-circle").fadeIn();
  $("#textInput").slideToggle();
});

$(".fa-times-circle").on("click", function(){
  $(".fa-times-circle").fadeOut();
  $(".fa-plus-circle").fadeIn();
  $("#textInput").slideToggle();
});

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  resetLocalStorage();
});

$("ul").on("click", ".delete", function(){
  $(this).parent().slideToggle(500,function(){
    $(this).remove();
    resetLocalStorage();
  });
  event.stopPropagation();
});

function resetLocalStorage(){
  window.localStorage.clear();
  var todos = $('#todos').html();
  localStorage.setItem('todos', todos);
}

if (localStorage.getItem('todos')) {
    $('#todos').html(localStorage.getItem('todos'));
}

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    if($(this).val() !== ""){
      var todoText = $(this).val();
      $(this).val("");
      $("ul").prepend('<li><span class="delete"><i class="fa fa-trash-o"></i></span>' + todoText + '</li>');
      resetLocalStorage();
    }
  }
});
