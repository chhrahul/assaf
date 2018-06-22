function onSuccess1(result){
 // alert("Success:"+result);
}
 
function onError1(result) {
  //alert("Error:"+result);
}

function checkLoginState()
{

        
            var fbLoginSuccess = function (userData) 
            {
              //alert(JSON.stringify(userData));
              var userID = userData.authResponse.userID;
                          
            facebookConnectPlugin.api(userID+"/?fields=id,email,first_name,last_name", ["user_birthday"],
            function onSuccess (result) 
            {
            //alert(JSON.stringify(result));
              var id = result.id;
              var email = result.email;
              var firstName = result.first_name;
              var lastName = result.last_name;
              var name =  firstName+" "+lastName;
              
              var firstDigits = 664;
              
              var secondDigits = 123;
            
              var  thirdDigits = 45  ; 
              
              var  forthDigits = Math.floor(Math.random() * 90 + 10) + " "; 
             
              var phone = firstDigits+" "+secondDigits+" "+thirdDigits+" "+forthDigits;
              
              var pwd = '';
              
             
                 var environment_code = 972;     
    var type = 'facebook';
    var type_id = 1111;
    //var language_id = 11;
    // alert(phone)
          $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/customer",
            data: {name:name,environment_code:environment_code,phone_number:phone,password : pwd,email : email,type : type,type_id : type_id,language_id : localStorage.language_id},
            dataType: "json",
            //contentType: "application/json; charset=utf-8",
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            success: function(data)
            { 
            
           // alert('singup secc');
              localStorage.customer_id = data.customer_id;
              localStorage.name = data.name;
             /* $('#signupbox').hide(); $('#loginbox').show();
              $('#login-email').val(email);
              $('#login-password').focus();  
              */
              
                      $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/login",
            data: {email : email,password : pwd,type:'facebook'},
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            datatype: 'json',
            success: function(data){ 
              //var json = $.parseJSON(data);
              //alert(json.status);
			       // alert("Login Successfully!");
       
       
              
                $('#login-signup').hide();
                $('#language_page').hide(); 
                $('#dashboard').show();
                $('#signup_font').hide();
                 $('#ims').attr('src','img/asi1on.png');
               // $('#logo_new').hide();
                $('.footer_nav').show();
                localStorage.login = 1;
                localStorage.email = email;
                localStorage.name = name;
                localStorage.phone_number = data.phone_number;
                localStorage.caller_id_number = data.caller_id_number;
                localStorage.customer_id = data.id;
              
                        
			},error:function(jqXHR, exception,errorThrown)
      {
          // alert(jqXHR.status);
              //  alert(exception);
              //  alert(errorThrown) 
              alert("Email or Password is incorrect!");
      } 
          }); 
                         
            },
            error:function(jqXHR, exception,errorThrown)
            {
            
                //alert(jqXHR);
                
                               
                 $.each( jqXHR.responseJSON, function( i, item ) 
                 {
                 
                   $.each( item, function( i, item1 ) 
                   {
                    
                               $.ajax({
                                type: "POST",
                                url: "http://api.8200app.com:5100/api/login",
                                data: {email : email,password : pwd,type:'facebook'},
                                headers: {
                                    'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                                   // "Content-Type":"application/json; charset=UTF-8"
                                },
                                datatype: 'json',
                                success: function(data){ 
                                  //var json = $.parseJSON(data);
                                  //alert(json.status);
                    			 // alert("Login Successfully!");
                                  
                                    $('#login-signup').hide();
                                    $('#language_page').hide(); 
                                    $('#dashboard').show();
                                    $('#signup_font').hide();
                                     $('#ims').attr('src','img/asi1on.png');
                                   // $('#logo_new').hide();
                                    $('.footer_nav').show();
                                    localStorage.login = 1;
                                    localStorage.email = email;
                                    localStorage.name = name;
                                    localStorage.phone_number = data.phone_number;
                                    localStorage.caller_id_number = data.caller_id_number;
                                    localStorage.customer_id = data.id;
                                  
                                            
                    			},error:function(jqXHR, exception,errorThrown)
                          {
                              // alert(jqXHR.status);
                                  //  alert(exception);
                                  //  alert(errorThrown) 
                                  alert("Email or Password is incorrect!");
                          } 
                              }); 
                              
                    
                    
                    
                    
                             
       
      });
      
         });
      
                
            //  alert('Please check the form values again, Email or Phone number may already be taken! OR Enter the phone number in E164 Format.');
            }
          });  
            
            
            
           
            }, function onError (error) {
              console.error("Failed: ", error);
            }
          );

            
            }

        facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
          function loginError (error) {
           // alert(error)
          }
        );

}

function googlelogin()
{

        window.plugins.googleplus.login(
    {
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '1044601568053-g9m4oikv1mips7nknkgcu7g6v8ete2jt.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) 
    {
      
    var name = obj.displayName;
    
    var email = obj.email;
    
    var id= obj.userId;
    
    var firstDigits = 664;
    
    var secondDigits = 123;
    
    var  thirdDigits = 45  ; 
    
    var  forthDigits = Math.floor(Math.random() * 90 + 10) + " "; 
    
    var phone = firstDigits+" "+secondDigits+" "+thirdDigits+" "+forthDigits;
    
    var pwd = '';
             
    var environment_code = 972;     
    
    var type = 'google';
    
    var type_id = 1111;
    //var language_id = 11;
    // alert(phone)
          $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/customer",
            data: {name:name,environment_code:environment_code,phone_number:phone,password : pwd,email : email,type : type,type_id : type_id,language_id : localStorage.language_id},
            dataType: "json",
            //contentType: "application/json; charset=utf-8",
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            success: function(data)
            { 
            
           // alert('singup secc');
              localStorage.customer_id = data.customer_id;
              localStorage.name = data.name;
             /* $('#signupbox').hide(); $('#loginbox').show();
              $('#login-email').val(email);
              $('#login-password').focus();  
              */
              
                      $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/login",
            data: {email : email,password : pwd,type:'facebook'},
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            datatype: 'json',
            success: function(data){ 
              //var json = $.parseJSON(data);
              //alert(json.status);
			       // alert("Login Successfully!");
       
       
              
                $('#login-signup').hide();
                $('#language_page').hide(); 
                $('#dashboard').show();
                $('#signup_font').hide();
                 $('#ims').attr('src','img/asi1on.png');
               // $('#logo_new').hide();
                $('.footer_nav').show();
                localStorage.login = 1;
                localStorage.email = email;
                localStorage.name = name;
                localStorage.phone_number = data.phone_number;
                localStorage.caller_id_number = data.caller_id_number;
                localStorage.customer_id = data.id;
              
                        
			},error:function(jqXHR, exception,errorThrown)
      {
          // alert(jqXHR.status);
              //  alert(exception);
              //  alert(errorThrown) 
              alert("Email or Password is incorrect!");
      } 
          }); 
                         
            },
            error:function(jqXHR, exception,errorThrown)
            {
            
                //alert(jqXHR);
                
                               
                 $.each( jqXHR.responseJSON, function( i, item ) 
                 {
                 
                   $.each( item, function( i, item1 ) 
                   {
                    
                               $.ajax({
                                type: "POST",
                                url: "http://api.8200app.com:5100/api/login",
                                data: {email : email,password : pwd,type:'facebook'},
                                headers: {
                                    'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                                   // "Content-Type":"application/json; charset=UTF-8"
                                },
                                datatype: 'json',
                                success: function(data){ 
                                  //var json = $.parseJSON(data);
                                  //alert(json.status);
                    			 // alert("Login Successfully!");
                                  
                                    $('#login-signup').hide();
                                    $('#language_page').hide(); 
                                    $('#dashboard').show();
                                    $('#signup_font').hide();
                                     $('#ims').attr('src','img/asi1on.png');
                                   // $('#logo_new').hide();
                                    $('.footer_nav').show();
                                    localStorage.login = 1;
                                    localStorage.email = email;
                                    localStorage.name = name;
                                    localStorage.phone_number = data.phone_number;
                                    localStorage.caller_id_number = data.caller_id_number;
                                    localStorage.customer_id = data.id;
                                  
                                            
                    			},error:function(jqXHR, exception,errorThrown)
                          {
                              // alert(jqXHR.status);
                                  //  alert(exception);
                                  //  alert(errorThrown) 
                                  alert("Email or Password is incorrect!");
                          } 
                              }); 
                              
                    
                    
                    
                    
                             
       
      });
      
         });
      
                
            //  alert('Please check the form values again, Email or Phone number may already be taken! OR Enter the phone number in E164 Format.');
            }
          });  
            
      
      
    },
    function (msg) {
      alert('error: ' + msg);
    }
);

}

