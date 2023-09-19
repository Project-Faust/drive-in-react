import { nowPlaying } from "../data";
const posterStyle = {
    maxWidth: "95%",
}

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="">
            <div className="text-center m-3 py-3">
                <h1>Now Playing!</h1>
            </div>
            <section className="text-center">
                <h1><strong>Blue Beetle & Barbie</strong></h1>
                <p>Click or tap the movie poster below to see the IMDB entry!</p>
            </section>
            {nowPlaying.map((res) => (
                <div className="row justify-content-center my-3 py-3">
                    <div className="col-md-6 text-center">
                        <h1><strong>{res.title}</strong></h1>
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