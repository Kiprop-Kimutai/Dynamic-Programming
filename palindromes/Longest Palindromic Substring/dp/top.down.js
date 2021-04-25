/**
 * This approach follows a top-down approach.
 * This problems is perfect for two DP paradigms:
 *          - Optimal Substructre property: Overall solution is built upon smaller sub-problems
 *          - Overlapping sub-probelms: There are overlapping recursion points
 */
let str = "abdbc";
let dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0));
function LongestPalindromicSubstring(str,start, end) {
    if(start === end) {
        dp[start][end] = 1;
        return 1;
    }
    if(start > end) {
        return 0;
    }
    if(!dp[start][end]) {
        if(str[start] === str[end]) {
            let remainingsubstringlength = end - start-1;
            if(remainingsubstringlength === LongestPalindromicSubstring(str, start+1, end-1)) {
                dp[start][end] = 2 + remainingsubstringlength;
                return 2 + remainingsubstringlength;
            }
        }
        let res = Math.max(LongestPalindromicSubstring(str,start, end-1),LongestPalindromicSubstring(str,start+1, end));
        dp[start][end] = res;
        return res;
    } else {
        return dp[start][end];
    }
    
}
let res = LongestPalindromicSubstring(str, 0, str.length-1);
console.log(res);