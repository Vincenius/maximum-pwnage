const getRandomInt = max => Math.floor(Math.random() * max);
const backgroundClass = `background${getRandomInt(6)}`

document.querySelector('header').className += backgroundClass



const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const randomizeClipOffsets = (selector, offsets = [0, 0, 1, 3, 3, 4, 5, 6]) => {
  for (const element of document.querySelectorAll(selector)) {
    let index = 0;
    for (const offset of shuffle(offsets.slice())) {
      element.style.setProperty(`--clip-offset-${++index}`, `${offset}px`);
    }
  }
}

const init = () => {
  randomizeClipOffsets('button');
  setInterval(randomizeClipOffsets, 350, 'button:is(:hover, :focus-visible)');
}

init();
