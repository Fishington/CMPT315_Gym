import "./LoadingScreen.scss";
import loadingAnimation from '@/assets/animations/LoadingScreenAnimation.webm'

export default function LoadingScreen({variant}) {
    return (
        <div className={`loading-screen ${variant ? variant : ''}`}>
            <h1 className='flex gap-2'>
                Loading...
                <span className="loading-screen__loader"/>
            </h1>

            <video className="loading-screen__loading-animation" autoPlay loop muted>
                <source src={loadingAnimation} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}