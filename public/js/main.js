const cityname= document.getElementById('cityname');
const submitbtn= document.getElementById('submitbtn');
const city_name= document.getElementById('city_Name');
const day= document.getElementById('day');
const date= document.getElementById('date');
const mag= document.getElementById('mag');
const tempstatus= document.getElementById('tempstatus');
const datahide= document.querySelector('.middlelayer');
const getinfo=async(event)=>{
    event.preventDefault();
    const cityval= cityname.value;
    if(cityval === "" ){
        city_name.innerText=`Please write the appropriate name to search`;
        day.innerText=`--`;
        date.innerText=`--`;
        datahide.classList.add('hide_data');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=15b3349f7b754a858e016813a2b4af52`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrdata=[data];
            console.log(arrdata);
            city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
            mag.innerText= arrdata[0].main.temp;
            const temp_mood= arrdata[0].weather[0].main;
            if(temp_mood==="Clear"){
                tempstatus.innerHTML= "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(temp_mood==="Clouds"){
                tempstatus.innerHTML= "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(temp_mood==="Rain"){
                tempstatus.innerHTML= "<i class='fas  fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                tempstatus.innerHTML= "<i class='fas  fa-cloud' style='color:#87ceeb;'></i>";
            }
            datahide.classList.remove('hide_data');
        }
        catch{
            city_name.innerText=`Please enter appropriate name`;   
            datahide.classList.add('hide_data');
        }
    }
}
submitbtn.addEventListener('click',getinfo);