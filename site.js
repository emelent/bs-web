const f = q => document.querySelector(q)
const a = q => document.querySelectorAll(q)

function activateNavLink(id){
	a('.-nav-btn').forEach(el => el.classList.remove('-active'))
	f('.-nav-btn[data-id="' + id + '"]').classList.add('-active')
}
function navClick(){
	activateNavLink(this.dataset.id)
}

a('.-nav-btn').forEach(el => el.addEventListener('click', navClick))


