
function testFunction() {

  var string = "pre12345ABCDEpost";
  var slice = string.slice(3, 8);
  display("Slice 1: ", slice);

  slice = string.slice(3, -9);
  display("Slice 2: ", slice);

  slice = string.slice(-9, -4);
  display("Slice 3: ", slice);

  var subString = string.substr(3, 5);
  display("Substring: ", subString);

  var days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";  
  var dayArray = days.split(",");
  display("dayArray[2]: ", dayArray[2]);
  
  string = "I wish, I wish, I wish I could fly."
  var firstIndex = string.indexOf("wish");
  var lastIndex = string.lastIndexOf("wish");
  display("First Index:", firstIndex, " Last Index: ", lastIndex);
  
  string = "ABCDE";
  var lCase = string.toLowerCase();
  var uCase = lCase.toUpperCase();
  display("Lower: ", lCase, " Upper: ", uCase);
  
}
