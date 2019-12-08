/* eslint-disable linebreak-style */
/* eslint func-style: ["error", "declaration"] */
/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
/* eslint-disable max-statements */

/**
 * @description Show block with primary contacts.
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

	// eslint-disable-next-line no-undef
	const checkbx = document.getElementById(idcheck)
	// eslint-disable-next-line no-undef
	const parentblock = document.getElementById(idparents)
	// eslint-disable-next-line no-undef
	const parentfn = document.getElementById(idprimaryfn)
	// eslint-disable-next-line no-undef
	const parentsn = document.getElementById(idprimaryln)
	// eslint-disable-next-line no-undef
	const parentph = document.getElementById(idprimaryph)
	// eslint-disable-next-line no-undef
	const parentem = document.getElementById(idprimaryem)
	// eslint-disable-next-line no-undef
	const studentph = document.getElementById(idstudentph)
	// eslint-disable-next-line no-undef
	const studentem = document.getElementById(idstudentem)
	// eslint-disable-next-line no-undef
	const studentphtxt = document.querySelector('label[for=\'studentph\']')
	// eslint-disable-next-line no-undef
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
