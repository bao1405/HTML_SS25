let limit =+ parseInt(prompt("Nhập vào một số nguyên dương:"));
if (limit > 0) {
    console.log("Dãy Fibonacci nhỏ hơn", limit, "là:");
    let a = 0, b = 1;
    let sum = 0;
    do {
        console.log(a);
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
    } while (sum < limit);
} else {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn 0.");
}