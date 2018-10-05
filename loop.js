//Bài 1a
exports.loop = (arrStudent) => {
    const student = arrStudent
    
    //foreach
    console.log('***** foreach *****');
    const stuNameForeach = [];
    student.forEach( (val) => {
        stuNameForeach.push(val.name);
    });
    console.log(stuNameForeach);

    //for
    const stuNameFor = [];
    console.log('***** for *****');
    for (let index = 0; index < student.length; index++) {
        stuNameFor.push(student[index].name);
    }
    console.log(stuNameFor);
    //map
    console.log('***** map *****');
    let stuNameMap = []; //dont use const
    stuNameMap = arrStudent.map( (student) => {//map or filter đều đc
        return student.name;
    });
    console.log(stuNameMap);
}

//Bài 1b
exports.filter = (arrStudent) => {
    const student = arrStudent
    
    //foreach
    console.log('***** foreach *****');
    const stuNameForeach = [];
    student.forEach( (val) => {
        if (val.status === true) stuNameForeach.push(val.name);
    });
    console.log(stuNameForeach);

    //for
    const stuNameFor = [];
    console.log('***** for *****');
    for (let index = 0; index < student.length; index++) {
        if (student[index].status === true) stuNameFor.push(student[index].name);
    }
    console.log(stuNameFor);
    //map
    console.log('***** map *****');
    
    let stuNameFilter = arrStudent
        .filter(student => student.status === true)
        .map( (student) => { 
            return student.name
        });
    console.log(stuNameFilter);
}

//Bài 2
exports.arrayInArray = (arr) => {
    let rs = []; 
    arr.map( (number) => {
        if (Array.isArray(number) === false) {
            rs.push(number);
        } else {
            number.map( (number2) => {
                if (Array.isArray(number2) === false) {
                    rs.push(number2);
                } else {
                    number2.map( (number3) => {
                        if (Array.isArray(number3) === false) {
                            rs.push(number3);
                        } else {
                            console.log(number3);
                        }
                    });
                }
            });
        }
    });
    console.log(rs);
}

//Bài 3
exports.reduce = (nhanvien) => {
    var chiphi = 0;
    var i = 0;
    nhanvien.reduce( (chiphi, nv, i, nhanvien) => {
        // console.log(i);
        // console.log(nhanvien);
        return nhanvien[i].chiphi = nv.luong + nv.thuong + nv.trocap;
    }, 0);
    console.log(nhanvien);
}
