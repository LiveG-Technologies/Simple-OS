var storage = new LargeLocalStorage({size: 1024 * 1024, name: "account"});

var menuPage = 0;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function menu(page) {
    if (page == menuPage) {
        $("#bottomButtons").css("bottom", "20px");
        $("#bottomCard").css("bottom", "-100px");
        menuPage = 0;

        if (sread.reading) {sread.speak("Bottom card closed.");}
    } else {
        if (page == 0) {
            $("#bottomButtons").css("bottom", "20px");
            $("#bottomCard").css("bottom", "-100px");

            if (sread.reading) {sread.speak("Bottom card closed");}
            
            setTimeout(function() {
                $("#bottomCardContent").html("");
                $("#bottomCardClose").html("");
            }, 1000);
        } else {
            $("#bottomCardClose").html(`<a class="small corner top linker black-text readable-button borderable" tabindex="0" id="cbc" data-readable="Close bottom card" href="javascript:menu(0);"><i class="material-icons">close</i></a>`);
            
            if (page == 1) {
                $("#bottomCardContent").html(`
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard readable-button borderable" tabindex="0" id="restart" data-readable="Restart"><i class="medium material-icons">replay</i><br>Restart</a>
                    <a class="subcard readable-button borderable" tabindex="0" id="shutdown" data-readable="Shutdown"><i class="medium material-icons">power_settings_new</i><br>Shutdown</a>
                `);

                if (sread.reading) {sread.speak("Power actions selected");}
            } else if (page == 2) {
                $("#bottomCardContent").html(`
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard readable-button borderable" tabindex="0" id="help" data-readable="Help"><i class="medium material-icons">help</i><br>Help</a>
                `);

                if (sread.reading) {sread.speak("Help selected");}
            } else if (page == 3) {
                $("#bottomCardContent").html(`
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard readable-button borderable" tabindex="0" id="invertcolours" data-readable="High Contrast" href="javascript:hcon.switchState();"><i class="medium material-icons">invert_colors</i><br>High Contrast</a>
                    <a class="subcard readable-button borderable" tabindex="0" id="simplereader" data-readable="SimpleReader" href="javascript:sread.switchState();"><i class="medium material-icons">record_voice_over</i><br>SimpleReader</a>
                `);

                if (sread.reading) {sread.speak("Accessibility options selected");}
            }

            $("#bottomButtons").css("bottom", "120px");
            $("#bottomCard").css("bottom", "0px");
        }
        menuPage = page;
    }

    sread.init();
}

function login() {
    storage.getContents("accounts").then(function(content) {
        console.log(content);
        if (content[$("#username").val()] !== undefined) {
            if (content[$("#username").val()]["password"] == $("#password").val()) {
                window.location.href = "desktop.html?account=" + $("#username").val();
            } else {
                alert("Password is incorrect.");
            }
        } else {
            if ($("#username").val() == "") {
                alert("Account not inputted.");
            } else {
                alert("Account does not exist.");
            }
        }
    });
}

setInterval(function() {
    var date = new Date();

    if (date.getMinutes() < 10) {
        $("#time").html(date.getHours() + ":0" + date.getMinutes());
        $("#time").attr("data-readable", "The time is " + date.getHours() + ":0" + date.getMinutes());
    } else {
        $("#time").html(date.getHours() + ":" + date.getMinutes());
        $("#time").attr("data-readable", "The time is " + date.getHours() + ":" + date.getMinutes());
    }
}, 100);

menu(0);