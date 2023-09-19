
export default function HomePage() {
    return (
        <>
            <div className="text-center m-3 pb-3">
                <h1>Welcome to the Belmont Drive-In Theatre!</h1>
                <h3>Your affordable family entertainment center!</h3>
            </div>
            <div className="d-flex justify-content-center my-3">
                <h3>
                    <ul>
                        <li>We are a <strong>cash only</strong> business!</li>
                        <li>Gates open at <strong>6:00PM</strong>!</li>
                        <li><strong>No outside food or drink</strong> allowed!</li>
                        <li><strong>No exterior lights</strong> during showtime!</li>
                        <li><strong>No running engines</strong> once parked!</li>
                        <li><strong>No pets</strong> are allowed on the premises!</li>
                        <li>The first feature starts at <strong>sundown</strong>!</li>
                        <li>The second feature follows the first film.</li>
                        <li>All sound is done by FM radio at <strong>90.3FM</strong>!</li>
                        {/* <li>Learn how to make sure <strong>EXTERIOR LIGHTS ARE OFF</strong> when the <strong>MOTOR IS OFF</strong> and the <strong>RADIO IS ON</strong>!</li> */}
                    </ul>
                </h3>
            </div>
        </>
    );
};