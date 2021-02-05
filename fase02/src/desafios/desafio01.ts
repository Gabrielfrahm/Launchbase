interface IMC {
    name: string;
    weight: number;
    height: number;
}

interface Retirement{
    name: string;
    sexo: string;
    age: number;
    contribution: number;
}

const imcCalculator = ({name, weight, height}: IMC) => { 
    const imc = weight / (height * height);
    if(imc >= 30){
        console.log(`${name} voce esta acima do peso, seu imc  ${imc}`);
        return;
    }else if(imc < 29.9) {
        console.log(`${name} voce nao esta acima do peso, seu imc ${imc}`);
        return;
    }
}


imcCalculator({name: `jose`, weight: 84, height: 1.88 });


const retirementCalculator = ({name, sexo, age, contribution}: Retirement) => {
    const tempForContributions = age + contribution;
    if(sexo === 'M'){
        if(tempForContributions >= 95){
            console.log(`${name}, voce pode se aposentar`);
        }else{
            console.log(`${name}, voce ainda nao pode se aposentar`);
        }
    }else if (sexo == 'F'){
        if(tempForContributions >= 85){
            console.log(`${name}, voce pode se aposentar`);
        }else{
            console.log(`${name}, voce ainda nao pode se aposentar`);
        }
    }
}

retirementCalculator({
    name: 'Gabriel',
    age: 40,
    contribution: 15,
    sexo: 'F'
})
