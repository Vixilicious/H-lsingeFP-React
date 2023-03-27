import React from 'react';
import aboutAJ from '../../../public/assets/Images/HF-img-car.jpg';
import goldspray from '../../../public/assets/Images/gold-spray-transparent.png';

export default function About() {
  return (
    <div className='lp-about'>
      <div className='about-container'>
        <div className='about-img'>
          <img src='/assets/Images/HF-img-car.jpg' alt='' />
        </div>
        <div className='blob-text'>
          <h4>Effektiv och högkvalitativ fönsterputs</h4>
          <img
            className='gold-spray'
            src='/assets/Images/gold-spray-transparent.png'
            alt=''
          />
          <p className='about-p'>
            Vi erbjuder en effektiv och högkvalitativ fönsterputstjänst som
            gör skillnad. Vi förstår vikten av rena fönster för både ditt
            välbefinnande och ditt proffesionella intryck. Med vår erfarenhet
            och expertis garanterar vi en noggrann och säker fönsterputs som
            höjer standarden för både ditt hem och din arbetsplats. <br />
            Vår dedikerade och erfarna personal använder endast de bästa
            verktygen och tekniken för att säkerställa att dina fönster är
            rena och skinande. Vi strävar efter att alltid leverera en tjänst
            med kvalite som möter dina specifika behov och önskemål. <br />
            Letar du efter en pålitlig Då är du mer än välkommen till oss på
            Kontakta oss redan idag för en gratis offert och upplev skillnaden
            själv!
          </p>
        </div>
      </div>
    </div>
  );
}
