const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

  

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    //let url = 'http://api.openweathermap.org/data/2.5/weather?q=Allahabad&appid=f34256a6f78eac9f96b277eafd527e87'
    if(cityVal==""){
       city_name.innerText = 'Please fill City Name before search';
       datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f34256a6f78eac9f96b277eafd527e87`;
            let response = await fetch(url);
            const data = await response.json();
            let arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText =(arrData[0].main.temp-273).toFixed(2);
            //temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main;

            //const tempStatus = "{%tempstatus%}";
            if(tempStatus == "Sunny"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: yellow'></i>";
            }else if(tempStatus == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: rgb(100, 176, 211)'></i>";
            }else if(tempStatus == "Rainy"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: rgb(100, 176, 211)'></i>";
            }else {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: yellow'></i>";
            };
       datahide.classList.remove('data_hide');
            
             }catch{
            
                    city_name.innerText = 'Please Enter City Name Properly';
                       datahide.classList.add('data_hide');
                    
                }
    
    }
}

submitBtn.addEventListener('click',getInfo);
