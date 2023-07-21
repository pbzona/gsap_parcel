import Reveal from 'reveal.js';
import gsap from 'gsap';

// Slide deck setup
Reveal.initialize();

const deck = new Reveal();
deck.initialize();

// Animation
const tl = gsap.timeline({
  defaults: {
    duration: 0.4,
  },
  repeat: -1,
});

const baseFadeout = {
  duration: 1,
  opacity: 0,
  clipPath: 'circle(10% at 50% 50%)',
  y: -30,
};

const spread = 60;

tl.add('start')
  .from('.unit', {
    y: -60,
    opacity: 0,
    stagger: 0.4,
    ease: 'bounce',
  })
  .from(
    'h1',
    {
      y: 60,
      duration: 0.6,
    },
    'start'
  )
  .add('end')
  .to(
    '#unit1',
    {
      x: spread * -1,
      ...baseFadeout,
    },
    'end'
  )
  .to(
    '#unit2',
    {
      ...baseFadeout,
    },
    'end'
  )
  .to(
    '#unit3',
    {
      x: spread,
      ...baseFadeout,
    },
    'end'
  )
  .to(
    'h1',
    {
      duration: 1,
      opacity: 0,
      letterSpacing: '40px',
      y: 20,
    },
    'end'
  );