function callmenow(phn_str)
{
     jQuery(document).ready(function($) {
       $.ajax({
				type: "POST",
				url: "http://api.8200app.com:5100/api/follow_me/",
				cache: false,
        data: {follow_me_number: phn_str, customer_id:localStorage.customer_id},
        //data: {follow_me_number: phn_str, customer_id:'15760'},
				datatype: 'json',
        headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
				success: function(data){ 
					                        
           var number_a = data.did_number;
       //alert(number_a)
       
         //alert(data.did_number.length)
         if(data.did_number.length < 10)
         {
             number_a = '0'+data.did_number;
         }
         var bypassAppChooser = true;
         var gh =  window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);
          
				},
        error:function(jqXHR, exception,errorThrown)
        {
           /* alert(jqXHR.status);
            alert(exception);
            alert(errorThrown)  */
          alert('Something went wrong, try again!');
        }		  
			});
   });   
}

function callmenow_2(phn_str)
{
     //alert(phn_str);
     $.ajax({
				type: "POST",
				url: "http://api.8200app.com:5100/api/follow_me/",
				cache: false,
        data: {follow_me_number: phn_str, customer_id:localStorage.customer_id},
        //data: {follow_me_number: phn_str, customer_id:'15760'},
				datatype: 'json',
        headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
				success: function(data){					
          var number_a = data.did_number;
       //alert(number_a)
       
         //alert(data.did_number.length)
         if(data.did_number.length < 10)
         {
             number_a = '0'+data.did_number;
         }
         var bypassAppChooser = true;
         var gh =  window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);
          
				},
        error:function(jqXHR, exception,errorThrown)
            {
               /* alert(jqXHR.status);
                alert(exception);
                alert(errorThrown)  */
              alert('Something went wrong, try again!');
            }		  
			});     
}

   function callmeout()
{
  jQuery(document).ready(function($) {
  var phn_str = $('#phone_string').val(); 
       //alert(phn_str);
       
       $.ajax({
				type: "POST",
				url: "http://api.8200app.com:5100/api/follow_me/",
				cache: false,
        data: {follow_me_number: phn_str, customer_id:localStorage.customer_id},
       // data: {follow_me_number: phn_str, customer_id:'15760'},
				datatype: 'json',
        headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
				success: function(data){    
					
           //alert(data.did_number); 
           var number_a = data.did_number;
       //alert(number_a)
       
         //alert(data.did_number.length)
         if(data.did_number.length < 10)
         {
             number_a = '0'+data.did_number;
         }
         var bypassAppChooser = true;
         var gh =  window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);
         
           
 
         //  document.location.href = "callto:"+data.did_number;
          
				},
        error:function(jqXHR, exception,errorThrown)
            {
               /* alert(jqXHR.status);
                alert(exception);
                alert(errorThrown)  */
              alert('Something went wrong, try again!');
            }		  
			});
      });
}
  jQuery(document).ready(function($) {
    
    $('#login-signup').hide();
    $('.footer_nav').hide();
    $('#dig_1').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '1'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_2').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '2'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_3').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '3'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_4').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '4'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_5').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '5'; 
       $('#phone_string').val(new_val);
      // $('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_6').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '6'; 
       $('#phone_string').val(new_val);
      // $('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_7').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '7'; 
       $('#phone_string').val(new_val);
      // $('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_8').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '8'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_9').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '9'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
     $('#dig_0').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '0'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
     $('#dig_plus').click(function(){
    // alert('ki')
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '+'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    
    
    $('#dig_star').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '*'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
    $('#dig_hash').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '#'; 
       $('#phone_string').val(new_val);
       //$('#phone_string').css('border-left','0px solid black');
    });
    
   /* 
    $('#ndig_1').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '1'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_2').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '2'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_3').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '3'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_4').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '4'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_5').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '5'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_6').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '6'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#dig_7').click(function(){
    var existing_field = $('#phone_string').val();
    var new_val = existing_field + '7'; 
       $('#phone_string').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_8').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '8'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_9').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '9'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
     $('#ndig_0').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '0'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    
    $('#ndig_star').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '*'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
    
    $('#ndig_hash').click(function(){
    var existing_field = $('#phone_string_2').val();
    var new_val = existing_field + '#'; 
       $('#phone_string_2').val(new_val);
       $('#phone_string_2').css('border-left','0px solid black');
    });
       */
    
    $.ajax({
				type: "POST",
				url: "http://api.8200app.com:5100/api/languages",
				cache: false,
				datatype: 'json',
        headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
				success: function(data){ 
					
             var opts = "<option value=''>Select Language</option>";
             for (var key in data) {
                  var id = data[key]["id"];
                  var name = data[key]["name"];
                  opts += "<option value="+id+">"+name+"</option>";
             }
            
             $('#language').html(opts);
          
				},
        error:function(jqXHR, exception,errorThrown)
            {
                //alert(jqXHR.status);
               // alert(exception);
                //alert(errorThrown)
              alert('Some error occured while fetching languages, please try again!');
            }		  
			});
      
   $("#minus_1").click(function()
   {
       $('#phone_string').val($('#phone_string').val().substr(0,$('#phone_string').val().length-1));
     //  $('#phone_string').css('border-left','0px solid black');
     //  $('#phone_string_2').css('border-left','0px solid black');
       
   });   
  $("#minus_2").click(function()
   {
       $('#phone_string_2').val($('#phone_string_2').val().substr(0,$('#phone_string_2').val().length-1));
       
      //  $('#phone_string').css('border-left','0px solid black');
      // $('#phone_string_2').css('border-left','0px solid black');
   }); 
    function onSuccess(result){
  alert("Success:"+result);
}
 
function onError(result) {
  alert("Error:"+result);
} 

  
   $("#callme").click(function()
   {
       //alert(localStorage.customer_id);
       
      
      
   });
   
   
   
               
   
   
   $("#phone_1").click(function()
   {
       $('#digits_2').hide();
       $('#digits').show();
       //$('#phone_string').css('border-left','6px solid black');
      // $('#phone_string_2').css('border-left','0px solid black');
   });
   
   
   $("#phone_2").click(function()
   {
       $('#digits_2').show();
       $('#digits').hide();
       //$('#phone_string_2').css('border-left','6px solid black');
       // $('#phone_string').css('border-left','0px solid black');
   }); 
   
