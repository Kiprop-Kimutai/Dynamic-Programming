let dp = [];
function LongestCommonSubsequence(str1, str2, strlen1, strlen2) {
    if(strlen1 === 0 || strlen2 === 0) {
        return 0;
    }
    if(!dp[strlen1-1][strlen2-1]) {
        let count = 0;
        if(str1[strlen1-1] === str2[strlen2-1]) {
            count = 1 + LongestCommonSubsequence(str1, str2, strlen1-1, strlen2-1);
        }
        dp[strlen1-1][strlen2-1] = Math.max(count, LongestCommonSubsequence(str1, str2, strlen1, strlen2-1), LongestCommonSubsequence(str1, str2, strlen1-1, strlen2));
    }
    return dp[strlen1-1][strlen2-1];
}
let str1 =  "aaae", str2 = "aabcaaa",res;
dp = Array(str1.length).fill(0).map(() => Array(str2.length).fill(0));
res = LongestCommonSubsequence(str1, str2, str1.length, str2.length);
console.log(res);