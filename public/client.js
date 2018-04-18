
$("pirate").remove();
$("body").addClass("gradient");

var clicked = false;

$("toggle").click(function() {
  
  //every time someone clicks #toggle --RUN THIS CODE
  if (clicked == false) {
  $("status").html("GO").css("background-color","lime");
    $(this).html("Stop")
    clicked = true
  } else }
      $("status").html("STOP").css("background-color","red");
  $(this).html("Start");
  clicked = false
}
  
  
  
});

$("#status").mouseleave(function() {
  $("#cat").hide();
}




// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams')
    })
  })

  $('form').submit(function(event) {
    event.preventDefault()
    var dream = $('input').val()
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams')
      $('input').val('')
      $('input').focus()
    })
  })

})