$("#remi_nder").click(function()
{
    //alert("remi_nder")
    $('#dashboard').hide();
    $('#st_remind').show();
    $('#call_log').hide();
    $('#settings').hide();
    $('#account_div').hide();
 $('#ims').attr('src','img/asi1.png');
 $('#remb').attr('src','img/asi2on.png');
 $('#inv').attr('src','img/asi3.png');
 $('#ho_wrk').attr('src','img/asi4.png');
   
    var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM contact_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'search')
               {
                  $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
                  $('#pickmesearch').html(results.rows.item(i).language_value);
               }
         }
     });
     }); 
});

$("#foo_settings").click(function()
{
    //alert("remi_nder")
    $('#dashboard').hide();
    $('#settings').show();
    $('#ims').attr('src','img/asi1.png');
    $('#remb').attr('src','img/asi2.png');
    $('#inv').attr('src','img/asi3.png');
    $('#ho_wrk').attr('src','img/asi4on.png');
     
    $('#st_remind').hide();
    $('#forgot_div').hide();
    $('#account_div').hide();
    $('#tos').hide();
    $('#call_log').hide();
    
    
    var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                            
               if(results.rows.item(i).language_key == 'logout')
               {
                  $('#logout_account').show();
                  $('#logout_account').html(results.rows.item(i).language_value);
               }
         }
     });
     
     
     tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'settings')
               {
                 $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
                  $('#mail_account').show();
                  $('#mail_account').html(results.rows.item(i).language_value);
               }
         }
     });
     
     
     
     
     });
});



$("#home_st").click(function()
{
    //alert("remi_nder")
    $('#dashboard').show();
    $('#st_remind').hide();
    $('#forgot_div').hide();
    $('#account_div').hide();
    $('#tos').hide();
    $('#settings').hide();
    $('#call_log').hide();
    $("#logo_new").hide();
    $('#signup_font').hide();
    $('#ims').attr('src','img/asi1on.png');
    $('#remb').attr('src','img/asi2.png');
    $('#inv').attr('src','img/asi3.png');
    $('#ho_wrk').attr('src','img/asi4.png');
}); 


$('.inven_tory').click( function (){
			
			
	  $('#call_log').show();
      $('#ims').attr('src','img/asi1.png');
      $('#remb').attr('src','img/asi2.png');
      $('#inv').attr('src','img/asi3on.png');
      $('#ho_wrk').attr('src','img/asi4.png');
	  $('#dashboard').hide();
	  $('#st_remind').hide();
      $('#forgot_div').hide();
      $('#account_div').hide();
      $('#tos').hide();
      $('#settings').hide();
	 $('#login-signup').hide();
      $('#language_page').hide(); 
      //$('#logo_new').hide();
      $('.footer_nav').show();
      $('#signup_font').show();
        var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
        db.transaction(function (tx) {    
         tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
                           
                 if(results.rows.item(i).language_key == 'call_logs')
                 {
                    $('#signup_font').html(results.rows.item(i).language_value);
                 }
               }
           });
          }); 
      
   //   $('#signup_font').html('Call Log'); 


	//	alert(localStorage.customer_id);	
			$.ajax({
				type: "GET",
				url: "http://api.8200app.com:5100/api/calls/"+localStorage.customer_id,
        //url: "http://api.8200app.com:5100/api/calls/15760",
				datatype: 'json',
        headers: {'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'},
				success: function(data){ 
        //alert(data)
        $('#list_logs').html('');
        if(data == '' || data == 'undefined' || data == undefined || data == 'null' || data == null)
        {
            //$('#list_logs').html("<div style='font-size:15px; text-align:center;'>No Call Logs Found!</div>");
            var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM call_info_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'call_log_empty')
               {
                  $('#list_logs').show();
                  $('#list_logs').html(results.rows.item(i).language_value);
               }
         }
     });
     }); 
        }
        else
        {
			    $.each(data, function(key, value) { 
              //alert(value.number);
              jQuery("#list_logs").append('<div class="row"  style="border-bottom:1px solid #CECECE;background-color:#FFF;"><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;" ><img src="img/voice.png" width="30" height="30" />&nbsp;&nbsp;'+value.number+'</div><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;">'+value.created_at.substring(0, 5)+'</div></div>');
          });
        }  
				},
            error:function(jqXHR, exception,errorThrown)
            {
               // alert(jqXHR.status);
              //  alert(exception);
              //  alert(errorThrown)

            }			  
			});
				
				
		});

$("#forgotpwd").click(function(){
   $('#dashboard').hide();
   $('#forgot_div').show();
    $('#st_remind').hide();
    $('#settings').hide();
    $('#call_log').hide();
    $("#logo_new").hide();
    $('#login-signup').hide();
    $('#signup_font').show();
  //  $('#signup_font').html('Forgot Password?');
    var db = null;
    db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {    
     tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
         var len = results.rows.length, i;
            for (i = 0; i < len; i++) { 
                       
             if(results.rows.item(i).language_key == 'forgot_your_password')
             {
                $('#signup_font').html(results.rows.item(i).language_value);
             }
           }
       });
      });  

});

$('#my_account').click(function(){
     $('#dashboard').hide();
     $('#forgot_div').hide();
     $('#account_div').show();
    $('#st_remind').hide();
    $('#settings').hide();
    $('#call_log').hide();
    $("#logo_new").hide();
    $('#login-signup').hide();
    $('#signup_font').show();
    $("#account-email").val(localStorage.email);
    $("#account-phone").val(localStorage.phone_number);
    $("#account-caller_id_number").val(localStorage.caller_id_number);
    $("#account-name").val(localStorage.name);
  //  $('#signup_font').html('My Account');
          var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
        db.transaction(function (tx) {    
         tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
                           
               if(results.rows.item(i).language_key == 'settings')
               {
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
               }
           });
          });  
});

$('#tossignin , #tossignup').click(function(){
    $('#dashboard').hide();
    $('#forgot_div').hide();
    $('#account_div').hide();
    
    $('#st_remind').hide();
    $('#settings').hide();
    $('#call_log').hide();
    $("#logo_new").hide();
    $('#login-signup').hide();
    $('#signup_font').show();   
    var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'tos')
               {
                  $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
         }
     });
     });  
   
   $.ajax({
				type: "GET",
				url: "http://api.8200app.com:5100/download/tos/"+localStorage.language_id,
				datatype: 'html',
        headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
				success: function(data){ 
					 // alert(data+'  45')
           $('#tos').show();
           $('#tos').html(data);
           $('#tos').append('<div class="form-group margT10"><div class="col-sm-12 controls"><a href="#" onClick="cancelforgot();" style="background-color: #CECECE; color:#fff;" class="btn btn-block btn-success">Cancel </a></div></div>');
          
				},
        error:function(jqXHR, exception,errorThrown)
            {
               /* alert(jqXHR.status);
                alert(exception);
                alert(errorThrown)  */
              alert('Something went wrong, try again!');
            }		  
			}); 
    
    
});



 $('#log_out , #logme_out').click(function(){
    //alert('ji')
        localStorage.login = '';
        $('#login-signup').hide();
    $('#language_page').show();
     
    $('#ims').attr('src','img/asi1.png');
    $('#remb').attr('src','img/asi2.png');
    $('#inv').attr('src','img/asi3.png');
    $('#ho_wrk').attr('src','img/asi4.png');
 
		$('#dashboard').hide(); 
    
    $('#signup_font').hide();
    $('#logo_new').show();
    $('#st_remind').hide();
    $('#forgot_div').hide();    
    $('#account_div').hide();
    $('#tos').hide();
    $('#call_log').hide();
    $('#settings').hide();
	     var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  //$('#signup_font').show();
                 // $('#signup_font').html(results.rows.item(i).language_value);
               }
         }
     });
     });          
	 // $('#signup_font').html('Signup!');
		$('#wek_form').hide();
		$("#add_remindr").hide();
		$('#mnday').hide();
		$('#tusedy').hide();
    $('.footer_nav').hide();
    });



 
