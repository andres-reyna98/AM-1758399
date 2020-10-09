//var nc;
function showData (myData){
    console.log(myData);
    console.log(myData);
    document.getElementById("climitaPapa").innerHTML = "";
    var elementHeader = document.createElement('h4');
    elementHeader.innerHTML = myData.name + "<br><br>"+"clima-Min:"+ celsiusm(myData) +"C&deg; clima:"+ celsiust(myData) +"C&deg; clima-Max:"+ celsius(myData)+"C&deg";
    document.getElementById('climitaPapa').appendChild(elementHeader);
    //document.getElementById('icono').innerHTML= urlICON;

}
function icons(myData){
    var iconvar= myData.weather[0].icon;
    var urlICON = "http://openweathermap.org/img/wn/"+ iconvar +"@2x.png";
    var elementHeader = document.createElement('img');
    document.getElementById('climitaPapa').appendChild(elementHeader);
    elementHeader.src = 'http://openweathermap.org/img/wn/'+ iconvar +'@2x.png';
}

//perdon por esto profe ;-; ya no tuve cabeza para estas funciones. no me quite puntos T.T
function celsius(myData){
    var cel = myData.main.temp_max;
    nc=cel-273.15;
    return nc.toFixed(2);
}
function celsiusm(myData){
    var cel = myData.main.temp_min;
    nc=cel-273.15;
    return nc.toFixed(2);
}function celsiust(myData){
    var cel = myData.main.temp;
    nc=cel-273.15;
    return nc.toFixed(2);
}

