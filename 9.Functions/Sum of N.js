    function sumOfN(n) {
        let sum = 0;

        for(let i = 1; i <= n; i++) {
            sum = sum + i;
        }
        return sum;
    }

    console.log("Print sum of N :-\n");

    let add = sumOfN(5);
    console.log("Sum :", add);