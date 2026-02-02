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

function scrollToTargetAdjusted() {
  var element = document.getElementById("targetElement");
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
