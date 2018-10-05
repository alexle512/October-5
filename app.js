//Palindrome
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));
  


  //Remove Duplicates
  var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

  var uniq = names.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);
  
  console.log(uniq, names)


//Largest and Smallest Number
var array = [267, 306, 108];
var largest = Math.max.apply(Math, array);
var smallest= Math.min.apply(Math, array);
console.log(array, largest, smallest)


//Fizzbuzz

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}