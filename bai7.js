let a = parseInt(prompt("Nhập số thứ nhất: "));
let b = parseInt(prompt("Nhập số thứ hai: "));
let c = parseInt(prompt("Nhập số thứ ba: "));
let d = parseInt(prompt("Nhập số thứ tư: "));
let findGCD = function(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
let gcdAB = findGCD(a, b);
let gcdABC = findGCD(gcdAB, c);
let gcdABCD = findGCD(gcdABC, d);
let lcm = (a * b * c * d) / gcdABCD;
console.log("Bội chung nhỏ nhất của", a, b, c, d, "là:", lcm);