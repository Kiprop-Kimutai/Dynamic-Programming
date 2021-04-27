let dp = [];
function longestCommonSubsequence(str1, str2, len1, len2) {
    if(len1 === -1 || len2 === -1) {
        return 0;
    }
    if(!dp[len1][len2]) {
        if(str1[len1] === str2[len2]) {
            return 1 + longestCommonSubsequence(str1, str2, len1-1, len2-1);
        } else {
            return Math.max(longestCommonSubsequence(str1, str2, len1, len2-1), longestCommonSubsequence(str1, str2, len1-1, len2));
        }
    }
    return dp[len1][len2];
}
let str1 = "aab", str2 = "aac";
dp = Array(str1.length).fill(0).map(() => Array(str2.length).fill(0));
let res = longestCommonSubsequence(str1, str2,str1.length-1, str2.length-1);
console.log(res);