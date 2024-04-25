
const card = document.querySelector('.card');
const button = document.querySelector('.getImg-btn');

button.addEventListener('click',()=>{
  const res = fetch(`https://dog.ceo/api/breeds/image/random`);
  res
  .then((res)=>{ return res.json()})
  .then((data)=>{
    card.innerHTML = `
    <img src="${data.message}"/>
    `;
  })
  .catch((error)=>{console.log(error)});
});


