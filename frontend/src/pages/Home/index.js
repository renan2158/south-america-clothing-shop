import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import Header from '../../components/Header/index';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Notification from '../../components/Payment/notification';

import './styles.css';

const slider01Img = require('../../assets/slider-01.jpg');
const slider02Img = require('../../assets/slider-02.jpeg');
const slider03Img = require('../../assets/slider-03.jpg');
const slider04Img = require('../../assets/slider-04.jpg');
const slider05Img = require('../../assets/slider-05.jpg');
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Home(props) {
    return !props.location.state
        ? (<div id="home-container">
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
        </div>)

        : (<div id="home-container">
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

            <Notification />
        </div>
    );
}