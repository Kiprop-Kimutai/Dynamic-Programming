function search(text, pattern) {
    let indices = [];
    let M = text.length, N = pattern.length;
    for(let i = 0; i <= M-N; i++) {
        let j;
        for(j = 0; j < N; j++) {
            if(text[i+j] != pattern[j]) {
                break;
            }
        }
        if(j === N) {
            console.log(`Match found at index ${i}`);
            indices.push(i);
        }
    }
    return indices;
}
search('mamamamama', 'mama');
search('AABAACAADAABAAABAA', 'AABA');