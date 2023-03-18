/// bat tap 4

const array = [1, 2, 7, 9, 10, 12, 20, 8];
const newArr = [];
//Lọc ra một mảng mới có tên là newArr chỉ chứa
// các phần tử là số chẵn từ mảng đã cho. - Thực hiện chức năng này dưới dạng function.
// %2=0
function bt4(array1111) {

    for (let i = 0; i < array1111.length; i++) {
        if (array1111[i] % 2 === 0) {
            newArr.push(array1111[i])
        }
    }
}

bt4(array)
console.log(newArr)


//Xoá phần tử có index là 2 và thêm vào đúng vị trí đã xoá phần tử có giá trị là 100

array[1] = 100
console.log(array)
//

// bt3
//Dùng prompt() để người dùng có thể nhập vào chiều cao(m2) và cân nặng(kg) của một người.


// prompt 2 phần  (vt lable : miêu tả ô input đó làm gì)
// (vt === input)
// let chieucao = prompt("Vui lòng nhập chiều cao", "");
// let cannang = prompt("Vui lòng nhập cân nặng", "");
// const dvm = chieucao / 100
// const BMI = cannang / (dvm * dvm)
// console.log(BMI > 17.5)
// if (BMI > 25) {
//     console.log("BÉo")
// } else if (18 <= BMI && BMI <= 25) {
//     console.log("Trung binh")
// } else {
//     console.log("Gầy")
// }
// console.log(BMI)
// document.write('NAme - 1999')


// bt 5

const danhSachLop = [
    {
        name: "A",
        diem: 6
    },
    {
        name: "B",
        diem: 7
    },
    {
        name: "C",
        diem: 8
    },
    {
        name: "D",
        diem: 9
    },
    {
        name: "E",
        diem: 10
    },
]
// ${} // đây để js nó hiểu là biến
// truy cập đến object nào của mảng danhSachLop[i]
// muốn lấy value thì chấm thêm key object
const divP1 = document.createElement("div")
let pDiv = '';
for(let i = 0 ; i <danhSachLop.length ; i++){
    // += có ngĩa là giá trị pDiv sẽ bằng giá trị cũ + thêm
    //  <p class="cssdemo"> ${danhSachLop[i].name} - ${danhSachLop[i].diem} 
    //</p>
    pDiv  += `
    <p class="cssdemo"> ${danhSachLop[i].name} - ${danhSachLop[i].diem} 
    </p>
   `
   //``  đây là sử dụng cho biến
   
}
divP1.innerHTML = pDiv  



document.getElementById("view").appendChild(divP1) 
// 
