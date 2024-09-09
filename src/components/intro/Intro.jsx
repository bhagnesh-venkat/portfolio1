import { useEffect, useRef } from 'react';
import './intro.scss'
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "MERN Stack Developer", "MEAN Stack Developer"],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/profile2.jpeg' alt='Kona Venkata Bhagnesh profile' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Kona Venkata Bhagnesh</h1>
          <span ref={textRef}></span>
        </div>
        <a href='#about' className='down-arrow'>
          <img src='assets/down.png' alt='Down arrow' />
        </a>
      </div>
    </div>
  );
}
