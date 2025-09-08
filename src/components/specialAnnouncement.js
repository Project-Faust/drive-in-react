import React from "react";

export default function SpecialEventAnnouncement({
    title = "Harry Potter Weekend!",
    subtitle = "Friday & Saturday · September 26–27",
    infoBullets = [
        "Gates 6:00 PM · Show at dusk",
        "Limited capacity",
        "Concessions open · No outside food please",
    ],
    note = "Lineup and showtimes subject to change due to weather.",
    hero = { imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop", overlay: true },
    friday = [
        {
            title: "Harry Potter and the Sorcerer's Stone (2001)",
            rating: "PG",
            time: "Starts at dusk",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg",
            description: "The magical journey begins as Harry discovers he's destined for something extraordinary.",
        },
        {
            title: "Harry Potter and the Chamber of Secrets (2002)",
            rating: "PG",
            time: "Following the Harry Potter and the Sorcerer's Stone",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_.jpg",
            description: "Dark secrets emerge at Hogwarts when a mysterious monster threatens the school.",
        },
    ],
    saturday = [
        {
            title: "Harry Potter and the Prisoner of Azkaban (2004)",
            rating: "PG",
            time: "Starts at dusk",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
            description: "A darker turn awaits as Harry faces the truth about his past and the fugitive Sirius Black.",
        },
        {
            title: "Harry Potter and the Goblet of Fire (2005)",
            rating: "PG-13",
            time: "Following the Harry Potter and the Prisoner of Azkaban",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
            description: "Danger, dragons, and the Triwizard Tournament push Harry into a fight far beyond his years.",
        },
    ],
    variant = "dark",
    wrapInCard = true
}) {
    const isDark = variant === "dark";

    return (
        <section className={`special-event container my-5 ${isDark ? "text-light" : ""}`}>
            <style>{`
        .special-event .hero {
          position: relative;
          border-radius: .75rem;
          overflow: hidden;
          min-height: 280px;
          background: #111;
        }
        .special-event .hero-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; filter: contrast(1.05) saturate(1.05);
        }
        .special-event .hero-overlay { position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.60)); }
        .special-event .hero-content { position: relative; z-index: 1; }
        .special-event .day-header { letter-spacing: .08em; font-weight: 700; text-transform: uppercase; }
        .special-event .movie-card { height: 100%; }
        .special-event .poster { aspect-ratio: 2 / 3; object-fit: cover; }
        .special-event .badge-rating { letter-spacing: .06em; }
      `}</style>

            {wrapInCard ? (
                <div className={`card shadow ${isDark ? "bg-dark border-secondary" : "bg-body"}`}>
                    <div className="card-body p-0">
                        <EventInner />
                    </div>
                    <div className={`card-footer ${isDark ? "bg-dark border-secondary" : ""} small text-${isDark ? "secondary" : "muted"}`}>
                        Poster images © Warner Bros. · Source: IMDb
                    </div>
                </div>
            ) : (
                <EventInner />
            )}
        </section>
    );

    function EventInner() {
        return (
            <div>
                <div className="hero mb-4">
                    {hero?.imageUrl && (
                        <img src={hero.imageUrl} alt="Event Background" className="hero-img" />
                    )}
                    {hero?.overlay && <div className="hero-overlay" />}
                    <div className="hero-content p-4 p-md-5 text-white">
                        <div className="d-flex flex-column flex-md-row align-items-md-end gap-3">
                            <div className="me-md-auto">
                                <h1 className="display-6 fw-bold mb-1">{title}</h1>
                                <p className="lead mb-0 opacity-75">{subtitle}</p>
                                <p className="small mt-2 mb-1 opacity-75">Friday: Harry Potter and the Sorcerer's Stone & Harry Potter and the Chamber of Secrets</p>
                                <p className="small mt-1 opacity-75">Saturday: Harry Potter and the Prisoner of Azkaban & Harry Potter and the Goblet of Fire</p>
                            </div>
                        </div>
                    </div>
                </div>

                {infoBullets?.length > 0 && (
                    <ul className={`list-inline small mb-4 ${isDark ? "text-secondary" : "text-muted"}`}>
                        {infoBullets.map((b, i) => (
                            <li key={i} className="list-inline-item me-3">• {b}</li>
                        ))}
                    </ul>
                )}

                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="day-header me-2">Friday</span>
                        <div className="flex-grow-1 border-top border-secondary opacity-50" />
                    </div>
                    <div className="row g-3">
                        {friday.slice(0, 2).map((m, i) => (
                            <div key={i} className="col-12 col-md-6">
                                <div className={`card movie-card shadow-sm h-100 ${isDark ? "bg-dark border-secondary text-light" : ""}`}>
                                    {m.posterUrl && (
                                        <img src={m.posterUrl} alt={`${m.title} poster`} className="card-img-top poster" />
                                    )}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title mb-1">{m.title}</h5>
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            {m.rating && <span className="badge text-bg-secondary badge-rating">{m.rating}</span>}
                                            {m.time && (
                                                <span className={`${isDark ? "text-secondary" : "text-muted"} small`}>{m.time}</span>
                                            )}
                                        </div>
                                        {m.description && <p className="card-text mb-3">{m.description}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="day-header me-2">Saturday</span>
                        <div className="flex-grow-1 border-top border-secondary opacity-50" />
                    </div>
                    <div className="row g-3">
                        {saturday.slice(0, 2).map((m, i) => (
                            <div key={i} className="col-12 col-md-6">
                                <div className={`card movie-card shadow-sm h-100 ${isDark ? "bg-dark border-secondary text-light" : ""}`}>
                                    {m.posterUrl && (
                                        <img src={m.posterUrl} alt={`${m.title} poster`} className="card-img-top poster" />
                                    )}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title mb-1">{m.title}</h5>
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            {m.rating && <span className="badge text-bg-secondary badge-rating">{m.rating}</span>}
                                            {m.time && (
                                                <span className={`${isDark ? "text-secondary" : "text-muted"} small`}>{m.time}</span>
                                            )}
                                        </div>
                                        {m.description && <p className="card-text mb-3">{m.description}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {!wrapInCard && note && (
                    <p className={`${isDark ? "text-secondary" : "text-muted"} small mb-0`}>{note}</p>
                )}
            </div>
        );
    }
}
