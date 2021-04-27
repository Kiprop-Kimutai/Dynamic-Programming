/**
 * This problems has two cases that satisy dp conditions:
 *      - Overlapping sub-problems: If we draw a recursion tree, we can see that several steps are repeated.We can solve this using memoization
 *      - Optimal sub-structure property: The overal solution can be found if we have solutions to parts of the overall problem. (Solutions to sub-problems make the overall solution)
 */
let str = "cbbd";
let dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0));
 function LongestPalindromicSubsequence(str, start, end) {
    // base cases
    if(!str || str.length === 1) {
        return str.length;
    }
    if(start === end) {
        return 1;
    }
    if(start > end) {
        return 0;
    }
    if(!dp[start][end]) {
        if(str[start] === str[end]) {
            dp[start][end] = 2 + LongestPalindromicSubsequence(str, start+1,end-1);
        } else {
            dp[start][end] = Math.max(LongestPalindromicSubsequence(str, start, end-1), LongestPalindromicSubsequence(str,start+1, end));
        }
    }
    return dp[start][end];
 }
 console.log(LongestPalindromicSubsequence(str,0, str.length));