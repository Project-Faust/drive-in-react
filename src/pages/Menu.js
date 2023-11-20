import updatedMenuPNG from "../assets/updated-menu.png"

export default function Menu() {
    return (
        <section className="pdfSection d-flex flex-column justify-content-center align-items-center container-fluid mw-100 mh-100">
            <div className="row text-center p-3">
                <h1>Our Concession Stand is Open!</h1>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded mb-0" src={MenuPDF} title="Menu PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div className="row justify-content-center mw-100 p-3">
                <img
                    src={updatedMenuPNG}
                    alt="menu"
                    className="col-lg-6 col-md-12 border border-3 border-dark p-0" />
            </div>
        </section>
    );
};