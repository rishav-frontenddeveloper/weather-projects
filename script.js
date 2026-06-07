function showWeather(){

    let city = document.getElementById("city").value.toLowerCase();

    let result = document.getElementById("result");

    if(city === "delhi"){
        result.innerHTML = `
        <h2>Delhi</h2>
        <p>🌡 35°C</p>
        <p>☀ Sunny</p>
        `;
    }

    else if(city === "mumbai"){
        result.innerHTML = `
        <h2>Mumbai</h2>
        <p>🌡 30°C</p>
        <p>☁ Cloudy</p>
        `;
    }

    else if(city === "jaipur"){
        result.innerHTML = `
        <h2>Jaipur</h2>
        <p>🌡 38°C</p>
        <p>🔥 Hot Weather</p>
        `;
    }

    else{
        result.innerHTML = `
        <p>❌ City Not Found</p>
        <small>Try Delhi, Mumbai or Jaipur</small>
        `;
    }
}