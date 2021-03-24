let car:Car;


function validar_matricula(matricula:any) {
	var regex = /^[A-Z]{3}\d{4}$/;
	return regex.test(matricula) ? true : false;

    
}

function createCar(){

    
    var acumErrores1 = 0;

        let PlateCapturar = (document.getElementById("plateInput") as HTMLFormElement).value;
        let BrandCapturar = (document.getElementById("brandInput") as HTMLFormElement).value;
        let ColorCapturar = (document.getElementById("colorInput") as HTMLFormElement).value;

            car=new Car(PlateCapturar,ColorCapturar,BrandCapturar);

//-----------Condicionales

if(PlateCapturar== "" || BrandCapturar =="" ||ColorCapturar ==""){
    alert("Rellena todos los campos nada.")
    acumErrores1++
}

if(!validar_matricula(PlateCapturar)){
alert("No cumples con los requisitos propios de la matricula: 3 letras mayusculas y 4 numeros.")    
acumErrores1 ++;
}
  



if (acumErrores1 > 0){
    return false;
}else{
    (<HTMLInputElement>document.getElementById("demo")).innerHTML= 
    "<b>Matricula es:</b> " + car.plate +"</br>"+ 
    "<b>Color del coche es:</b> " +car.color + "</br>"+ 
    "<b>Marca del coche es:</b> " + car.brand,
    (<HTMLInputElement>document.getElementById("FormularioCompletoCar")).style.display = "none"; 
}

}



function createWheel(){



for(let i = 1; i<=4; i++) {

let acumerrores=0;   
let Brand = (document.getElementById("InputBrandWheel_" +  i) as HTMLInputElement).value;
let Diameter = (document.getElementById("InputDiameter_" +  i) as HTMLInputElement).value;      
let wheel = new Wheel(Number(Diameter), Brand);

        if(Diameter  == "" ){
        alert("Tienes campos de Diametro sin rellenar.");
        acumerrores++;
        break;
        }       
        if(Brand ==""){
         alert("Rellena todos los campos de Marca");
         acumerrores++;
         break;
        }if(Number(Diameter) < 0.4 || (Number(Diameter)>2)){
            alert("Coloca un numero entre 0.4 y 2");
        acumerrores++;
        break;}

        if(acumerrores>0){
            return false;
        }else{    
        (<HTMLInputElement>document.getElementById("ResultadoWheel")).innerHTML+=" Rueda"+i+"- <b>Diametro:</b> " + wheel.diameter +" <b>Marca de la rueda es:</b> "+ wheel.brand+ "</br>",
        (<HTMLInputElement>document.getElementById("FormularioCompletoWheel")).style.display = "none"; }
                      
    }
} 




