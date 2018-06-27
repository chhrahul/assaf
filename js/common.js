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

function googlelogin() {

    window.plugins.googleplus.login({
            'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
            'webClientId': '1044601568053-g9m4oikv1mips7nknkgcu7g6v8ete2jt.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
            'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        },
        function(obj) {

            var name = obj.displayName;

            var email = obj.email;

            var id = obj.userId;

            var firstDigits = 664;

            var secondDigits = 123;

            var thirdDigits = 45;

            var forthDigits = Math.floor(Math.random() * 90 + 10) + " ";

            var phone = firstDigits + " " + secondDigits + " " + thirdDigits + " " + forthDigits;

            var pwd = '';

            var environment_code = 972;

            var type = 'google';

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


                    //  alert('Please check the form values again, Email or Phone number may already be taken! OR Enter the phone number in E164 Format.');
                }
            });



        },
        function(msg) {
            alert('error: ' + msg);
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



function fillineverything() {
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
                    $('#signup_font').html(results.rows.item(i).language_value);
                }
                if (results.rows.item(i).language_key == 'sign_up_with') {
                    $('#sign_up_with').html(results.rows.item(i).language_value);
                }
                if (results.rows.item(i).language_key == 'sign_in_with') {
                    $('#sign_up_with_email').html(results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'email') {
                    $('#register-email').attr('placeholder', results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'first_name') {
                    $('#register-fname').attr('placeholder', results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'password') {
                    $('#signup-password').attr('placeholder', results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'sign_up_button') {
                    $('#signmeup').val(results.rows.item(i).language_value);
                    $("#signinup").html(results.rows.item(i).language_value);

                }



                if (results.rows.item(i).language_key == 'tos') {
                    $('#tossignup').html(results.rows.item(i).language_value);
                }




                // alert(results.rows.item(i).language_value ); 
            }
            //alert('sign_up_language: ' + rs.rows.item(0).mycount);

        });
        tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'email') {
                    $('#login-email').attr('placeholder', results.rows.item(i).language_value);
                    $('#forgot-email').attr('placeholder', results.rows.item(i).language_value);

                    ///alert(results.rows.item(i).language_value)
                }
                if (results.rows.item(i).language_key == 'title') {
                    $('#signuploginbutton').html(results.rows.item(i).language_value);
                    $('#signmein').val(results.rows.item(i).language_value);
                }
                if (results.rows.item(i).language_key == 'password') {
                    $('#login-password').attr('placeholder', results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'tos') {
                    $('#tossignin').html(results.rows.item(i).language_value);
                }
                if (results.rows.item(i).language_key == 'forgot_your_password') {
                    $('#forgotpwd').html(results.rows.item(i).language_value);
                }
                if (results.rows.item(i).language_key == 'forgot_your_password_recover') {
                    $('#forgot_title').html(results.rows.item(i).language_value);
                }




            }
        });
        tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'call') {
                    $('#footer_call').html(results.rows.item(i).language_value);
                    //alert(results.rows.item(i).language_value)
                }

                if (results.rows.item(i).language_key == 'call_logs') {
                    $('#footer_calllog').html(results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'contacts') {
                    $('#footer_contacts').html(results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'settings') {
                    $('#footer_settings').html(results.rows.item(i).language_value);
                }
            }
        });
        tx.executeSql('SELECT * FROM dialer_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {
                // alert(results.rows.item(i).language_key );
                if (results.rows.item(i).language_key == 'dialing') {
                    //$('#phone_string').attr('placeholder',results.rows.item(i).language_value);
                    //alert(results.rows.item(i).language_value)
                }

                if (results.rows.item(i).language_key == 'enter_number_to_display') {
                    $('#phone_string_2').attr('placeholder', results.rows.item(i).language_value);
                    //alert(results.rows.item(i).language_value)
                }

            }
        });
        tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
            var len = results.rows.length,
                i;
            for (i = 0; i < len; i++) {

                if (results.rows.item(i).language_key == 'phone_number') {
                    $('#account-phone').attr('placeholder', results.rows.item(i).language_value);
                }

                if (results.rows.item(i).language_key == 'mail') {
                    $('#account-email').attr('placeholder', results.rows.item(i).language_value);
                }

            }
        });
    });
}

