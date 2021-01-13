let dp = [];
function CPS(string, i, j) {
    // Base condition. Minimum substring is of length 2
    if(i > j || i === j) {
        dp[i][j] = 0;
        return 0;
    }
    // if substring is of length 2
    if(i + 1 == j) {
        dp[i][j]  = string[i] === string[j] ? 1 : 0;
        return dp[i][j];
    }
    if(dp[i][j] != -1) {
        return dp[i][j];
    }
    else if(string[i] === string[j]) {
        if(i+1 === j-1) {
            dp[i][j] = 1;
        } else {
        dp[i][j] = CPS(string, i, j-1) + CPS(string, i+1, j);
        }
        return dp[i][j];
    } else {
        dp[i][j] = CPS(string, i+1,j) + CPS(string, i,j-1) - CPS(string, i+1,j-1);
        
        return dp[i][j];
    }
}
function CountPalindromicSubstrings(string) {
    dp = Array(string.length).fill(-1).map(row => Array(string.length).fill(-1));
    CPS(string, 0, string.length-1);
    console.log(dp);
}
CountPalindromicSubstrings('abaab');