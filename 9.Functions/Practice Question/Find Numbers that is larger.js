    console.log("Find Numbers that is larger then 5 :- \n");

    let arr = [2, 7, 9, 12, 3, 4, 10, 5];
    let number = 5;

    function findLarger(arr, number) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > number) {
                console.log(arr[i]);
            }
        }
    }

    findLarger(arr, number);