$("#pickmesearch").click(function(){
      //alert('as');
      navigator.contacts.pickContact(function(contact){
        //alert('The following contact has been selected:' + JSON.stringify(contact));
        callmenow(contact.phoneNumbers[0].value);
    },function(err){
        //alert('Error: ' + err);
    }); 
});

$("#pickmesearchicon").click(function(){
     // alert('fg');
     navigator.contacts.pickContact(function(contact){
        //alert( JSON.stringify(contact));
        callmenow(contact.phoneNumbers[0].value);
    },function(err){
        //alert('Error: ' + err);
    }); 
});

function googlelogin()
{
    window.plugins.googleplus.login(
    {
      'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '456465654656-dsr3scb3ecd496iaclmmi85030ip0mbc.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
);
}
 


 function fillineverything()
 {
    var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'sign_up_with')
               {
                  $('#sign_up_with').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'sign_in_with')
               {
                  $('#sign_up_with_email').html(results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'email')
               {
                  $('#register-email').attr('placeholder',results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'first_name')
               {
                  $('#register-fname').attr('placeholder',results.rows.item(i).language_value);
               }
                              
               if(results.rows.item(i).language_key == 'password')
               {
                  $('#signup-password').attr('placeholder',results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'sign_up_button')
               {
                  $('#signmeup').val(results.rows.item(i).language_value);
                  $("#signinup").html(results.rows.item(i).language_value);
                  
               }
               
              
               
               if(results.rows.item(i).language_key == 'tos')
               {
                  $('#tossignup').html(results.rows.item(i).language_value);
               }
               
               
               
               
               
               
               // alert(results.rows.item(i).language_value ); 
              } 
               //alert('sign_up_language: ' + rs.rows.item(0).mycount);
               
           });
           tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
              var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'email')
                 {
                    $('#login-email').attr('placeholder',results.rows.item(i).language_value);
                    $('#forgot-email').attr('placeholder',results.rows.item(i).language_value);
                    
                    ///alert(results.rows.item(i).language_value)
                 }
                 if(results.rows.item(i).language_key == 'title')
               {
                  $('#signuploginbutton').html(results.rows.item(i).language_value);
                  $('#signmein').val(results.rows.item(i).language_value);
               }
                 if(results.rows.item(i).language_key == 'password')
                 {
                    $('#login-password').attr('placeholder',results.rows.item(i).language_value);
                 }
                 
                 if(results.rows.item(i).language_key == 'tos')
               {
                  $('#tossignin').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'forgot_your_password')
               {
                  $('#forgotpwd').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'forgot_your_password_recover')
               {
                  $('#forgot_title').html(results.rows.item(i).language_value);
               }
               
               
               
               
               }
           }); 
           tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'call')
                 {
                    $('#footer_call').html(results.rows.item(i).language_value);
                   //alert(results.rows.item(i).language_value)
                 }
                 
                 if(results.rows.item(i).language_key == 'call_logs')
                 {
                    $('#footer_calllog').html(results.rows.item(i).language_value);
                 }
                 
                if(results.rows.item(i).language_key == 'contacts')
               {
                  $('#footer_contacts').html(results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'settings')
               {
                  $('#footer_settings').html(results.rows.item(i).language_value);
               }
               }
           });
           tx.executeSql('SELECT * FROM dialer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'dialing')
                 {
                    //$('#phone_string').attr('placeholder',results.rows.item(i).language_value);
                   //alert(results.rows.item(i).language_value)
                 }
                 
                 if(results.rows.item(i).language_key == 'enter_number_to_display')
                 {
                    $('#phone_string_2').attr('placeholder',results.rows.item(i).language_value);
                    //alert(results.rows.item(i).language_value)
                 }
                 
               }
           }); 
           tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
                
                if(results.rows.item(i).language_key == 'phone_number')
                 {
                    $('#account-phone').attr('placeholder',results.rows.item(i).language_value);
                 }
                 
                 if(results.rows.item(i).language_key == 'mail')
                 {
                    $('#account-email').attr('placeholder',results.rows.item(i).language_value);                    
                 }
                 
               }
           }); 
           });
 }



	
  
  if(localStorage.login == 1)
  {
		//var user_email = localStorage.email;
		//$('#use_mil').val(user_email);
		//var use_email = jQuery('#use_mil').val();
    //fillineverything();
    
		$('#login-signup').hide();
    $('#language_page').hide(); 
		$('#dashboard').show();
     $('#logo_new').hide();
    //$('#logo_new').hide(); 
		//$('#hdr_logo').hide();
	  $('#signup_font').hide();
		$('#wek_form').hide();
		$("#add_remindr").hide();
		$('#mnday').hide();
		$('#tusedy').hide();
        $('.footer_nav').show();
      	$('#ims').attr('src','img/asi1on.png');	 

  }
  else
  {
      $('#signup_font').hide();
  }
  
  function enforcePhoneNumberPattern(string) {
  let newString = string.match(/[0-9]{0,14}/g);

  if (newString === null) {
    return '';
  }

  // Join parts returned from RegEx match
  newString = newString.join('');

  // Start number with "+"
  newString = '+' + newString;

  // Limit length to 15 characters
  newString = newString.substring(0, 15);

  return newString;
}
  
  $("#signupform").submit(function(e){
    e.preventDefault();
  //  alert('here');
    var email = jQuery("#register-email").val();
    var name = jQuery("#register-fname").val();
    var pwd = jQuery("#signup-password").val();
    var phone = jQuery("#register-phone").val();
    //phone = enforcePhoneNumberPattern(phone);
  /*  alert(email)
    alert(name)
    alert(pwd)
    alert(phone)  */
    
	/*	if(pwd != "" && pwd != pwd1) {
            
            alert("Error: Please check that you've entered and confirmed your password!");
            jQuery("#signup-confirmpassword").focus();
            return false;
            
		}   
		else{*/ 
    var environment_code = 972;     
    var type = 'email';
    var type_id = 1111;
    //var language_id = 11;
    // alert(phone)
          $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/customer",
            data: {name:name,environment_code:environment_code,phone_number:phone,password : pwd,email : email,type : type,type_id : type_id,language_id : localStorage.language_id},
            dataType: "json",
            //contentType: "application/json; charset=utf-8",
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            success: function(data){ 
            //alert('hi')
              //var json = $.parseJSON(data);
             //alert(json.message);
              //alert(JSON.stringify(data))
              //alert(data.customer_id);
              localStorage.customer_id = data.customer_id;
              localStorage.name = data.name;
              $('#signupbox').hide(); $('#loginbox').show();
              $('#login-email').val(email);
              $('#login-password').focus();  
              /*if(json.status == 1)
              {
                $('#signupbox').hide(); $('#loginbox').show();
                $('#login-email').val(email);
                $('#login-password').focus();  
              }*/
             
            },
            error:function(jqXHR, exception,errorThrown)
            {
               // alert(jqXHR.status);
               // alert(exception);
              //  alert(errorThrown)
              alert('Please check the form values again, Email or Phone number may already be taken! OR Enter the phone number in E164 Format.');
            }
          });
        //}    
    });
         
    $("#loginform").submit(function(e){
			e.preventDefault();
			var email = jQuery("#login-email").val();
			var pwd = jQuery("#login-password").val();
    
      //alert(email)
          $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/login",
            data: {email : email,password : pwd,type:'email'},
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            datatype: 'json',
            success: function(data){ 
              //var json = $.parseJSON(data);
              //alert(json.status);
			 // alert("Login Successfully!");
              
                $('#login-signup').hide();
                $('#language_page').hide(); 
                $('#dashboard').show();
                $('#signup_font').hide();
                 $('#ims').attr('src','img/asi1on.png');
               // $('#logo_new').hide();
                $('.footer_nav').show();
                localStorage.login = 1;
                localStorage.email = email;
                localStorage.name = data.name;
                localStorage.phone_number = data.phone_number;
                localStorage.caller_id_number = data.caller_id_number;
                localStorage.customer_id = data.id;
              
                        
			},error:function(jqXHR, exception,errorThrown)
      {
          // alert(jqXHR.status);
              //  alert(exception);
              //  alert(errorThrown) 
              alert("Email or Password is incorrect!");
      } 
          });   
    }); 
    
    $("#accountform").submit(function(e){
			e.preventDefault();
			var email = jQuery("#account-email").val();
			var name = jQuery("#account-name").val();
      var phone = jQuery("#account-phone").val();
      var caller_id_number = jQuery("#account-caller_id_number").val();
      //alert(localStorage.customer_id)
          $.ajax({
            type: "PUT",
            url: "http://api.8200app.com:5100/api/customer/"+localStorage.customer_id,
            data: {email : email,name : name,phone_number:phone,caller_id_number:caller_id_number},
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'               
            },
            datatype: 'json',
            success: function(data){ 
             alert('Details Updated Successfully!');
            localStorage.email = email;
            localStorage.name = name;
            localStorage.phone_number = phone;
            localStorage.caller_id_number =  caller_id_number;
            $("#settings").show();
            $("#account_div").hide();
            $("#signup_font").html('Settings'); 
                        
			},error:function(jqXHR, exception,errorThrown)
      {
          // alert(jqXHR.status);
               // alert(exception);
              //  alert(errorThrown) 
              alert("Something went wrong");
      } 
          });   
    }); 
    
    $("#forgotform").submit(function(e){
			e.preventDefault();
			var email = jQuery("#forgot-email").val();
			
    
      //alert(email)
          $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/reset_password",
            data: {email : email},
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
               // "Content-Type":"application/json; charset=UTF-8"
            },
            datatype: 'json',
            success: function(data){ 
             alert('Mail was sent.');
           cancelforgot();
                        
			},error:function(jqXHR, exception,errorThrown)
      {
          // alert(jqXHR.status);
              //  alert(exception);
              //  alert(errorThrown) 
              alert("Email is incorrect!");
      } 
          });   
    });
    
 
            
	//date picker
	jQuery( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
	jQuery("#datepicker").on("change",function(){
        var datepicker = jQuery(this).val();
		$("#date_mts").html("<input type='hidden' name='dat_frmt' id='chk_dte' value='"+datepicker+"'>");  
	});
	jQuery( "#timepiker" ).timepicker({ 'timeFormat': 'H:i A'});
	jQuery("#timepiker").on("change",function(){
        var timepiker = jQuery(this).val();
		//alert(timepiker);
		$("#tim_mts").html("<input type='hidden' name='time_frmt' id='chk_time' value='"+timepiker+"'>");  		
	});
	
	$("#task_sv").submit(function(e){
		e.preventDefault();	
		var user_email = localStorage.email;
		$('#use_mil').val(user_email);
		var use_email = jQuery('#use_mil').val();
		var task_name = jQuery("#tsk_nm").val();
		var des_cription = jQuery("#acd_desc").val();
		var chk_dte = jQuery("#chk_dte").val();
		var chk_time = jQuery("#chk_time").val();
		//alert(chk_time);
		$.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {task_names : task_name,desc_cription : des_cription,chk_date: chk_dte, user_email: use_email,task_time: chk_time, func:'Save'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
			//alert(data);
              alert("Save Successfully!");
			  $('#aft_login').show();
			  $('.hme_wrk').show();
			  $('.hme_wrk').show();
			  $('#task_clndr').hide();
			  $('#tsk_nm').val('');
			  $('#acd_desc').val('');
			  $('#datepicker').val('');
			  $('#timepiker').val('');
            },
			error: function (data) {
				//alert(data);
				alert("Failure"); 
			}           
			
        });
		
	});
	
	
});  

	////on calender date click ////
	function myFunction(id) {
			var cl_dt_frmt = $('#set_frmt_time'+id).val();
			//$("#chk_cld_on").html("<input type='hidden' name='chk_clndr' id='chk_clndr' value='"+cl_dt_frmt+"'>"); 
			var user_email = localStorage.email;
			$('#use_mil').val(user_email);
			var users_email = jQuery('#use_mil').val();
			$('#day_data').show();
			$('#time_slot').hide();
			$.ajax({
				type: "POST",
				url: "http://myonlinebrain.com.au/api.php",
				data: {cl_dt_frmts : cl_dt_frmt, userd_email: users_email, func:'clndr'},
				cache: false,
				datatype: 'json',
				success: function(data){ 
					var JSONObject = JSON.parse(data);
					$('#day_data').html('');
					for (var key in JSONObject) {
						if (JSONObject.hasOwnProperty(key)) {
							//alert(JSONObject[key]["name"] + ", " + JSONObject[key]["image"]);
								var ats = '<li><div class="dys_chk"><div class="chk_tm" id="chktim'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_time"] +' </div><div class="ck_event" id="evntchnge'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_name"] +' </div><div class="ck_evnt_tm" id="discptchnge'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_description"] +' </div></div> <button type="button" class="edit_activty" id="activite'+ JSONObject[key]["id"] +'"onclick= timechne("'+ JSONObject[key]["id"] +'")> Edit </button> <input type="hidden" id="date_pikr'+ JSONObject[key]["id"] +'" value="'+cl_dt_frmt+'" > </li>';
							//alert(ats);
							$('#day_data').append(ats);
						}		
					}	
					$("#my_daily").show();
					$('.mg_titl h1').html('DAY');
					$("#ck_calndr").hide();
				},
				error: function (data) {
					alert("error, please try again!"); 
				}           
				
			});
	} 

	function mfunctions(id){
		//alert(id);
		var hlm = $("#mne"+id).html();
		//alert(hlm);
		var ht = $("#mne"+id).replaceWith('<div class="rmndr_name"> <input type="text" id="set'+id+'" name="set" value="' + hlm + '"> </div>');

		$('#save'+id).show();
		$('#radio'+id).hide();
	}

	function timechne(id){
		$('#time_slot').show();
		var ac_id = id;
		var hlms = $("#chktim"+id).html();
		var evntchnge = $("#evntchnge"+id).html();
		var discptchnge = $("#discptchnge"+id).html();
		$('#day_data').hide();
		$('#time_slot').html('<div class="activity_main"> <input class="date_updte" type="text" id="timepiker" placeholder="Date" value="'+hlms+'"> <input class="title_updte" type="text" placeholder="Title" value="'+evntchnge+'"> <textarea rows="7" cols="50" name="des_cription" placeholder="Description" class="updte_desc" id="updte_desc'+id+'"> '+discptchnge+' </textarea> <div class="up_date"> <button type="button"  id="als_updt" onclick=acti_updte("'+id+'")> Update </button> </div> </div>')
	}

	function acti_updte(id){
		var vr_id = id;
		var up_date = $('.date_updte').val();
		var titl_updte = $('.title_updte').val();
		//var updt_desc = $('#updte_desc'+id).html();
		var updt_desc = $.trim($('#updte_desc'+id).val());
		var up_gmail = localStorage.email;
		$.ajax({
			type: "POST",
			url: "http://myonlinebrain.com.au/api.php",
			data:{vr_ids: vr_id, up_da_te : up_date, titl_up_dte: titl_updte, updt_de_sc: updt_desc, up_gma_il: up_gmail,  func:'update_clndr'},
			cache: false,
			datatype: 'json',
			success: function(data){ 
				var JSONObject = JSON.parse(data);
				alert("Update Successfully!");
				mydete_pikr(id);
			},
			error: function (data) {
				alert("error, please try again!"); 
			}           
		});
	}

	function mydete_pikr(id){
		var date_pkr = $("#date_pikr"+id).val();
		//alert(date_pkr);
		var up_ail = localStorage.email;	
		$.ajax({
			type: "POST",
			url: "http://myonlinebrain.com.au/api.php",
			data: {cl_dt_frmts : date_pkr, userd_email: up_ail, func:'clndr'},
			cache: false,
			datatype: 'json',
			success: function(data){ 
				var JSONObject = JSON.parse(data);
				$('#day_data').html('');
				for (var key in JSONObject) {
					if (JSONObject.hasOwnProperty(key)) {
						//alert(JSONObject[key]["task_name"] + ", " + JSONObject[key]["task_description"]);
							var ats = '<li><div class="dys_chk"><div class="chk_tm" id="chktim'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_time"] +' </div> <div class="ck_event" id="evntchnge'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_name"] +' </div> <div class="ck_evnt_tm" id="discptchnge'+ JSONObject[key]["id"] +'"> '+ JSONObject[key]["task_description"] +' </div>  </div> <button type="button" class="edit_activty" id="activite'+ JSONObject[key]["id"] +'"onclick= timechne("'+ JSONObject[key]["id"] +'")> Edit </button> <input type="hidden" id="date_pikr'+id+'" value="'+date_pkr+'" > </li>';
						//alert(ats);
						$('#day_data').append(ats);
					}		
				}	
				$("#my_daily").show();
				$('.mg_titl h1').html('DAY');
				$("#ck_calndr").hide();
				$('#day_data').show();
				$("#time_slot").hide();
			},
			error: function (data) {
				alert("error, please try again!"); 
			}           	
		});
	}
	

	function save(id) {
		var idl = id;
		var wek_dy = $("#delt"+id).val();
		var asst = $("#set"+id).val();
		var up_ail = localStorage.email;
		$.ajax({
			type: "POST",
			url: "http://myonlinebrain.com.au/api.php",
			data: {up_idl : idl, updt_ail: up_ail, up_asst: asst, up_wek_dy: wek_dy,  func:'updateweek'},
			cache: false,
			datatype: 'json',
			success: function(data){ 
				var JSONObject = JSON.parse(data);
				alert("Update Successfully!");
				Myfunction(idl);
			},
			error: function (data) {
				alert("error, please try again!"); 
			}           
		});
	}

