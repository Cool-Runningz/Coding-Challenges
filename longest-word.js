/*
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Sample Test Cases
------------------
Input: "fun&!! time"
Output: "time"

Input: "I love dogs"
Output: "love"

*/

function LongestWord(sen) { 


var nextWord = "";
var patt1 = /[A-Za-z]/g;

var strArr = sen.split(" ");

var longestWord = strArr[0].match(patt1).join("");

if(strArr.length > 1){
    
    for(var i = 1; i < strArr.length; i++){
        nextWord = strArr[i].match(patt1).join("");
        
        if(nextWord.length > longestWord.length){
            longestWord = nextWord;
        }
    }
}

  return longestWord; 
         
} 
