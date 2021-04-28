window.addEventListener('load', () => {
  function generateSinglePersonHtml(person) {
    return `<div class="profile-element" data-id="${person.id}">
        <div class="profile-image">
          <div class="profile-id">${person.id}</div>
          <img src="./assets/images/persons/${person.foto}">
        </div>
        <div class="profile-data">
          <div class="profile-name">${person.nome}</div>
          <div class="profile-role">${person.cargo}</div>
        </div>
      </div>`;
  }
  
  document.querySelector("#persons-container").innerHTML = data.map(generateSinglePersonHtml).join("");
  document.querySelectorAll(".profile-element").forEach(e => e.addEventListener('mouseover', () => onProfileHover(e)))
  
  let currentShowingProfileId;
  function onProfileHover(element) {
    const id = element.dataset.id
  
    if(currentShowingProfileId != id) {
      currentShowingProfileId = id;
      const person = data.find(person => person.id == id);
      applyPersonToFocus(person);
    }
  }
  
  function applyPersonToFocus(person) {
    document.querySelector("#person-info #selected-person-image").innerHTML = 
      `<img src="assets/images/persons/${person.foto}">`;
    document.querySelector("#person-info #selected-person-name").innerHTML = person.nome;
    document.querySelector("#person-info #selected-person-role").innerHTML = person.cargo;
    document.querySelector("#person-info #selected-person-age").innerHTML = person.idade;
  }
  //Set an default person
  applyPersonToFocus(data[0]);
});