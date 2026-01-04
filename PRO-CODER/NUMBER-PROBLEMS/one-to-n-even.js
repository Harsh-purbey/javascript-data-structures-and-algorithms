let n = 100;

// O(n)
for (let i = 1; i <= n; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// O(n/2)
for (let i = 2; i <= n; i += 2) {
	console.log(i);
}

// O(n) = O(n/2)