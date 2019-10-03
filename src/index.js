module.exports = function check(str, bracketsConfig) {
    const arr = [];

    for (let s = 0; s < str.length; ++s) {
        for (let m = 0; m < bracketsConfig.length; ++m) {
            if (bracketsConfig[m].includes(str[s])) {
                if (str[s] === bracketsConfig[m][1] && bracketsConfig[m][0] === arr[arr.length - 1]) {
                    arr.pop();
                } else {
                    arr.push(str[s]);
                }
            }
        }
    }
    return !arr.length;
};
