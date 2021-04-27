let str = "abdbc";
function LongestPalindromicSubstring(str,start, end) {
    if(start === end) {
        return 1;
    }
    if(start > end) {
        return 0;
    }
    if(str[start] === str[end]) {
        let remainingsubstringlength = end - start-1;
        if(remainingsubstringlength === LongestPalindromicSubstring(str, start+1, end-1)) {
            return 2 + remainingsubstringlength;
        }
    }
    let res = Math.max(LongestPalindromicSubstring(str,start, end-1),LongestPalindromicSubstring(str,start+1, end));
    return res;
    
}
let res = LongestPalindromicSubstring(str, 0, str.length-1);
console.log(res);