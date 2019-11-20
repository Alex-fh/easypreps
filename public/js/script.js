/**
 * new student form insert in .mainarea.
 *
 */
function newstudent() {
  fetch('/newstudent')
    .then(res => {
      return res.text()
    })
    .then(data => {
      const mmm = document.querySelector('.mainarea')
      mmm.innerHTML = data
    })
}
