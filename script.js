const sliderBtnLeft = document.querySelector(`.slider__btn--left`)
const sliderBtnRight = document.querySelector(`.slider__btn--right`)
const sliderImgs = document.querySelectorAll(`.slider__box__img`)
const sliderBox = document.querySelector(`.slider__box`)
const sliderNavBtns = document.querySelectorAll(`.slider__nav__btn`)

const carouselWidth = 880
const carouselSpeed = 5000

let index = 0

const handleCarousel = () => {
	index++
	changeImages()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImages = () => {
	if (index > sliderImgs.length - 1) {
		index = 0
	} else if (index < 0) {
		index = sliderImgs.length - 1
	}
	handleSliderNav()
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightBtn = () => {
	index++
	resetInterval()
}

const handleLeftBtn = () => {
	index--
	resetInterval()
}
const resetInterval = () => {
	changeImages()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}
const handleSliderNav = () => {
	sliderNavBtns.forEach((btn, btnIndex) => {
		if (btnIndex == index) {
			btn.classList.add(`active`)
		} else {
			btn.classList.remove(`active`)
		}
	})
}
function handleSliderNavBtns() {
	// console.log(parseInt(this.dataset.index))
	index = parseInt(this.dataset.index)
	resetInterval()
}

sliderNavBtns.forEach(btn => btn.addEventListener(`click`, handleSliderNavBtns))
sliderBtnRight.addEventListener(`click`, handleRightBtn)
sliderBtnLeft.addEventListener(`click`, handleLeftBtn)
