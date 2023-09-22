import { nowPlaying } from "../data";
const posterStyle = {
    maxWidth: "95%",
}

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="">
            <div className="text-center m-3 py-3">
                <h1>Now Playing!</h1>
                <h2><strong>Weekend of 09/22/2023 & 09/23/2023</strong></h2>
            </div>
            <section className="text-center">
                <h1><strong>Blue Beetle & Barbie</strong></h1>
                <p>Click or tap the movie poster below to see the IMDB entry!</p>
            </section>
            <div className="d-flex justify-content-center">
                <section className="row text-center w-100">
                    {nowPlaying.map((res) => (
                        <div className="justify-content-center my-3 py-3 col-lg-6 col-md-12">
                            <div className="justify-content-center border border-dark border-3 rounded m-3">
                                <h1 className="text-decoration-underline"><strong>{res.title}</strong></h1>
                                <div className="container">
                                    <a
                                        href={res.imdb}
                                    >
                                        <img
                                            src={res.image}
                                            alt="preview"
                                            className="img-fluid border border-dark"
                                            style={posterStyle}
                                        />
                                        <p className="text-decoration-none text-dark">Image source: IMDB</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
};