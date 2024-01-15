let a = parseInt(prompt("Nhập số nguyên dương a: "));
let b = parseInt(prompt("Nhập số nguyên dương b: "));
console.log("Các số trong khoảng từ", a, "đến", b, "có các chữ số phân biệt là:");
for (let i = a; i <= b; i++) {
    let numStr = i.toString();
    let distinct = true;

    for (let j = 0; j < numStr.length; j++) {
        for (let k = j + 1; k < numStr.length; k++) {
            if (numStr[j] === numStr[k]) {
                distinct = false;
                break;
            }
        }
        if (!distinct) {
            break;
        }
    }
    if (distinct) {
        console.log(i);
    }
}