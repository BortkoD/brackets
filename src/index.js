module.exports = function check(str, bracketsConfig) {
    let checkStr = '';
    for (let i = 0; i < str.length; i++) {
        let c = 0;
        for (; c < bracketsConfig.length; c++) {
            if (str[i] === bracketsConfig[c][0] && (checkStr.length < i+1 || checkStr[i] != str[i])) {
                checkStr = checkStr.slice(0, i) + bracketsConfig[c][0] + bracketsConfig[c][1] + checkStr.slice(i);
                break;
            }
        } 
        if (c == bracketsConfig.Length && str[i] != checkStr[i]) return false;
    }
    if (checkStr === str) return true;
    else return false;
}
