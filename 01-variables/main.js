
function testFunction() {
  
  var screenWidth = 1024;
  var screenHeight = 768;
  var message = "Your screen is not so small";
  
  if (screenWidth< 1280 || screenHeight< 800) {
    document.writeln("Your screen is small");
  }
  else {
    document.writeln(message);
  }
  
}
