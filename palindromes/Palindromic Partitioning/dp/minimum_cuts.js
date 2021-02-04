function isPalindrome(string) {
    let palindromes = Array(string.length).fill(0).map(row => Array(string.length).fill(0));
    for(let i = string.length-1; i >= 0; i--) {
        for(let j = i; j < string.length; j++) {
            if(i === j) {
                palindromes[i][j] = 1;
            } else if(string[i] === string[j]) {
                palindromes[i][j] = (j-i === 1 ? 1 : palindromes[i+1][j-1]);
            } else {
                palindromes[i][j] = 0;
            }
        }
    }
    return palindromes;
}
function palindromicParitions(string) {
    let palindromesDP = isPalindrome(string);
    let partitions = [];
    for(let i = string.length-1; i >= 0; i--) {
        partitions[i] = Number.MAX_VALUE;
        if(palindromesDP[i][string.length-1]) {
            partitions[i] = 0;
        } else {
            for(let j = string.length-2; j>=i; j--) {
                partitions[i] =   Math.min(partitions[i], 1 + partitions[j+1]);
            }
        }
    }
    console.log(partitions[0]);
    return partitions[0];
}
palindromicParitions('aab');