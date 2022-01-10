const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + (+optionsBlock.value)
    );

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
export default calc;

// ______________________________________________________________

// import { getResource } from "../services/requests";
// const calc = (size, material, options, promocode, result) => {

//     const sizeBlock = document.querySelector(size),
//           materialBlock = document.querySelector(material),
//           optionsBlock = document.querySelector(options),
//           promocodeBlock = document.querySelector(promocode),
//           resultBlock = document.querySelector(result);

//         let sum = 0,
//             sizeVal = '0',
//             materialVal = '0',
//             optionVal = '0';
//         let state;

//         getResource('assets/calcPrice.json')
//             .then(res => {
//                 state = res;
//             })
//             .catch(e => console.log(e));
//         console.log(state, 'state');
//         function changePrice(event, elem) {
//             elem.addEventListener(event, (e) => {
//                 const target = e.target,
//                       select = target.id;

//                 function calcFunc(state) {
//                     for (let key in state[select]) {
//                         if (elem.value === key) {
//                             switch(select) {
//                                 case 'size':
//                                     sizeVal = state[select][key];
//                                     break;
//                                 case 'material':
//                                     materialVal = state[select][key];
//                                     break;
//                                 case 'options':
//                                     optionVal = state[select][key];
//                                     break;
//                             }
//                         }
//                         console.log(state[select][key]);
//                     }

//                     sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
//                     if (sizeBlock.value == '' || materialBlock.value == '') {
//                         resultBlock.textContent = "Пожалуйста выберите размер и материал картины";

//                     } else if(promocodeBlock.value === 'IWANTPOPART') {
//                         resultBlock.textContent = Math.round(sum * 0.7);
//                     } else {
//                         resultBlock.textContent = sum;
//                     }

//                     console.log(resultBlock.textContent, 'resbl txtctt');
//                 }

//                 calcFunc(state);
//             });
//         }

//     changePrice('change', sizeBlock);
//     changePrice('change', materialBlock);
//     changePrice('change', optionsBlock);
//     changePrice('input', promocodeBlock);

// };

// export default calc;
