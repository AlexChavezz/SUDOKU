import '../css/app.css';
import { sudokuLayaut } from './sudokuLayout';
let easyOne = [
            [1, null, null, 2, null, 7, null, null, 3],
            [6, null, null, null, null, null, null, 5, null],
            [null, 4, 7, null, 3, null, null, 2, 8],
            [8, null, null, null, null, 3, null, null, 5],
            [null, 6, null, null, null, 1, null, null, 2],
            [3, null, 9, null, null, 5, 8, 1, 6],
            [null, 8, null, null, null, 4, null, null, null],
            [5, 9, null, 6, 7, null, null, null, null],
            [null, 3, null, 9, 1, null, null, 8, 4],
];
let mediumOne = [
        [null, 7, null, null, null, null, 6, null, null],
        [null, 2, null, null, 9, null, 8, null, null],
        [null, null, null, 8, 2, 5, null, null, null],
        [null, null, 5, null, null, null, null, 3, null],
        [null, null, null, null, null, 8, null, 6, 4],
        [null, null, 1, null, 6, 3, null, 8, 9],
        [null, null, null, null, null, null, null, null, null],
        [7, 1, null, null, null, null, 4, null, null],
        [8, null, null, 3, 5, null, 3, null, null],
];
let hardOne = [
        [null, 3, null, 1, 9, 2, null, null, null],
        [9, null, null, null, 8, null, null, null, null],
        [null, 7, null, null, 6, null, 1, null, null],
        [null, 2, null, null, null, 6, 3, null, 5],
        [null, 9, 6, null, 1, null, null, null, null],
        [3, null, null, null, 7, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 1, null, null, 9],
        [null, 6, 8, null, null, null, 4, null, null],
];

// Sudou layout

function getSudokuHtml() {
    const one = document.querySelectorAll('.one');
    const two = document.querySelectorAll('.two');
    const three = document.querySelectorAll('.three');
    const four = document.querySelectorAll('.four');
    const five = document.querySelectorAll('.five');
    const six = document.querySelectorAll('.six');
    const seven = document.querySelectorAll('.seven');
    const eight = document.querySelectorAll('.eight');
    const nine = document.querySelectorAll('.nine');
    return [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine
    ]
}
// function getSudokuHtml(){
//     const partOne = document.querySelector('.onePart');
//     const partTwo = document.querySelector('.partTwo');
//     const partThree = document.querySelector('.partThree');
//     const partFour = document.querySelector('.partFour');
//     const partFive = document.querySelector('.partFive');
//     const partSix = document.querySelector('.partSix');
//     const partSeven = document.querySelector('.partSeven');
//     const partEight = document.querySelector('.partEight');
//     const parteNine = document.querySelectorAll('.parteNine');
//     return [
//         partOne, 
//         partTwo, 
//         partThree, 
//         partFour, 
//         partFive, 
//         partSix,
//         partSeven, 
//         partEight, 
//         parteNine
//     ]
// }

const generateLayout  = (sudokuValues) => {
    document.querySelector('#root').innerHTML = sudokuLayaut;
    const fieldsSudoku = getSudokuHtml();
    // const sudokuValues = generateSudoku();
    // fixSudokuValues(sudokuValues);
    for (let i = 0; i < fieldsSudoku.length; i++) {
        for (let j = 0; j < fieldsSudoku.length; j++) {
            if (sudokuValues[i][j]) {
                fieldsSudoku[i][j].innerHTML = sudokuValues[i][j]
                fieldsSudoku[i][j].classList.add('static');
            }
        }
    }
}

