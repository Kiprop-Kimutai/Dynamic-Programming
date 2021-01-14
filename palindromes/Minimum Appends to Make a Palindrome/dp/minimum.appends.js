let dp = [];
function computeDP(string){
    dp = Array(string.length).fill(-1).map(row => Array(string.length).fill(-1));
    console.log(dp);
    for(let i = 0; i < string.length; i++) {
        dp[i][i] = 1;
    }
    for(let substringlength = 2; substringlength <=string.length; substringlength++) {
        for(let i = 0; i <=(string.length-substringlength); i++) {
            let j = (substringlength+i)-1;
            if(i === j-1 && string[i] === string[j]) {
                console.log(j); console.log(string.length-1);
                if(j == string.length-1) {
                    dp[i][j] = 2;
                } else
                    dp[i][j] = 1;
            } else if(string[i] === string[j]) {
                dp[i][j] = 2 + Math.max(dp[i][j-1], dp[i+1][j]);
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    console.log(dp);
    return (string.length)- dp[0][string.length-1];
}
function minimumAppends(string) {
    return computeDP(string);
}
minimumAppends('abede');