// $(document).ready(function() {
//     document.querySelector(".icon-menu").click(function(event) {
//         $(".icon-menu,.menu-body").toggleClass('active');
//     })
// })

function f1() {
    document.querySelector('.menu_body').classList.toggle('active');
    document.querySelector('.icon-menu').classList.toggle('active');
}

document.querySelector('.icon-menu').onclick = f1;