let pass = document.getElementById('exampleInputPassword1')
let erro = document.getElementById('passlHelp')

pass.oninput = function() {
    let point = 0;
    let value = pass.value;
    let colorArray = ["#9E0D29", "#FF7C00", "#FFE800", "#C4C54B", "#D5D5D5"];

    if (value.length >= 6) {
        // console.log(point);
        let ArrayTest = [
            /[0-9]/,
            /[a-z]/,
            /[A-Z]/,
            /[^0-9a-zA-Z]/
        ];

        ArrayTest.forEach(item => {
            if (item.test(value)) {
                point += 1;
            }
            if (point == 4) {
                erro.style.display = "none";
            } else {
                erro.style.display = "block";
            }
        })
    }
    pass.style.border = "1.5px solid";
    pass.style.borderColor = colorArray[point];

}