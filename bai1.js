let a = +prompt("Nhập a");
let sum = 0;

if (!isNaN(a)) {
    for (let i = 1; i <= a; i++) {
        if ((a % 4 === 0 && i <= a - 2) || (a % 4 === 3 && i <= a - 1) || (a % 4 !== 0 && a % 4 !== 3)) {
            sum += i;
        }
    }
    console.log('Tổng: ' + sum);
} else {
    console.log("Không hợp lệ");
}
