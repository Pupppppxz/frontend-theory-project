import React from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import LoadingAnimation from '../assets/lottie-loading-animation.json'
import LoadingSuccess from '../assets/lottie-loading-success.json'

const options = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const options1 = {
    loop: true,
    autoplay: true,
    animationData: LoadingSuccess,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

type LoadingType = {
    success: Boolean
}

const AppLoading = ({ success }: LoadingType) => {
    return (
        <FadeIn>
            <div className='z-[100] flex justify-center items-center bg-white h-screen px-0 lg:px-[20%]'>
                {success ? <Lottie options={options1} height={'auto'} /> : <Lottie options={options} height={'auto'} />}
            </div>
        </FadeIn>
    )
}

export default AppLoading