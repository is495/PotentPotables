$(document).ready(function(){

})
function myFunction() {
  $("li").removeClass('green');
  $("img").removeClass('all');
  $("img").removeClass('some');
  $("img").removeClass('none');

  location.href = "#portfolio";
  var ingredients= $('#sbTwo').val();  var n = ingredients.includes("vodka");
  if (n==true) {    $( ".vodka" ).addClass(function( index ) {
      return "green" ;
    });
}
else {  $( ".vodka" ).addClass(function( index ) {
    return "red" ;
  });
}
var n = ingredients.includes("vermouth");
if (n==true) {  $( ".vermouth" ).addClass(function( index ) {
    return "green" ;
  });
}
else {$( ".vermouth" ).addClass(function( index ) {
  return "red" ;
});
}
var n = ingredients.includes("olives");
if (n==true) {  $( ".olives" ).addClass(function( index ) {
    return "green" ;
  });
}
else {$( ".olives" ).addClass(function( index ) {
  return "red" ;
});
}
var n = ingredients.includes("bourbon");
if (n==true) {  $( ".bourbon" ).addClass(function( index ) {
    return "green" ;
  });
}
else {$( ".bourbon" ).addClass(function( index ) {
  return "red" ;
});
}
var n = ingredients.includes("bitters");
if (n==true) {  $( ".bitters" ).addClass(function( index ) {
    return "green" ;
  });
}
else {
$( ".bitters" ).addClass(function( index ) {
  return "red" ;
});
}
var n = ingredients.includes("sugar");
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
var n = ingredients.includes("water");
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
var n = ingredients.includes("rind");
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
var n = ingredients.includes("cherries");
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

var n = ingredients.includes("whiskey");
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
// martini start
var n = ingredients.includes("bourbon");
var v = ingredients.includes("bitters");
var s = ingredients.includes("sugar");

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
// manhattan start
var n = ingredients.includes("whiskey");
var v = ingredients.includes("bitters");
var s = ingredients.includes("vermouth");

if ((n==true) && (v==true)&& (s==true)) {
  $( ".man-all" ).addClass(function( index ) {
    return "all" ;
  });
}
else if ((n==true) && (v==true)){
$( ".man-some" ).addClass(function( index ) {
  return "some" ;
});
}
else {
$( ".man-none" ).addClass(function( index ) {
  return "none" ;
});
}

// martini start
var n = ingredients.includes("vodka");
var v = ingredients.includes("vermouth");
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
// martini start

// martini end
location.href = "#portfolio";
}
