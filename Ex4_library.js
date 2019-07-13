 var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
"http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",
"jquery-3.3.1.min.js"
) 