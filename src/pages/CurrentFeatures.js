// eslint-disable-next-line
import WeekendDates from "../components/WeekendDates";
// eslint-disable-next-line
import { nowPlaying, comingSoon, toBeDetermined } from "../data";
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

                <div className="d-inline-flex shadow border border-3 rounded border-light bg-dark text-light m-3">
                    <div className="text-center p-3">
                        <h2>Weekend of <strong>8/29/2025</strong> & <strong>8/30/2025</strong>!</h2>
                        <h1><strong>{firstFeature}</strong></h1>
                        <h4>will be followed by</h4>
                        <h1><strong>{secondFeature}!</strong></h1>
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
                      className="shadow border border-light rounded"
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
    </section >
  );
};
