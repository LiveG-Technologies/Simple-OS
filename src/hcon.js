var hcon = {
    inverting: false,

    changeState: function(state) {
        if (state) {
            $("#hconStyle").html(`
                body, body.login {
                    background: none!important;
                    background-color: black!important;
                }
            
                .card {
                    background-color: white!important;
                }

                .subcard {
                    color: black!important;
                }

                .invert-black {
                    color: black!important;
                }

                .btn-floating {
                    background-color: purple!important;
                    color: white!important;
                }

                #sread {
                    background-color: yellow!important;
                    color: black!important;
                }
            `);

            hcon.inverting = true;
        } else {
            $("#hconStyle").html("");

            hcon.inverting = false;
        }
    },

    switchState: function() {
        if (hcon.inverting) {
            hcon.changeState(false);
        } else {
            hcon.changeState(true);
        }
    }
}