
// const array = [
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 8],
//     [0,1, 2, 3, 4, 5, 6, 7, 18],
//  ]
//  console.log(array[7][8])

export const generateSudoku = () => {

    let arrayBidimensional = [
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 8],
        [0,1, 2, 3, 4, 5, 6, 7, 18],
    ]
    for (let i = 0; i < arrayBidimensional.length; i++) {
        for (let j = 0; j < arrayBidimensional.length; j++) {
            let counter;
            arrayBidimensional[i][j] = counter += 1;
        }
    }
    console.log(arrayBidimensional)
}

