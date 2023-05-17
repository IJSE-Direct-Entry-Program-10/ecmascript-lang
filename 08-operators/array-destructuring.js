let nums = [10, 20, 30, 40, 50];

const [x, y, , k, m, a, b] = nums;  // [10,20,30,40,50]

console.log('x=', x, ', y=', y, ', k=', k, ', m=', m);

let arr1 = [1, 2, 3, 4, 5, 6, 7];

let [first, second, ...rest] = arr1;

console.log(`first=${first}, second=${second}`);
console.log(rest);

let arr2 = [undefined, null, 1, 2, undefined, 3, null];

let [c = 'ijse', d = 'dep', e, f, g, h, i] = arr2;
console.log('c=', c);
console.log('d=', d);
console.log('e=', e);
console.log('f=', f);
console.log('g=', g);
console.log('h=', h);
console.log('i=', i);

// let [a1, b1, c1, d1] = [10, 20, 30, 40, 50, 60, 70, 80];
let [a1, b1, ...[c1, d1, ...[...rest2]]] = [10, 20, 30, 40, 50, 60, 70, 80];

// let [c1, d1, ...[...rest2]] = [30, 40, 50, 60, 70, 80];
// let [...rest2] = [50, 60, 70, 80];

console.log('a1=', a1);
console.log('b1=', b1);
console.log('c1=', c1);
console.log('d1=', d1);
console.log('rest2=', rest2);