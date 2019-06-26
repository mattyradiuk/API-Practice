var deckid = 0;
var playerTotal = 0;
var dealerTotal = 0;

$('#new-game').on('click', function() {

	$('#playercards').empty();
	$('#dealercards').empty();

	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6', true)
	request.onload = function() {

	var data = JSON.parse(this.response)
	window.deckid = data.deck_id
	
	if (request.status >= 200 && request.status < 400) {
        console.log(data);		
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()
});

$('#draw-card').on('click', function() {
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/'+ window.deckid +'/draw/?count=3', true)
	request.onload = function() {

	var data = JSON.parse(this.response)
		window.playerTotal = data.cards[0].value + data.cards[2].value;
        window.deckid = data.cards[1].value;
        console.log(playerTotal);
	if (request.status >= 200 && request.status < 400) {
		console.log(data)
        $('#playercards').append('<li>' + '<img src=' + data.cards[0].image + '>' + '</li>');
        $('#dealercards').append('<li>' + '<img src=' + data.cards[1].image + '>' + '</li>');
        $('#playercards').append('<li>' + '<img src=' + data.cards[2].image + '>' + '</li>');	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()

});

$('#button1').on('click', function() {
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/'+ window.deckid +'/draw/?count=1', true)
	request.onload = function() {

	var data = JSON.parse(this.response)

	if (request.status >= 200 && request.status < 400) {
		console.log(data)
        $('#playercards').append('<li>' + '<img src=' + data.cards[0].image + '>' + '</li>');	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()
});


//+ data.cards[0].value + " " + data.cards[0].suit 