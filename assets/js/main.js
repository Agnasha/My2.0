/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateImc = (e) => {
    e.preventDefault()

    //Checar se o campo tem valor

    if (calculateCm.value === '' || calculateKg.value === '') {
        //adicione e remova a cor
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //Show message
        calculateMessage.textContent = 'Preencha com altura e peso.'

        //Remove a mensagem
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)

    } else {
        //Formula IMC
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            imc = Math.round(kg / (cm * cm))

        //Mostra status
        if (imc < 18.5) {
            //com a cor representando 
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Sua IMC é ${imc} , Você está abaixo do peso! `
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Sua IMC é ${imc} , está com o peso ideal.`

        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Sua IMC é ${imc} , Você esta sobrepeso.`
        }

        //Para limpar os campos
        calculateCm.value = ''
        calculateKg.value = ''

        //Remover a mensagem
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)

    }

}
calculateForm.addEventListener('submit', calculateImc)
/*=============== EMAIL JS ===============

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e)=>{
    e.preventDefault()

    //Verificar o campo valido 
    if(contactUser.value===''){
        //adicionar e remover cor 
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //aparecer mensagem
        contactMessage.textContent ='Entre com seu Email !'

        //tirar mensagem
        setTimeout(()=>{
            contactMessage.textContent=''
        }, 3000)

    } else{

        emailjs.sendForm('service_8ii265','template_guf0dsp',#contact-FormData,)
    }
}

contactForm.addEventListener('submit', sendEmail)*/