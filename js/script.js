
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
