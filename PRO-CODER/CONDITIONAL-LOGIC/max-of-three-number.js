let num1 = 10;
let num2 = 20;
let num3 = 30;
let max;
if (num1 > num2) {
	if (num1 > num3) {
		max = num1;
	}
	else {
		max = num3;
	}
}
else {
	if (num2 > num3) {
		max = num2;
	}
	else {
		max = num3;
	}
}

// if (num1 >= num2 && num1 >= num3) {
// 	max = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
// 	max = num2;
// }
// else {
// 	max = num3;
// }

// if (num1 >= num2 && num1 >= num3) {
// 	max = num1;
// }
// else if (num2 >= num3) {
// 	max = num2;
// }
// else {
// 	max = num3;
// }

console.log(max);