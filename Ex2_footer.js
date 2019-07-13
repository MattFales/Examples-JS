 var images = [];
  var images = [       
"https://mfales.com/wp-content/uploads/Flower-1vs.jpg",
"https://mfales.com/wp-content/uploads/Flower-2vs.jpg"];
  var i = 0;
  var renew = setInterval(function(){
      if(images.length == i){
          i = 0;
       }
       else {
       document.getElementById("currentImage").src = images[i];      
         i++;
        }
        },6000); 