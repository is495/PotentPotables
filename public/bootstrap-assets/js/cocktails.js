$(document).ready(function(){









})
function myFunction() {




  $("li").removeClass('green');
  $("img").removeClass('all');
  $("img").removeClass('some');
  $("img").removeClass('none');

  location.href = "#portfolio";
  // var ingredients= $('#sbTwo').val();
  var test= $("#test").text();
  // alert(test);
  var n = test.includes("Vodka");
  if (n==true) {  $( ".vodka" ).addClass(function( index ) {
     return "green" ;
   });
  }
  else {$( ".vodka" ).addClass(function( index ) {
   return "red" ;
  });
  }
var n = test.includes("Vermouth");
if (n==true) {  $( ".vermouth" ).addClass(function( index ) {
   return "green" ;
 });
}
else {$( ".vermouth" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Olives");
if (n==true) {  $( ".olives" ).addClass(function( index ) {
   return "green" ;
 });
}
else {$( ".olives" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Bourbon");
if (n==true) {  $( ".bourbon" ).addClass(function( index ) {
   return "green" ;
 });
}
else {$( ".bourbon" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Bitters");
if (n==true) {  $( ".bitters" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".bitters" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Sugar");
if (n==true) {
 $( ".sugar" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".sugar" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Water");
if (n==true) {
 $( ".water" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".water" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Rind");
if (n==true) {
 $( ".rind" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".rind" ).addClass(function( index ) {
 return "red" ;
});
}
var n = test.includes("Cherries");
if (n==true) {
 $( ".cherries" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".cherries" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Whiskey");
if (n==true) {
 $( ".whiskey" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".whiskey" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Blue Curacao");
if (n==true) {
 $( ".blueCuracao" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".blueCuracao" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Champagne");
if (n==true) {
 $( ".champagne" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".champagne" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Creme de Cacao");
if (n==true) {
 $( ".cremeDeCacao" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".cremeDeCacao" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Gin");
if (n==true) {
 $( ".gin" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".gin" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Light Rum");
if (n==true) {
 $( ".lightRum" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lightRum" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Peppermint Schnapps");
if (n==true) {
 $( ".peppermintSchnapps" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".peppermintSchnapps" ).addClass(function( index ) {
 return "red" ;
});
}


var n = test.includes("Rum");
if (n==true) {
 $( ".rum" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".rum" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Tequila");
if (n==true) {
 $( ".tequila" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".tequila" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Triple Sec");
if (n==true) {
 $( ".tripleSec" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".tripleSec" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Vanilla Vodka");
if (n==true) {
 $( ".vanillaVodka" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".vanillaVodka" ).addClass(function( index ) {
 return "red" ;
});
}


var n = test.includes("White Rum");
if (n==true) {
 $( ".whiteRum" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".whiteRum" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Apple");
if (n==true) {
 $( ".apple" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".apple" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Celery");
if (n==true) {
 $( ".celery" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".celery" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lemon");
if (n==true) {
 $( ".lemon" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lemon" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lemon Slice");
if (n==true) {
 $( ".lemonSlice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lemonSlice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lemon Twist");
if (n==true) {
 $( ".whiteRum" ).addClass(function( index ) {
   return "lemonTwist" ;
 });
}
else {
$( ".lemonTwist" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lime");
if (n==true) {
 $( ".lime" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lime" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Maraschino Cherry");
if (n==true) {
 $( ".maraschinoCherry" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".maraschinoCherry" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Mint");
if (n==true) {
 $( ".mint" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".mint" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Nutmeg");
if (n==true) {
 $( ".nutmeg" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".nutmeg" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Orange Slice");
if (n==true) {
 $( ".orangeSlice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".orangeSlice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Sugar Rim");
if (n==true) {
 $( ".sugarRim" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".sugarRim" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Cinnamon");
if (n==true) {
 $( ".cinnamon" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".cinnamon" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Apple Cider");
if (n==true) {
 $( ".appleCider" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".appleCider" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Black Pepper");
if (n==true) {
 $( ".blackPepper" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".blackPepper" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Club Soda");
if (n==true) {
 $( ".clubSoda" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".clubSoda" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Cola");
if (n==true) {
 $( ".cola" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".cola" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Eggnog");
if (n==true) {
 $( ".eggnog" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".eggnog" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Ginger Beer");
if (n==true) {
 $( ".gingerBeer" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".gingerBeer" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Grated Horseradish");
if (n==true) {
 $( ".gratedHorseradish" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".gratedHorseradish" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Honey");
if (n==true) {
 $( ".honey" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".honey" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Hot Sauce");
if (n==true) {
 $( ".hotSauce" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".hotSauce" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lemon Juice");
if (n==true) {
 $( ".lemonJuice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lemonJuice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lemon Lime Soda");
if (n==true) {
 $( ".lemonLimeSoda" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".lemonLimeSoda" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Lime Juice");
if (n==true) {
 $( ".limeJuice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".limeJuice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Milk");
if (n==true) {
 $( ".milk" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".milk" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Mint Juice");
if (n==true) {
 $( ".mintJuice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".mintJuice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Orange Juice");
if (n==true) {
 $( ".orangeJuice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".orangeJuice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Pumpkin Puree");
if (n==true) {
 $( ".pumpkinPuree" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".pumpkinPuree" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Red Bull");
if (n==true) {
 $( ".redBull" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".redBull" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Salt");
if (n==true) {
 $( ".salt" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".salt" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Simple Syrup");
if (n==true) {
 $( ".simpleSyrup" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".simpleSyrup" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Sugar Cube");
if (n==true) {
 $( ".sugarCube" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".sugarCube" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Sweet and Sour");
if (n==true) {
 $( ".sweetAndSour" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".sweetAndSour" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Tomato Juice");
if (n==true) {
 $( ".tomatoJuice" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".tomatoJuice" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Tonic Water");
if (n==true) {
 $( ".tonicWater" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".tonicWater" ).addClass(function( index ) {
 return "red" ;
});
}

var n = test.includes("Worcestershire Sauce");
if (n==true) {
 $( ".worcestershireSauce" ).addClass(function( index ) {
   return "green" ;
 });
}
else {
$( ".worcestershireSauce" ).addClass(function( index ) {
 return "red" ;
});
}
// oldfashion start
var n = test.includes("Bourbon");
var v = test.includes("Bitters");
var s = test.includes("Sugar");

if ((n==true) && (v==true)&& (s==true)) {
  $( ".old-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (v==true)){
$( ".old-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".old-none" ).addClass(function( index ) {
  return "none" ;
});
}

//Bloody Mary start
var n = test.includes("Vodka");
var v = test.includes("Celery");
var s = test.includes("Lemon");
var r = test.includes("Black Pepper");
var t = test.includes("Grated Horseradish");
var u = test.includes("Lemon Juice");
var p = test.includes("Salt");
var l = test.includes("Tomato Juice");
var b = test.includes("Worcestershire Sauce")

if ((n==true) && (v==true) && (s==true)&& (r==true) && (t==true) && (u==true) && (p==true) && (l==true) && (b==true)){
  $( ".man-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".man-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".man-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Bloody Mary end
//Daquiri start
var n = test.includes("White Rum");
var v = test.includes("Lemon");
var s = test.includes("Lime Juice");
var r = test.includes("Simple Syrup");

if ((n==true) && (v==true) && (s==true) && (r==true)) {
  $( ".daq-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".daq-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".daq-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Daquiri end
//Rum and Cola start
var n = test.includes("White Rum");
var v = test.includes("Lime");
var s = test.includes("Cola");
var r = test.includes("Lime Juice");

if ((n==true) && (v==true) && (s==true) && (r==true)){
  $( ".rum-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if (n==true){
$( ".rum-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".rum-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Rum and Cola end
//Redbull Vodka start
var n = test.includes("Vodka");
var v = test.includes("Red Bull");

if ((n==true) && (v==true)){
  $( ".red-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if (n==true){
$( ".red-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".red-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Redbull Vokda end

// AMF start
var n = test.includes("Blue Curacao");
var v = test.includes("Gin");
var s = test.includes("Light Rum");
var r = test.includes("Tequila");
var t = test.includes("Vodka");
var u = test.includes("Maraschino Cherry");
var p = test.includes("Lemon Lime Soda");
var l = test.includes("Sweet and Sour");

if ((n==true) && (v==true) && (s==true)&& (r==true) && (t==true) && (u==true) && (p==true) && (l==true)){
  $( ".amf-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (v==true) && (s==true)&& (r==true) && (t==true)){
$( ".amf-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".amf-none" ).addClass(function( index ) {
  return "none" ;
});
}
//AMF end

// martini start
var n = test.includes("Gin");
var v = test.includes("Vermouth");
if ((n==true) && (v==true)) {
  $( ".martini-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else {
$( ".martini-none" ).addClass(function( index ) {
  return "none" ;
});
}
// martini end
//Screw Driver start
var n = test.includes("Vodka");
var v = test.includes("Orange Slice");
var s = test.includes("Orange Juice");

if ((n==true) && (v==true) && (s==true)){
  $( ".scr-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if (n==true){
$( ".scr-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".scr-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Screw Driver end
//Hot Toddy start
var n = test.includes("Bourbon");
var v = test.includes("Lemon");
var s = test.includes("Lemon Juice");

if ((n==true) && (v==true) && (s==true)){
  $( ".hot-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)) {
$( ".hot-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".hot-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Hot Toddy end
//Holiday Nog start
var n = test.includes("Peppermint Schnapps");
var v = test.includes("Nutmeg");
var s = test.includes("Eggnog");

if ((n==true) && (v==true) && (s==true)) {
  $( ".nog-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".nog-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".nog-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Holiday Nog end

//Whiskey & Cola start
var n = test.includes("Whiskey");
var v = test.includes("Cola");

if ((n==true) && (v==true)) {
  $( ".wic-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if (n==true){
$( ".wic-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".wic-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Whiskey & Cola end
//Margarita start
var n = test.includes("Tequila");
var v = test.includes("Lime");
var s = test.includes("Lime Juice");
var r = test.includes("Sweet and Sour");

if ((n==true) && (v==true) && (s==true) && (r==true)){
  $( ".marg-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".marg-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".marg-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Margarita end
//Bloody Mary start
var n = test.includes("Vodka");
var v = test.includes("Celery");
var s = test.includes("Lemon");
var r = test.includes("Black Pepper");
var t = test.includes("Grated Horseradish");
var u = test.includes("Lemon Juice");
var p = test.includes("Salt");
var l = test.includes("Tomato Juice");
var b = test.includes("Worcestershire Sauce")

if ((n==true) && (v==true) && (s==true)&& (r==true) && (t==true) && (u==true) && (p==true) && (l==true) && (b==true)){
  $( ".man-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (l==true) && (b==true)){
$( ".man-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".man-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Bloody Mary end
//Mojito start
var n = test.includes("Light Rum");
var v = test.includes("Mint Leaves");
var s = test.includes("Club Soda");
var r = test.includes("Lime Juice");
var u = test.includes("Simple Syrup");

if ((n==true) && (v==true) && (s==true) && (r==true)  && (u==true)){
  $( ".moj-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".moj-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".moj-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Mojito end
//Lemon Drop start
var n = test.includes("Triple Sec");
var v = test.includes("Vodka");
var s = test.includes("Sugar Rum");
var r = test.includes("Lemon Juice");

if ((n==true) && (v==true) && (s==true) && (r==true)){
  $( ".drop-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (v==true)){
$( ".drop-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".drop-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Lemon Drop end
//Long Island Ice Tea start
var n = test.includes("Gin");
var v = test.includes("Rum");
var s = test.includes("Tequila");
var r = test.includes("Triple Sec");
var t = test.includes("Vodka");
var u = test.includes("Lemon");
var p = test.includes("Cola");
var l = test.includes("Sweet and Sour");

if ((n==true) && (v==true) && (s==true) && (r==true) && (t==true) && (u==true) && (p==true) && (l==true)){
  $( ".lat-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (v==true) && (s==true) && (r==true) && (t==true)){
$( ".lat-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".lat-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Long Island Ice Tea end
//Whiskey Sour start
var n = test.includes("Whiskey");
var v = test.includes("Lemon Twist");
var s = test.includes("Maraschino Cherry");
var r = test.includes("Lemon Juice");
var t = test.includes("Simple Syrup");

if ((n==true) && (v==true) && (s==true) && (r==true) && (t==true)){
  $( ".sour-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if (n==true){
$( ".sour-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".sour-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Whiskey Sour end
//Gin & Tonic start
var n = test.includes("Gin");
var v = test.includes("Lime");
var s = test.includes("Tonic Water");

if ((n==true) && (v==true) && (s==true)){
  $( ".gat-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".gat-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".gat-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Gin & Tonic end
//Moscow Mule start
var n = test.includes("Vodka");
var v = test.includes("Lime");
var s = test.includes("Ginger Beer");
var r = test.includes("Lime Juice");

if ((n==true) && (v==true) && (s==true)&& (r==true)){
  $( ".cow-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true)){
$( ".cow-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".cow-none" ).addClass(function( index ) {
  return "none" ;
});
}
//Moscow Mule end
// martini start

// martini end
location.href = "#portfolio";
}
