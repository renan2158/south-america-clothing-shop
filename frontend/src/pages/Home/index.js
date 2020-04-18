import React, { useEffect } from 'react';
import 'react-awesome-slider/dist/styles.css';
import MuiAlert from '@material-ui/lab/Alert';
import AwesomeSlider from 'react-awesome-slider';
import Snackbar from '@material-ui/core/Snackbar';
import Header from '../../components/Header/index';
import { makeStyles } from '@material-ui/core/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './styles.css';

const slider01Img = require('../../assets/slider-01.jpg');
const slider02Img = require('../../assets/slider-02.jpeg');
const slider03Img = require('../../assets/slider-03.jpg');
const slider04Img = require('../../assets/slider-04.jpg');
const slider05Img = require('../../assets/slider-05.jpg');
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Home(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (!props) {
            handleNotification();
        }
    });

    function handleNotification() {
        if (props.location.state['notification'] === "visible")
            setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return  (
        <div id="home-container">
            <Header />

            <AutoplaySlider
                className="auto-slider"
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                bullets={false}
            >
                <div data-src={slider01Img} />
                <div data-src={slider02Img} />
                <div data-src={slider03Img} />
                <div data-src={slider04Img} />
                <div data-src={slider05Img} />
            </AutoplaySlider>

            <div className={classes.root}>
                <Snackbar
                    open={open}
                    onClose={handleClose}
                    autoHideDuration={6000}
                >
                    <Alert onClose={handleClose} severity="success">
                        Congrats! Your order was successfully done.
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}