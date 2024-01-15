let n = parseInt(prompt("Nhập số nguyên dương n: "));
console.log("Phân giải", n, "thành tích của các số nguyên tố là:");
for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}