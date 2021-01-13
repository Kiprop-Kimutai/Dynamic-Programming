function backTracking(string,dp) {
    let size = dp.length;
    let sequence = new Set();
        let j = size-1; 
        let i = 0;
        let temp = dp[i][j];
        sequence.add(i); sequence.add(j);
        while(temp != 1) {
           while(dp[i][j] === temp) {
             j--;
            }
            temp = dp[i][j];
            while(dp[i+1][j] === temp) {
             i++;
            }
            sequence.add(j); sequence.add(i);
        }
        sequence.add(j); sequence.add(i);
    sequence = [...sequence].sort();
    lps = "";
    for(let i = 0; i < sequence.length; i++) {
        lps = lps.concat(string[sequence[i]]);
    }
    console.log(lps);
    return lps.length;
}
function LPS(string) {
    if(!string) {
        return 0;
    }
    // build a 2D matrix
    let DP = Array(string.length).fill(0).map(row => Array(string.length).fill(0));
    for(let i = 0; i < string.length; i++) {
        DP[i][i] = 1; 
    }
    for(let substringlength = 2; substringlength <= string.length; substringlength++) {
        for(i = 0; i < (string.length-substringlength)+1; i++) {
            let j = (substringlength + i)-1;
            if(string[i] === string[j] && substringlength == 2) {
                DP[i][j] = 2;
            } else if(string[i] === string[j]) {
                DP[i][j] = 2 + DP[i+1][j-1];
            } else {
                DP[i][j] = Math.max(DP[i][j-1], DP[i+1][j]);
            }
        }
    }
    backTracking(string,DP);
}
LPS('abdaba');