function LongestCommonSubsequence(str1, str2, str1len, str2len, count) {
    if(str1len  === 0 || str2len === 0) {
        return count;
    }
    if(str1[str1len-1] === str2[str2len-1]) {
        let abc = count +1;
        count = LongestCommonSubsequence(str1, str2, str1len-1, str2len-1, abc);
    }
    let count1 = LongestCommonSubsequence(str1,str2, str1len-1, str2len, 0);
    let count2 = LongestCommonSubsequence(str1, str2, str1len, str2len-1,0);
    return Math.max(count, Math.max(count1, count2));
}

let str1 = "dabc", str2 = "daec", res, count = 0;
res = LongestCommonSubsequence(str1, str2, str1.length, str2.length, count);
console.log(res);