import IfYoureLookingImg from "../assets/if-youre-looking.jpg"


export default function HomePage() {
    return (
        <section>
            <div className="text-center py-3">
                <h1><strong>Welcome to the Belmont Drive-In Theatre!</strong></h1>
                <h2><strong>Your affordable family entertainment center!</strong></h2>
            </div>
            <div className="text-center py-3">
                <h3 className="container">
                    <div className="mx-3 py-3">
                        <h4>We are a <strong>cash only</strong> business!</h4>
                        <h4>Gates open at <strong>6:00PM</strong>!</h4>
                        <h4><strong>No outside food or drink</strong> allowed!</h4>
                        <h4><strong>No exterior lights</strong> during showtime!</h4>
                        <h4><strong>No running engines</strong> once parked!</h4>
                        <h4><strong>No pets</strong> are allowed on the premises!</h4>
                        <h4>The first feature starts at <strong>sundown</strong>!</h4>
                        <h4>The second feature follows the first film.</h4>
                        <h4>All sound is done by FM radio at <strong>90.3FM</strong>!</h4>
                        {/* <h4>Learn how to make sure <strong>EXTERIOR h4>HTS ARE OFF</strong> when the <strong>MOTOR IS OFF</strong> and the <strong>RADIO IS ON</strong>!</h4> */}
                        <h4>Find us at <strong>314 McAdenville Rd, Belmont, NC 28012</strong>!</h4>
                    </div>
                    <img src={IfYoureLookingImg} alt="If You're Looking" className="justify-content-center w-50 mh-100 border border-dark mt-3"></img>
                </h3>
            </div>
        </section>
    );
};