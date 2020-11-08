const str = "k(a3(b(a2(c))))zz"; //"kabaccbaccbacczz"
const stack = [];
let firstBracket = 0,
    lastBracket = 0;

const simpleCalc = (data) => {
   const splitedData = data.split('').reverse();
   let result = '';
   splitedData.forEach(item => {
      if (Number.isNaN(+item)) {
         result = result + item;
      } else {
         let intermediateResult = '';
         for (let i = 1; i <= item; i++) {
            intermediateResult = intermediateResult + result;
         }
         result = intermediateResult;
      }
   });
   return result.split('').reverse().join('');
};

const calculate = (input) => {
      stack.push(input);
      firstBracket = stack[stack.length - 1].indexOf('(');
      lastBracket = stack[stack.length - 1].lastIndexOf(')');
   
   while(firstBracket && lastBracket !== -1) {
      stack.push(stack[stack.length - 1].slice(firstBracket + 1, lastBracket));

      firstBracket = stack[stack.length - 1].indexOf('(');
      lastBracket = stack[stack.length - 1].lastIndexOf(')');
   }
      
   let res = simpleCalc(stack.pop());
   
   while(stack.length > 0) {
      firstBracket = stack[stack.length - 1].indexOf('(');
      lastBracket = stack[stack.length - 1].lastIndexOf(')');
      res = simpleCalc(`${stack[stack.length - 1]
            .slice(0, firstBracket)}${res}${stack[stack.length - 1]
            .slice(lastBracket + 1)}`);
      stack.pop();
   }

   return res;

};

console.log(calculate('k(a3(b(a2(c))))zz'));