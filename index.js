function sortDescending(num) {
        return Number(String(num).split('').sort().reverse().join(''));
    
}

   console.log(sortDescending(123))