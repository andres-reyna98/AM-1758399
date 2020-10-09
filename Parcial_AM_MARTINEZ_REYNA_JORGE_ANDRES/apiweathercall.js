
function search(){
    checkbotton();
    var ciudadJ = document.getElementById('ciudad').value;
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+ ciudadJ +",mx&appid=97479383f409a3094115ee8b090f92cb";
    
    getApiData(apiURL);
  

}
function getApiData(apiURL)
{
   var request= new XMLHttpRequest();
   request.open('GET',apiURL,true);
   request.send();   
   request.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
            var data = this.response;
            var myData = JSON.parse(data);
            showData(myData);
            icons(myData);
           
       }
   }
}

