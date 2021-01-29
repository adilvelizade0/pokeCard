const empCard = document.querySelectorAll('.pokeCard');
let unshuffled = [
  'emptyCard--0',
  'emptyCard--1',
  'emptyCard--2',
  'emptyCard--3',
  'emptyCard--4',
  'emptyCard--5',
  'emptyCard--6',
  'emptyCard--7',
];

let shuffled;
const shuffledFunc = function () {
  shuffled = unshuffled
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);

  empCard.forEach((element, index) => {
    element.id = shuffled[index];
  });
};
shuffledFunc();

let activeCard = 1;
let useCard = [];
let activeCardEl = [];
let playing = true;
let uniqueCard = [];

empCard.forEach(element => {
  element.addEventListener('click', function (event) {
    if (playing) {
      switch (event.target.id) {
        case 'emptyCard--0':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--0').src = 'assets/ch1.png';
            activeCard++;
            useCard.push('assets/ch1.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--1':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--1').src = 'assets/ch2.png';
            activeCard++;
            useCard.push('assets/ch2.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--2':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--2').src = 'assets/ch3.png';
            activeCard++;
            useCard.push('assets/ch3.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--3':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--3').src = 'assets/ch4.png';
            activeCard++;
            useCard.push('assets/ch4.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--4':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--4').src = 'assets/ch1.png';
            activeCard++;
            useCard.push('assets/ch1.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--5':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--5').src = 'assets/ch2.png';
            activeCard++;
            useCard.push('assets/ch2.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--6':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--6').src = 'assets/ch3.png';
            activeCard++;
            useCard.push('assets/ch3.png');
            activeCardEl.push(event.target.id);
          }
          break;

        case 'emptyCard--7':
          if (activeCard <= 2) {
            document.getElementById('emptyCard--7').src = 'assets/ch4.png';
            activeCard++;
            useCard.push('assets/ch4.png');
            activeCardEl.push(event.target.id);
          }
          break;

        default:
          break;
      }
    }

    if (useCard.length === 2) {
      if (useCard[0].lastIndexOf(useCard[1]) == -1) {
        setTimeout(() => {
          document.getElementById(activeCardEl[0]).src = 'assets/emptyCard.png';
          document.getElementById(activeCardEl[1]).src = 'assets/emptyCard.png';

          activeCardEl = [];
          useCard = [];
          activeCard = 1;
        }, 700);
      } else {
        uniqueCard.push(...new Set(useCard));
        if (uniqueCard.length === 4) {
          playing = false;
        } else {
          activeCardEl = [];
          useCard = [];
          activeCard = 1;
        }
      }
    }
  });
});

document.querySelector('.btn--new').addEventListener('click', function () {
  playing = true;
  activeCard = 1;
  useCard = [];
  activeCardEl = [];
  uniqueCard = [];
  empCard.forEach(item => {
    item.src = 'assets/emptyCard.png';
  });
  shuffledFunc();
});
