$(document).ready(function() {
    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');  

        if ($(this).find('.btn-primary').length > 0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        $(this).find('.btn').toggleClass('btn-default');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const consulta = document.querySelector('.consulta');
    consulta.style.maxHeight = `${consulta.scrollHeight}px`;
});