$(document).on('click', 'div[class^="block-1__field__img"]', function(event) {
    event.preventDefault();
    let temp = $(this.id);
    sessionStorage.setItem('idOfFilm', JSON.stringify(temp.selector));
    document.location.href = "../html/filmSinglePage.html";
});