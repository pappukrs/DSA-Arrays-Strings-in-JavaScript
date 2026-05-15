function myAtoi(s) {
    s = s.trimStart();
    let sign = 1, i = 0, res = 0;
    if (s[i] === '-') { sign = -1; i++ } else if (s[i] === '+') i++;
    while (i = '0' && s[i] <= '9') {
        res = res * 10 + Number(s[i++]);
        if (res * sign > 2 ** 31 - 1) return 2 ** 31 - 1;
        if (res * sign < -(2 ** 31)) return -(2 ** 31);
    }
    return res * sign;
}