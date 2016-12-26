
 (function( $ ){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
$(function() {
  
  if($('#user_phone').exists()){
    
    $('#user_phone').each(function(){
      $(this).mask("(999) 999-99-99");
    });
    
  }
  
  if($('.phone_form').exists()){
    
    var form = $('.phone_form'),
      btn = $('.btn_submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        var un = $('#user_name');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' )  {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
        if ( un.val() == '' )  {
          un.addClass('empty_field');
        } else {
            un.removeClass('empty_field');
        }
      }
      
       var sizeEmpty = $('.empty_field').length;
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
      
    },200);

    $('.btn_submit').click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit;
        
        
      }
    });
    
  }

});

})( jQuery );


function sender() {
  tel = "_Телефон:_ " + document.getElementById("user_phone").value;  
  user_name = "_Ім'я:_ " + document.getElementById("user_name").value;
  user_message = "_Коментар:_ " + document.getElementById("user_message").value;
  message = user_name + tel + user_message;
  $.get("https://api.telegram.org/bot291742143:AAHSB2FvlPMwcTatGxhRB51RpKfyZzY5w84/sendMessage?parse_mode=markdown&text=" + message + "&chat_id=-141035595");
  $("#user_phone").val("");
  $("#user_name").val("");
  $("#user_message").val("");
}




function showPopup()
{
  //when IE - fade immediately
  if($.browser.msie)
  {
   $('#opaco').height($(document).height()).toggleClass('hidden');
  }
  else
  //in all the rest browsers - fade slowly
  {
   $('#opaco').height($(document).height()).toggleClass('hidden').fadeTo('fast', 0.5);
  }

  $('.phone_form')
   .alignCenter()
   .toggleClass('hidden');

  return false;
}

$.fn.alignCenter = function() {
   //get margin left
   var marginLeft = - $(this).width()/2 + 'px';
   //get margin top
   var marginTop = - $(this).height()/2 + 'px';
   //return updated element
   return $(this).css({'margin-left':marginLeft, 'margin-top':marginTop});
  };


  function closePopup()
{
  $('#opaco').toggleClass('hidden').removeAttr('style');
  $('.phone_form').toggleClass('hidden');
  return false;
}

$(document).ready(function(){
  $('.img-box').each(function(index){
    var angle = Math.floor( Math.random() * 60 - 30 );
      $(this).css( 'transform', 'rotate(' + angle + 'deg)' );   
  $(this).css( '-moz-transform', 'rotate(' + angle + 'deg)' );   
  $(this).css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
  });
});