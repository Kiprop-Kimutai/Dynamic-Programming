/**
 * @param {string} s
 * @return {number}
 */
// recursive solution
function findMinimumInsertionsRecursively(string, start,end) {
    // base case 1: if start>end
    if(start > end) {
        return 0;
    }
    // base case 2: start == end
    if(start === end) {
        return 0;
    }
    if(start+1 === end) {
        if(string[start] === string[end]) {
            return 0;
        } else {
            return 1;
        }
    }
    if(string[start] === string[end]) {
        return findMinimumInsertionsRecursively(string,start+1, end-1);
    } else {
        return Math.min(findMinimumInsertionsRecursively(string, start+1, end), findMinimumInsertionsRecursively(string, start, end-1)) + 1;
    }
}
var minInsertions = function(s) {
    // recursive solution
    return findMinimumInsertionsRecursively(s, 0, s.length-1);
};