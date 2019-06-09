var request = new XMLHttpRequest()

request.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
      console.log(data)
	
  } else {
    console.log('error')
  }
}

request.send()