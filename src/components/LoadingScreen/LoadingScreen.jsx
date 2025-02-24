import ReactDOM from 'react-dom';
import "./LoadingScreen.scss";

export default function LoadingScreen({children, variant}) {
    const content = (
        <div className={`LoadingScreen ${variant ? variant : ''}`}>
            <h1>Loading... 
            <span class="loader"></span>
            </h1>

            <video className="loading-animation" autoPlay loop muted>   
            <source src="/src/components/LoadingScreen/LoadingScreenAnimation.webm" type="video/webm"/>
            Your browser does not support the video tag.
            </video>
            
            {children}
        </div>
    );

    return ReactDOM.createPortal(content, document.body);
}