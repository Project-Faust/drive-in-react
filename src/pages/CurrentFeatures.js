import WeekendDates from "../components/WeekendDates";
import { nowPlaying } from "../data";
const posterStyle = {
    maxWidth: "95%",
}
const firstFeature = nowPlaying[0].title;
const secondFeature = nowPlaying[1].title;

export default function CurrentFeatures() {
    return (
        <section id="currentFeaturesParent" className="mw-100 mh-100 px-3">
            <div className="text-center p-3">
                <h1><strong>Now Playing!</strong></h1>
                <h2><WeekendDates/></h2>
            </div>
            <section className="text-center">
                <h1><strong>{firstFeature} & {secondFeature}</strong></h1>
                <h4>Click or tap the movie poster below to see the IMDB entry!</h4>
                {/* <h1><strong>To Be Determined!</strong></h1> */}
            </section>
            <div className="d-flex justify-content-center">
                <section className="row text-center w-100">
                    {nowPlaying.map((res) => (
                        <div className="justify-content-center my-3 py-3 col-lg-6 col-md-12">
                            <div className="border border-dark border-3 rounded m-3 bg-dark">
                                <a href={res.imdb} target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <h1 className="text-decoration-underline text-light"><strong>{res.title}</strong></h1>
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
                                        <p className="text-decoration-none text-light">Image source: IMDB</p>
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