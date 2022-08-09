'use strict';
const resultEle = document.getElementById('invoiceBody');
const submitBtn = document.getElementById('productSubmitBtn');
const sumEle = document.getElementById('sum');
const showCustomerName = document.getElementById('showCustomerName');
let sum = 0;
submitBtn.onclick = function () {
  const customerNameEle = document.getElementById('customerName').value;
  const productName = document.getElementById('productName').value;
  const productPrice = persionToEnNumber(document.getElementById('productPrice').value);
  const productQTY = persionToEnNumber(document.getElementById('productQTY').value);
  if (customerNameEle == '') {
    alert('لطفا نام مشتری را وارد نمایید');
  } else if (productName == '') {
    alert('لطفا نام محصول را وارد نمایید');
  } else if (productPrice == '') {
    alert('لطفا فی محصول را وارد نمایید');
  } else if (productQTY == '') {
    alert('لطفا تعداد محصول را وارد نمایید');
  } else {
    let currentSum = productPrice * productQTY;
    sum += currentSum;
    let newRecord = '<tr class="odd:bg-slate-100 even:bg-slate-300">';
    newRecord += '<td class="border border-white text-slate-800 p-2 rounded-md">' + productName + '</td>';
    newRecord +=
      '<td class="border border-white text-slate-800 p-2 rounded-md">' +
      productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      '</td>';
    newRecord +=
      '<td class="border border-white text-slate-800 p-2 rounded-md">' +
      productQTY.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      '</td>';
    newRecord +=
      '<td class="border border-white text-slate-800 p-2 rounded-md">' + currentSum.toLocaleString() + '</td>';
    newRecord += '</tr>';
    resultEle.innerHTML += newRecord;
    document.getElementById('products').reset();
    document.getElementById('customerName').setAttribute('readonly', true);
    document.getElementById('customerName').value = customerNameEle;
    document.getElementById('customerName').style.backgroundColor = 'rgb(203 213 225 / var(--tw-bg-opacity)';
    sumEle.innerText = 'مجموع قابل پرداخت : ' + sum.toLocaleString() + ' تومان ';
    showCustomerName.innerText = 'نام مشتری : ' + customerNameEle;
  }
};

let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
  persionToEnNumber = function (str) {
    if (typeof str === 'string') {
      for (let i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
      }
    }
    return str;
  }