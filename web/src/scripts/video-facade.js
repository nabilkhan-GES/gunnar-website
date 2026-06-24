// Click-to-play for single-video facades (home video band, article embeds).
// A facade carries data-video-facade + data-embed and lives inside a container
// marked data-video-frame; activating it swaps the poster for the iframe.
// Facades are keyboard-operable (role="button" tabindex="0" in markup): both
// click and Enter/Space activate them.
function playFacade(facade) {
  const frame = facade.closest('[data-video-frame]');
  const embed = facade.getAttribute('data-embed');
  if (!frame || !embed) return;
  const iframe = document.createElement('iframe');
  iframe.src = embed;
  iframe.title = facade.getAttribute('data-title') || 'Gunnar video';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
  frame.innerHTML = '';
  frame.appendChild(iframe);
}

document.addEventListener('click', (e) => {
  const facade = e.target.closest('[data-video-facade]');
  if (facade) playFacade(facade);
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
  const facade = e.target.closest && e.target.closest('[data-video-facade]');
  if (!facade) return;
  e.preventDefault();
  playFacade(facade);
});
