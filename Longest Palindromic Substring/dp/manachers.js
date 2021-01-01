function odifyString(string) {
    let chars = ['#'];
    for(let i in string) {
        chars.push(string[i], '#');
    }
    return chars.join('');
}
function Manachers(string) {
    string = odifyString(string);
    console.log(string);
    let LPS = Array(string.length-1).fill(0);
    let C = 0, R = 0, iMirror;
    for(let i = 0; i < string.length; i++) {
        iMirror = C - (i-C);
        if(R > i) {
            LPS[i] = Math.min(R-i, LPS[iMirror]);
        } else {
           LPS[i] = 0;
        }
        while(string[i+ 1 + LPS[i]] === string[i- 1 - LPS[i]] && (string[i+1 + LPS[i]] != undefined || string[i- 1 - LPS[i]] != undefined)) {
            //console.log('---');
            LPS[i] = LPS[i] + 1;
        }
        if(i + LPS[i] > R) {
            C = i;
            R = i + LPS[i];
        }
    }
    r = Math.max(...LPS), c = LPS.indexOf(r);
    console.log(string.substring(c-r,c+r).replace(/#/g,''));
    console.log(r);
    return r;
}
//driver code
Manachers('banana');