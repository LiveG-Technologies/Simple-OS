var storage = new LargeLocalStorage({size: 1024 * 1024, name: "account"});

var pause = false;

function boot() {
    $("#indexLoader").fadeIn();
    storage.getContents("data").then(function(content) {
        window.location.href = "login.html?data=" + content;
    });
}

$("#indexLoader").hide();

setTimeout(function() {
    if (!pause) {boot();}
}, 2000);

document.body.onkeydown = function(e) {
    if (e.keyCode == 123) {
        e.preventDefault();
    }

    if (e.keyCode == 123) {
        if (pause) {
            boot();
        } else {
            pause = true;
            $("#pauseMessage").html("Boot has been paused. To continue booting, press F12.");
        }
    }
};