import menu2024 from "../assets/2024-menu.png"
import allergy2024 from "../assets/2024-food-allergies.png"

const menuStyle = {
    maxWidth: "90%",
};

const menuBackground = {
    backgroundColor: "#E9573F"
}


export default function Menu() {
    return (
        <section className="pdfSection d-flex flex-column justify-content-center align-items-center container-fluid mw-100 mh-100">
            <div className="row text-center p-3">
                <div className="border border-dark border-3 rounded bg-dark text-light p-3">
                    <h1><strong>Our Concession Stand is Open!</strong></h1>
                </div>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded mb-0" src={MenuPDF} title="Menu PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div
                className="row justify-content-center border-top border-dark border-3 border-rounded mw-90"
                style={menuBackground}>
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