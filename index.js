// function showPage(pageId) {
//     const pages = document.querySelectorAll('.page');
//     pages.forEach(page => {
//       page.style.display = page.id === pageId ? 'block' : 'none';
//     });
//     history.replaceState(null, null, '#' + pageId);
//   }

//   window.addEventListener('load', () => {
//     let hash = location.hash.replace('#', '');
//     if (!hash) hash = 'who-we-are';
//     showPage(hash);
//   });
