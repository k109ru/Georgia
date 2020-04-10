document.querySelector('.active-helper').addEventListener('click', function() {
    document.querySelector('.wrap-helper-min').classList.remove('active-helper');
    document.querySelector('.wrap-helper-max').classList.add('active-helper');
});

document.querySelector('.helper__close').addEventListener('click', function() {
    document.querySelector('.wrap-helper-max').classList.remove('active-helper');
    document.querySelector('.wrap-helper-min').classList.add('active-helper');
});