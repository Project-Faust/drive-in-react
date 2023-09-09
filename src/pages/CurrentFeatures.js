import { nowPlaying } from "../data";
const posterStyle = {
    maxWidth: "95%",
}

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="p-1">
            <div className="text-center my-3 pb-3">
                <h1>Now Playing!</h1>
                <h2><strong>Gran Turismo & The Equalizer 3</strong></h2>
                <p>Click or tap the movie poster below to see the IMDB entry!</p>
            </div>
            {nowPlaying.map((res) => (
                <div className="row justify-content-center m-3">
                    <div className="col-md-6 text-center">
                        {/* <h1><strong>{res.title}</strong></h1> */}
                        <div className="conatiner">
                            <a
                                href={res.imdb}
                            >
                                <img
                                    src={res.image}
                                    alt="preview"
                                    className="img-fluid"
                                    style={posterStyle}
                                />
                                <p className="text-decoration-none text-dark">Image source: IMDB</p>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};