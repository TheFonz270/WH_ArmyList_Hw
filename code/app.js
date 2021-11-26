document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
  document.querySelector('#new_unit_form').addEventListener('submit', handleForm);

  document.querySelector('#Delete').addEventListener('click', handleDelete);
  document.querySelector('#DeleteHq').addEventListener('click', handleDeleteHq);
  document.querySelector('#DeleteElites').addEventListener('click', handleDeleteElites);
  document.querySelector('#DeleteTroops').addEventListener('click', handleDeleteTroops);
  document.querySelector('#DeleteFast').addEventListener('click', handleDeleteFast);
  document.querySelector('#DeleteHeavy').addEventListener('click', handleDeleteHeavy);
})

const handleForm = function () {
    event.preventDefault();
    console.log('form submitted');
    const newUnit = document.createElement('li');
    const name = document.createElement('p');
    const pts = document.createElement('p');

    newUnit.classList.add('unit');
    name.classList.add('unitName');
    name.textContent = this.name.value;
    pts.classList.add('pts');
    pts.textContent = this.pts.value;

    
    document.querySelector(this.type.value).appendChild(newUnit)
    newUnit.appendChild(name)
    newUnit.appendChild(pts)

    document.querySelector('#new_unit_form').reset();
}

const handleDelete = function () {
  document.querySelector('#hq').innerHTML = "";
  document.querySelector('#elites').innerHTML = "";
  document.querySelector('#troops').innerHTML = "";
  document.querySelector('#fast').innerHTML = "";
  document.querySelector('#heavy').innerHTML = "";
}

const handleDeleteHq = function () {
    document.querySelector('#hq').innerHTML = "";   
}
const handleDeleteElites = function () {
    document.querySelector('#elites').innerHTML = "";   
}
const handleDeleteTroops = function () {
    document.querySelector('#troops').innerHTML = "";   
}
const handleDeleteFast = function () {
    document.querySelector('#fast').innerHTML = "";   
}
const handleDeleteHeavy = function () {
    document.querySelector('#heavy').innerHTML = "";   
}

