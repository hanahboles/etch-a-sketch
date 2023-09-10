function initializeGrid(gridDim = 16) {
    for (i = 0; i < gridDim; i++) {
        for (j = 0; j < gridDim; j++) {
            const div = document.createElement('div')
            div.classList.add('grid-item')
            grid.appendChild(div)
        }
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${gridDim}, 1fr); grid-template-rows: repeat(${gridDim}, 1fr)`)
    const gridItems = document.querySelectorAll('.grid-item')
    Array.from(gridItems).forEach((item) => item.addEventListener('mouseover', onMouseover))
}

function clearExistingGrid() {
    grid.innerText = ''
}

function onMouseover(e) {
    currentBg = e.target.style.backgroundColor
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${progressiveDarkening(currentBg)})`
}

function progressiveDarkening(bg) {
    if (bg === '') return '0.1'
    const opacity = parseFloat(bg.split(',')[3])
    return (opacity + 0.1).toString()
}

function onBtnClick(e) {
    const gridDimension = window.prompt('Please enter the desired grid dimension', 16)
    clearExistingGrid()
    initializeGrid(gridDimension)
}


const grid = document.querySelector('.grid-container')

initializeGrid()