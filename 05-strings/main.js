
function testFunction() {

  var character = "X";
  var firstName = "Michael";
  var lastName = 'Palin';
  var fullName = firstName + " " + lastName;
  display("Full Name: ", fullName);

  fullName += "!"
  display("Added the !: ", fullName);

  var quote = "Michael\'s \"quote\" here";
  display("Escaped characters: ", quote);
  
}
