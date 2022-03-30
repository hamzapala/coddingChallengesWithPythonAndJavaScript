function countEncoding(s){
    if (s.startsWith('0')) return 0;
    if (s.length <= 1) return 1;

    let total = 0;
    if (+s.slice(0,2) <= 26) total += countEncoding(s.slice(2));
    total += countEncoding(s.slice(1));
    return total;
}

console.log(countEncoding("111"));
console.log(countEncoding("11211"));