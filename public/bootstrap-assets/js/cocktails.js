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
  var si = test.includes("vodka");
// alert('here')
  //  var n = ingredients.includes("vodka");

  if (si==true) {    $( ".vodka" ).addClass(function( index ) {
      return "green" ;
    });
}
else {  $( ".vodka" ).addClass(function( index ) {
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
// martini start
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
// manhattan start
var n = test.includes("Whiskey");
var v = test.includes("Bitters");
var s = test.includes("Vermouth");

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
var n = test.includes("Vodka");
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
// martini start

// martini end
location.href = "#portfolio";
}
