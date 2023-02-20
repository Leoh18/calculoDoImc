const peso:number = 89;
const altura:number = 1.84;
let pesos:string = ``;

if (altura !== 0 && peso !==  0){

    const valorIMC:number = (peso / (altura * altura));
        console.log(`O seu Imc e de: ${valorIMC.toFixed(2)}.`);

        if (valorIMC < 18.50){
            pesos =`Abaixo do peso normal`;
        }
        else if (valorIMC >= 18.50 && valorIMC <= 24.99){
            pesos =`Peso normal`;
        }
        else if (valorIMC >= 25.00 && valorIMC <= 29.99){
            pesos =`Excesso de peso`;
        }
        else if (valorIMC >= 30.00 && valorIMC <= 34.99){
            pesos =`Obesidade clase 1`;
        }
        else if (valorIMC >= 35.00 && valorIMC <= 39.99){
            pesos =`Obesidade clase 2`;
        }
        else if (valorIMC >= 40.00){
            pesos =`Obesidade clase 3`;
        }
        else{
            throw new Error(`Voce colocou um numero incorreto por favor refasa a operacao`);
        }
        console.log(`voce esta com ${pesos} !!`)
    };