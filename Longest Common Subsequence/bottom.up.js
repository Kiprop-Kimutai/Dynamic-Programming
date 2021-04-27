function longestCommonSubsequence(str1, str2) {
    let dp = Array(str1.length+1).fill(0).map(() => Array(str2.length+1).fill(0));
    for(let i = 1; i <= str1.length; i++) {
        for(let j = 1; j <= str2.length; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return dp[str1.length][str2.length];
}
let str1 = "abce", str2 = "acde";
let res = longestCommonSubsequence(str1, str2);
console.log(res);