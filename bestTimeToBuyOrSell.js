function maxProfit(prices) {
    let min = Infinity, profit = 0;
    for (let p of prices) {
        min = Math.min(min, p);
        profit = Math.max(profit, p - min);
    }
    return profit;
}