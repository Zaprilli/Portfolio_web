(function () {
  try {
    var t = localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme = t === 'purple' || t === 'green' ? t : 'green';
    var l = localStorage.getItem('portfolio-lang');
    if (l === 'mn' || l === 'en') {
      document.documentElement.lang = l;
    }
  } catch (e) {
    document.documentElement.dataset.theme = 'green';
  }
})();
