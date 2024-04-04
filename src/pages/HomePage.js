// eslint-disable-next-line
import IfYoureLookingImg from "../assets/if-youre-looking.jpg";
import opening2024 from "../assets/2024-opening-weekend.jpg";
import CountdownTimer from "../helpers/Countdown";

const rememberStyle = {
    backgroundColor: "#a3ff96",
    fontWeight: ""
}

export default function HomePage() {
    return (
        <section className="mw-100 mh-100">
            <div className="text-center py-3">
                <h1><strong>Welcome to the Belmont Drive-In Theatre</strong></h1>
                <h2><strong>Your affordable family entertainment center!</strong></h2>
            </div>
            <div className="d-flex justify-content-center align-items center mw-100 m-3">
                <div className="text-center">
                    <div className="border border-dark border-3 rounded bg-primary text-light p-3">
                        <CountdownTimer />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-dark border-3 rounded bg-dark text-light m-3">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
                                <div className="text-center">
                                    <div className="border border-dark border-3 text-dark mw-100 p-3"
                                    style={rememberStyle}>
                                        <h1 >Things to remember!</h1>
                                        <ul className="text-start p-3 m-3">
                                            <li>We are a <strong>cash only</strong> business!</li>
                                            <li>Our business runs and survives on sales from the concession stand!<br/> <strong>No outside food or drink!</strong></li>
                                            <li>All of our sound, including music, movie sound, and annoucements, is broadcast locally on <strong>FM Radio!</strong><br/><strong>Please bring a portable FM radio</strong> if you are unable to turn off all vehicle lights while the engine is off!</li>
                                            <li>For the comfort and well-being of all, please <strong>leave all pets at home</strong>!</li>
                                            <li>Once the field lights are dimmed, please <strong>turn off all exterior vehicle lights</strong>!<br/>Please come prepared to promptly extinguish your lights!</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <h4>We are a <strong>cash only</strong> business!</h4>
                                <h4>Entry is <strong>$25 per car</strong>!</h4>
                                <h4>Gates open at <strong>6:00PM</strong>!</h4>
                                <h4><strong>No outside food or drink</strong> allowed!</h4>
                                <h4><strong>No exterior lights</strong> during showtime!</h4>
                                <h4><strong>No running engines</strong> once parked!</h4>
                                <h4><strong>No pets</strong> are allowed on the premises!</h4>
                                <h4>The first feature starts at <strong>sundown</strong>!</h4>
                                <h4>The first feature starts tentatively at 7:00PM due to daylight saving time!</h4>
                                <h4>The second feature follows the first film with a short intermission between.</h4>
                                <h4>All sound is done by FM radio at <strong>90.3FM</strong>!</h4>
                                <h4><strong>Portable radios</strong> are welcomed and encouraged !</h4>
                                <h4>Find us at <strong>314 McAdenville Rd, Belmont, NC 28012</strong>!</h4> */}

                                <h3 className="py-3"><strong>Our opening weekend for the 2024 season is just around the corner!</strong></h3>
                                <div>
                                    <h5 className="text-start p-3" style={{ textIndent: '50px' }}>
                                        We're proud to say that we have had a wonderful winter with out family, just as we hope you have. We have made some updates and adjustments to our menu and rules which have been posted on our <a href="https://www.facebook.com/profile.php?id=100063570731472">Facebook</a> page and will be uploaded under the corresponding sections of our website in the near future.
                                    </h5>
                                    <h5 className="p-3 text-end">
                                        A Big Belmont Drive-In Thank You,
                                        <br />
                                        Melinda, Roger, Casey, Lane, and the rest of the Belmont Drive-In Crew
                                    </h5>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img
                                        src={opening2024}
                                        alt="2024 opening weekend"
                                        className="justify-content-center w-50 mw-100 mh-100 border border-secondary border-3 rounded my-3">
                                    </img>
                                </div>
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
                    <iframe width="600"
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