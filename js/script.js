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
      btn = form.find('.btn_submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }
      
      var sizeEmpty = form.find('.empty_field').size();
      
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

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

})( jQuery );


function sender() {
	tel = $("#user_phone").val();
	next_st = "  _Номер телефону:_   ";
  	user_name = "_Ім'я:_ " + $("#user_name").val();
  	user_message = "_Коментар:_ " + $("#user_message").val();
  	message = user_name + next_st + tel +  user_message;
   $.get("https://api.telegram.org/bot291742143:AAHSB2FvlPMwcTatGxhRB51RpKfyZzY5w84/sendMessage?parse_mode=markdown&text="+message+"&chat_id=-141035595"); //send data in telegram bot
    	$("#user_phone").val("");
        $("#user_name").val("");  
	$("#user_message").val("");
             }
