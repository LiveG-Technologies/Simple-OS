function alertClose() {
    if (sread.reading) { sread.speak("Alert dismissed"); }
    $("#alertok").parent().parent().parent().fadeOut();
}

function alert(content) {
    $("#alertokinfo").text(content);
    $("#alertokinfo").attr("data-readable", content);
    if (sread.reading) { sread.speak("Alert: " + content + " Press Enter to dismiss"); }
    $("#alertok").parent().parent().parent().fadeIn();
    $("#alertok").focus();
}