import { comingSoon } from "../data";
const posterStyle = {
    maxWidth: "95%",
}
// const comingSoonFirst = comingSoon[0].title;
// const comingSoonSecond = comingSoon[1].title;

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="">
            <div className="text-center m-3 py-3">
                <h1>Coming Soon!</h1>
            </div>
            <section className="text-center">
                {/* <h1><strong>{comingSoonFirst} & {comingSoonSecond}</strong></h1> */}
                <p>Click or tap the movie poster below to see the IMDB entry!</p>
            </section>
            <div className="d-flex justify-content-center">
                <section className="row text-center w-100">
                    {comingSoon.map((res) => (
                        <div className="justify-content-center my-3 py-3 col-lg-6 col-md-12">
                            <div className="justify-content-center border border-dark border-3 rounded m-3">
                                <a href={res.imdb} target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <h1 className="text-decoration-underline"><strong>{res.title}</strong></h1>
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