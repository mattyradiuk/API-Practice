
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', true)
	request.onload = function() {

	var data = JSON.parse(this.response)
	var deckid = data.deck_id
		drawCard(deckid)
	if (request.status >= 200 && request.status < 400) {
        console.log(data)	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()


function drawCard(deckid) {
	var request = new XMLHttpRequest()

	request.open('GET', 'https://deckofcardsapi.com/api/deck/'+ deckid +'/draw/?count=2', true)
	request.onload = function() {

	var data = JSON.parse(this.response)

	if (request.status >= 200 && request.status < 400) {
        console.log(data)	
  		} else {
  	  		console.log('error')
  		}
	}

	request.send()
}