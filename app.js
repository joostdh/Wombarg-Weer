document.addEventListener('DOMContentLoaded', (event) => {


    t = document.getElementById('t');
    h = document.getElementById('h');
    p = document.getElementById('p');


    fetch('http://api.weatherapi.com/v1/current.json?key=fe416564dccc4276a43163249210707&q=Woudenberg&').then(function(response) {
        return response.json();
      }).then(function(data) {
        t.innerHTML = `<br>` + data.current.temp_c;
        h.innerHTML = `<br>` + data.current.humidity + '%';
        p.innerHTML = `<br>` + data.current.pressure_mb;
    }).catch(function() {
        console.log("Booo");
      });

});

//fe416564dccc4276a43163249210707 api key