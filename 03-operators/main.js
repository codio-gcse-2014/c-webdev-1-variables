
function testFunction() {

  var added = 2 + 2;
  var subtracted = 2 - 2;
  var multiplied = 2 * 2;
  var divided = 2 / 2;
  var remainder = 10 % 7;
  var moreComplex = (100 + added*2) / 10;  
  display("OPERATORS: ", "added:", added, " subtracted:", subtracted, " multiplied:", multiplied, " divided:", divided, " remainder:", remainder, " moreComplex:", moreComplex);

  var i = 0;
  var j = 10;
  i = i + 1;
  j += 10;
  display("INCREMENT/DECREMENT: ", " i:", i, " j:", j);
  
  i=10;
  j = i++;
  display("i++ EXAMPLE : ", " i:", i, " j:", j);
  

  i=10;
  j = ++i;
  display("++i EXAMPLE : "," i:", i, " j:", j);
  

}
