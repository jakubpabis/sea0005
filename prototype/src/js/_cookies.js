function acceptCookies() {
  setCookie('cookies-accepted', 'accepted', 365);
  closeCookies();
}

function closeCookies() {
  $('.cookies-notifictaion').addClass('d-none');
}
