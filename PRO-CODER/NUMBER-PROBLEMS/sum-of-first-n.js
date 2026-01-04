// O(n)
console.time();
let n = 1000;
let sum = 0
for (let i = 1; i <= n; i++) {
	sum += i;
}
console.log(sum)
console.timeEnd();
// O(1)
console.time();
console.log((n * (n + 1)) / 2);
console.timeEnd();
