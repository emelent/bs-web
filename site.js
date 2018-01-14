const f = q => document.querySelector(q)
const a = q => document.querySelectorAll(q)
const attach = (q, e, f) => 
	a(q).forEach(el => el.addEventListener(e, f))

const activate = (q, id) => {
	a(q).forEach(el => el.classList.remove('-active'))
	f(q + '[data-id="'+ id + '"]').classList.add('-active')
}

const navBrand = f('.-nav-brand')

function activateNavLink(id){
	activate('.-nav-btn', id)
}

function activateView(id){
	activate('.-view', id)
	scrollTo(0,0)
}

function navClick(){
	const id = this.dataset.id
	activateNavLink(id)
	activateView(id)

	// if home
	if(id === '0'){
		navBrand.classList.remove('-active')
		//navBrand.src = './images/bs.svg'
	}else{
		navBrand.classList.add('-active')
		//navBrand.src = './images/bs-2.svg'
	}
	
}

attach('.-nav-btn', 'click', navClick)



