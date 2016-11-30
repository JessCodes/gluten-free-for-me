$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  registrationButtonListener();
  loginButtonListener();

});

var registrationButtonListener = function(){
  $('.header-main').on('click', '.register-link', function(event){
    event.preventDefault();
    // console.log(event, "event");
    // console.log(this, "this");

    var $registerLink = $(this)
    var url = $registerLink.parent().attr('action')
    var method = $registerLink.parent().attr('method')

    var request = $.ajax({
      url: url,
      method: method
    })
    request.done(function(response){
      $('.header-main').prepend(response);
      $('#register-form').toggle();
    })
  })
}

var loginButtonListener = function(){
  $('.header-main').on('click', '.login-link', function(event){
    event.preventDefault();
    // console.log(event, "event");
    // console.log(this, "this");
    
  })
}