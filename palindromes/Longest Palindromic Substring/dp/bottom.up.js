/***
 * This approach follows a bottom-up approach; a principle of dynamic programming building on the optimal substructure property
 */
function LongestPalindromicSubstring(str) {
    if(!str || str.length === 1) {
        return str.length;
    }
    let dp = Array(str.length).fill(false).map(() => Array(str.length).fill(false));
    let maxLPS = 1;
    let maxlpsSubstring = [0,0];
    for(let i = 0; i < str.length; i++) {
        dp[i][i] = true;
    }
    for(let i = str.length-2; i >= 0; i--) {
        for(let j = i+1; j < str.length; j++) {
            if(str[i] === str[j]) {
                if(dp[i+1][j-1] || j-i === 1) {
                    dp[i][j] = true;
                    let maxlps = (j-i) + 1;
                    maxLPS = Math.max(maxLPS, maxlps);
                    if(maxLPS === maxlps) {
                        maxlpsSubstring = [i,j];
                    }
                }
            }
        }
    }
    console.log(dp);
    console.log(maxlpsSubstring);
    return maxLPS;
}
let res = LongestPalindromicSubstring("banana");
console.log(res);