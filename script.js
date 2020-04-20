const boxes = document.querySelectorAll('.row > div');
const bgColor = "black";

let isActive = false;

function fillBox(e) {
  e.target.style.background = bgColor;
}

boxes.forEach(box => {
  box.addEventListener('mousedown', () => {
    isActive = true;    
  });

  box.addEventListener('mousemove', (e) => {
    if(isActive) {
      fillBox(e);
    }
  });

  box.addEventListener('click', (e) => {
      const {background} = e.target.style;
      if(background === bgColor) {
        e.target.style.background = '';
      } else {
        fillBox(e);
      }
  });

  box.addEventListener('mouseup', () => {
    isActive = false;
  });
});