
const card = document.querySelector('.card');
const button = document.querySelector('.getImg-btn');

button.addEventListener('click',async()=>{
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();
  card.innerHTML = `
  <img src="${data.message}"/>
  `;
});


