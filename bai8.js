let chieuDai = parseInt(prompt("Nhập chiều dài của hình chữ nhật: "));
let chieuRong = parseInt(prompt("Nhập chiều rộng của hình chữ nhật: "));
while (chieuDai !== chieuRong) {
    if (chieuDai > chieuRong) {
        chieuDai -= chieuRong;
    } else {
        chieuRong -= chieuDai;
    }
}
let soHinhVuong = (chieuDai * chieuRong) / (chieuDai * chieuRong);
console.log("Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là:", soHinhVuong);