const checkedIcon = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
<path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
fill="#fff"></path>`

const rotateCheckIcon = `<path
  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
  stroke="black"
  stroke-width="2.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>`

const circleIcon = `<circle cx="16" cy="16" r="12" stroke="grey" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />`

const closeTrialInfo =  document.querySelector('.select svg')
closeTrialInfo.addEventListener('click', () => {
    document.querySelector('.select-plan-div').style.display = 'none'
})

const minShowContent = document.querySelector('.guide svg')
let showTrue = true
minShowContent.addEventListener('click', () => {
    if(showTrue){
        minShowContent.childNodes[1].attributes.d.nodeValue = 'M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z'
        document.querySelector('.setup-content').style.display = 'none'
        showTrue = false
    }else{
        minShowContent.childNodes[1].attributes.d.nodeValue = 'M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z'
        document.querySelector('.setup-content').style.display = 'block'
        showTrue = true
    }
})


// NAVBAR SIDE SECTION
const sideNotify = document.querySelector('.side-navigation');
const alertBox = document.querySelector('.alert-box');
const alertNotification = () => {
    sideNotify.style.display = 'none';
    alertBox.style.display = (alertBox.style.display === 'none' || alertBox.style.display === '') ? 'block' : 'none';
}

const showSideBar = () => {
    alertBox.style.display = 'none';
    sideNotify.style.display = (sideNotify.style.display === 'none' || sideNotify.style.display === '') ? 'block' : 'none';
}

const selectBtn = document.querySelectorAll('.selectable')
for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('click', (Element) => {

        selectBtn[i].classList.add('selectable-focused')
        for (let x = 0; x < selectBtn.length; x++) {
            selectBtn[x] != selectBtn[i] ? selectBtn[x].classList.remove('selectable-focused') : ''
        }
    })
}

document.addEventListener('keydown', (event) => {
    const focusedElement = document.activeElement;

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()

      let index = Array.from(selectBtn).indexOf(focusedElement)

      if (event.key === 'ArrowUp') {
        index = (index - 1 + selectBtn.length) % selectBtn.length
        
      } else {
        index = (index + 1) % selectBtn.length
      }

      selectBtn[index].focus()
      selectBtn[index].classList.add('selectable-focused')
    } 
    if (event.key === 'Enter') {
        focusedElement.click()
        if (focusedElement.childNodes[0].href) {
            window.location = focusedElement.childNodes[0].href
        }
    }
});

selectBtn.forEach(item => {
    item.addEventListener('focus', () => {
        item.classList.add('selectable-focused');
    })

    item.addEventListener('blur', () => {
        item.classList.remove('selectable-focused');
    })
})


// SETUP GUIDE FUNCTIONALITY

const setupBtn = document.querySelectorAll('.main')
const setupArticle = document.querySelectorAll('.setup-content-article')

const addSetUp = document.querySelectorAll('.main .svg')
const addSetUp2 = document.querySelectorAll('.inner span')

const progressBarNum = document.querySelector('.complete p')
const progressBarStatus = document.querySelector('.complete progress')

let addN = 0
const updateProgressBar = (P,N) => {
    addN += N
    progressBarNum.innerHTML = `${addN} / 5 completed`
    progressBarStatus.value += P
}

let addSetUpTrue = [false,false,false,false,false]
const performCheck = (svgElement) => {
    svgElement.childNodes[1].classList.remove('rotate-check')
    svgElement.childNodes[1].setAttribute('viewBox', '0 0 24 24')
    svgElement.childNodes[1].innerHTML = checkedIcon
}

const performCircle = (svgElement) => {
    svgElement.childNodes[1].setAttribute('viewBox', '0 0 32 32')
    svgElement.childNodes[1].innerHTML = circleIcon
}

const performRotate = (svgElement) => {
    svgElement.childNodes[1].setAttribute('viewBox', '0 0 28 28')
    svgElement.childNodes[1].innerHTML = rotateCheckIcon
    svgElement.childNodes[1].classList.add('rotate-check')

    setTimeout(() => { performCheck(svgElement)  }, 400)
}

const closeSetupArticle = (Element, Article) => {
    Element.style.display = 'none'
    Article.style.display = 'flex'

    for (let x = 0; x < setupBtn.length; x++) {
        const closeArticle = setupBtn[x] != Element ? (setupBtn[x].style.display = 'flex', setupArticle[x].style.display = 'none') : ''
    }
}

for (let i = 0; i < setupBtn.length; i++) {
    
    addSetUp[i].addEventListener('click', () => {
        
        if(!addSetUpTrue[i]){
            performRotate(addSetUp[i]) , performRotate(addSetUp2[i])
            i < 4 && addSetUpTrue[i] == false ? setTimeout(() => { closeSetupArticle(setupBtn[i+1], setupArticle[i+1]) }, 500):''
            updateProgressBar(20 , 1)
            addSetUpTrue[i] = true
        }else{
            performCircle(addSetUp[i]) , performCircle(addSetUp2[i])
            updateProgressBar(-20 , -1)
            addSetUpTrue[i] = false
        }
    })

    addSetUp2[i].addEventListener('click', () => {
        if(!addSetUpTrue[i]){
            performRotate(addSetUp[i]) , performRotate(addSetUp2[i])
            updateProgressBar(20 , 1)
            addSetUpTrue[i] = true
        }else{
            performCircle(addSetUp[i]) , performCircle(addSetUp2[i])
            updateProgressBar(-20 , -1)
            addSetUpTrue[i] = false
        }
    })

    setupBtn[0].style.display = 'none'
    setupArticle[0].style.display = 'flex'

    setupBtn[i].childNodes[3].addEventListener('click', () => {
        closeSetupArticle(setupBtn[i], setupArticle[i])
    })
    
}