// TAKE ONE STEP AT TIME
//coisas que eu preciso saber pra concluir o desafio:
//things I need to know to fulfill the challenge:
var lat, lon, temp, url, celsius, fahrenheit, local, weather; 

//inicia o script depois da página carregar:
//it loads the entire page, then it inserts it behavior:
$(document).ready( function() {
	navigator.geolocation.getCurrentPosition(handlePosition);
});

function handlePosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2b77894f4d93fee22ab72754606bfef6&units=metric";

	//GET method para pegar o tempo local
  //GET method to catch the local weather:
	$.getJSON(url, function(data) {
		local = data.name;
		temp = Math.round(data.main.temp);
		celsius = temp + '°C';
		weather = data.weather[0].main;

		$('#temperature').text(celsius);
		$('#location').text(local);

		//condições para mostrar os ícones 
    //conditions to show the icons
		if (weather === 'Clouds') {
			$('#image').attr('src', 'https://image.flaticon.com/icons/svg/148/148828.svg');
		} else if (weather === 'Rain') {
			$('#image').attr('src', 'https://image.flaticon.com/icons/svg/414/414936.svg');
		} else {
			$('#image').attr('src', 'https://image.flaticon.com/icons/svg/136/136723.svg');
		}
	});
}

//conversão de celsius para fahrenheit (&vice versa)
//celsius to fahrenheit conversion (&vice versa)
$('.temp-btn').on('click', function() {
	fahrenheit = Math.round(temp * 1.8 + 32) + '°F';

	if ($('.temp-btn').text() === 'Temperature in Fahrenheit') {
		$('#temperature').text(fahrenheit);
		$('.temp-btn').text('Temperature in Celsius');
	} else {
		$('#temperature').text(celsius);
		$('.temp-btn').text('Temperature in Fahrenheit');
	}
});

  $("#mari").on('click', function(event) {
    window.open("https://twitter.com/mnhoffmann");
  });