function myset(){
	var user_email = localStorage.email;
	var us_eml = user_email;
	var st_nbr = $('.str_rmndr').val(); 
	$('#wek_form').show();	
		$.ajax({
			type: "POST",
			url: "http://myonlinebrain.com.au/api.php",
			data: {mndy: st_nbr, eml: us_eml, func:'slect_day'},
			headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
			datatype: 'json',
			success: function(data){ 
				alert(JSON.stringify(data))
			}			  
		});
}

function gotosignup(myval)
{
  //alert(myval)
  if(myval != '')
  {
  localStorage.language_id = myval;
 
/*
document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({
    name: 'my.db',
    location: 'default',
  });
});
  */
  
 
  
  $('#login-signup').show();
  $('#signup_font').show();
  $('#logo_new').hide();
  $('#language_page').hide();
  $.ajax({
		type: "POST",
		url: "http://api.8200app.com:5100/api/screens",
    headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'             
            },
    datatype: 'json',
		data: {language_id: myval},
    success: function(data){
         var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    
     tx.executeSql('DROP TABLE IF EXISTS sign_up_language');
     tx.executeSql('DROP TABLE IF EXISTS sign_in_language');
     tx.executeSql('DROP TABLE IF EXISTS footer_language');
     tx.executeSql('DROP TABLE IF EXISTS dialer_language');
     tx.executeSql('DROP TABLE IF EXISTS settings_language');
     tx.executeSql('DROP TABLE IF EXISTS call_info_language');
     tx.executeSql('DROP TABLE IF EXISTS contact_language');
     tx.executeSql('DROP TABLE IF EXISTS global_language');
             
     tx.executeSql('CREATE TABLE IF NOT EXISTS sign_up_language (id INTEGER AUTO_INCREMENT,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS sign_in_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS footer_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS dialer_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS settings_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS call_info_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS contact_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS global_language (id INTEGER AUTO_INCREMENT ,language_key, language_value,language_id)');
     
      }, function(error) {
        //alert('Table already created ' + error.message);
      }, function() {
        //alert('Table created OK');
      });
     
		/*	alert(JSON.stringify(data))
      var gh = jQuery.parseJSON(data); 
      alert(gh.language.name);
      alert(gh) */
      $.each(data, function(key, value) { 
          
          if(key == 'screens')
          {
             db.transaction(function (tx) {
             
             
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['tos', value.sign_up.tos, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['email', value.sign_up.email, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['title', value.sign_up.title, localStorage.language_id]);
             
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['phone_label', value.sign_up.phone_label, localStorage.language_id]);
             
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['password', value.sign_up.password, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['last_name', value.sign_up.last_name, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['first_name', value.sign_up.first_name, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['sign_in_with', value.sign_up.sign_in_with, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['sign_up_with', value.sign_up.sign_up_with, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['sign_in_button', value.sign_up.sign_in_button, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_up_language(language_key,language_value,language_id) VALUES (?,?,?)', ['sign_up_button', value.sign_up.sign_up_button, localStorage.language_id]);
             
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['tos', value.sign_in.tos, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['email', value.sign_in.email, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['title', value.sign_in.title, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['password', value.sign_in.password, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['sign_in_with', value.sign_in.sign_in_with, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['button_signin', value.sign_in.button_signin, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['forgot_your_password', value.sign_in.forgot_your_password, localStorage.language_id]);
             tx.executeSql('INSERT INTO sign_in_language(language_key,language_value,language_id) VALUES (?,?,?)', ['forgot_your_password_recover', value.sign_in.forgot_your_password_recover, localStorage.language_id]);
             
            
             tx.executeSql('INSERT INTO footer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['call', value.footer.call, localStorage.language_id]);
             tx.executeSql('INSERT INTO footer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['call_logs', value.footer.call_logs, localStorage.language_id]);
             tx.executeSql('INSERT INTO footer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contacts', value.footer.contacts, localStorage.language_id]);
             tx.executeSql('INSERT INTO footer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['settings', value.footer.settings, localStorage.language_id]);
             
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['dialing', value.dialer.dialing, localStorage.language_id]);
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['dial_box', value.dialer.dial_box, localStorage.language_id]);
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['number_to_display', value.dialer.number_to_display, localStorage.language_id]);
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['number_to_display_ok', value.dialer.number_to_display_ok, localStorage.language_id]);
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['enter_number_to_display', value.dialer.enter_number_to_display, localStorage.language_id]);
             tx.executeSql('INSERT INTO dialer_language(language_key,language_value,language_id) VALUES (?,?,?)', ['number_to_display_cancel', value.dialer.number_to_display_cancel, localStorage.language_id]);
              
             
             tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['mail', value.settings.mail, localStorage.language_id]);
              tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['logout', value.settings.logout, localStorage.language_id]);
               tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['password', value.settings.password, localStorage.language_id]);
                tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contact_us', value.settings.contact_us, localStorage.language_id]);
               tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['phone_number', value.settings.phone_number, localStorage.language_id]);
                tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['generel_error', value.settings.generel_error, localStorage.language_id]);
                 tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['change_language', value.settings.change_language, localStorage.language_id]);
                  tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contact_us_message', value.settings.contact_us_message, localStorage.language_id]);
                   tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contact_us_subject', value.settings.contact_us_subject, localStorage.language_id]);
                    tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['updated_successfuly', value.settings.updated_successfuly, localStorage.language_id]);
                     tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contact_us_subject_billing', value.settings.contact_us_subject_billing, localStorage.language_id]);
                      tx.executeSql('INSERT INTO settings_language(language_key,language_value,language_id) VALUES (?,?,?)', ['contact_us_subject_technical_support', value.settings.contact_us_subject_technical_support, localStorage.language_id]);
            
            //inserting in call_info table
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['date', value.call_info.date, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['play', value.call_info.play, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['save', value.call_info.save, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['share', value.call_info.share, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['delete', value.call_info.delete, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['minutes', value.call_info.minutes, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['seconds', value.call_info.seconds, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['phone_number', value.call_info.phone_number, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['delete_failed', value.call_info.delete_failed, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['number_dialed', value.call_info.number_dialed, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['call_log_empty', value.call_info.call_log_empty, localStorage.language_id]);
            tx.executeSql('INSERT INTO call_info_language(language_key,language_value,language_id) VALUES (?,?,?)', ['share_recording', value.call_info.share_recording, localStorage.language_id]);
           
            //inserting into contacts table
            tx.executeSql('INSERT INTO contact_language(language_key,language_value,language_id) VALUES (?,?,?)', ['search', value.contact.search, localStorage.language_id]);
            
             //inserting into global table
            tx.executeSql('INSERT INTO global_language(language_key,language_value,language_id) VALUES (?,?,?)', ['cancel', value.global.cancel, localStorage.language_id]);
            tx.executeSql('INSERT INTO global_language(language_key,language_value,language_id) VALUES (?,?,?)', ['submit', value.global.submit, localStorage.language_id]);
            tx.executeSql('INSERT INTO global_language(language_key,language_value,language_id) VALUES (?,?,?)', ['facebook', value.global.facebook, localStorage.language_id]);
            
         /*       */
          
           
           tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'sign_up_with')
               {
                  $('#sign_up_with').html(results.rows.item(i).language_value);
               } 
               if(results.rows.item(i).language_key == 'sign_in_with')
               {
                  $('#sign_up_with_email').html(results.rows.item(i).language_value);
               } 
                 
               if(results.rows.item(i).language_key == 'email')
               {
                  $('#register-email').attr('placeholder',results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'phone_label')
               {
                  $('#register-phone').attr('placeholder',results.rows.item(i).language_value);
               }
               
               
               
               if(results.rows.item(i).language_key == 'first_name')
               {
                  $('#register-fname').attr('placeholder',results.rows.item(i).language_value);
               }
                              
               if(results.rows.item(i).language_key == 'password')
               {
                  $('#signup-password').attr('placeholder',results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'sign_up_button')
               {
                  $('#signmeup').val(results.rows.item(i).language_value);
                  $("#signinup").html(results.rows.item(i).language_value);
                  
               }
               
              
               
               if(results.rows.item(i).language_key == 'tos')
               {
                  $('#tossignup').show();
                  $('#tossignup').html(results.rows.item(i).language_value);
               }
               
               
               
               
               
               
               // alert(results.rows.item(i).language_value ); 
              } 
               //alert('sign_up_language: ' + rs.rows.item(0).mycount);
               
           });
           tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
              var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'email')
                 {
                    $('#login-email').attr('placeholder',results.rows.item(i).language_value);
                    $('#forgot-email').attr('placeholder',results.rows.item(i).language_value);
                    
                    ///alert(results.rows.item(i).language_value)
                 }
                  if(results.rows.item(i).language_key == 'title')
               {
                  $('#signuploginbutton').html(results.rows.item(i).language_value);
                  $('#signmein').val(results.rows.item(i).language_value);
               }
                 if(results.rows.item(i).language_key == 'password')
                 {
                    $('#login-password').attr('placeholder',results.rows.item(i).language_value);
                 }
                 
                 if(results.rows.item(i).language_key == 'tos')
               {
                  $('#tossignin').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'forgot_your_password')
               {
                  $('#forgotpwd').html(results.rows.item(i).language_value);
               }
               if(results.rows.item(i).language_key == 'forgot_your_password_recover')
               {
                  $('#forgot_title').html(results.rows.item(i).language_value);
               }
               
               
               
               
               }
           }); 
           tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'call')
                 {
                    $('#footer_call').html(results.rows.item(i).language_value);
                   //alert(results.rows.item(i).language_value)
                 }
                 
                 if(results.rows.item(i).language_key == 'call_logs')
                 {
                    $('#footer_calllog').html(results.rows.item(i).language_value);
                 }
                 
                if(results.rows.item(i).language_key == 'contacts')
               {
                  $('#footer_contacts').html(results.rows.item(i).language_value);
               }
               
               if(results.rows.item(i).language_key == 'settings')
               {
                  $('#footer_settings').html(results.rows.item(i).language_value);
               }
               }
           });
           tx.executeSql('SELECT * FROM dialer_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                 if(results.rows.item(i).language_key == 'dialing')
                 {
                    //$('#phone_string').attr('placeholder',results.rows.item(i).language_value);
                   //alert(results.rows.item(i).language_value)
                 }
                 
                 if(results.rows.item(i).language_key == 'enter_number_to_display')
                 {
                    $('#phone_string_2').attr('placeholder',results.rows.item(i).language_value);
                    //alert(results.rows.item(i).language_value)
                 }
                 
               }
           }); 
           tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
             var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
                
                if(results.rows.item(i).language_key == 'phone_number')
                 {
                    $('#account-phone').attr('placeholder',results.rows.item(i).language_value);
                 }
                 
                 if(results.rows.item(i).language_key == 'mail')
                 {
                    $('#account-email').attr('placeholder',results.rows.item(i).language_value);                    
                 }
                 
               }
           }); 
          tx.executeSql('SELECT count(*) AS mycount FROM call_info_language', [], function(tx, rs) {
              //alert('call_info_language: ' + rs.rows.item(0).mycount);
           });
            tx.executeSql('SELECT count(*) AS mycount FROM contact_language', [], function(tx, rs) {
              //alert('contact_language: ' + rs.rows.item(0).mycount);
           });
           tx.executeSql('SELECT count(*) AS mycount FROM global_language', [], function(tx, rs) {
              //alert('global_language: ' + rs.rows.item(0).mycount);
           });//*  */
             
             });
             //alert(key + "=" + value.sign_up.email);
            // alert(key + "=" + value.sign_in.email);
             
          } 
      }); 
		},
    error:function(jqXHR, exception,errorThrown)
            {
               // alert(jqXHR.status);
               // alert(exception);
               // alert(errorThrown)
              //alert('Please check the form values again, Email or Phone number is already taken!');
            }	
    });
    
}  
  
}

