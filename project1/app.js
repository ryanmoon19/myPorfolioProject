// console.log($)

// const $div = $('<div>');
// console.log($div)

$(() =>{
    $(document).ready(function () {
        $(".burgerMenu").click(function () {
            $(this).toggleClass("close");
            $(".navItems").slideToggle();
        })
    })

})