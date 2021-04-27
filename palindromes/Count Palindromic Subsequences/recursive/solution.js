let set = new Set();
let map = new Map();
function countPalindromicSubsequences(str,start, end) {
    if(start > end) {
        return 0;
    }
    if(start === end) {
        set.add(str.substring(start, end+1));
        map.set(start-end, str.substring(start,end+1));
        return 1;
    }
    if(str[start] === str[end]) {
        return countPalindromicSubsequences(str, start, end-1) + countPalindromicSubsequences(str, start+1, end) + 1;
    } else {
        return countPalindromicSubsequences(str, start, end-1) + countPalindromicSubsequences(str, start+1, end) - countPalindromicSubsequences(str, start+1, end-1);
    }
}
const str = "aaa";
console.log(countPalindromicSubsequences(str, 0, str.length-1));