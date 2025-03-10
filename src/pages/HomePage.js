// eslint-disable-next-line
import { useEffect } from "react";
import usePreloadImage from "../helpers/usePreloadImage";
import ifYoureLooking from "../assets/if-youre-looking.webp";
import logo from "../assets/logo.webp"
import starryBG from "../assets/star-background.webp"

export default function HomePage() {
    usePreloadImage([starryBG, logo, ifYoureLooking])
    return (
        <section
            className="mw-100 mh-100"
            style={{
                backgroundImage: `url(${starryBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // height: '100vh'
            }}>
            <div id="banner" className=" mw-100 mh-100 text-center py-3">
                <img src={logo} alt="Belmont Drive-In logo" />
            </div>
            <div className="text-center m-3">
                <section className="d-inline-flex border border-3 rounded border-secondary bg-dark mw-100">
                    <div className="text-center text-light p-3">
                        <h1><strong>Welcome to the Belmont Drive-In Theatre</strong></h1>
                        <h2><strong>Your affordable family entertainment center!</strong></h2>
                    </div>
                </section>
            </div>
            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-secondary border-3 rounded bg-dark text-light">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
                                <div className="d-inline-flex border border-3 rounded border-secondary bg-danger text-light shadow-2b m-3 flex-column">
                                    <h3 className="h1 p-3"><strong>We are Currently Closed for the Winter!</strong></h3>
                                    <h3 className="h1 p-3"><strong>Our first weekend of the 2025 Season will be <br />4/11/2025 & 4/12/2025!</strong></h3>
                                </div>

                                <div>
                                    <h4 className="h2 pt-3 pb-1">Remember that we are a <strong><u>cash only</u></strong> business!</h4>
                                    <h5 className="h3 py-1">This includes both <strong>admission</strong> and <strong>concessions</strong>!</h5>
                                </div>
                                <div className="border-top border-light">
                                    <h4 className="h2 py-1">We open the gates for parking spots at <strong>6:00PM</strong>!</h4>
                                    <h5 className="h3 py-1">Our first movie begins at <strong>7:30PM</strong>!</h5>
                                </div>
                                <div className="border-top border-light">
                                    <h4 className="h2 py-1">We recommend bringing a <strong><u>portable FM radio</u>!</strong></h4>
                                    <h5 className="h3 pt-1 pb-3">Unfortunately, radio apps on mobile devices <strong><u>do not work</u></strong>!</h5>
                                </div>
                                <h4 className="h2 py-3"><strong>Find us at 314 McAdenville Rd, Belmont, NC 28012</strong></h4>
                                <div className="row">
                                    <div
                                        className="col border border-3 border-secondary-subtle rounded text-light p-3 m-3 mw-100"
                                        style={{
                                            backgroundColor: "#8a001e",
                                            fontSize: "22px"
                                        }}>
                                        <div className="text-center">
                                            <h4 className="h1 remember-header shadow-2b"
                                            ><strong>Things to remember!</strong></h4>
                                            <ul className="text-start shadow-2b p-3 m-3">
                                                <li>Gates open at <strong>6:00PM</strong>!</li>
                                                {/* <li>Our <strong>first</strong> movie starts at <strong>sundown</strong>!</li> */}
                                                <li>We are a <strong>cash only</strong> business!</li>
                                                <li>Admission is <strong>$25 per carload</strong>.<br />After leaving, you must pay to reenter.</li>
                                                <li>Our business runs and survives on sales from the concession stand!<br /> <strong>No outside food or drink!</strong></li>
                                                <li>Alongside not bringing outside food and drink, we have a <strong>zero-tolerance no alcohol policy</strong>.</li>
                                                <li>All of our sound, including music, movie sound, and announcements, is broadcast locally on <strong>FM Radio!</strong><br /><strong>Please bring a portable FM radio</strong> if you are unable to turn off all vehicle lights while the engine is off!</li>
                                                <li>Please <strong>leave pets at home</strong>!</li>
                                                <li>Once the field lights are dimmed, please <strong>turn off all exterior vehicle lights</strong>!<br />Please come prepared to promptly extinguish your lights!</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" col border border-3 rounded border-secondary-subtle shadow-2b m-3 mw-100"
                                        style={{ backgroundColor: "#004280" }}>
                                        <p className="h3 text-light text-start p-3" style={{ textIndent: '50px' }}>
                                            
                                            <br />
                                            Please continue to check in with us for updates and adjustments to our menu and rules this season which have been posted on our <a href="https://www.facebook.com/profile.php?id=100063570731472" className="text-light"><strong>Facebook</strong></a> page and have been updated on our website.
                                        </p>
                                        <p className="h4 text-light text-end p-3">
                                            A Big Thank You,
                                            <br />
                                            The Belmont Drive-In Family
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <img
                                                src={ifYoureLooking}
                                                alt="If You're Looking"
                                                className="justify-content-center w-50 mw-100 mh-100 border border-secondary border-3 rounded my-3"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div className="d-flex justify-content-center align-items-center mx-3 mt-3 mw-100">
                    <iframe
                        title="google map embed"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowfullscreen
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqRq4HOq9VogR6duom18zqd0&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                        className="rounded bg-dark">
                    </iframe>
                </div>
            </section>
        </section >
    );
};