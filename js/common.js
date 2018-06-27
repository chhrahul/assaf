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
jQuery(document).ready(function($) {

    $('#login-signup').hide();
    $('.footer_nav').hide();
    $('#dig_1').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '1';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_2').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '2';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_3').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '3';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_4').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '4';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_5').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '5';
        $('#phone_string').val(new_val);
        // $('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_6').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '6';
        $('#phone_string').val(new_val);
        // $('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_7').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '7';
        $('#phone_string').val(new_val);
        // $('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_8').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '8';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_9').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '9';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_0').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '0';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_plus').click(function() {
        // alert('ki')
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '+';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });



    $('#dig_star').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '*';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });

    $('#dig_hash').click(function() {
        var existing_field = $('#phone_string').val();
        var new_val = existing_field + '#';
        $('#phone_string').val(new_val);
        //$('#phone_string').css('border-left','0px solid black');
    });



    $.ajax({
        type: "POST",
        url: "http://api.8200app.com:5100/api/languages",
        cache: false,
        datatype: 'json',
        headers: {
            'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
        },
        success: function(data) {

            var opts = "<option value=''>Select Language</option>";
            for (var key in data) {
                var id = data[key]["id"];
                var name = data[key]["name"];
                opts += "<option value=" + id + ">" + name + "</option>";
            }

            $('#language').html(opts);

        },
        error: function(jqXHR, exception, errorThrown) {
            //alert(jqXHR.status);
            // alert(exception);
            //alert(errorThrown)
            alert('Some error occured while fetching languages, please try again!');
        }
    });

    $("#minus_1").click(function() {
        $('#phone_string').val($('#phone_string').val().substr(0, $('#phone_string').val().length - 1));

    });
    $("#minus_2").click(function() {
        $('#phone_string_2').val($('#phone_string_2').val().substr(0, $('#phone_string_2').val().length - 1));

    });

    function onSuccess(result) {
        alert("Success:" + result);
    }

    function onError(result) {
        alert("Error:" + result);
    }


    $("#callme").click(function() {
        //alert(localStorage.customer_id);



    });




    $("#phone_1").click(function() {
        $('#digits_2').hide();
        $('#digits').show();
        //$('#phone_string').css('border-left','6px solid black');
        // $('#phone_string_2').css('border-left','0px solid black');
    });


    $("#phone_2").click(function() {
        $('#digits_2').show();
        $('#digits').hide();
        //$('#phone_string_2').css('border-left','6px solid black');
        // $('#phone_string').css('border-left','0px solid black');
    });

    $("#remi_nder").click(function() {
        //alert("remi_nder")
        $('#dashboard').hide();
        $('#st_remind').show();
        $('#call_log').hide();
        $('#settings').hide();
        $('#account_div').hide();
        $('#ims').attr('src', 'img/asi1.png');
        $('#remb').attr('src', 'img/asi2on.png');
        $('#inv').attr('src', 'img/asi3.png');
        $('#ho_wrk').attr('src', 'img/asi4.png');

        var db = null;
        db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: 'default'
        });
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM contact_language', [], function(tx, results) {
                var len = results.rows.length,
                    i;
                for (i = 0; i < len; i++) {
                    // alert(results.rows.item(i).language_key );
                    if (results.rows.item(i).language_key == 'search') {
                        $('#signup_font').show();
                        $('#signup_font').html(results.rows.item(i).language_value);
                        $('#pickmesearch').html(results.rows.item(i).language_value);
                    }
                }
            });
        });
    });

    $("#foo_settings").click(function() {
        //alert("remi_nder")
        $('#dashboard').hide();
        $('#settings').show();
        $('#ims').attr('src', 'img/asi1.png');
        $('#remb').attr('src', 'img/asi2.png');
        $('#inv').attr('src', 'img/asi3.png');
        $('#ho_wrk').attr('src', 'img/asi4on.png');

        $('#st_remind').hide();
        $('#forgot_div').hide();
        $('#account_div').hide();
        $('#tos').hide();
        $('#call_log').hide();


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
                        $('#signup_font').show();
                        $('#signup_font').html(results.rows.item(i).language_value);
                        $('#mail_account').show();
                        $('#mail_account').html(results.rows.item(i).language_value);
                    }
                }
            });




        });
    });



    $("#home_st").click(function() {
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
        $('#ims').attr('src', 'img/asi1on.png');
        $('#remb').attr('src', 'img/asi2.png');
        $('#inv').attr('src', 'img/asi3.png');
        $('#ho_wrk').attr('src', 'img/asi4.png');
    });


    $('.inven_tory').click(function() {


        $('#call_log').show();
        $('#ims').attr('src', 'img/asi1.png');
        $('#remb').attr('src', 'img/asi2.png');
        $('#inv').attr('src', 'img/asi3on.png');
        $('#ho_wrk').attr('src', 'img/asi4.png');
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
        db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: 'default'
        });
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
                var len = results.rows.length,
                    i;
                for (i = 0; i < len; i++) {

                    if (results.rows.item(i).language_key == 'call_logs') {
                        $('#signup_font').html(results.rows.item(i).language_value);
                    }
                }
            });
        });

        //   $('#signup_font').html('Call Log'); 


        //  alert(localStorage.customer_id);  
        $.ajax({
            type: "GET",
            url: "http://api.8200app.com:5100/api/calls/" + localStorage.customer_id,
            //url: "http://api.8200app.com:5100/api/calls/15760",
            datatype: 'json',
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
            },
            success: function(data) {
                //alert(data)
                $('#list_logs').html('');
                if (data == '' || data == 'undefined' || data == undefined || data == 'null' || data == null) {
                    //$('#list_logs').html("<div style='font-size:15px; text-align:center;'>No Call Logs Found!</div>");
                    var db = null;
                    db = window.sqlitePlugin.openDatabase({
                        name: "my.db",
                        location: 'default'
                    });
                    db.transaction(function(tx) {
                        tx.executeSql('SELECT * FROM call_info_language', [], function(tx, results) {
                            var len = results.rows.length,
                                i;
                            for (i = 0; i < len; i++) {
                                // alert(results.rows.item(i).language_key );
                                if (results.rows.item(i).language_key == 'call_log_empty') {
                                    $('#list_logs').show();
                                    $('#list_logs').html(results.rows.item(i).language_value);
                                }
                            }
                        });
                    });
                } else {
                    $.each(data, function(key, value) {
                        //alert(value.number);
                        jQuery("#list_logs").append('<div class="row"  style="border-bottom:1px solid #CECECE;background-color:#FFF;"><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;" ><img src="img/voice.png" width="30" height="30" />&nbsp;&nbsp;' + value.number + '</div><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;">' + value.created_at.substring(0, 5) + '</div></div>');
                    });
                }
            },
            error: function(jqXHR, exception, errorThrown) {
                // alert(jqXHR.status);
                //  alert(exception);
                //  alert(errorThrown)

            }
        });


    });

    $("#forgotpwd").click(function() {
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
        db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: 'default'
        });
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM sign_in_language', [], function(tx, results) {
                var len = results.rows.length,
                    i;
                for (i = 0; i < len; i++) {

                    if (results.rows.item(i).language_key == 'forgot_your_password') {
                        $('#signup_font').html(results.rows.item(i).language_value);
                    }
                }
            });
        });

    });

    $('#my_account').click(function() {
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
        db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: 'default'
        });
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM footer_language', [], function(tx, results) {
                var len = results.rows.length,
                    i;
                for (i = 0; i < len; i++) {

                    if (results.rows.item(i).language_key == 'settings') {
                        $('#signup_font').html(results.rows.item(i).language_value);
                    }
                }
            });
        });
    });

    $('#tossignin , #tossignup').click(function() {
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
                    if (results.rows.item(i).language_key == 'tos') {
                        $('#signup_font').show();
                        $('#signup_font').html(results.rows.item(i).language_value);
                    }
                }
            });
        });

        $.ajax({
            type: "GET",
            url: "http://api.8200app.com:5100/download/tos/" + localStorage.language_id,
            datatype: 'html',
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
            },
            success: function(data) {
                // alert(data+'  45')
                $('#tos').show();
                $('#tos').html(data);
                $('#tos').append('<div class="form-group margT10"><div class="col-sm-12 controls"><a href="#" onClick="cancelforgot();" style="background-color: #CECECE; color:#fff;" class="btn btn-block btn-success">Cancel </a></div></div>');

            },
            error: function(jqXHR, exception, errorThrown) {
                /* alert(jqXHR.status);
                 alert(exception);
                 alert(errorThrown)  */
                alert('Something went wrong, try again!');
            }
        });


    });



    $('#log_out , #logme_out').click(function() {
        //alert('ji')
        localStorage.login = '';
        $('#login-signup').hide();
        $('#language_page').show();

        $('#ims').attr('src', 'img/asi1.png');
        $('#remb').attr('src', 'img/asi2.png');
        $('#inv').attr('src', 'img/asi3.png');
        $('#ho_wrk').attr('src', 'img/asi4.png');

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




    $("#pickmesearch").click(function() {
        //alert('as');
        navigator.contacts.pickContact(function(contact) {
            //alert('The following contact has been selected:' + JSON.stringify(contact));
            callmenow(contact.phoneNumbers[0].value);
        }, function(err) {
            //alert('Error: ' + err);
        });
    });

    $("#pickmesearchicon").click(function() {
        // alert('fg');
        navigator.contacts.pickContact(function(contact) {
            //alert( JSON.stringify(contact));
            callmenow(contact.phoneNumbers[0].value);
        }, function(err) {
            //alert('Error: ' + err);
        });
    });




    if (localStorage.login == 1) {
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
        $('#ims').attr('src', 'img/asi1on.png');

    } else {
        $('#signup_font').hide();
    }



    $("#signupform").submit(function(e) {
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

        /*  if(pwd != "" && pwd != pwd1) {
            
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
                //alert('hi')
                //var json = $.parseJSON(data);
                //alert(json.message);
                //alert(JSON.stringify(data))
                //alert(data.customer_id);
                localStorage.customer_id = data.customer_id;
                localStorage.name = data.name;
                $('#signupbox').hide();
                $('#loginbox').show();
                $('#login-email').val(email);
                $('#login-password').focus();
                /*if(json.status == 1)
                {
                  $('#signupbox').hide(); $('#loginbox').show();
                  $('#login-email').val(email);
                  $('#login-password').focus();  
                }*/

            },
            error: function(jqXHR, exception, errorThrown) {
                // alert(jqXHR.status);
                // alert(exception);
                //  alert(errorThrown)
                alert('Please check the form values again, Email or Phone number may already be taken! OR Enter the phone number in E164 Format.');
            }
        });
        //}    
    });

    $("#loginform").submit(function(e) {
        e.preventDefault();
        var email = jQuery("#login-email").val();
        var pwd = jQuery("#login-password").val();

        //alert(email)
        $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/login",
            data: {
                email: email,
                password: pwd,
                type: 'email'
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
                localStorage.name = data.name;
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

    $("#accountform").submit(function(e) {
        e.preventDefault();
        var email = jQuery("#account-email").val();
        var name = jQuery("#account-name").val();
        var phone = jQuery("#account-phone").val();
        var caller_id_number = jQuery("#account-caller_id_number").val();
        //alert(localStorage.customer_id)
        $.ajax({
            type: "PUT",
            url: "http://api.8200app.com:5100/api/customer/" + localStorage.customer_id,
            data: {
                email: email,
                name: name,
                phone_number: phone,
                caller_id_number: caller_id_number
            },
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
            },
            datatype: 'json',
            success: function(data) {
                alert('Details Updated Successfully!');
                localStorage.email = email;
                localStorage.name = name;
                localStorage.phone_number = phone;
                localStorage.caller_id_number = caller_id_number;
                $("#settings").show();
                $("#account_div").hide();
                $("#signup_font").html('Settings');

            },
            error: function(jqXHR, exception, errorThrown) {
                // alert(jqXHR.status);
                // alert(exception);
                //  alert(errorThrown) 
                alert("Something went wrong");
            }
        });
    });

    $("#forgotform").submit(function(e) {
        e.preventDefault();
        var email = jQuery("#forgot-email").val();


        //alert(email)
        $.ajax({
            type: "POST",
            url: "http://api.8200app.com:5100/api/reset_password",
            data: {
                email: email
            },
            headers: {
                'X-Token': '0ygvXUuJPpDkb3WwqNiVAIcO'
                // "Content-Type":"application/json; charset=UTF-8"
            },
            datatype: 'json',
            success: function(data) {
                alert('Mail was sent.');
                cancelforgot();

            },
            error: function(jqXHR, exception, errorThrown) {
                // alert(jqXHR.status);
                //  alert(exception);
                //  alert(errorThrown) 
                alert("Email is incorrect!");
            }
        });
    });

});

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




