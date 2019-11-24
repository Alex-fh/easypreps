var instance = M.Tabs.init(document.querySelector('.tabs'));

/**
 * new student form insert in .mainarea.
 *
 */
function pushtomain(str) {
  fetch(str)
    .then(res => {
      return res.text()
    })
    .then(data => {
      const mmm = document.querySelector('.mainarea')
      mmm.innerHTML = data
    })
}