const butonsOptions = document.querySelectorAll('.initial_screen_option');
butonsOptions.forEach(element => {
    element.addEventListener('click', function ({ target }) {
        const type = target.textContent;

        switch (type.toLowerCase()) {
            case "easy": {
                generateLayout(easyOne);
            }
                break;
            case "medium" :
                generateLayout(mediumOne);
                break;
            case "hard":
                generateLayout(hardOne);
                break;
            default:
            break;
        }
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

/*

    Genarate sodoku values in an bidimencinal array

// */

// const generateSudoku = () => {

//     // -> Note for me: Try fill  all array position whit numbers 

//     let arrayBidimensional = [
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//     ]

//     for (let i = 0; i < arrayBidimensional.length; i++) {
//         for (let j = 0; j < arrayBidimensional.length; j++) {

//             const newValue = Math.floor(Math.random() * (9 - 1) + 1);
//             if (!arrayBidimensional[i].some(n => n === newValue)) {
//                 arrayBidimensional[i][j] = newValue;
//             }
//         }
//     }
//     let n = [
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null, null, null],
//     ];
//     for (let i = 0; i < arrayBidimensional.length; i++) {
//         for (let j = 0; j < arrayBidimensional.length; j++) {
//             if (!n[i].some(n => n === arrayBidimensional[j][i])) {
//                 n[i][j] = arrayBidimensional[j][i]
//             }
//         }
//     }
//     return n;
// }

// function fixSudokuValues(n) {
//     let aux1 = [];
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             aux1 = [...aux1, n[i][j]];
//         }
//     }
//     let aux2 = [];
//     for (let i = 0; i < 3; i++) {
//         for (let j = 3; j < 6; j++) {
//             aux2 = [...aux2, n[i][j]]
//         }
//     }
//     let aux3 = [];
//     for (let i = 0; i < 3; i++) {
//         for (let j = 6; j < 9; j++) {
//             aux3 = [...aux3, n[i][j]]
//         }
//     }
//     let aux4 = [];
//     for (let i = 3; i < 6; i++) {
//         for (let j = 0; j < 3; j++) {
//             aux4 = [...aux4, n[i][j]]
//         }
//     }
//     let aux5 = [];
//     for (let i = 3; i < 6; i++) {
//         for (let j = 3; j < 6; j++) {
//             aux5 = [...aux5, n[i][j]]
//         }
//     }
//     let aux6 = [];
//     for (let i = 3; i < 6; i++) {
//         for (let j = 6; j < 9; j++) {
//             aux6 = [...aux6, n[i][j]]
//         }
//     }
//     let aux7 = [];
//     for (let i = 6; i < 9; i++) {
//         for (let j = 0; j < 3; j++) {
//             aux7 = [...aux7, n[i][j]]
//         }
//     }
//     let aux8 = [];
//     for (let i = 6; i < 9; i++) {
//         for (let j = 3; j < 6; j++) {
//             aux8 = [...aux8, n[i][j]]
//         }
//     }
//     let aux9 = [];
//     for (let i = 6; i < 9; i++) {
//         for (let j = 6; j < 9; j++) {
//             aux9 = [...aux9, n[i][j]]
//         }
//     }

//     let index1, index2, index3, index4, index5, index6, index7 = [], index8, index9;

//     for (let i = 1; i <= 9; i++) {
//         if (`index${i}`.some(number => number === `aux${i}`[i] && number !== null)) {
//             `index${i}` = [...`index${i}`, null];
//         } else {
//             `index${i}` = [...`index${i}`, `aux${i}`[i]];
//         }
        
//     }


    // -> i will Opitimize it i promes    
    // let index1 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index1.some(number => number === aux[i] && number !== null)) {
    //         index1 = [...index1, null];
    //     } else {
    //         index1 = [...index1, aux[i]];
    //     }
    // }
    // let index2 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index2.some(number => number === aux2[i] && number !== null)) {
    //         index2 = [...index2, null];
    //     } else {
    //         index2 = [...index2, aux2[i]];
    //     }
    // }
    // let inde3 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (inde3.some(number => number === aux3[i] && number !== null)) {
    //         inde3 = [...inde3, null];
    //     } else {
    //         inde3 = [...inde3, aux3[i]];
    //     }
    // }
    // let index4 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index4.some(number => number === aux4[i] && number !== null)) {
    //         index4 = [...index4, null];
    //     } else {
    //         index4 = [...index4, aux4[i]];
    //     }
    // }
    // let index5 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index5.some(number => number === aux5[i] && number !== null)) {
    //         index5 = [...index5, null];
    //     } else {
    //         index5 = [...index5, aux5[i]];
    //     }
    // }
    // let index6 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index6.some(number => number === aux6[i] && number !== null)) {
    //         index6 = [...index6, null];
    //     } else {
    //         index6 = [...index6, aux6[i]];
    //     }
    // }
    // let index7 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index7.some(number => number === aux7[i] && number !== null)) {
    //         index7 = [...index7, null];
    //     } else {
    //         index7 = [...index7, aux7[i]];
    //     }
    // }
    // let index8 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index8.some(number => number === aux8[i] && number !== null)) {
    //         index8 = [...index8, null];
    //     } else {
    //         index8 = [...index8, aux8[i]];
    //     }
    // }
    // let index9 = [];
    // for (let i = 0; i < 9; i++) {
    //     if (index9.some(number => number === aux9[i] && number !== null)) {
    //         index9 = [...index9, null];
    //     } else {
    //         index9 = [...index9, aux9[i]];
    //     }
    // }
    // console.log(aux)
    // console.log(index)
    // n[0][0] = index[0];
    // n[0][1] = index[1];
    // n[0][2] = index[2];
    // n[1][0] = index[3];
    // n[1][1] = index[4];
    // n[1][2] = index[5];
    // n[2][0] = index[6];
    // n[2][1] = index[7];
    // n[2][2] = index[8];
//     console.log(index7)
// }



// const test = [1, 2, 3, 1];
// console.log(test.indexOf(1));