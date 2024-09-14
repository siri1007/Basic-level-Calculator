//  const buttons=document.querySelectorAll('button')
//  const inputbtn=document.querySelectorAll('input')

// buttons.addEventlsitener('click', ()=>{

//  btn =buttons.textContent
//  console.log(btn);


// })

      let expression = '';

      document.addEventListener('DOMContentLoaded', function () {
        const resultField = document.getElementById('result');
        const numberButtons = document.querySelectorAll('.number');
        const operatorButtons = document.querySelectorAll('.operator');
        const clearButton = document.querySelector('.clear');
        const equalButton = document.querySelector('.equal');

        // Add event listeners to number buttons
        numberButtons.forEach(button => {
          button.addEventListener('click', () => {
            expression += button.textContent;
            resultField.value = expression;
          });
        });

        // Add event listeners to operator buttons
        operatorButtons.forEach(button => {
          button.addEventListener('click', () => {
            expression += ' ' + button.textContent + ' ';
            resultField.value = expression;
          });
        });

        // Add event listener to clear button
        clearButton.addEventListener('click', () => {
          expression = '';
          resultField.value = '';
        });

        // Add event listener to equal button
        equalButton.addEventListener('click', () => {
          try {
            expression = eval(expression);
            resultField.value = expression;
          } catch (error) {
            resultField.value = 'Error';
          }
        });
      });
   