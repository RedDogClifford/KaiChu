import React from 'react';
import footerStyles from '../styles/footerStyle.module.css'

export default function Footer() {
  return (
    <div>
      <div className={footerStyles.contactItems}>
        <a href="mailto: kai.chu15@gmail.com">kai.chu15@gmail.com</a>
        <a href="https://happyteam.itch.io/">happyteam.itch.io</a>
        <a href="https://github.com/RedDogClifford">github.com/RedDogClifford</a>
      </div>
      <div className={footerStyles.banner}/>
    </div>
  );
}
