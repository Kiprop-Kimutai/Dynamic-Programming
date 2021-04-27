/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
    let palindromes = getPalindromicSubstrings(s);
    let palindromicSets = new Set();
    let partitions = Array(s.length).fill(0).map(() => []);
    console.log(partitions);
    console.log(palindromes);
    let palindromeLength = 1;
    while(palindromeLength <= s.length/10) {
        for(let i = s.length-1; i >=0; i--) {
        partitions[palindromeLength-1][i] = Number.MAX_VALUE;
        if(palindromes[i][s.length-1] && (s.length - i=== 1 || s.length-i <= palindromeLength)) {
            console.log(`I::${i} --str:: ${palindromeLength}---`);
            partitions[palindromeLength-1][i] = 0;
        } else {
            for(let j = s.length-2; j >=i; j--) {
                if(palindromes[i][j] && ((j+1)-i === 1 || (j+1)-i <= palindromeLength)) {
                    if(i === 1 && j === 2) {
                        console.log(`---${j}---`);
                        console.log(palindromes[i][j]);
                        console.log(j+1-i);
                        console.log(palindromes[i][j] && ((j+1)-i === 1 || (j+1)-i === palindromeLength));
                    }
                    console.log(`I===${i} ===str:: ${palindromeLength}--J:${j}`);
                    console.log(palindromes[i][j]);
                    partitions[palindromeLength-1][i] = Math.min(partitions[palindromeLength-1][i], 1 + partitions[palindromeLength-1][j+1]);
                }
            }
        }
    }
        if(partitions[palindromeLength-1][0] === 2) {
            return true;
        }
        palindromeLength++;
    }
    console.log(partitions);
    return false;
    //console.log(partitions);
    
    /*for(let i = s.length-1; i >=0; i--) {
        partitions[i] = Number.MAX_VALUE;
        if(palindromes[i][s.length-1]) {
            partitions[i] = 0;
        } else {
            for(let j = s.length-2; j >=i; j--) {
                if(palindromes[i][j]) {
                    partitions[i] = Math.min(partitions[i], 1 + partitions[j+1]);
                }
            }
        }
    }
    console.log(partitions);
    if(!partitions[0] && s.length ===3) {
        return true;
    } else if(partitions[0] === 2) {
        return true;
    } else
        return false;*/
};
function getPalindromicSubstrings(string) {
    let palindromes = Array(string.length).fill(0).map(() => Array(string.length).fill(0));
    for(let i = string.length-1; i >=0; i--) {
        for(let j = i; j < string.length; j++) {
            if(i === j) {
                palindromes[i][j] = 1;
            } else if(string[i] === string[j]) {
                palindromes[i][j] = (j-i === 1 ? 1 : palindromes[i+1][j-1]);
            }
        }
    }
    return palindromes;
}
let dream = checkPartitioning("tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttxdttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
console.log(dream);