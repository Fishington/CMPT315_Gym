import "./Login.scss";
import { useState } from "react";   

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (!email || !password) {
            alert("Please enter email and password.");
            return;
        }

        alert(`Email: ${email}\nPassword: ${password}`);

        const userDTO = {
            email,
            password,
        };

        console.log("Logging in with:", userDTO);
    };



    return (
        <div class ="flex-container">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="49" viewBox="0 0 202 49" fill="none">
                <path d="M5.5527 48.5H0.137104V17.7831L26.6667 29.5671V48.5H21.2511V33.8879L5.5527 26.9746V48.5Z" fill="#2A3FF4"/>
                <path d="M0 14.7979V0.5H5.5527V10.6342L21.114 17.4689V0.5H26.5296V26.739L0 14.7979Z" fill="#2A3FF4"/>
                <path d="M38.4938 28.1565L29.4144 0.713329H37.4016L42.5216 18.2579H42.6581L47.7781 0.713329H55.0826L46.0032 28.1565V48.5H38.4938V28.1565Z" fill="#1D1D1B"/>
                <path d="M58.4656 0.713329H69.5248C73.2567 0.713329 76.0556 1.71457 77.9216 3.71706C79.7875 5.71955 80.7205 8.65502 80.7205 12.5235V17.2339C80.7205 21.1023 79.7875 24.0378 77.9216 26.0403C76.0556 28.0428 73.2567 29.044 69.5248 29.044H65.9749V48.5H58.4656V0.713329ZM69.5248 22.2173C70.7536 22.2173 71.6638 21.876 72.2554 21.1933C72.8926 20.5107 73.2112 19.3501 73.2112 17.7117V12.0456C73.2112 10.4072 72.8926 9.24666 72.2554 8.564C71.6638 7.88133 70.7536 7.54 69.5248 7.54H65.9749V22.2173H69.5248Z" fill="#1D1D1B"/>
                <path d="M84.7989 0.713329H105.279V7.54H92.3082V20.1693H102.617V26.996H92.3082V41.6733H105.279V48.5H84.7989V0.713329Z" fill="#1D1D1B"/>
                <path d="M109.599 0.713329H120.726C124.595 0.713329 127.417 1.62355 129.191 3.444C130.966 5.21893 131.854 7.97235 131.854 11.7043V14.6397C131.854 19.6004 130.215 22.7407 126.939 24.0605V24.1971C128.759 24.7432 130.033 25.8582 130.762 27.5421C131.535 29.226 131.922 31.4788 131.922 34.3005V42.6973C131.922 44.0627 131.968 45.1777 132.059 46.0424C132.15 46.8616 132.377 47.6808 132.741 48.5H125.095C124.822 47.7263 124.64 46.9981 124.549 46.3155C124.458 45.6328 124.413 44.404 124.413 42.6291V33.8909C124.413 31.7064 124.049 30.1818 123.321 29.3171C122.638 28.4524 121.432 28.02 119.702 28.02H117.108V48.5H109.599V0.713329ZM119.839 21.1933C121.341 21.1933 122.456 20.8065 123.184 20.0328C123.958 19.2591 124.345 17.962 124.345 16.1416V12.4552C124.345 10.7258 124.026 9.47422 123.389 8.70053C122.797 7.92684 121.841 7.54 120.522 7.54H117.108V21.1933H119.839Z" fill="#1D1D1B"/>
                <path d="M142.4 27.9587L142.4 0.5H162.568V7.35714H149.757V20.6681H159.745V27.5252H149.757V31.534L142.4 27.9587Z" fill="#2A3FF4"/>
                <path d="M149.757 34.1807L142.4 30.668V48.5H149.757V34.1807Z" fill="#2A3FF4"/>
                <path d="M167.5 0.713329H175.01V48.5H167.5V0.713329Z" fill="#1D1D1B"/>
                <path d="M186.505 7.54H178.654V0.713329H201.865V7.54H194.014V48.5H186.505V7.54Z" fill="#1D1D1B"/>
                </svg>
            </div>

            <h1>
                Start Working Out Today!
            </h1>
            <h2>
                Enter your credentials to access your account
            </h2>

            <div class = "login">
                <label for="Email"> Email</label><br></br>
                <input type="text" name="Email" id="Email"/><br></br>

                <label for="Password"> Password</label><br></br>
                <input type="text" name="Password" id="Password"/><br></br>
            </div>
            <div class="LoginBTN">
                <button type="submit" padding="10px" onclick={login}>Login</button>
            </div>
            
            <p>Don't have an account? <a href="/createanaccount">Create an account</a></p>


            <script> 
                
            </script>
        </div>
    );
}

export default Login;