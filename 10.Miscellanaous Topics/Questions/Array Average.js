    console.log("Array Average :- \n");

    const arrAvg = (arr) => {
        let arrSize = arr.length;
        let total = 0;

        for(let i = 0; i < arr.length; i++) {
            total = total + arr[i];
        }

        return (total/arrSize);
    };

    let arr = [84, 78, 93, 88, 99, 89];
    // arrAvg(arr);

    console.log("Average of Array :", arrAvg(arr));