//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const spellChoice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${spellChoice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let classesArray = data.classes
        let subclassArray = data.subclasses
        classesArray.forEach(x => {
            document.querySelector('h3').innerText += x.name
        })
        subclassArray.forEach(subclass => {
            const li = document.createElement('li')
            li.textContent = subclass.name
            document.querySelector('ul').appendChild(li)
            
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

