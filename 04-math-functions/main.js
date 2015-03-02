
function testFunction() {

  var pi = Math.PI;
  display("PI: ", pi);
  
  var randomNumber = Math.random()*100;
  display("Random number between 0 and 100: ", randomNumber);
  
  var result = Math.pow(10,3);
  display("10 cubed : ", result);
  
  var piRounded = Math.round(Math.PI);
  var piCeiling = Math.ceil(Math.PI);
  display("piRounded: ", piRounded, " piCeiling: ", piCeiling);
  
  var root144 = Math.sqrt(144);
  display("Root of 144: ", root144);
  
  var degreesToRadians = Math.PI/180;
  var sin30 = Math.sin(30*degreesToRadians);
  display("Sin(30): ", sin30);
 
}
