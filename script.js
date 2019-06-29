var deckid = 0;
var playerTotal = 0;
var dealerTotal = 0;

$('#new-game').on('click', function() {

	$('#playercards').empty();
	$('#dealercards').empty();

	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2', true)
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
		for(var i = 0; i < 3; i++){
		if(data.cards[i].value == "KING" || data.cards[i].value == "QUEEN" || data.cards[i].value == "JACK"){
                data.cards[i].value = 10;
        }
		if(data.cards[0].value == "ACE"){
                data.cards[i].value = 1;
        }}
		window.playerTotal = parseInt(data.cards[0].value) + parseInt(data.cards[2].value);
        window.dealerTotal = parseInt(data.cards[1].value);
        console.log(playerTotal);
        console.log(dealerTotal);
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

$('#hit').on('click', function() {
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/'+ window.deckid +'/draw/?count=1', true)
	request.onload = function() {

	var data = JSON.parse(this.response)
	if(data.cards[0].value == "KING" || data.cards[0].value == "QUEEN" || data.cards[0].value == "JACK"){
                data.cards[0].value = 10;
        }
		if(data.cards[0].value == "ACE"){
                data.cards[0].value = 1;
        }
	window.playerTotal = window.playerTotal + parseInt(data.cards[0].value);
	console.log(playerTotal)
	if (request.status >= 200 && request.status < 400) {
		console.log(data)
        $('#playercards').append('<li>' + '<img src=' + data.cards[0].image + '>' + '</li>');	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()
});

$('#stand').on('click', function() {
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/'+ window.deckid +'/draw/?count=1', true)
	request.onload = function() {

	var data = JSON.parse(this.response)
	if(data.cards[0].value == "KING" || data.cards[0].value == "QUEEN" || data.cards[0].value == "JACK"){
                data.cards[0].value = 10;
        }
		if(data.cards[0].value == "ACE"){
                data.cards[0].value = 1;
        }
	window.dealerTotal = window.dealerTotal + parseInt(data.cards[0].value);
	console.log(dealerTotal)
	if (request.status >= 200 && request.status < 400) {
		console.log(data)
        $('#dealercards').append('<li>' + '<img src=' + data.cards[0].image + '>' + '</li>');	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()
});


//+ data.cards[0].value + " " + data.cards[0].suit 