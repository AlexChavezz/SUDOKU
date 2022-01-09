import '../css/app.css';
import { sudokuLayaut } from './sudokuLayout';

let easyOne = [
    [1, 5, 8, 2, 4, 7, 6, 9, 3],
    [6, 2, 3, 1, 8, 9, 4, 5, 7],
    [9, 4, 7, 5, 3, 6, 1, 2, 8],
    [8, 1, 2, 7, 6, 3, 9, 4, 5],
    [4, 6, 5, 8, 9, 1, 3, 7, 2],
    [3, 7, 9, 4, 2, 5, 8, 1, 6],
    [2, 8, 1, 3, 5, 4, 7, 6, 9],
    [5, 9, 4, 6, 7, 8, 2, 3, 1],
    [7, 3, 6, 9, 1, 2, 5, 8, null]
];
let resOne = [
    [1, 5, 8, 2, 4, 7, 6, 9, 3],
    [6, 2, 3, 1, 8, 9, 4, 5, 7],
    [9, 4, 7, 5, 3, 6, 1, 2, 8],
    [8, 1, 2, 7, 6, 3, 9, 4, 5],
    [4, 6, 5, 8, 9, 1, 3, 7, 2],
    [3, 7, 9, 4, 2, 5, 8, 1, 6],
    [2, 8, 1, 3, 5, 4, 7, 6, 9],
    [5, 9, 4, 6, 7, 8, 2, 3, 1],
    [7, 3, 6, 9, 1, 2, 5, 8, 4],
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

const generateLayout  = (sudokuValues) => {
    document.querySelector('#root').innerHTML = sudokuLayaut;
    const fieldsSudoku = getSudokuHtml();
    for (let i = 0; i < fieldsSudoku.length; i++) {
        for (let j = 0; j < fieldsSudoku.length; j++) {
            if (sudokuValues[i][j]) {
                fieldsSudoku[i][j].innerHTML = sudokuValues[i][j]
                fieldsSudoku[i][j].classList.add('static');
            }
        }
    }
}

const sudokuValidation = () => {
    let isValidate = true;
    let sudokuHtml = getSudokuHtml();
    let arrayBidimensional = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
        ]
   for (let i = 0; i < sudokuHtml.length; i++) {
        for (let j = 0; j < sudokuHtml.length; j++) {
            arrayBidimensional[i][j] = parseInt(sudokuHtml[i][j].textContent);
        }        
    }
    for (let i = 0; i < arrayBidimensional.length; i++) {
        for (let j = 0; j < arrayBidimensional.length; j++) {
            if( arrayBidimensional[i][j] !== resOne[i][j]){
                isValidate = false;
            }
        }        
    }
    return isValidate;
}

// -> change styles to active styles numbers
const toggleColorChange = (target) => {
    const sudokuHtml = getSudokuHtml();
    for (let i = 0; i < sudokuHtml.length; i++) {
        for (let j = 0; j < sudokuHtml.length; j++) {
            if(sudokuHtml[i][j].textContent == target.getAttribute('data-id')){
                sudokuHtml[i][j].style.backgroundColor = "#181818";
                sudokuHtml[i][j].style.color = "#fff";
            }else{
                sudokuHtml[i][j].style.backgroundColor = "#fff";
                sudokuHtml[i][j].style.color = "black";
            }
        }                        
    }
}

const butonsOptions = document.querySelectorAll('.initial_screen_option');
console.log(butonsOptions)
butonsOptions.forEach(element => {
    element.addEventListener('click', function ({ target }) {
        const type = target.textContent;

        let value = {
            current: 1, 
        }

        switch (type.toLowerCase()) {
            case "easy": {
                generateLayout(easyOne);
                const something = generateClock();
                console.log(something);
                const numbers  = document.querySelectorAll('.number');
                document.querySelector('aside').addEventListener('click', ({target}) => {
                    numbers.forEach( element => {
                        // -> active styles toggle
                        if ( element.getAttribute('data-id') !== target.getAttribute('data-id') ) {
                            element.classList.remove('active');
                        }else{
                            target.classList.add('active');
                        }
                    })
                    // -> active numbers styles
                    toggleColorChange(target);
                    value.current = target.getAttribute('data-id');
                });
                document.addEventListener('click', (e) => {
                    if( !e.target.classList.contains('static') && e.target.classList.contains('sudoku_number')){
                        e.target.textContent = value.current;
                        // -> validar si es correcto el sudoku
                        const isValidate  = sudokuValidation();
                        if ( isValidate ){
                            const sudokuHtml = getSudokuHtml();
                                for (let i = 0; i < sudokuHtml.length; i++) {
                                    for (let j = 0; j < sudokuHtml.length; j++) {
                                        sudokuHtml[i][j].style.backgroundColor = "#181818";
                                        sudokuHtml[i][j].style.color = "#fff";
                                    }                                    
                                }
                            const time = getTime();
                                generateModal(time);
                                document.querySelector('.push').addEventListener('click', () => {
                                    fetch('http://localhost:8080/api/data', {
                                        method:"POST", 
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(time)
                                    })
                                    .then(res => res.json())
                                    .then(console.log)
                                })
                            clearInterval(something);
                            // console.log('logrado')
                        }
                    }
                });
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

const generateModal = ({hours, minutes, secounds}) => {
    const modal = document.createElement('section');
    modal.className = "modal_container"
    const modalChild = `
    <article class="modal">
        <article>
            <h3>Congratulations</h3>
        </article>
        <img src="./pictures/undraw_winners_re_wr1l.svg" alt="congrats_img"/>
        <article>
            Time: 0${hours} : ${minutes < 10? ('0' + minutes) : (minutes)} : ${secounds < 10? ('0'+secounds) : (secounds)}
        </article>
        <button class="push">
            Push to scoreboard
        </button>
        <button onclick="location.reload()">
        Menu
    </button>
    </article>
    `;
    modal.innerHTML = modalChild;
    document.querySelector('#root').appendChild(modal);
}

const getTime = () => {
    const hours = parseInt(document.querySelector('.hours').textContent);
    const minutes = parseInt(document.querySelector('.minutes').textContent);
    const secounds = parseInt(document.querySelector('.secounds').textContent);

    return {
        hours, minutes, secounds
    }
}

const generateClock = () => {
    let secounds = 0;
    let minutes = 0;
    let hours = 0;
    return window.setInterval(() => {
        // secounds += secounds + 1;
        if( minutes === 60){
            minutes =  0;
            hours++;
        }
        if( secounds === 60){
            secounds = 0;
            minutes++;
        }
        document.querySelector('.hours').innerHTML = `0${hours}:`;
        document.querySelector('.minutes').innerHTML = `0${minutes}:`;
        document.querySelector('.secounds').innerHTML = `0${secounds}`;
        if( secounds >= 10){
            document.querySelector('.secounds').innerHTML = secounds;
        }
        if( minutes >= 10 ){
            document.querySelector('.minutes').innerHTML = minutes;
        }
        secounds++;
    }, 1000);
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
