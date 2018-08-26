/*
 Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize 
 the first letter of each word. Words will be separated by only one space. 
*/

function LetterCapitalize(str) { 

    var strArray = str.split(" ");
    var i = 0;
    var tmp = "";

    while(i < strArray.length){
        tmp = strArray[i];
        strArray[i] = strArray[i].charAt(0).toUpperCase();
        strArray[i] = strArray[i] + tmp.slice(1);
        i++;
    }

    str = strArray.join(" ");
    return str; 
         
}
