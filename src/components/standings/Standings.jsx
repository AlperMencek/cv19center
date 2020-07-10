import React from 'react';
import styles from './Standings.module.css'
import CountUp from 'react-countup';
import { Link } from "react-router-dom";


const Standings = ({ c19data: { Global, Countries } }) => {
    if (!Countries) return ('loadingCOUNTRIES...')
    var allCountries = Countries;
    //Sort the countries in order to get the top Total confirmed cases.
    if (allCountries) {
        allCountries.sort(function (a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
        })
    }
    if (!Global) { return ('loadingGlobal...') }
    if (allCountries.length !== 0) {
        return (

            <div class="container" >

                <div className={styles.topTitle}>Top Countries</div>

                <div className="row justify-content-center">
                    <div className="col-lg" className={styles.container}>
                        <Link className={styles.container} style={{ textDecoration: 'none' , color:'whitesmoke'}} to={{
                            pathname: '/details',
                            state: {
                                title: allCountries[0].Country,
                                slug: allCountries[0].Slug,
                                all: allCountries,
                            }

                        }} >
                            <div className={styles.numOne} >#1</div>
                            <div className={styles.widthCol}>
                                <div className={styles.title} >
                                    {allCountries[0].Country}
                                </div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Confirmed:</div>
                                <div className={styles.countVal} > <CountUp start={0} end={allCountries[0].TotalConfirmed} duration={1.5} separator="," /></div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Deaths:</div>
                                <div className={styles.countVal}><CountUp start={0} end={allCountries[0].TotalDeaths} duration={1.5} separator="," /></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* second place */}

                <div className="row justify-content-center">
                    <div className="col-lg" className={styles.container}>
                        <Link className={styles.container} style={{ textDecoration: 'none', color:'whitesmoke' }} to={{
                            pathname: '/details',
                            state: {
                                title: allCountries[1].Country,
                                slug: allCountries[1].Slug,
                                all: allCountries,
                            }

                        }}>
                            <div className={styles.numTwo} >#2</div>
                            <div className={styles.widthCol}>
                                <div className={styles.title} >
                                    {allCountries[1].Country}
                                </div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Confirmed:</div>
                                <div className={styles.countVal} > <CountUp start={0} end={allCountries[1].TotalConfirmed} duration={1.5} separator="," /></div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Deaths:</div>
                                <div className={styles.countVal}><CountUp start={0} end={allCountries[1].TotalDeaths} duration={1.5} separator="," /></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* third place */}

                <div className="row justify-content-center">
                    <div className="col-lg" className={styles.container}>
                        <Link className={styles.container} style={{ textDecoration: 'none', color:'whitesmoke' }} to={{
                            pathname: '/details',

                            state: {
                                title: allCountries[2].Country,
                                slug: allCountries[2].Slug,
                                all: allCountries,
                            }

                        }}>
                            <div className={styles.numThree} >#3</div>
                            <div className={styles.widthCol}>
                                <div className={styles.title} >
                                    {allCountries[2].Country}
                                </div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Confirmed:</div>
                                <div className={styles.countVal} > <CountUp start={0} end={allCountries[2].TotalConfirmed} duration={1.5} separator="," /></div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Deaths:</div>
                                <div className={styles.countVal}><CountUp start={0} end={allCountries[2].TotalDeaths} duration={1.5} separator="," /></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Fourth Place */}
                <div className="row justify-content-center">
                    <div className="col-lg" className={styles.container}>
                        <Link className={styles.container} style={{ textDecoration: 'none', color:'whitesmoke' }} to={{
                            pathname: '/details',
                            state: {
                                title: allCountries[3].Country,
                                slug: allCountries[3].Slug,
                                all: allCountries,
                            }

                        }}>
                            <div className={styles.numbers} >#4</div>
                            <div className={styles.widthCol}>
                                <div className={styles.title} >
                                    {allCountries[3].Country}
                                </div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Confirmed:</div>
                                <div className={styles.countVal} > <CountUp start={0} end={allCountries[3].TotalConfirmed} duration={1.5} separator="," /></div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Deaths:</div>
                                <div className={styles.countVal}><CountUp start={0} end={allCountries[3].TotalDeaths} duration={1.5} separator="," /></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Fifth Place */}
                <div class="row justify-content-center">
                    <div class="row-lg" className={styles.container}>
                        <Link className={styles.container} style={{ textDecoration: 'none' , color:'whitesmoke'}} to={{
                            pathname: '/details',
                            state: {
                                title: allCountries[4].Country,
                                slug: allCountries[4].Slug,
                                all: allCountries,
                            }

                        }}>
                            <div className={styles.numbers} >#5</div>
                            <div className={styles.widthCol}>
                                <div className={styles.title} >
                                    {allCountries[4].Country}
                                </div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Confirmed:</div>
                                <div className={styles.countVal} > <CountUp start={0} end={allCountries[4].TotalConfirmed} duration={1.5} separator="," /></div>
                            </div>
                            <div className={styles.widthCol}>
                                <div className={styles.subTitle}>Total Deaths:</div>
                                <div className={styles.countVal}><CountUp start={0} end={allCountries[4].TotalDeaths} duration={1.5} separator="," /></div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>



        )
    }
}

export default Standings;