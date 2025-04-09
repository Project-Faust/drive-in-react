import menu2025 from "../assets/2025-menu.webp"
import allergy2024 from "../assets/2024-food-allergies.webp"

const menuStyle = {
    maxWidth: "90%",
};

export default function Menu() {
    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center container-fluid mw-100 mh-100 min-vh-100"
            style={{ backgroundColor: "#005CB4" }}>
            <div className="row text-center p-3">
                <div className="col shadow-lg rounded bg-secondary-subtle text-dark p-4 m-3">
                    <h1><strong>Our Concession Stand is Open!</strong></h1>
                </div>
            </div>
            <div
                className="row justify-content-evenly shadow-lg rounded mw-90 p-3 m-3"
                style={{ backgroundColor: "#C9002B" }}>
                <img
                    src={menu2025}
                    alt="menu"
                    className="col-lg-5 col-md-12 bg-dark border rounded border-3 border-dark p-3 m-3"
                    style={menuStyle} />
                <img
                    src={allergy2024}
                    alt="food warning"
                    className="col-lg-5 col-md-12 bg-dark border rounded border-3 border-dark p-3 m-3"
                    style={menuStyle} />
            </div>
        </section>
    );
};