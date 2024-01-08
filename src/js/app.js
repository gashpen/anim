document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const attr = e.target.getAttribute('data-toggle');
    const collapseBody = document.querySelector(`#${attr}`);
    if (collapseBody) {
      collapseBody.classList.toggle('hide');
    }
  }
  if (e.target.classList.contains('copy')) {
    const attrCopy = e.target.getAttribute('data-copy');
    const copyBody = document.querySelector(`#${attrCopy}`);
    if (copyBody) {
      navigator.clipboard.writeText(copyBody.innerText).then(() => {
        e.target.innerText = 'Copied!';
      }).catch((error) => {
        console.error('Error:', error);
      });
    }
  }
});