document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    //    window.plugins.googleplus.trySilentLogin(...);


    if (localStorage.login == 1) {

        $('#ims').attr('src', 'img/asi1on.png');
        var db = null;
        db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: 'default'
        });
        db.transaction(function(tx) {
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

        });
    }




    navigator.contactsPhoneNumbers.list(function(contacts) {
        jQuery("#list_contacts").html('');
        //console.log(contacts.length + ' contacts found');
        for (var i = 0; i < contacts.length; i++) {
            //alert(contacts[i].id + " - " + contacts[i].displayName);
            jQuery("#list_contacts").append('<div class="row"  style="border-bottom:1px solid #CECECE;background-color:#FFF;"><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;" ><a  onclick="callmenow_2(' + contacts[i].phoneNumbers[0].number + ');" href="#">' + contacts[i].displayName + '</a></div><div class="text-center col-lg-6 col-md-6 clo-sm-6 col-xs-6" style="height:45px;padding-top:10px;font-size:15px;"><a onclick="callmenow_2(' + contacts[i].phoneNumbers[0].number + ');" href="#" >' + contacts[i].phoneNumbers[0].number + '</a></div></div>');

        }
        jQuery("#list_contacts").append('<div style="height:30px;">&nbsp;</div>');

    }, function(error) {
        console.error(error);
    });


    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: "my.db",
        location: 'default'
    });
}