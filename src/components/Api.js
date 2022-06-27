const Weather = ()=>{

    const input = document.querySelector('.search');

    const requestApi = async(city)=>{
        const url = `http://api.weatherapi.com/v1/current.json?key=aab449a59f024f8e9e5182807222606&q=${city}&lang=pt`;
        const requeryData = await fetch(url, {})
        .then(respo => respo.json())
        .then((date) =>{
            console.log(date)
            const h1 = document.querySelector('h1');
            h1.innerText = date.location.name + ', ' +date.location.region;

            const img = document.querySelector('.Imagem');
            img.src = date.current.condition.icon;

            const clima = document.querySelector('.clima');
            clima.innerText = date.current.condition.text;

            const temp = document.querySelector('.graus');
            temp.innerText = date.current.temp_c + ' C';

            const humidade = document.querySelector('.humidade');
            humidade.innerText = 'Umidade '+date.current.humidity+'%';

            const timer = document.querySelector('.timer');
            timer.innerText = date.location.localtime;

            const vento = document.querySelector('.vento');
            vento.innerText = date.current.wind_kph + 'km/h';
        })
        .catch(error => error);
    }
    requestApi(input.value);
}
export default Weather;