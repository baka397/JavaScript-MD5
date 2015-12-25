/*
 * JavaScript MD5 Demo JS 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global window, $ */

$(function () {
    'use strict';

    $('#calculate').on('click', function (event) {
        event.preventDefault();
        var md5_password={
        	usename:$('#usename').val(),
        	domain:$('#domain').val(),
        	salt:$('#salt').val()
        }
        if(localStorage){
        	localStorage.setItem('md5_password',JSON.stringify(md5_password));
        }
        $('#result').val(window.md5(md5_password.usename+md5_password.salt+md5_password.domain));
        $('#result').focus(function(){
        	$(this).select();
        })
    });
    if(localStorage&&localStorage.md5_password){
    	var md5_password=JSON.parse(localStorage.md5_password);
    	$('#usename').val(md5_password.usename);
        $('#domain').val(md5_password.domain);
        $('#salt').val(md5_password.salt);
    }
});
