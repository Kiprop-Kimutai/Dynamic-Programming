function LongestCommonSubstring(str1, str2) {
    let dp = Array(str1.length+1).fill(0).map(() => Array(str2.length+1).fill(0));
    let maxLPS = 0;
    for(let i = 1; i <= str1.length; i++) {
        for(let j = 1; j < str2.length; j++) {
            if(str1[i-1] === str2[j-1]) {
                let count = Math.max(1 + dp[i-1][j-1], Math.max(dp[i-1][j], dp[i][j-1]));
                dp[i][j] = count;
                maxLPS = Math.max(maxLPS, count);
            }
        }
    }
    return maxLPS;
}
let str1 = "aabe", str2 = "aace", res;
res = LongestCommonSubstring(str1, str2);
console.log(res);