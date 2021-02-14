document.addEventListener('DOMContentLoaded', () => {

  const card = document.getElementById('card');

  card.addEventListener('click', e => {
    card.classList.toggle('is-flipped');
  })
})

