exports.onClientEntry = () => {
  return new Promise((resolve, reject) => {
    window.__polyfillio__ = () => {
      resolve();
    };

    const features = [];

    if (!window.IntersectionObserver) {
      features.push('IntersectionObserver');
    }

    if (!window.fetch) {
      features.push('fetch');
    }

    if (features.length) {
      const s = document.createElement('script');
      s.src = `https://cdn.polyfill.io/v2/polyfill.min.js?features=${features.join(
        ','
      )}&rum=1&flags=always,gated&callback=__polyfillio__`;
      s.async = true;
      s.onerror = reject;
      document.head.appendChild(s);
    } else {
      resolve();
    }
  });
};
