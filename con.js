function convert(s, numRows) {
    if (numRows === 1) return s;
    const rows = Array.from({ length: numRows }, () => '');
    let cur = 0, dir = -1;
    for (let c of s) {
        rows[cur] += c;
        if (cur === 0 || cur === numRows - 1) dir = -dir;
        cur += dir;
    }
    return rows.join('');
}