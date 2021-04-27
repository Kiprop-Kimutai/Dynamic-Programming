function LongestPalindromicSubsequence(str,start, end) {
    if(!str || str.length === 1) {
        return str.length;
    }
    // base cases
    if(start === end) {
        return 1;
    }
    if(start > end ) {
        return 0;
    } 
    if(str[start] === str[end]) {
        return 2 + LongestPalindromicSubsequence(str, start+1, end-1);
    }
    return Math.max(LongestPalindromicSubsequence(str, start+1, end),LongestPalindromicSubsequence(str,start, end-1));
}
let str = "a";
console.log(LongestPalindromicSubsequence(str,0, str.length));