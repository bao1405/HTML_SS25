let n = +prompt('Nhập n');
let tong = 0;

if (!isNaN(n) && n > 0) {
    let m = 1;
    while (tong + m < n) {
        console.log(m);
        tong += m;
        m++;
    }
    console.log("Số lớn nhất mà tổng các số < m nhỏ hơn", n, "là:", m - 1);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
