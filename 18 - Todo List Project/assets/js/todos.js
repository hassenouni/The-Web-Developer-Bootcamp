// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Adding new Todo on Enter key press
$("input[type='text']").keypress(function(){
  if(event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

//Toggles "+" button for adding new Todos
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
