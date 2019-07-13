 var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i]; }}
preload(
'https://mfales.com//wp-content/uploads/2019/06/L8.png',
'https://mfales.com//wp-content/uploads/2019/06/L7.png',
'https://mfales.com//wp-content/uploads/2019/06/L6.png',
'https://mfales.com//wp-content/uploads/2019/06/L5.png'
)