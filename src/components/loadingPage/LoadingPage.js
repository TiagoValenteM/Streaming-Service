import React from 'react';
import Lottie from 'lottie-react';
import netflixLoading from '../../assets/netflixLoading.json';
import './LandingPage.css';

const LoadingPage = (props) => {
    const { netflixAnimationEnable } = props;

    return (
        <Lottie
            loop={false}
            autoplay={true}
            isClickToPauseDisabled={true}
            animationData={netflixLoading}
            className="netflixLoadingAnimation"
            onComplete={() => netflixAnimationEnable(false)}
        />
    );
};

export default LoadingPage;
