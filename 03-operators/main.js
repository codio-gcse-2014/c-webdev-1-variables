
function testFunction() {
  
  var added = 2 + 2;
  var subtracted = 2 - 2;
  var multuplied = 2 * 2;
  var divided = 2 / 2;
  var remainder = 10 % 6;
  var moreComplex = (100 + added*2) / 10;  
  
  display("Operators")
  display(added);
  display(subtracted);
  display(multuplied);
  display(divided);
  display(remainder);  
  display(moreComplex);
  
  display("<br>Incrementing and Decrementing")
  added = added + 1;
  display(added);
  added += 1;
  display(added);
  
  display("<br>i++ example");
  var i=10;
  var val = i++;
  display("val=" + val);
  display("i=" + i);

  display("<br>i++ example");
  i=10;
  val = ++i;
  display("val=" + val);
  display("i=" + i);
  
  
  
}