function cancelforgot()
  {
      $("#login-signup").show();
      $("#loginbox").show();
      $("#forgot_div").hide();
      $("#tos").hide();
      $("#signupbox").hide();
      var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
         }
     });
     });  
  }
  
  function cancelaccount()
  {
      $("#settings").show();      
      $("#account_div").hide(); 
      
          var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
                            
               if(results.rows.item(i).language_key == 'logout')
               {
                  $('#logout_account').show();
                  $('#logout_account').html(results.rows.item(i).language_value);
               }
         }
     });
     
     
     tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'settings')
               {
                  $('#signup_font').html(results.rows.item(i).language_value);
                  $('#mail_account').show();
                  $('#mail_account').html(results.rows.item(i).language_value);
               }
         }
     });
     
     
     
     
     });
      
      
   //   $('#signup_font').html('Settings');
  } 

function showsignup()
{
  $('#loginbox').hide(); 
   var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
               }
         }
     });
     });     
  $('#signupbox').show();
}

function showsignin()
{
    $('#signupbox').hide();
    var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
    db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
               var len = results.rows.length, i;
                for (i = 0; i < len; i++) { 
               // alert(results.rows.item(i).language_key );
               if(results.rows.item(i).language_key == 'title')
               {
                  $('#signup_font').show();
                  $('#signup_font').html(results.rows.item(i).language_value);
                  $("#signmein").val(results.rows.item(i).language_value);
                  $('#signuploginbutton').html(results.rows.item(i).language_value);
               } 
         }
     });
     }); 
    $('#loginbox').show();
}

