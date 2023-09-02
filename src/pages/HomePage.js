import logo from '../assets/logo.png'

export default function HomePage() {
    return (
        <>
            <div id="banner" className="text-center my-3">
                <img src={logo} alt="Belmont Drive-In logo" />
            </div>
            <div className="text-center">
                <h1>Welcome to the Belmont Drive-In Theatre!</h1>
                <h3>Your affordable family entertainment!</h3>
            </div>
        </>
    );
};