Stripe.setPublishableKey(stripe_vars.publishable_key);

$( document ).on( "click", "#nav li.country > a", function( event ) {
  
  event.preventDefault();
});

/*$(function () {

    IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);

    if (IS_IPAD || IS_IPHONE) {

        $('a').on('click touchend', function() { 
            var link = $(this).attr('href');   
            window.open(link,'_self'); // opens in new window as requested

            return false; // prevent anchor click    
        });     
    }
});*/

$( document ).on( "click", ".toggle-advanced-search", function( event ) {
  var clickedItem = $(this);
  
  if(clickedItem.text() == "Advanced") {
    clickedItem.text('Hide Advanced');
  } else {
    clickedItem.text('Advanced');
  }
  
  $('.advanced-search').slideToggle(300);
  
  event.preventDefault();
});

$( document ).on( "click", ".menuShow", function( event ) {
  var clickedItem = $(this);
  var doc = $('body');
  
  if(doc.hasClass('openMenu')) {
    doc.removeClass('openMenu');
  } else {
    doc.addClass('openMenu');
  }
  
  event.preventDefault();
});

$( document ).on( "click", ".openMenu .innerwrap, .openMenu .closeBtn", function( event ) {
  var doc = $('body');
  
  doc.removeClass('openMenu');
  event.preventDefault();
});

$( document ).on( "click", ".remove_link", function() {
  var clickedItem = $(this);
  $('input[name="remove"]').val(clickedItem.attr('ref'));

  $('#cart_form').submit();
});

function stripeResponseHandler(status, response) {
    if (response.error) {
    // show errors returned by Stripe
        $(".payment-errors").fadeIn(300).html('<p class="error"><strong>ERROR:</strong> ' + response.error.message + '</p>');
    // re-enable the submit button
    $('.stripe-submit').attr("disabled", false);
    } else {
        var form$ = $("#credit-card-form");
        // token contains id, last4, and card type
        var token = response['id'];
        // insert the token into the form so it gets submitted to the server
        form$.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        // and submit
        form$.get(0).submit();
    }
}

$(function() {
    $( '.tooltip' ).tooltip();
  });

$(document).ready(function()
{      
  // Supported file extensions
  var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';

  var posts = $('.singlePage, .singlePost');

  posts.each(function() {
    $(this).find(thumbnails).addClass("fancybox");//.attr('rel','fancybox'+posts.index(this)).getTitle();
  });  
  
  $(".fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect  : 'elastic',
    title : ''
  });
  
  //Validate User Registration form
  $("#registerform #wp-submit").click(function(event) {
    $('input').removeClass('error');
    $('#registerform #wp-submit').attr("disabled", "disabled");
    var failed = false;
    
    if( $('#user_login').val() == "" ) {
      $('#user_login').addClass('error');
      failed = true;
    }
    
    if( $('#user_email').val() == "" ) {
      $('#user_email').addClass('error');
      failed = true;
    }
    
    if( $('#first_name').val() == "" ) {
      $('#first_name').addClass('error');
      failed = true;
    }
    
    if( $('#last_name').val() == "" ) {
      $('#last_name').addClass('error');
      failed = true;
    }
    
    if( $('#pass2').val() == "" ) {
      $('#pass2').addClass('error');
      failed = true;
    }
    
    if( $('#pass1').val() == "" ) {
      $('#pass1').addClass('error');
      failed = true;
    }
    
    if( !failed ) {
      //Submit the Form
      $("#registerform").submit();
      
    } else {
      $(".payment-errors").fadeIn(300).html('<p class="error"><strong>ERROR:</strong> See Required Fields Below</p>');
      $('#registerform #wp-submit').removeAttr("disabled");
      return false;
    }
 
    // prevent the form from submitting with the default action
    return false;
  });
  
  //Validate credit card billing form
  $(".stripe-submit").click(function(event) {
    // disable the submit button to prevent repeated clicks
    $('input').removeClass('error');
    $('.stripe-submit').attr("disabled", "disabled");
    var failed = false;
    
    if( $('#name').val() == "" ) {
      $('#name').addClass('error');
      failed = true;
    }
    
    if( $('#address1').val() == "" ) {
      $('#address1').addClass('error');
      failed = true;
    }
    
    if( $('#city').val() == "" ) {
      $('#city').addClass('error');
      failed = true;
    }
    
    if( $('#state').val() == "" ) {
      $('#state').addClass('error');
      failed = true;
    }
    
    if( $('#zip').val() == "" ) {
      $('#zip').addClass('error');
      failed = true;
    }
    
    if( $('#cc_number').val() == "" ) {
      $('#cc_number').addClass('error');
      failed = true;
    }
    
    if( $('#cvv').val() == "" ) {
      $('#cvv').addClass('error');
      failed = true;
    }
    
    if( !failed ) {
      // send the card details to Stripe
      Stripe.createToken({
        number: $('#cc_number').val(),
        cvc: $('#cvv').val(),
        exp_month: $('#expire_month').val(),
        exp_year: $('#expire_year').val(),
        name: $('#name').val(),
        address_line1: $('#address1').val(),
        address_line2: $('#address2').val(),
        address_city: $('#city').val(),
        address_state: $('#state').val(),
        address_zip: $('#zip').val()
      }, stripeResponseHandler);
    } else {
      $(".payment-errors").fadeIn(300).html('<p class="error"><strong>ERROR:</strong> See Required Fields Below</p>');
      $('.stripe-submit').removeAttr("disabled");
      return false;
    }
 
    // prevent the form from submitting with the default action
    return false;
  });
});