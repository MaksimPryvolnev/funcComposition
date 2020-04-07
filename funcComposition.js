let matrix = [1,2,3];
 
const fn1 = matrix => matrix.map(a => a + a)
const fn2 = matrix => matrix.map(a => a * 2)
const fn3 = matrix => matrix.map(a => a * a)
 
let res1 = fn3(fn2(fn1(matrix)))
 
const compose = (...args) => (initialVal) =>  args.reduceRight((val, fn) => fn(val), initialVal)
 
let superOpetration = compose(fn1, fn2, fn3);
let superOpetration2 = compose(fn2, fn2, fn2);
let superPuper = compose(superOpetration, superOpetration2);
let superPuperDuper = compose(superPuper, fn2, superPuper, fn3, superOpetration2);
 
let res2 = superPuperDuper(matrix);
