function t26(array) {
    let tugas = array.forEach(num => {
        let fin = isFinite(array);
        if(fin === true) {
            console.log("Angka " + num + " is Infinity");
        } else {
            console.log("Angka " + num + " NOT infinity");
        }
    });
    
}
t26([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);