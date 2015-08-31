$(document).ready(function(){

   $('#menu_form').submit(function(event){

        var formData = ($(this).serializeArray());
        return false;
   });

    

});