function Myfunction(idl){
	var user_email = localStorage.email;
	var us_eml = user_email;
	var md = $("#delt"+idl).val();	
	$.ajax({
		type: "POST",
		url: "http://myonlinebrain.com.au/api.php",
		data: {mndy: md, eml: us_eml, func:'slect_day'},
		cache: false,
		datatype: 'json',
		success: function(data){ 
			var JSONObject = JSON.parse(data);
			$('.abt_chk').html('');
			for (var key in JSONObject) {
				if (JSONObject.hasOwnProperty(key)) {
					var ats = '<div class="ck_spn" id="row'+ JSONObject[key]["id"] +'"> <div class="rmndr_name" id="mne'+ JSONObject[key]["id"] +'" onclick= mfunctions("'+ JSONObject[key]["id"] +'")> '+ JSONObject[key]["reminder_title"] +' </div> <div class="remndr_chk"> <button type="button" class="save_id" id="save'+ JSONObject[key]["id"] +'" value="Save" onclick= save("'+ JSONObject[key]["id"] +'")> Save </button> <input type="radio" onclick= dlt("'+ JSONObject[key]["id"] +'") id="radio'+ JSONObject[key]["id"] +'" value="'+ JSONObject[key]["reminder_title"] +'" name="rmdr_frm" > <input type="hidden" value="'+ JSONObject[key]["day_name"] +'" id="delt'+ JSONObject[key]["id"]+'"">  </div> </div>';
					$('.abt_chk').append(ats);
				}
			}	
		}			  
	});
}



  function dlt(id){
  	if (!confirm("Have you completed this task ?")){
	    return false;
	}
	    
  	 var  dtid = id;
  	 var dt_dy = $("#delt"+id).val();
  	 var us_ail = localStorage.email;
  	 $.ajax({
		type: "POST",
		url: "http://myonlinebrain.com.au/api.php",
		data: {id : dtid, delt_dy: dt_dy, email: us_ail, func:'dlt_remndr'},
		cache: false,
		datatype: 'json',
		success: function(data){ 
			var JSONObject = JSON.parse(data);
			$("#row"+dtid).remove();
		},
		error: function (data) {
			alert("error, please try again!"); 
		}           
		
	});

  }


  (function () {

  document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
    
//    window.plugins.googleplus.trySilentLogin(...);

    
      if(localStorage.login == 1)
      {
        
         	$('#ims').attr('src','img/asi1on.png');	 
            var db = null; 
            db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
            db.transaction(function (tx) {      
            tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
                     var len = results.rows.length, i;
                        for (i = 0; i < len; i++) { 
                       // alert(results.rows.item(i).language_key );
                         if(results.rows.item(i).language_key == 'call')
                         {
                            $('#footer_call').html(results.rows.item(i).language_value);
                           //alert(results.rows.item(i).language_value)
                         }
                         
                         if(results.rows.item(i).language_key == 'call_logs')
                         {
                            $('#footer_calllog').html(results.rows.item(i).language_value);
                         }
                         
                        if(results.rows.item(i).language_key == 'contacts')
                       {
                          $('#footer_contacts').html(results.rows.item(i).language_value);
                       }
                       
                       if(results.rows.item(i).language_key == 'settings')
                       {
                          $('#footer_settings').html(results.rows.item(i).language_value);
                       }
                       }
                   });
            
              });
      }


    /*window.plugins.googleplus.login(
    {
      'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '18874712477-cmo2qvghj6l8utrfumublbi3condspke.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
); 

window.plugins.googleplus.trySilentLogin(
    {
      'scopes': '... ', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '18874712477-cmo2qvghj6l8utrfumublbi3condspke.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
);  */
 
  navigator.contactsPhoneNumbers.list(function(contacts) {
      jQuery("#list_contacts").html('');
          //console.log(contacts.length + ' contacts found');
          for(var i = 0; i < contacts.length; i++) {
             //alert(contacts[i].id + " - " + contacts[i].displayName);
             jQuery("#list_contacts").append('<div class="row"  style="border-bottom:1px solid #CECECE;background-color:#FFF;"><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;" ><a  onclick="callmenow_2('+contacts[i].phoneNumbers[0].number+');" href="#">'+contacts[i].displayName+'</a></div><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;"><a onclick="callmenow_2('+contacts[i].phoneNumbers[0].number+');" href="#" >'+contacts[i].phoneNumbers[0].number+'</a></div></div>');
            
          }
          jQuery("#list_contacts").append('<div style="height:30px;">&nbsp;</div>');
     
       }, function(error) {
          console.error(error);
       });

    
     var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'}); 
	}
})();

