let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
if (a > b) {
    [a, b] = [b, a];
}

let numle = 0;
let numchan = 0;
for (let i = a + 1; i < b; i++) {
    if (i % 2 !== 0) {
        numle += i;
    } else {
        numchan += i;
    }
}
console.log(`Tổng số lẻ từ ${a} đến ${b}: ${numle}`);
console.log(`Tổng số chẵn từ ${a} đến ${b}: ${numchan}`);
