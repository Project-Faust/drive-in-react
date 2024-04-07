// // eslint-disable-next-line
// import IfYoureLookingImg from "../assets/if-youre-looking.jpg";
// import opening2024 from "../assets/2024-opening-weekend.jpg";
// import CountdownTimer from "../helpers/Countdown";
import logo from "../assets/logo.png"
const rememberStyle = {
    backgroundColor: "#a3ff96",
    fontSize: "18px"
}

export default function HomePage() {
    return (
        <section className="mw-100 mh-100">
            <div id="banner" className=" mw-100 mh-100 text-center py-3">
                <img src={logo} alt="Belmont Drive-In logo" />
            </div>
            <div className="text-center py-3">
                <h1><strong>Welcome to the Belmont Drive-In Theatre</strong></h1>
                <h2><strong>Your affordable family entertainment center!</strong></h2>
            </div>
            {/* <div className="d-flex justify-content-center align-items center mw-100 m-3">
                <div className="text-center">
                    <div className="border border-dark border-3 rounded bg-primary text-light p-3">
                        <CountdownTimer/>
                    </div>
                </div>
            </div> */}
            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-dark border-3 rounded bg-dark text-light m-3">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
                                <h3 className="h1 py-3"><strong>We're open for the 2024 season!</strong></h3>
                                <div className="border border-3 border-secondary rounded text-dark p-3 m-3 mw-100"
                                    style={rememberStyle}>
                                    <div className="text-center">
                                        <h4 className="h1">Things to remember!</h4>
                                        <ul className="text-start p-3 m-3">
                                            <li>Gates open at <strong>6:00PM</strong>!</li>
                                            <li>We are a <strong>cash only</strong> business!</li>
                                            <li>Our business runs and survives on sales from the concession stand!<br /> <strong>No outside food or drink!</strong></li>
                                            <li>Alongside not bring outside food and drink, we have a <strong>zero-tolerance no alcohol policy.</strong></li>
                                            <li>All of our sound, including music, movie sound, and annoucements, is broadcast locally on <strong>FM Radio!</strong><br /><strong>Please bring a portable FM radio</strong> if you are unable to turn off all vehicle lights while the engine is off!</li>
                                            <li>Please <strong>leave pets at home</strong>!</li>
                                            <li>Once the field lights are dimmed, please <strong>turn off all exterior vehicle lights</strong>!<br />Please come prepared to promptly extinguish your lights!</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="border border-3 rounded border-secondary bg-light text-dark m-3 mw-100">
                                    <p className="h3 text-start p-3" style={{ textIndent: '50px' }}>
                                        We're proud to say that we have had a wonderful winter with our family, just as we hope you have. We have made some updates and adjustments to our menu and rules which have been posted on our <a href="https://www.facebook.com/profile.php?id=100063570731472">Facebook</a> page and have been updated on our website.
                                    </p>
                                    <p className="h4 p-3 text-end">
                                        A Big Thank You,
                                        <br />
                                        The Belmont Drive-In Family
                                    </p>
                                </div>

                                {/* <div className="d-flex justify-content-center">
                                    <img
                                        src={opening2024}
                                        alt="2024 opening weekend"
                                        className="justify-content-center w-50 mw-100 mh-100 border border-secondary border-3 rounded m-3">
                                    </img>
                                </div> */}
                                {/* <div className="d-flex justify-content-center">
                                    <img
                                        src={IfYoureLookingImg}
                                        alt="If You're Looking"
                                        className="justify-content-center w-50 mw-100 mh-100 border border-secondary border-3 rounded my-3"></img>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div
                    class="fb-page d-flex justify-content-center align-items-center m-3 mw-100"
                    data-href="https://www.facebook.com/profile.php?id=100063570731472"
                    data-tabs="timeline"
                    data-width="600"
                    data-height="131"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false">
                    <blockquote
                        cite="https://www.facebook.com/profile.php?id=100063570731472"
                        class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/profile.php?id=100063570731472">Belmont Drive-In</a></blockquote></div>
                <div className="d-flex justify-content-center align-items-center m-3 mw-100">
                    <iframe
                        title="google map embed"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowfullscreen
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqRq4HOq9VogR6duom18zqd0&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
                    </iframe>
                </div>
            </section>
        </section >
    );
};