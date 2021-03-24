var car;
function createCar() {
    var acumErrores1 = 0;
    var PlateCapturar = document.getElementById("plateInput").value;
    var BrandCapturar = document.getElementById("brandInput").value;
    var ColorCapturar = document.getElementById("colorInput").value;
    car = new Car(PlateCapturar, ColorCapturar, BrandCapturar);
    //-----------Condicionales
    if (PlateCapturar == "" || BrandCapturar == "" || ColorCapturar == "") {
        alert("Rellena todos los campos.");
        acumErrores1++;
    }
    if (!validar_matricula(PlateCapturar)) {
        alert("No cumples con los requisitos propios de la matricula: 3 letras mayusculas y 4 numeros.");
        acumErrores1++;
    }
    if (acumErrores1 > 0) {
        return false;
    }
    else {
        document.getElementById("demo").innerHTML =
            "<b>Matricula es:</b> " + car.plate + "." + "</br>" +
                "<b>Color del coche es:</b> " + car.color + "." + "</br>" +
                "<b>Marca del coche es:</b> " + car.brand + ".",
            document.getElementById("FormularioCompletoCar").style.display = "none",
            document.getElementById("FormularioCompletoWheel").classList.remove("d-none");
    }
}
function createWheel() {
    var acumerrores = 0;
    for (var i = 1; i <= 4; i++) {
        var Brand = document.getElementById("InputBrandWheel_" + i).value;
        var Diameter = document.getElementById("InputDiameter_" + i).value;
        if (Diameter == "") {
            alert("Tienes campos de Diametro sin rellenar.");
            acumerrores++;
        }
        if (Brand == "") {
            alert("Rellena todos los campos de Marca");
            acumerrores++;
            break;
        }
        if (Number(Diameter) < 0.4 || (Number(Diameter) > 2)) {
            alert("Coloca un numero entre 0.4 y 2");
            acumerrores++;
            break;
        }
    }
    if (acumerrores == 0) {
        for (var i = 1; i <= 4; i++) {
            var Brand = document.getElementById("InputBrandWheel_" + i).value;
            var Diameter = document.getElementById("InputDiameter_" + i).value;
            var wheel = new Wheel(Number(Diameter), Brand);
            car.addWheel(wheel);
            console.log(car);
            document.getElementById("ResultadoWheel").innerHTML += " Rueda" + i + "- <b>Diametro:</b> " + wheel.diameter + "." + " <b>Marca de la rueda es:</b> " + wheel.brand + "." + "</br>",
                document.getElementById("FormularioCompletoWheel").style.display = "none";
        }
    }
}
function validar_matricula(matricula) {
    var regex = /^[A-Z]{3}\d{4}$/;
    return regex.test(matricula) ? true : false;
}
