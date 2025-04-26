// eslint-disable-next-line
import { comingSoon, toBeDetermined } from "../data";

const posterStyle = {
    maxWidth: "95%",
    maxHeight: "800px",
    aspectRatio: "2/3"
};

export default function ComingSoon() {
    // Define the upcoming weekends and their corresponding movies
    const upcomingWeekends = [
        {
            dates: { start: "5/2/2025", end: "5/3/2025" },
            movies: [comingSoon[0], comingSoon[1]] // Thunderbolts & Captain America
        },
        {
            dates: { start: "5/9/2025", end: "5/10/2025" },
            movies: [comingSoon[2], comingSoon[3]] // Mufasa & Thunderbolts (duplicate)
        },
        {
            dates: { start: "5/16/2025", end: "5/23/2025" },
            movies: [comingSoon[4], comingSoon[5]] // Twister & Twisters
        }
    ];

    return (
        <section id="currentFeaturesParent" className="bg-dark min-vh100">
            <div className="text-center">
                {/* Header Card */}
                <div className="d-inline-flex text-center border border-3 border-primary rounded text-light shadow-lg m-3">
                    <div className="" style={{ backgroundColor: "#000000" }}>
                        <h1><strong>Coming Soon!</strong></h1>
                        <p>Click or tap the movie poster below to see the IMDb entry!</p>
                        <p>If there is no date posted, our booking has not yet been confirmed for that date.</p>
                        <p>If there is a "To Be Determined" placeholder, our booking has not yet been confirmed for that movie.</p>
                    </div>
                </div>

                {/* Movies Sections - One for each weekend */}
                <div className="text-light">
                    {upcomingWeekends.map((weekend, weekendIndex) => (
                        <section
                            key={`weekend-${weekendIndex}`}
                            className="row text-center border border-light border-3 rounded m-3"
                        >
                            {/* Date Header */}
                            <div className="d-inline-flex justify-content-center m-3 mx-auto">
                                <div className="text-center border border-3 border-primary rounded shadow-lg p-3" style={{ backgroundColor: "#000000" }}>
                                    <h2>Weekend of <strong>{weekend.dates.start}</strong> & <strong>{weekend.dates.end}</strong>!</h2>
                                    <h3 className="my-3">
                                        <strong>{weekend.movies[0].title}</strong> will be followed by <strong>{weekend.movies[1].title}</strong>!
                                    </h3>
                                </div>
                            </div>

                            {/* Movie Cards - Only map through the 2 movies for this weekend */}
                            <div className="my-3">
                                <section className="row justify-content-evenly text-center">
                                    {weekend.movies.map((movie, index) => (
                                        <div key={`weekend-${weekendIndex}-movie-${index}`} className="col-lg-5 col-md-12">
                                            <div
                                                className="border border-danger border-3 rounded shadow-lg p-3 my-3"
                                                style={{ backgroundColor: "#000000" }}
                                            >
                                                <a
                                                    href={movie.imdb}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-decoration-none"
                                                >
                                                    <h1 className="text-light pt-2"><strong>{movie.title}</strong></h1>
                                                </a>
                                                <div className="container">
                                                    <a
                                                        href={movie.imdb}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <img
                                                            src={movie.image}
                                                            alt={`${movie.title} poster`}
                                                            className="border border-light rounded shadow-lg"
                                                            style={posterStyle}
                                                        />
                                                        <p className="text-light">Image source: IMDb</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            </div>
                        </section>
                    ))}

                    {/* TBD Weekend Section */}
                    <section className="row text-center border border-light border-3 rounded mx-3 mb-3">
                        <div className="d-inline-flex justify-content-center my-4 mx-auto">
                            <div className="text-center border border-3 border-primary rounded p-3" style={{ backgroundColor: "#000000" }}>
                                <h2>Weekend of <strong>5/30/2025</strong> & <strong>5/31/2025</strong>!</h2>
                                <h3 className="my-3">
                                    <strong>To Be Announced</strong>
                                </h3>
                            </div>
                        </div>

                        <div className="mb-3">
                            <section className="row justify-content-evenly text-center m-3">
                                {toBeDetermined.map((movie, index) => (
                                    <div key={`tbd-${index}`} className="col-lg-5 col-md-12">
                                        <div
                                            className="border border-danger border-3 rounded shadow-lg p-3 my-3"
                                            style={{ backgroundColor: "#000000" }}
                                        >
                                            <h1 className="text-light pt-2"><strong>{movie.title}</strong></h1>
                                            <div className="container">
                                                <img
                                                    src={movie.image}
                                                    alt="Coming soon placeholder"
                                                    className="border border-light rounded shadow-lg"
                                                    style={posterStyle}
                                                />
                                                <p className="text-light">Booking not yet confirmed</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}