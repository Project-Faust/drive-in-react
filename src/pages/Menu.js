import menu2024 from "../assets/menu-downscaled.webp"
import allergy2024 from "../assets/2024-food-allergies.webp"

const menuStyle = {
    maxWidth: "90%",
};

export default function Menu() {
    return (
        <section 
        className="d-flex flex-column justify-content-center align-items-center container-fluid mw-100 mh-100"
        style={{backgroundColor:"#005CB4"}}>
            <div className="row text-center p-3">
                <div className="col border border-dark border-4 rounded bg-secondary-subtle text-dark p-4 m-3">
                    {/* <h1><strong>Our Concession Stand is Open!</strong></h1> */}
                    <h1><strong>Our Concession Stand is Currently Closed for the Winter!</strong></h1>
                </div>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded mb-0" src={MenuPDF} title="Menu PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div
                className="row justify-content-evenly border-top border-dark border-3 border-rounded mw-90 py-3"
                style={{backgroundColor:"#C9002B"}}>
                <img
                    src={menu2024}
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