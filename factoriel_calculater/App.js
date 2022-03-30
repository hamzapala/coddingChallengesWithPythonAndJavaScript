const calculateFactoriel = (n) =>{
    if (n === 1) return 1;
    let result = n*calculateFactoriel(n-1);
    return result;
}

console.log(calculateFactoriel(5));