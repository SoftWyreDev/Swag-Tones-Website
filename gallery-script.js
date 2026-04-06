(function () {
  // ── GATHER ALL GALLERY ITEMS ──
  const gallery   = document.getElementById('gallery');
  const items     = Array.from(gallery.querySelectorAll('.gallery-item'));
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbThumbs  = document.getElementById('lightboxThumbs');
  const lbClose   = document.getElementById('lightboxClose');
  const lbPrev    = document.getElementById('lightboxPrev');
  const lbNext    = document.getElementById('lightboxNext');

  let current = 0;

  // Build image list — src + alt from each item's <img>
  const images = items.map(item => {
    const img = item.querySelector('img');
    return { src: img ? img.src : '', alt: img ? img.alt : '' };
  });

  // ── BUILD THUMBNAIL STRIP ──
  images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src   = img.src;
    thumb.alt   = img.alt;
    thumb.className = 'lightbox-thumb';
    thumb.loading = 'lazy';
    thumb.addEventListener('click', () => show(i));
    lbThumbs.appendChild(thumb);
  });

  const thumbEls = lbThumbs.querySelectorAll('.lightbox-thumb');

  function updateThumbs() {
    thumbEls.forEach((t, i) => t.classList.toggle('active', i === current));
    // Scroll active thumb into view
    if (thumbEls[current]) {
      thumbEls[current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function show(index) {
    current = (index + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = (current + 1) + ' / ' + images.length;
    updateThumbs();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Re-trigger animation
    lbImg.style.animation = 'none';
    requestAnimationFrame(() => { lbImg.style.animation = ''; });
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  // Click gallery items
  items.forEach((item, i) => {
    item.addEventListener('click', () => show(i));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View photo ' + (i + 1));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); }
    });
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));

  // Click outside image to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-inner')) close();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   show(current - 1);
    if (e.key === 'ArrowRight')  show(current + 1);
  });

  // Touch/swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) show(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });
})();