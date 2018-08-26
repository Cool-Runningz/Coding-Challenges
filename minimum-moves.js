/*
 Given two arrays a & m, you need to figure out how many moves or "steps" it will take to make array m equal to array a. 
 A "step" is considered moving up or down by one digit. For example taking the first digit in both arrays gives us a[1] & m[2].
 In order for m to match a we need to make one step down so that m = [1345, 3214].
 
 Assumptions: The arrays will always be the same length and will only contain positive numbers.
 
 Return: The total amount of moves (or steps) that must be taken in order for array m to match array a.
 
Sample Test Cases
------------------
Input: a = [1234,4321]  m = [2345,3214]
Output: 10

*/

function minimumMoves(a, m) {
    var moves = 0;
    var aSplit = [];
    var mSplit = [];
    
    for(var i = 0; i < a.length; i++){
        a[i] = a[i].toString();
        m[i] = m[i].toString();
    }
    
    for(var j = 0; j < a.length; j++){
        aSplit.push(a[j].split(""));
        mSplit.push(m[j].split(""));
    }
    
    for(var x = 0; x < aSplit.length; x++){
        for(var y = 0; y < aSplit[x].length; y++){
            
            while(parseInt(aSplit[x][y]) < parseInt(mSplit[x][y])){
            //decrement
                mSplit[x][y] = parseInt(--mSplit[x][y]).toString();
                moves++;
            }
            
            while(parseInt(aSplit[x][y]) > parseInt(mSplit[x][y])){
            //increment
                mSplit[x][y] = parseInt(++mSplit[x][y]).toString();
                moves++;
            }
        
        }
    }
    

    return moves;
}
