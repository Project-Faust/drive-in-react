// eslint-disable-next-line
import WeekendDates from "../components/WeekendDates";
import { nowPlaying } from "../data";
import redCurtain from "../assets/red-curtain.webp"

const firstFeature = nowPlaying[0].title;
const secondFeature = nowPlaying[1].title;

const posterStyle = {
    maxWidth: "95%",
    maxHeight: "800px",
    aspectRatio: "2/3"
}

export default function CurrentFeatures() {
    return (
        <section
            id="currentFeaturesParent"
            className="mw-100 mh-100"
            style={{
                backgroundImage: `url(${redCurtain})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className="text-center">
                <div className="d-inline-flex border border-3 rounded border-secondary bg-dark text-light shadow-2b m-3">
                    <div className="text-center p-3">
                        <h1><strong>11/15/2024 & 11/16/2024</strong></h1>
                        <h2><strong><u>Friday</u> & <u>Saturday</u></strong></h2>
                        <h3><strong><u>{firstFeature}</u> will be followed by <u>{secondFeature}</u>!</strong></h3>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <section className="row justify-content-evenly text-center w-100 m-3">
                    {nowPlaying.map((res) => (
                        <div className="col-lg-5 col-md-12" key={res.imdb}>
                            <div className="border border-secondary border-3 rounded bg-dark mb-3">
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
            <p className="text-center text-light mb-0">Photo by <a href="https://unsplash.com/@roblaughter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rob Laughter</a> on <a href="https://unsplash.com/photos/red-theater-curtain-WW1jsInXgwM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </section>
    );
};