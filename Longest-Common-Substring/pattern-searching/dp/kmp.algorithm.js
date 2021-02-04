function KMPSearch(string, pattern) {
    let LPS = computeLPS(pattern);
    indices = [];
    let i = 0, j= 0, m = pattern.length, n = string.length;
    while(i < n) {
        if(string[i] === pattern[j]) {
            j++;
            i++;
        }
        if(j === m) {
            console.log(`pattern found at index ${i-j}`);
            indices.push(i-j);
            j = LPS[j-1];
        } else if(i < n && string[i] != pattern[j]) {
            if(j !== 0) {
                j = LPS[j-1];
            } else {
                i++;
            }
        }
    }
    return indices;
}
function computeLPS(pattern) {
    let m = pattern.length, LPS = [], len = 0, i = 1;
    LPS[0] = 0;
    while(i < m) {
        if(pattern[len] === pattern[i]) {
            len++;
            LPS[i] = len;
            i++;
        } else {
            if(len > 0) {
                len = LPS[len-1];
            } else {
                // if len = 0;
                LPS[i] = 0;
                i++;
            }
        }
    }
    return LPS;
}

computeLPS("deep");

//KMPSearch('mamaandbabamama', 'mama');