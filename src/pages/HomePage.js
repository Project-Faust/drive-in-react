// eslint-disable-next-line
import IfYoureLookingImg from "../assets/if-youre-looking.jpg";

export default function HomePage() {
    return (
        <section className="mw-100 mh-100">
            <div className="text-center py-3">
                <h1><strong>Welcome to the Belmont Drive-In Theatre!</strong></h1>
                <h2><strong>Your affordable family entertainment center!</strong></h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-dark border-3 rounded bg-dark text-light m-3">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
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

                                <h3 className="py-3">Ladies and gentleman, that's a wrap for the grand reopening 2023 season!</h3>
                                <div>
                                    <h5 className="text-start p-3" style={{ textIndent: '50px' }}>
                                        Thank you again to all who supported us through the past few months and those of you who will do so in the future. We are beyond blessed to serve the community and your families. We know that Bill and Peggy are looking down smiling at us and the community as a whole for all of the cooperation and support that has gone around this year. From the bottom of our hearts, we wish everyone a blessed holiday season full of love and joy. Be sure to spend time with friends, family, and loved ones this holiday season.
                                    </h5>
                                    <h5 className="p-3 text-end">
                                        A Big Belmont Drive-In Thank You,
                                        <br/>
                                        Melinda, Roger, Casey, Lane, and the rest of the Belmont Drive-In Crew
                                    </h5>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img
                                        src={IfYoureLookingImg}
                                        alt="If You're Looking"
                                        className="justify-content-center w-50 mw-100 mh-100 border border-secondary border-3 rounded my-3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};