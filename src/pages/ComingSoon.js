import { comingSoon } from "../data";
const posterStyle = {
    maxWidth: "95%",
    maxHeight: "800px",
    aspectRatio: "2/3"
}
// const comingSoonFirst = comingSoon[0].title;
// const comingSoonSecond = comingSoon[1].title;

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="bg-dark mw-100 mh-100">
            <div className="text-center">
                <div className="d-inline-flex border border-4 rounded border-primary bg-dark text-light shadow-2b m-3">
                    <div className="text-center p-3">
                        <h1><strong>Coming Soon!</strong></h1>
                        <p>Click or tap the movie poster below to see the IMDb entry!</p>
                        <p>If there is no date posted, our booking has not yet been confirmed for that date.</p>
                        <p>If there is a "To Be Determined" placeholder, our booking has not yet been confirmed for that movie.</p>
                    </div>
                </div>
            </div>
            {/* <h1><strong>{comingSoonFirst} & {comingSoonSecond}</strong></h1> */}
            <div className="d-flex justify-content-center text-light">
                <section className="row justify-content-evenly text-center bg-dark w-100 mt-4 mb-3">
                    <div>
                        <div className="d-inline-flex border border-4 border-light rounded mt-4 mb-3">
                            <div className="text-center p-3">
                                <h2>Weekend of <strong>11/08/2024</strong> & <strong>11/09/2024</strong>!</h2>
                                <h3 className="my-3"><strong>{comingSoon[0].title}</strong> will be followed by <strong>{comingSoon[1].title}</strong>!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly mt-4 mb-3">
                        <section className="row justify-content-evenly text-center w-100 m-3">
                            {comingSoon.map((res) => (
                                <div className="col-lg-5 col-md-12">
                                    <div className="border border-danger border-4 rounded bg-dark mt-4 mb-3">
                                        <a href={res.imdb} target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                            <h1 className="text-decoration-none text-light pt-2"><strong>{res.title}</strong></h1>
                                        </a>
                                        <div className="container">
                                            <a
                                                href={res.imdb}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={res.image}
                                                    alt="preview"
                                                    className="border border-dark"
                                                    style={posterStyle}
                                                />
                                                <p className="text-decoration-none text-light">Image source: IMDb</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
};