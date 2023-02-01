let illustration = document.querySelector('.illustration');
let main = document.querySelector('main');
let body = document.querySelector('body');
const bodyPaddingTop = getComputedStyle(document.documentElement).getPropertyValue('--BODY-PADDING-TOP');

// Get negative number
const negative = n => n - (n * 2);

const adjustContent = () => {
    if (window.innerWidth < 576) {
        let imageHeight = illustration.clientHeight;
        // Position the image in the middle of border-top
        let offsetNum = negative(imageHeight) * 0.6;
        let offset = offsetNum + 'px';
        illustration.style.top = offset;
    
        // Set the padding-top of body
        let paddingNum = Number(bodyPaddingTop.split('').slice(0, -2).join('')) - offsetNum;
        let paddingTop = paddingNum + 'px';
        body.style.paddingTop = paddingTop;
    
        // Set the padding-top of main
        let offsetNum2 = imageHeight * 0.4 * 1.5;
        let offset2 = offsetNum2 + 'px';
        main.style.paddingTop = offset2;
    }
};

adjustContent();

window.addEventListener('resize', () => {
    adjustContent();
});