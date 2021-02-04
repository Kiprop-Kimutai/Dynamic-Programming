function isPalindrome(string, i,j) {
    while(i <= j) {
        if(string[i] !== string[j]) {
            return false;
        }
        i++;j--;
    }
    return true;
}

function minPalinPartition(string, i,j) {
    if(i === j || isPalindrome(string,i,j)) {
        return 0;
    }
    let min = Number.MAX_VALUE;
    for(let k = i; k < j; k++) {
        let count = 1 + minPalinPartition(string, i,k) + minPalinPartition(string, k+1,j);
        if(count < min) {
        min = count;
    }
    }
    return min;
}
const string = 'mama';
console.log(minPalinPartition(string, 0, string.length-1));