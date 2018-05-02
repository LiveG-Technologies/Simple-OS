var storage = new LargeLocalStorage({size: 1024 * 1024, name: "account"});

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

setInterval(function() {
    var date = new Date();
    $("#time").html(date.getHours() + ":" + date.getMinutes());
    $("#time").attr("data-readable", "The time is " + date.getHours() + ":" + date.getMinutes());
}, 100);