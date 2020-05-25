import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailStats, SelectionChart } from '../components';
import styles from './details.module.css';
import logo from '../images/CVCenterLogo.png';
import { Link ,Redirect } from 'react-router-dom';




class Details extends React.Component {
    state = {
        selectionTitle: '',
        slugTitle: '',
        c19Data: [],

    }
    async componentDidMount() {
        const { title } = this.props.location.state;
        const { slug } = this.props.location.state;
        const all = this.props.location.state;
        //Need to fix this
        // const fetchRes = await fetchSumData();
        this.setState({ selectionTitle: title, slugTitle: slug, c19Data: all })
    }

    render() {
        const { selectionTitle } = this.state

        if (this.props.location.state && this.props.location.state.slug && this.props.location.state.all) {

            const slug = this.props.location.state.slug;
            const c19Data = this.props.location.state.all;
            return (
                <div className={styles.container}>
                    <Link push className={styles.link} to={{  pathname:'/'}}><img src={logo} alt="Corona Virus Center" resizeMode="contain"/></Link>
                    <DetailStats sTitle={selectionTitle} slug={slug} c19Data={c19Data} />
                    <SelectionChart slug={slug} sTitle={selectionTitle}> </SelectionChart>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                Loading...
                <Redirect push to={{
                    pathname: '/',

                }}
                />
            </div>
        )


    }
}

export default Details;