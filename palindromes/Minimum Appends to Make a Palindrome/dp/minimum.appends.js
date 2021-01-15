let dp = [];
function backtrack(string) {
    let i = 0, j = string.length-1, count = 0;
    while(i<j) {
        if(dp[i][j] === 0) {
            i++;j--;
        } else {
            count = count + dp[i][j];
            i++;
        }
    }
    return count;
}
function computeDP(string) {
    let i = 0, j = string.length-1;
    while(i <= j) {
        if(i>j) {
            dp[i][j] = 0;
            break;
        } else if(i==j){
            dp[i][j] = 0;
            break;
        } else if(string[i] === string[j]) {
            dp[i][j] = 0;
            i++; j--;
        } else {
            dp[i][j] = 1;
            i++;
        }
    }
}
function MinimumAppends(string) {
    dp = Array(string.length).fill(0).map(row => Array(string.length).fill(-1));
    computeDP(string);
    let count = backtrack(dp);
    console.log(count);
    return count;
}
MinimumAppends('aabb');