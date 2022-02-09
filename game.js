const body = document.querySelector('body')
const GameArea = document.querySelector('.container')
const GameEnd = document.querySelector('.end')

const textArea = document.querySelector('.textArea')
const textAreaMe = document.querySelector('.me')
const textAreaYuye = document.querySelector('.yuye')
const text = document.querySelector('.textArea p')

const yuyePic = document.querySelector('.yuyePic')
const yuyeBasic = document.querySelector('.yuyePic p')

const yuyeface = document.querySelector('.yuyePic img')

const seletArea = document.querySelector('.select')

let textList = [
    '',
    '...',

    '으..',
    '으아아..',
    '큰일이다..여기가 어디지...',
    '... 어딜..가십니까?',
    '아악!! 유..유예씨!!',
    '(어..어떡하지..)',
]

let textList_angry = [
    '',
    '...',

    '...백은',
    '...',
    '..아직 임무에서 돌아오지 않았습니다.',
    '....',
    '늦었으니 처소로 드시죠. 안내 하겠습니다.',

    '(어쩌지..)',
    '(유예씨..화난거 같아.)',
    '유예씨 가..같이가요!',
]

let textList_shy = [
    '무서운 꿈을 꿔서..',
    '유예씨를 찾고 있었어요.',

    '..!',

    '...느.',
    '늦었으니 처소로 드시죠',
    '곁에 있겠습니다.',

    '(어라..? 왠지..)',
    '(유예씨..얼굴이 빨개졌어.)',
    '(푸흡..귀여워!)',
    '같이가요!!',
    '~귀여워 엔딩^0^~',
]

let countNum = 0
let angryNum = 0
let shyNum = 0

console.log(countNum)

function start() {
    countNum++

    if (countNum <= textList.length) {
        GameArea.addEventListener('click', textNode())
    } else if (countNum == textList.length + 1) {
        console.log('love')
        seletArea.style.display = 'flex'
    } else {
        return
    }

    if (countNum >= 0) {
        textArea.style.display = 'flex'
    } else if (countNum == 0) {
        textArea.style.display = 'none'
    }

    function textNode() {
        for (let i = 0; i < countNum; i++) {
            if (i <= textList.length) {
                text.innerText = textList[i]
            } else if (i > textList.length) {
                return (text.innerText = '선택')
            }

            if (i === 5) {
                yuyePic.classList.add('fadeIn')
                textAreaMe.style.visibility = 'hidden'
                textAreaYuye.style.visibility = 'visible'
            } else {
                textAreaMe.style.visibility = 'visible'
                textAreaYuye.style.visibility = 'hidden'
            }
        }
    }

    if (countNum >= 6) {
        yuyePic.style.display = 'block'
    }

    if (countNum == 7) {
        textAreaMe.classList.add('shock')
    }
    return
}

function sad() {
    seletArea.style.display = 'none'

    textAreaMe.classList.remove('shock')

    yuyePic.classList.remove('fadeIn')

    // yuyeface.src = '/img/angry.png'

    if (angryNum >= 0) {
        GameArea.addEventListener('click', textNode02)
    } else {
        return
    }

    function textNode02() {
        angryNum++

        console.log('화나쪄', angryNum)
        for (let j = 0; j < angryNum; j++) {
            if (j <= textList_angry.length) {
                text.innerText = textList_angry[j]
            }

            if (j >= 1 && j <= 3) {
                yuyeface.src = '/img/angry.png'
            } else {
                yuyeface.src = '/img/hello.png'
            }

            if (j >= 6) {
                yuyePic.classList.remove('fadeIn')
                yuyePic.classList.add('fadeOut')
            }

            if (j >= 7) {
                textAreaMe.style.visibility = 'visible'
                textAreaYuye.style.visibility = 'hidden'
            } else {
                textAreaMe.style.visibility = 'hidden'
                textAreaYuye.style.visibility = 'visible'
            }

            if (j >= 8) {
                yuyePic.style.display = 'none'
            }

            if (j >= 9) {
                textAreaMe.classList.add('shock')
            }

            if (j >= 10) {
                textArea.style.display = 'none'
                GameEnd.innerText = '삐졌더 엔딩'

                body.classList.add('bg_black')
                return
            }
        }
    }
}

function smile() {
    seletArea.style.display = 'none'

    if (shyNum >= 0) {
        GameArea.addEventListener('click', textNode03)
    } else if (shyNum == textList_shy.length + 1) {
        console.log('love')
        seletArea.style.display = 'flex'
    } else {
        return
    }

    function textNode03() {
        shyNum++
        console.log('부끄러', shyNum)

        textAreaMe.classList.remove('shock')

        for (let k = 0; k < shyNum; k++) {
            if (k <= textList_shy.length) {
                text.innerText = textList_shy[k]
            } else if (k > textList_shy.length) {
                return
            }

            if (k >= 3 && k <= 6) {
                yuyePic.classList.add('fadeIn')
                yuyeface.src = '/img/shy.png'
            } else {
                yuyeface.src = '/img/hello.png'
            }

            if (k >= 6) {
                yuyePic.classList.remove('fadeIn')
                yuyePic.classList.add('fadeOut')
            }

            if (k >= 2 && k <= 5) {
                textAreaMe.style.visibility = 'hidden'
                textAreaYuye.style.visibility = 'visible'
            } else {
                textAreaMe.style.visibility = 'visible'
                textAreaYuye.style.visibility = 'hidden'
            }

            if (k >= 7) {
                yuyePic.style.display = 'none'
            }
            if (k == 9) {
                textAreaMe.classList.add('shock')
            }

            if (k == 10) {
                textArea.style.display = 'none'
                GameEnd.innerText = '귀여워 엔딩^0^'

                body.classList.add('bg_black')

                return
            }
        }
    }
}

console.log(countNum)