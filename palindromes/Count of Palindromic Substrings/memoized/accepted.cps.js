let dp = [];
function CPS(string, i, j) {
    if(i > j) {
        return 1;
    }
    if(dp[i][j] != -1) {
        return dp[i][j];
    }
    if(string[i] !== string[j]) {
        dp[i][j] = 0;
        return dp[i][j];
    }
    dp[i][j] = CPS(string, i+1, j-1);
    return dp[i][j];
}
function CountPalindromicSubstrings(string) {
    dp = Array(string.length).fill(-1).map(row => Array(string.length).fill(-1));
    console.log(dp);
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        for(let j = i+1; j < string.length; j++) {
            if(CPS(string, i,j)) {
                count++;
            }
        }
    }
    console.log(count);
    console.log(dp);
}
CountPalindromicSubstrings('abbaeae');