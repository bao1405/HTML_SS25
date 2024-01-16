let n = +prompt('Nhập vào số nguyên dương n:');
let S = 0;
let sum = 1;
if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        sum *= i;
        S += sum;
    }
    console.log('Giá trị của biểu thức S là:', S);
} else {
    console.log('Vui lòng nhập một số nguyên dương.');
}
