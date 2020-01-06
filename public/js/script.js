/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint func-style: ["error", "declaration"] */
/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
/* eslint-disable max-statements */

/**
 * @description Show block with primary contacts. It sets global values.
 * @param {string} idcheck The ID of the checkbox.
 * @param {string} idparents The ID of the parents block.
 * @param {string} idprimaryfn The ID of the primary first name.
 * @param {string} idprimaryln The ID of the primary last name.
 * @param {number} idprimaryph The ID of the primary phone.
 * @param {string} idprimaryem The ID of the primary email.
 * @param {number} idstudentph The ID of the student phone.
 * @param {string} idstudentem The ID of the student email.
 * @return {void} No return values
 */
function primarycontact (
	idcheck, idparents, idprimaryfn, idprimaryln,
	idprimaryph, idprimaryem, idstudentph, idstudentem
	) {

	const checkbx = document.getElementById(idcheck)
	const parentblock = document.getElementById(idparents)
	const parentfn = document.getElementById(idprimaryfn)
	const parentsn = document.getElementById(idprimaryln)
	const parentph = document.getElementById(idprimaryph)
	const parentem = document.getElementById(idprimaryem)
	const studentph = document.getElementById(idstudentph)
	const studentem = document.getElementById(idstudentem)
	const studentphtxt = document.querySelector('label[for=\'studentph\']')
	const studentemtxt = document.querySelector('label[for=\'studentem\']')

if (checkbx.checked) {
	parentblock.style.display = 'block'
	parentfn.setAttribute('required', 'required')
	parentsn.setAttribute('required', 'required')
	parentph.setAttribute('required', 'required')
	parentem.setAttribute('required', 'required')
	studentph.removeAttribute('required')
	studentem.removeAttribute('required')
	studentphtxt.innerHTML = 'Phone'
	studentemtxt.innerHTML = 'Email'
} else {
	parentblock.style.display = 'none'
	parentfn.removeAttribute('required')
	parentsn.removeAttribute('required')
	parentph.removeAttribute('required')
	parentem.removeAttribute('required')
	studentph.setAttribute('required', 'required')
	studentem.setAttribute('required', 'required')
	studentphtxt.innerHTML = 'Phone*'
	studentemtxt.innerHTML = 'Email*'
}
}

	// select in forms initialization
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('select')
    const instances = M.FormSelect.init(elems, 'classes')
  })

  // modal window initialization
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.modal')
    const instances = M.Modal.init(elems, 'opacity')
  })
