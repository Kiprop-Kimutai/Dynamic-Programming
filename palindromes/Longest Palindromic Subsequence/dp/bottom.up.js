/**
 * From recusrion steps in recursive approach, we have observed that this problem has optimal substrucre property.
 * Idea is to solve smaller problems first,then build them towards the final solution
 */
let str = "abbd";
function LongestPalindromicSubsequence(str) {
    let dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0));
    for(let i = 0; i < str.length; i++) {
        dp[i][i] = 1;
    }
    for(let i = str.length-2; i>=0; i--) {
        for(let j = i+1;j < str.length; j++) {
            if(str[i] === str[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    return dp[0][str.length-1];
}
console.log(LongestPalindromicSubsequence(str));