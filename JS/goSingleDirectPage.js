$(document).on('click', 'div[class^="discr__name"]', function(event) {
    event.preventDefault();
    let temp = $(this.id);
    sessionStorage.setItem('idOfDir', JSON.stringify(temp.selector));
    document.location.href = "../html/directSinglePage.html";
});

$(document).on('click', 'div[class^="blockNames__elem"]', function(event) {
    event.preventDefault();
    let temp = $(this.id);
    sessionStorage.setItem('idOfDir', JSON.stringify(temp.selector));
    document.location.href = "../html/directSinglePage.html";
});

$(document).on('click', 'img[class^="direct-img"]', function(event) {
    event.preventDefault();
    let temp = $(this.id);
    sessionStorage.setItem('idOfDir', JSON.stringify(temp.selector));
    document.location.href = "../html/directSinglePage.html";
});