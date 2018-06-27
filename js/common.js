function onSuccess1(result) {
    // alert("Success:"+result);
}

function onError1(result) {
    //alert("Error:"+result);
}

function checkLoginState() {


    var fbLoginSuccess = function(userData) {
        //alert(JSON.stringify(userData));
        var userID = userData.authResponse.userID;

        facebookConnectPlugin.api(userID + "/?fields=id,email,first_name,last_name", ["user_birthday"],
            function onSuccess(result) {
                //alert(JSON.stringify(result));
                var id = result.id;
                var email = result.email;
                var firstName = result.first_name;
                var lastName = result.last_name;
                var name = firstName + " " + lastName;

                var firstDigits = 664;

                var secondDigits = 123;

                var thirdDigits = 45;

                var forthDigits = Math.floor(Math.random() * 90 + 10) + " ";

                var phone = firstDigits + " " + secondDigits + " " + thirdDigits + " " + forthDigits;

                var pwd = '';


                var environment_code = 972;
                var type = 'facebook';
                var type_id = 1111;
                //var language_id = 11;
                // alert(phone)
                $.ajax({
                    type: "POST",
                    url: "http://api.8200app.com:5100/api/customer",
                    data: {
                        name: name,
                        environment_code: environment_code,
                        phone_number: phone,
                        password: pwd,
                        email: email,
                        type: type,
                        type_id: type_id,
                        language_id: localStorage.language_id
                    },
                    dataType: "json",
                    //contentType: "application/json; charset=utf-8",
                    headers: {
                        'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                        // "Content-Type":"application/json; charset=UTF-8"
                    },
                    success: function(data) {

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
                            data: {
                                email: email,
                                password: pwd,
                                type: 'facebook'
                            },
                            headers: {
                                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                                // "Content-Type":"application/json; charset=UTF-8"
                            },
                            datatype: 'json',
                            success: function(data) {
                                //var json = $.parseJSON(data);
                                //alert(json.status);
                                // alert("Login Successfully!");



                                $('#login-signup').hide();
                                $('#language_page').hide();
                                $('#dashboard').show();
                                $('#signup_font').hide();
                                $('#ims').attr('src', 'img/asi1on.png');
                                // $('#logo_new').hide();
                                $('.footer_nav').show();
                                localStorage.login = 1;
                                localStorage.email = email;
                                localStorage.name = name;
                                localStorage.phone_number = data.phone_number;
                                localStorage.caller_id_number = data.caller_id_number;
                                localStorage.customer_id = data.id;


                            },
                            error: function(jqXHR, exception, errorThrown) {
                                // alert(jqXHR.status);
                                //  alert(exception);
                                //  alert(errorThrown) 
                                alert("Email or Password is incorrect!");
                            }
                        });

                    },
                    error: function(jqXHR, exception, errorThrown) {

                        //alert(jqXHR);


                        $.each(jqXHR.responseJSON, function(i, item) {

                            $.each(item, function(i, item1) {

                                $.ajax({
                                    type: "POST",
                                    url: "http://api.8200app.com:5100/api/login",
                                    data: {
                                        email: email,
                                        password: pwd,
                                        type: 'facebook'
                                    },
                                    headers: {
                                        'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                                        // "Content-Type":"application/json; charset=UTF-8"
                                    },
                                    datatype: 'json',
                                    success: function(data) {
                                        //var json = $.parseJSON(data);
                                        //alert(json.status);
                                        // alert("Login Successfully!");

                                        $('#login-signup').hide();
                                        $('#language_page').hide();
                                        $('#dashboard').show();
                                        $('#signup_font').hide();
                                        $('#ims').attr('src', 'img/asi1on.png');
                                        // $('#logo_new').hide();
                                        $('.footer_nav').show();
                                        localStorage.login = 1;
                                        localStorage.email = email;
                                        localStorage.name = name;
                                        localStorage.phone_number = data.phone_number;
                                        localStorage.caller_id_number = data.caller_id_number;
                                        localStorage.customer_id = data.id;


                                    },
                                    error: function(jqXHR, exception, errorThrown) {
                                        // alert(jqXHR.status);
                                        //  alert(exception);
                                        //  alert(errorThrown) 
                                        alert("Email or Password is incorrect!");
                                    }
                                });

                            });

                        });

                    }
                });




            },
            function onError(error) {
                console.error("Failed: ", error);
            }
        );


    }

    facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
        function loginError(error) {
            // alert(error)
        }
    );

}



