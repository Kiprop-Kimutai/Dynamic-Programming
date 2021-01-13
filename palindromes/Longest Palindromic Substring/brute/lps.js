function expandAroundCenter(string, left, right) {
    while(left >= 0 && right <= string.length && (string[left] === string[right])) {
        left--;
        right++;
    }
    return (right-left)-1;
}
function LPS(string) {
    let len = 0, len1 = 0, len2 = 0,start = 0, end = 0;
    for(let i = 0; i < string.length; i++) {
        let len1 = expandAroundCenter(string, i, i);
        let len2 = expandAroundCenter(string, i, i+1);
        let len = Math.max(len1, len2);
        if(len > (end-start)) {
            start = i - Math.ceil((len-1)/2);
            end = i + Math.ceil(len/2);
        }
    }
    console.log(string.substring(start, end+1));
    return (end-start)+1;
}
LPS('deed');