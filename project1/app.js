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

    window.onscroll = function() {stickyNav()};
    const navItems = document.getElementsByClassName('hambugerNav');
    const sticky = navItems.offsetTop;

    function stickyNav(){
        if(window.pageYOffset >= sticky){
            navItems.classList.add("sticky")
        }else{
            navItems.classList.remove('sticky')
        }
    }

    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const openModal = () => {
        $modal.css('display', 'block');
    }

    const closeModal = () =>{
        $modal.css('display', 'none');
    }

    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
})