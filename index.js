var stu = require('./loop');
const arr = [
    {
        id: 1,
        name: 'hoang',
        status: true
    },
    {
        id: 2,
        name: 'minh',
        status: false
    },
    {
        id: 3,
        name: 'nhi',
        status: true
    },
    {
        id: 4,
        name: 'tung',
        status: false
    },
    {
        id: 5,
        name: 'thu',
        status: true
    },
    {
        id: 6,
        name: 'anh',
        status: false
    }
]

var arr2 = [1, 2, [3, 4, [5, 6]]];

const nhanvien = [
    {
      id: 1,
      ten: 'hoang',
      luong: 10000000,
      thuong: 500000,
      trocap: 1500000,
      chucvu: 'nhanvien'
    },
    {
      id: 6,
      ten: 'van anh',
      luong: 10000000,
      thuong: 500000,
      trocap: 1500000,
      chucvu: 'nhanvien'
    },
    {
      id: 51,
      ten: 'nhi',
      luong: 5000000,
      thuong: 100000,
      trocap: 100000,
      chucvu: 'nhanvien'
    },
    {
      id: 14,
      ten: 'an',
      luong: 14000000,
      thuong: 400000,
      trocap: 2500000,
      chucvu: 'nhanvien'
    },
    {
      id: 11,
      ten: 'tuan anh',
      luong: 20000000,
      thuong: 1100000,
      trocap: 4500000,
      chucvu: 'giamdoc'
    }
]
  
// *****    Bài 1a    *****
// stu.loop(arr);
// *****    Bài 1b    *****
// stu.filter(arr);
// *****    Bài 2    *****
// stu.arrayInArray(arr2);
// *****    Bài 3    *****
stu.reduce(nhanvien);