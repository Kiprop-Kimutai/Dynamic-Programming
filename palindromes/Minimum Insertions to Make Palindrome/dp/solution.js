/**
 * @param {string} s
 * @return {number}
 */
// dp solution
var minInsertions = function(s) {
    // recursive solution
    dp = Array(s.length).fill(0).map(row => Array(s.length).fill(0));
    for(let substringlength = 2; substringlength <= s.length;substringlength++) {
        for(let i = 0; i <= (s.length-substringlength); i++) {
            let j = (substringlength+i)-1;
            if(s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1])+1;
            }
        }
    }
    return dp[0][s.length-1];
};