(function(){

    function Calculadora(){
        const display = document.querySelector('.display');

        this.inicia = function(){
            cliqueBotao();
        }

        const cliqueBotao = function(){
            document.addEventListener('click', (event) => {
                const element = event.target;
                console.log(element);
                console.log(element.innerText);

                if(element.classList.contains('btn-num')){
                    btnParaDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')){
                    clearDisplay();
                }

                if (element.classList.contains('btn-del')){
                    apagaUltimo();
                }

                if (element.classList.contains('btn-eq')){
                    realizaConta();
                }
            });

            const clearDisplay = function(){
                display.value = '';
            }

            const apagaUltimo = function(){
                display.value = this.display.value.slice(0, -1);
            }

            const btnParaDisplay = function(valor){
                display.value += valor;
            }

            const realizaConta = function(){
                try {
                    result = eval(display.value);
                } catch (err){
                    console.log(err)
                    display.value = 'Conta inválida';
                    return
                }
                if (typeof result !== "number"){
                    display.value = 'Conta inválida';
                    return
                }
                display.value = result;
            }
        }
    }

    const calculadora = new Calculadora();
    calculadora.inicia();
})()
