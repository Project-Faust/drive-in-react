import IfYoureLookingImg from "../assets/if-youre-looking.jpg";
import Oct2023ScheduleImg from "../assets/2023-october-schedule.jpeg";


export default function HomePage() {
    return (
        <section className="mw-100 mh-100">
            <div className="text-center py-3">
                <h1><strong>Welcome to the Belmont Drive-In Theatre!</strong></h1>
                <h2><strong>Your affordable family entertainment center!</strong></h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mw-100">
                <section className="row justify-content-center text-center w-100">
                    {/* <div className="col-lg-6 col-md-12">
                        <div className="border border-dark border-3 rounded bg-halloween-accent m-3">
                            <img
                                src={Oct2023ScheduleImg}
                                alt="October Schedule"
                                className="justify-content-center mw-100 mh-100 border border-dark p-3"></img>
                        </div>
                    </div> */}
                    <div className="col-lg-9 col-md-12">
                        <div className="border border-dark border-3 rounded bg-dark text-light m-3">
                            <div className="d-flex flex-column justify-content-evenly align-items-center p-3">
                                <h4>We are a <strong>cash only</strong> business!</h4>
                                <h4>Entry is <strong>$25 per car</strong>!</h4>
                                <h4>Gates open at <strong>6:00PM</strong>!</h4>
                                <h4><strong>No outside food or drink</strong> allowed!</h4>
                                <h4><strong>No exterior lights</strong> during showtime!</h4>
                                <h4><strong>No running engines</strong> once parked!</h4>
                                <h4><strong>No pets</strong> are allowed on the premises!</h4>
                                {/* <h4>The first feature starts at <strong>sundown</strong>!</h4> */}
                                <h4>The first feature starts tentatively at 8:00PM!</h4>
                                <h4>The second feature follows the first film with a short intermission between.</h4>
                                <h4>All sound is done by FM radio at <strong>90.3FM</strong>!</h4>
                                <h4><strong>Portable radios</strong> are welcomed and encouraged !</h4>
                                {/* <h4>Learn how to make sure <strong>EXTERIOR h4>HTS ARE OFF</strong> when the <strong>MOTOR IS OFF</strong> and the <strong>RADIO IS ON</strong>!</h4> */}
                                <h4>Find us at <strong>314 McAdenville Rd, Belmont, NC 28012</strong>!</h4>
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