import React from 'react';
import styles from './footer.module.css';
import githubLogo from '../../images/github.png'
import paypalLogo from '../../images/paypal.png'

const Footer = () =>{
    return(
        <div className={styles.container}>CoronaVirus Center 
            <div className={styles.text}>	&copy; AlperMencek, all rights reserved </div>
            <div className={styles.text}>	Version: 1.1.1 (beta)</div>
            <div className={styles.textS}>	Country data Sourced from  </div>
            <div className={styles.textS}>   Center for Systems Science and Engineering (CSSE)  </div>
            <div className={styles.textS}>   at Johns Hopkins University</div>
            <div>Support the Project: </div>
            <div className={styles.logos}>
                
                <a href='https://github.com/AlperMencek' ><img className={styles.ghimage} src={githubLogo} alt="Github" resizeMode="contain"/></a>
                <a href='https://paypal.me/AlperMencek'><img className={styles.ppimage} src={paypalLogo} alt="Corona Virus Center" resizeMode="contain"/></a>

            </div>
        </div>
       
    )
}

export default Footer;