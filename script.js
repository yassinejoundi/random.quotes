function getQuote() {
    fetch(`https://source.unsplash.com/1600x900/?nature,water,weather`).then((response) => {      
    document.body.style.background = `url(${response.url})`;
  }) 
  fetch(`https://type.fit/api/quotes`)
  .then((response)=> { return response.json() })
  .then((data)=>{ 
      const i = Math.floor(Math.random() * data.length)
      document.querySelector('.quote').innerText = data[i].text
      if (data[i].author == null) {
         document.querySelector('h4').innerText = "Anonyme" 
      } else {
        document.querySelector('h4').innerText = data[i].author
      }
     })
}

getQuote()

document.querySelector('.refresh').addEventListener('click', getQuote)