const set_date = () => {
  const year = document.querySelector('.page-footer .year');
  year.textContent = new Date().getFullYear();
}
set_date();