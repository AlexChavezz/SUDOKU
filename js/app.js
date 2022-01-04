// import { generateSudoku } from "./generateSudoku";



const butonsOptions = document.querySelectorAll('.initial_screen_option');
butonsOptions.forEach(element => {
    element.addEventListener('click', function ({ target }) {
        generateSudoku(target.textContent);
    })
});

const clearRoot = () => {
    document.querySelector('#root').innerHTML = '';
}
const addSudoku = (type) => {
    switch (type.toLowerCase()) {
        case "easy": {

        }
            break;
        case "medium": {
            console.log("medium")
        }
            break;
        case "hard": {
            console.log("hard")
        }
            break;
        default: {
            console.log("medium")
        }
            break;
    }
}
// const generateSudoku = (difficulty) => {
//     clearRoot();
//     addSudoku(difficulty);

// }
export const generateSudoku = () => {

    let arrayBidimensional = [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ]

    // for (let i = 0; i <= arrayBidimensional.length; i++) {
    // console.log(arrayBidimensional[0][i])
    // let status = true;
    // do {
    //     const value = Math.floor(Math.random() * (9 - 1) + 1);

    //     if( isIn(arrayBidimensional, 0, value)){
    //         arrayBidimensional[0][i] = value;
    //         status = false;
    //     }else{
    //         console.log('duplicated')
    //         status = true;
    //     }
    // } while (status);

    // }
    console.log(arrayBidimensional[0].some(n => n === 10))

    // isIn(arrayBidimensional)

    for (let i = 0; i < arrayBidimensional.length; i++) {
        for (let j = 0; j <= arrayBidimensional.length; j++) {
           
            // if (!arrayBidimensional[j].some(n => n === newValue)) {
            //     arrayBidimensional[i][j] = newValue;
            //     // console.log(arrayBidimensional[j].)
            // }
            let state = true;
            do{
                const newValue = Math.floor(Math.random() * (9 - 1) + 1);
                if( !arrayBidimensional[i].some( n => n === newValue) ){
                    arrayBidimensional[i][j] = newValue;
                    state = false;
                }
            }while(state);
        }
    }
    console.log(arrayBidimensional)
}

function isIn(array, value){
    array.forEach( (element, index) => {
        console.log(element);
    })
}

// function isIn(array, j, value) {
//     for (let i = 0; i <= array.length; i++) {
//         // console.log(array[i])
//         if (array[j][i] === value) {
//             // console.log(i)
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

generateSudoku();
