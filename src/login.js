var menuPage = 0;

function menu(page) {
    if (page == menuPage) {
        $("#bottomButtons").css("bottom", "20px");
        $("#bottomCard").css("bottom", "-100px");
        menuPage = 0;
    } else {
        if (page == 0) {
            $("#bottomButtons").css("bottom", "20px");
            $("#bottomCard").css("bottom", "-100px");
            
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
            } else if (page == 3) {
                $("#bottomCardContent").html(`
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard"></a>
                    <a class="subcard readable-button borderable" tabindex="0" id="simplereader" data-readable="SimpleReader" href="javascript:sread.switchState();"><i class="medium material-icons">accessibility</i><br>SimpleReader</a>
                `);
            }

            $("#bottomButtons").css("bottom", "120px");
            $("#bottomCard").css("bottom", "0px");
        }
        menuPage = page;
    }

    sread.init();
}