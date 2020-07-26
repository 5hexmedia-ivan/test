const variable: number = 12;

const variable1: string = 'string';

let variable2: boolean = false;

interface iBla {
  bla: string;
}

const ninja:iBla = { bla: 'truc' };

console.log(variable, variable1, variable2 == false, ninja.bla);

// npm install -g tsc
// tsc src/test.ts