function callmenow(phn_str) {
    jQuery(document).ready(function($) {
        $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/follow_me/",
            cache: false,
            data: {
                follow_me_number: phn_str,
                customer_id: localStorage.customer_id
            },
            //data: {follow_me_number: phn_str, customer_id:'15760'},
            datatype: 'json',
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
            },
            success: function(data) {

                var number_a = data.did_number;
                //alert(number_a)

                //alert(data.did_number.length)
                if (data.did_number.length < 10) {
                    number_a = '0' + data.did_number;
                }
                var bypassAppChooser = true;
                var gh = window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);

            },
            error: function(jqXHR, exception, errorThrown) {
                /* alert(jqXHR.status);
                 alert(exception);
                 alert(errorThrown)  */
                alert('Something went wrong, try again!');
            }
        });
    });
}

function callmenow_2(phn_str) {
    //alert(phn_str);
    $.ajax({
        type: "POST",
        url: "http://api.8200app.com:5100/api/follow_me/",
        cache: false,
        data: {
            follow_me_number: phn_str,
            customer_id: localStorage.customer_id
        },
        //data: {follow_me_number: phn_str, customer_id:'15760'},
        datatype: 'json',
        headers: {
            'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
        },
        success: function(data) {
            var number_a = data.did_number;
            //alert(number_a)

            //alert(data.did_number.length)
            if (data.did_number.length < 10) {
                number_a = '0' + data.did_number;
            }
            var bypassAppChooser = true;
            var gh = window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);

        },
        error: function(jqXHR, exception, errorThrown) {
            /* alert(jqXHR.status);
             alert(exception);
             alert(errorThrown)  */
            alert('Something went wrong, try again!');
        }
    });
}

function callmeout() {
    jQuery(document).ready(function($) {
        var phn_str = $('#phone_string').val();
        //alert(phn_str);

        $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/follow_me/",
            cache: false,
            data: {
                follow_me_number: phn_str,
                customer_id: localStorage.customer_id
            },
            // data: {follow_me_number: phn_str, customer_id:'15760'},
            datatype: 'json',
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
            },
            success: function(data) {

                //alert(data.did_number); 
                var number_a = data.did_number;
                //alert(number_a)

                //alert(data.did_number.length)
                if (data.did_number.length < 10) {
                    number_a = '0' + data.did_number;
                }
                var bypassAppChooser = true;
                var gh = window.plugins.CallNumber.callNumber(onSuccess1, onError1, number_a, bypassAppChooser);



                //  document.location.href = "callto:"+data.did_number;

            },
            error: function(jqXHR, exception, errorThrown) {
                /* alert(jqXHR.status);
                 alert(exception);
                 alert(errorThrown)  */
                alert('Something went wrong, try again!');
            }
        });
    });
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







function cancelforgot() {
    $("#login-signup").show();
    $("#loginbox").show();
    $("#forgot_div").hide();
    $("#tos").hide();
    $("#signupbox").hide();
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: "my.db",
        location: 'default'
    });
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'title') {
                    $('#signup_font').show();
                    $('#signup_font').html(results.rows.item(i).language_value);
                }
            }
        });
    });
}

function cancelaccount() {
    $("#settings").show();
    $("#account_div").hide();

    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: "my.db",
        location: 'default'
    });
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );

                if (results.rows.item(i).language_key == 'logout') {
                    $('#logout_account').show();
                    $('#logout_account').html(results.rows.item(i).language_value);
                }
            }
        });


        tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'settings') {
                    $('#signup_font').html(results.rows.item(i).language_value);
                    $('#mail_account').show();
                    $('#mail_account').html(results.rows.item(i).language_value);
                }
            }
        });




    });


    //   $('#signup_font').html('Settings');
}

function showsignup() {
    $('#loginbox').hide();
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: "my.db",
        location: 'default'
    });
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sign_up_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'title') {
                    $('#signup_font').show();
                    $('#signup_font').html(results.rows.item(i).language_value);
                }
            }
        });
    });
    $('#signupbox').show();
}

function showsignin() {
    $('#signupbox').hide();
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: "my.db",
        location: 'default'
    });
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'title') {
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




