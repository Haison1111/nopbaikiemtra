
function KiemtraSNT(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
      if (count > 1) {
        return false;
      }
      if (count <= 1) {
        return true;
      }
    
}

function tinhtong() {
  let numbA = document.getElementById("number-a").value;
  let numbB = document.getElementById("number-b").value;
  let sumSNT = 0;
  if (numbA > numbB) {
    alert("không thỏa mãn điều kiện ");
  }


  if (numbA < numbB) {
    for (let i = numbA; i < numbB; i++) {
      if (KiemtraSNT(i)) {
        sumSNT += i;
      }
    }
  }
  document.getElementById("ketqua").innerHTML =
      "Tổng các số nguyên tố trong khoảng từ " +
      numbA +
      " đến " +
      numbB +
      " là: " +
      sumSNT;
}
