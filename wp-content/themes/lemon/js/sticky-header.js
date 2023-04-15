// // sticky header

// const siteHeader = document.querySelector('.site-header');
// const siteBody = document.body.classList;
// const blogPage = siteBody.contains('page-template-page-blog');
// const articlePage = siteBody.contains('post-template-default') && siteBody.contains('single');
//
// if (blogPage || articlePage) {
//     window.addEventListener('scroll', event => {
//         if (window.scrollY > 50 && siteHeader.classList.contains('default')) {
//             siteHeader.classList.remove('default');
//             siteHeader.classList.add('fixed');
//         } else if (window.scrollY <= 50 && siteHeader.classList.contains('fixed')) {
//             siteHeader.classList.remove('fixed');
//             siteHeader.classList.add('default');
//         }
//     });
// }