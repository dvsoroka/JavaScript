const sum = (function()  {
//  return function sum(x, y, z) {
    return function sum(...args) {
//      const args = [x, y, z];
        return args.reduce((x,y) => x + y, 0);
    };
}) ();
console.log(sum(1,2,3,4,5,6,7,0,0.7,-3));