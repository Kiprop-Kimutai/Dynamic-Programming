let resultset = new Set();
function longest_palindromic_recursive(string, start, end, count) {
    // Base condition; start index is greater than end index
    if(start > end) {
        resultset.add({count, start, end});
        return count;
    }
    // Base condition; start equals end
    if(start === end) {
        resultset.add({count: count+1, start, end});
        return count + 1;
    }
    if(string[start] === string[end]) {
        count = longest_palindromic_recursive(string, start+1, end-1, count+2);
        resultset.add({count, start, end});
        return Math.max(count, Math.max(longest_palindromic_recursive(string, start+1, end,0), longest_palindromic_recursive(string, start, end-1, 0)));
    }
    return Math.max(longest_palindromic_recursive(string, start+1, end, 0),longest_palindromic_recursive(string, start, end-1,0));
}
function LPS(string) {
    // Base condition; empty string
    if(!string) {
        return 0;
    }
    let length = longest_palindromic_recursive(string, 0, string.length-1, 0, resultset);
    /**utility function to return the actual substring */
    /*for(let item of resultset) {
        if(item.count === length && (item.end-item.start)+1 === length) {
            console.log(string.substring(item.start, item.end+1));
        }
    }*/
    return length;
}
LPS('banana');