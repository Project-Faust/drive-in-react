// eslint-disable-next-line
import { comingSoon, toBeDetermined } from "../data";

const posterStyle = {
    maxWidth: "95%",
    maxHeight: "800px",
    aspectRatio: "2/3"
};

export default function ComingSoon() {
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
                
                {/* Movies Sections */}
                <div className="">
                    <div className="text-light">
                        {/* First Weekend Section */}
                        <section className="row text-center border border-light border-3 rounded m-3">
                            {/* Date Header */}
                            <div className="d-inline-flex justify-content-center m-3 mx-auto">
                                <div className="text-center border border-3 border-primary rounded shadow-lg p-3" style={{ backgroundColor: "#000000" }}>
                                    <h2>Weekend of <strong>5/2/2025</strong> & <strong>5/3/2025</strong>!</h2>
                                    <h3 className="my-3">
                                        <strong>{comingSoon[0].title}</strong> will be followed by <strong>{comingSoon[1].title}</strong>!
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Movie Cards */}
                            <div className="my-3">
                                <section className="row justify-content-evenly text-center">
                                    {comingSoon.map((movie, index) => (
                                        <div key={`first-${index}`} className="col-lg-5 col-md-12">
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
                        
                        {/* Second Weekend Section (Future Date) */}
                        <section className="row text-center checkerboard-red border border-light border-3 rounded mx-3 mb-3">
                            {/* Date Header */}
                            <div className="d-inline-flex justify-content-center my-4 mx-auto">
                                <div className="text-center border border-3 border-primary rounded p-3" style={{ backgroundColor: "#000000" }}>
                                    <h2>Weekend of <strong>5/9/2025</strong> & <strong>5/10/2025</strong>!</h2>
                                    <h3 className="my-3">
                                        <strong>To Be Announced</strong>
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Movie Cards - Using toBeDetermined as a placeholder */}
                            <div className="mb-3">
                                <section className="row justify-content-evenly text-center m-3">
                                    {toBeDetermined.map((movie, index) => (
                                        <div key={`second-${index}`} className="col-lg-5 col-md-12">
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
            </div>
        </section>
    );
}