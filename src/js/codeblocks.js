let article = document.getElementById('prose')

if (article) {
  let codeBlocks = article.getElementsByTagName('code')

  for (let codeBlock of codeBlocks) {
    var widthDif = codeBlock.scrollWidth - codeBlock.clientWidth
    if (widthDif > 0)
      codeBlock.parentNode.classList.add('expand')
  }
}
