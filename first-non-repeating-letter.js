/*
Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the 
correct case for the initial letter. For example, the input 'sTreSS'should return 'T'.If a string contains all repeating 
characters, it should return the empty string ("").
*/

function firstNonRepeatingLetter (str) {
    var character = "";
     
     if(str.length === 0){
       return "";
     }
     
     for(var i = 0; i < str.length; i++){
       if(str.toLowerCase().indexOf(str[i]) === str.toLowerCase().lastIndexOf(str[i])){
         character = str[i];
         break;
       }
     }
     return character;
     
   }
