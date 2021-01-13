/***
 * minimum deletions to transform a string to a palindrome
 * Solution is to find longest palindromic subsequence
 * Answer is string length minus longest palindromic subsequence
 */
let dp = [];
function LPS(string) {
    for(let i = 0; i < string.length; i++) {
        dp[i][i] = 1;
    }
    for(let substringlength = 2; substringlength <= string.length; substringlength++) {
        for(let i = 0; i < (string.length-substringlength)+1; i++) {
            let j = (substringlength+i) - 1;
            if(string[i] === string[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j]);
            }
        }
    }
}
function Minimumdeletions(string) {
    dp = Array(string.length).fill(0).map(row => Array(string.length).fill(0));
    LPS(string);
    console.log(dp);
    return string.length - dp[0][string.length-1];
    
}
Minimumdeletions('geeksforgeeks');