function gotosignup(myval) {
    //alert(myval)
    if (myval != '') {
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
            data: {
                language_id: myval
            },
            success: function(data) {
                var db = null;
                db = window.sqlitePlugin.openDatabase({
                    name: "my.db",
                    location: 'default'
                });
                db.transaction(function(tx) {

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

                /*  alert(JSON.stringify(data))
      var gh = jQuery.parseJSON(data); 
      alert(gh.language.name);
      alert(gh) */
                $.each(data, function(key, value) {

                    if (key == 'screens') {
                        db.transaction(function(tx) {


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
                                var len = results.rows.length,
                                    i;
                                for (i = 0; i < len; i++) {
                                    // alert(results.rows.item(i).language_key );
                                    if (results.rows.item(i).language_key == 'title') {
                                        $('#signup_font').html(results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'sign_up_with') {
                                        $('#sign_up_with').html(results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'sign_in_with') {
                                        $('#sign_up_with_email').html(results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'email') {
                                        $('#register-email').attr('placeholder', results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'phone_label') {
                                        $('#register-phone').attr('placeholder', results.rows.item(i).language_value);
                                    }



                                    if (results.rows.item(i).language_key == 'first_name') {
                                        $('#register-fname').attr('placeholder', results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'password') {
                                        $('#signup-password').attr('placeholder', results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'sign_up_button') {
                                        $('#signmeup').val(results.rows.item(i).language_value);
                                        $("#signinup").html(results.rows.item(i).language_value);

                                    }



                                    if (results.rows.item(i).language_key == 'tos') {
                                        $('#tossignup').show();
                                        $('#tossignup').html(results.rows.item(i).language_value);
                                    }




                                    // alert(results.rows.item(i).language_value ); 
                                }
                                //alert('sign_up_language: ' + rs.rows.item(0).mycount);

                            });
                            tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
                                var len = results.rows.length,
                                    i;
                                for (i = 0; i < len; i++) {
                                    // alert(results.rows.item(i).language_key );
                                    if (results.rows.item(i).language_key == 'email') {
                                        $('#login-email').attr('placeholder', results.rows.item(i).language_value);
                                        $('#forgot-email').attr('placeholder', results.rows.item(i).language_value);

                                        ///alert(results.rows.item(i).language_value)
                                    }
                                    if (results.rows.item(i).language_key == 'title') {
                                        $('#signuploginbutton').html(results.rows.item(i).language_value);
                                        $('#signmein').val(results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'password') {
                                        $('#login-password').attr('placeholder', results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'tos') {
                                        $('#tossignin').html(results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'forgot_your_password') {
                                        $('#forgotpwd').html(results.rows.item(i).language_value);
                                    }
                                    if (results.rows.item(i).language_key == 'forgot_your_password_recover') {
                                        $('#forgot_title').html(results.rows.item(i).language_value);
                                    }




                                }
                            });
                            tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
                                var len = results.rows.length,
                                    i;
                                for (i = 0; i < len; i++) {
                                    // alert(results.rows.item(i).language_key );
                                    if (results.rows.item(i).language_key == 'call') {
                                        $('#footer_call').html(results.rows.item(i).language_value);
                                        //alert(results.rows.item(i).language_value)
                                    }

                                    if (results.rows.item(i).language_key == 'call_logs') {
                                        $('#footer_calllog').html(results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'contacts') {
                                        $('#footer_contacts').html(results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'settings') {
                                        $('#footer_settings').html(results.rows.item(i).language_value);
                                    }
                                }
                            });
                            tx.executeSql('SELECT * FROM dialer_language', [], function(tx, results) {
                                var len = results.rows.length,
                                    i;
                                for (i = 0; i < len; i++) {
                                    // alert(results.rows.item(i).language_key );
                                    if (results.rows.item(i).language_key == 'dialing') {
                                        //$('#phone_string').attr('placeholder',results.rows.item(i).language_value);
                                        //alert(results.rows.item(i).language_value)
                                    }

                                    if (results.rows.item(i).language_key == 'enter_number_to_display') {
                                        $('#phone_string_2').attr('placeholder', results.rows.item(i).language_value);
                                        //alert(results.rows.item(i).language_value)
                                    }

                                }
                            });
                            tx.executeSql('SELECT * FROM settings_language', [], function(tx, results) {
                                var len = results.rows.length,
                                    i;
                                for (i = 0; i < len; i++) {

                                    if (results.rows.item(i).language_key == 'phone_number') {
                                        $('#account-phone').attr('placeholder', results.rows.item(i).language_value);
                                    }

                                    if (results.rows.item(i).language_key == 'mail') {
                                        $('#account-email').attr('placeholder', results.rows.item(i).language_value);
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
                            }); //*  */

                        });
                        //alert(key + "=" + value.sign_up.email);
                        // alert(key + "=" + value.sign_in.email);

                    }
                });
            },
            error: function(jqXHR, exception, errorThrown) {
               
            }
        });

    }

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




