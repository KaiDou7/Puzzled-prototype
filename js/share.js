const shareButtons = document.querySelectorAll('.web-share-cta')
const overlay = document.querySelector('.overlay')
const shareModal = document.querySelector('.web-share')
const close = document.querySelector('.tagline img')
const thanks = document.querySelector('.thank-you')

const title = window.document.title;
const url = window.document.location.href;

shareButtons.forEach((shareButton)=>{
    shareButton.addEventListener('click', event => {

    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url}`,
        })
        .then(() => {
            thanks.style.display = "block";
            overlay.style.display = "block";
            
            setTimeout(()=>{
                thanks.style.display = "none";
                overlay.style.display = "none";

            },1000)
        })
            .catch(console.error);
        } else {
            overlay.style.display = "block";
            shareModal.style.display = "block";
        }
        
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = "none";
    thanks.style.display = "none";
    shareModal.style.display = "none";
});
close.addEventListener('click', () => {
    overlay.style.display = "none";
    shareModal.style.display = "none";
});

