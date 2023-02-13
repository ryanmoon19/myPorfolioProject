$(() => {
  const $hamburgermenu = $('.hamburger')
  const $navmenu = $('.nav-menu')

  $hamburgermenu.addEventListener('click', () => {
    $hamburgermenu.classList.toggle('active');
    $navmenu.classList.toggle('active');
  })  

  $('<.nav-link>').forEach(n => n.addEventListener('click' () => {
    $hamburgermenu.classList.remove('active');
    $navmenu.classList.remove('active');
  }))
})