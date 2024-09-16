// eslint-disable-next-line
import { useEffect } from "react";
import usePreloadImage from "../helpers/usePreloadImage";
import ifYoureLooking from "../assets/if-youre-looking.webp";
import logo from "../assets/logo.webp"
import starryBG from "../assets/star-background.webp"

export default function HomePage() {
    usePreloadImage([starryBG, logo, ifYoureLooking])
    // useEffect(() => {
    //     if (window.FB) {
    //         window.FB.XFBML.parse();
    //     }
    // }, []);
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


            {/* <section className="row justify-content-center m-3">
                <img
                    alt="Playing weekend of 6/7 & 6/8"
                    src={stormReopening}
                    className="col-lg-6 border border-secondary border-3 rounded p-0 m-0"
                />
            </section> */}

            {/* <div className="text-center m-3">
                <section className="d-inline-flex border border-3 rounded border-secondary bg-dark mw-100">
                    <div className="text-center text-light p-3">
                        <h3><strong>Temporarily Closed</strong></h3>
                        <p>Unfortunately, due to the severe weather that has passed through the area recently, we have suffered damage to the screen and are currently without full operating power. We will keep everyone updated with our progress and re-opening date to the best of our ability. We sincerely thank all of our patrons and the community for helping support not only us but also each other, as we know that we weren't the only ones affected by mother nature. We are both grateful and humbled by the volume of people and businesses that have reached out and expressed their concerns, well-wishes, and offers for support in order to keep our business going so that we can continue to give back to the community that has continued to support us without fail since our grand re-opening last year. We again want to thank each and every one of you, and we promise one thing: in the words of Arnold Schwarzenegger, the Terminator himself, "We'll be back."</p>
                    </div>
                </section>
            </div> */}

            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-secondary border-3 rounded bg-dark text-light">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
                                <h3 className="h1 py-3"><strong>We are open Friday and Saturday!</strong></h3>
                                <h4 className="h2 py-3">Remember that we are a <strong><u>cash only</u></strong> business and that <strong><u>our first movie starts at sundown</u>!</strong></h4>
                                <h4 className="h2"><strong>Find us at 314 McAdenville Rd, Belmont, NC 28012</strong></h4>
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
                                                <li>Our <strong>first</strong> movie starts at <strong>sundown</strong>!</li>
                                                <li>We are a <strong>cash only</strong> business!</li>
                                                <li>Admission is <strong>$25 per carload</strong>.<br />After leaving, you must pay to reenter.</li>
                                                <li>Our business runs and survives on sales from the concession stand!<br /> <strong>No outside food or drink!</strong></li>
                                                <li>Alongside not bringing outside food and drink, we have a <strong>zero-tolerance no alcohol policy</strong>.</li>
                                                <li>All of our sound, including music, movie sound, and annoucements, is broadcast locally on <strong>FM Radio!</strong><br /><strong>Please bring a portable FM radio</strong> if you are unable to turn off all vehicle lights while the engine is off!</li>
                                                <li>Please <strong>leave pets at home</strong>!</li>
                                                <li>Once the field lights are dimmed, please <strong>turn off all exterior vehicle lights</strong>!<br />Please come prepared to promptly extinguish your lights!</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" col border border-3 rounded border-secondary-subtle shadow-2b m-3 mw-100"
                                        style={{ backgroundColor: "#004280" }}>
                                        <p className="h3 text-light text-start p-3" style={{ textIndent: '50px' }}>
                                            Many of us were impacted from the heavy storms that came through the area recently. Although it has been a minor setback in our plans for this season, we have made repairs to the screen and are proud to present to you a picture that is cleaner than it has ever been. We look forward to seeing everyone soon and want to extend our sincerest thanks to those who reached out to us and one another. We have made some updates and adjustments to our menu and rules this season which have been posted on our <a href="https://www.facebook.com/profile.php?id=100063570731472" className="text-light"><strong>Facebook</strong></a> page and have been updated on our website.
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
            {/* <section className="row justify-content-center m-3">
                <img
                    alt="Playing weekend of 4/12 & 4/13"
                    src={maySchedule}
                    className="col-lg-6 border border-secondary border-3 rounded p-0 m-0"
                />
            </section> */}
            <section>
                {/* <div
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
                        class="fb-xfbml-parse-ignore mw-100">
                        <a href="https://www.facebook.com/profile.php?id=100063570731472">Belmont Drive-In</a>
                    </blockquote>
                </div> */}
                <div className="d-flex justify-content-center align-items-center mx-3 mt-3 mw-100">
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