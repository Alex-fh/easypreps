/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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
