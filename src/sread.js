var sread = {
    reading: false,

    speak: function(text) {
        window.speechSynthesis.cancel();
        setTimeout(function () {
            var message = new SpeechSynthesisUtterance(text);
            message.rate = 5;
            window.speechSynthesis.speak(message);
            $("#sreadContent").text(text);
        }, 250);
    },

    cssState: function(state) {
        if (state) {
            $("#sreadStyle").html(`
                button:focus, .btn:focus, .card-action:focus, .borderable:focus {
                    border: 2px solid #3675db;
                    border-radius: 10px;
                }

                .btn-floating:focus {
                    border: 2px solid #3675db;
                }
            `);
        } else {
            $("#sreadStyle").html("");
        }
    },

    init: function() {
        $("*").unbind();

        if (sread.reading) {
            $("#sread").css("display", "unset");
            sread.cssState(true);
        } else {
            $("#sread").css("display", "none");
            sread.cssState(false);
        }

        $("#sreadContent").text("");

        $("button").focus(function (event) {
            $(window).one("keyup", function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 9) {
                    if (sread.reading) { sread.speak(event.target.innerHTML + ": Button"); }
                }
            });
        });

        $(".readable-button").focusin(function (event) {
            $(window).one("keyup", function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 9) {
                    if (sread.reading) { sread.speak($("#" + event.target.id).attr("data-readable") + ": Button"); }
                }
            });
        });

        $(".readable-button").mouseover(function (event) {
            if (sread.reading) { sread.speak($("#" + event.target.id).attr("data-readable") + ": Button"); }
        });

        $(".readable-text").focusin(function (event) {
            $(window).one("keyup", function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 9) {
                    if (sread.reading) { sread.speak($("#" + event.target.id).attr("data-readable")); }
                }
            });
        });

        $(".readable-text").mouseover(function (event) {
            if (sread.reading) { sread.speak($("#" + event.target.id).attr("data-readable")); }
        });

        $("button").mouseover(function (event) {
            if (sread.reading) { sread.speak(event.target.innerHTML + ": Button"); }
        });

        $("label").focus(function (event) {
            $(window).keyup(function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 9) {
                    if (sread.reading) { sread.speak(event.target.innerHTML + ": Text input"); }
                }
            });
        });

        $("label").mouseover(function (event) {
            if (sread.reading) { sread.speak(event.target.innerHTML + ": Text input"); }
        });

        $("input").focusin(function (event) {
            if (sread.reading) { sread.speak("Editing " + $("label[for='" + event.target.id + "']").text()); }
        });

        $("input").keypress(function (event) {
            if (sread.reading) {
                if (event.which == 8) {
                    sread.speak("Backspace");
                } else if (event.which == 9) {
                    sread.speak("Tab");
                } else if (event.which == 13) {
                    sread.speak("Enter");
                } else if (event.which == 32) {
                    sread.speak("Space. " + $("#" + event.target.id).val().split(" ")[$("#" + event.target.id).val().split(" ").length - 1]);
                } else {
                    var character = String.fromCharCode(event.which);

                    if (character == character.toLowerCase()) {
                        sread.speak(character.toUpperCase());
                    } else {

                        sread.speak("Capital " + character);
                    }
                }
            }
        });

        $("input").keydown(function (event) {
            if (sread.reading) {
                if (event.which == 8) {
                    sread.speak("Backspace");
                } else if (event.which == 46) {
                    sread.speak("Delete");
                }
            }
        })
    },

    changeState: function(state) {
        sread.reading = state;

        if (state) {
            $("#sread").css("display", "unset");
            sread.cssState(true);
            sread.speak("SimpleReader is on");
        } else {
            $("#sread").css("display", "none");
            sread.cssState(false);
            sread.speak("SimpleReader is off");

            $("#sreadContent").text("");
        }
    },

    switchState: function() {
        if (sread.reading) {
            sread.changeState(false);
        } else {
            sread.changeState(true);
        }
    }
}

sread.init();

document.body.onkeydown = function(e) {
    if (e.keyCode == 123) {
        e.preventDefault();
    }

    if (e.keyCode == 123 && e.ctrlKey) {
        sread.switchState();
    }
};