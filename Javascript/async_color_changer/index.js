const randomColors = function () {
  const hex = '0123456789ABCDEF';
  let colors = '#';
  for (let i = 0; i < 6; i++) {
    colors += hex[Math.floor(Math.random() * 16)];
  }
  return colors;
};
let IntervalId;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const startChange = () => {
  document.querySelector('body').style.backgroundColor = randomColors();
};
start.addEventListener('click', () => {
  IntervalId = setInterval(startChange, 100);
});

stop.addEventListener('click', () => {
  clearInterval(IntervalId);
});
