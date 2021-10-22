window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temprature-description");
    let temperatureDegree = document.querySelector(".temprature-degree");
    let locationTimezone= document.querySelector(".location-timezone");
    let curricon= document.querySelector(".curricon");
    let degreesection= document.querySelector(".degree-section"); 
    const degreesectionspan = document.querySelector('.degree-section span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long= position.coords.longitude;
            lat= position.coords.latitude;

            const api= 'http://api.weatherapi.com/v1/current.json?key=5caa6772367d4beca2d143600210109&q=India';

            fetch(api)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            const{temp_c,temp_f} = data.current;
            const{text,icon} = data.current.condition;
            //set DOM elements from api call

            temperatureDegree.textContent= temp_f;
            temperatureDescription.textContent= text;
            locationTimezone.textContent = data.location.country;
            curricon.src = "https://"+icon;

            //change temprature from F to degree celcius...

            degreesection.addEventListener('click', ()=>{
                if(degreesectionspan.textContent==="F"){
                    temperatureDegree.textContent= temp_c;
                    degreesectionspan.textContent="C";

                }else{
                    temperatureDegree.textContent= temp_f;
                    degreesectionspan.textContent="F";
                }
            });
        });
        });
    }    
});