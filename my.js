function check() {
    let thang =document.getElementById('nhap').value;

    if (thang <= 12 & thang >= 1){
        if(thang == 2) {
            document.getElementById('ngay').innerHTML='co 28 ngay thang 2'
        }else if (thang%2 == 0) {
            document.getElementById('ngay').innerHTML='co 30 ngay trong thang' + thang
        }else {
            document.getElementById('ngay').innerHTML='co 31 ngay trong thang' + thang
        }
    }else {
        alert('loi')
    }
}