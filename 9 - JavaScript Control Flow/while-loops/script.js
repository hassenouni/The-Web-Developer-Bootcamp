//Task 1
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19")
var num = -10;

while (num < 20) {
	console.log(num);
	num++;
}

//Task 2
console.log("PRINTING ALL EVEN BETWEEN 10 AND 40")
var num = 10;

while (num <= 40) {
	console.log(num);
	num+=2;
}

// Task 3
console.log("PRINTING ALL ODD BETWEEN 300 AND 333")
var num = 300;

while (num <= 333) {
	if(num % 2 !==0) {
		console.log(num);
	}
	num+=1;
}

//Task 4
console.log("PRINTING ALL NUMBERS BETWEEN 5 AND 50 DIVISIBLE BY 5 AND 3")
var num = 5;

while (num <= 50) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num+=1;
}