function isPalindrome(string) {
    if(string.length === 1) {
        return true;
    }
    let m = 0, n = string.length-1;
    while(m < n) {
        if(string[m] != string[n]) {
            return false;
        }
        m++;
        n--;
    }
    return true;
}
function noOfAppends(string) {
    if(isPalindrome(string)) {
        return 0;
    } else {
        string = string.substring(1, string.length+1);
        return 1 + noOfAppends(string);
    }
}
noOfAppends('mama');