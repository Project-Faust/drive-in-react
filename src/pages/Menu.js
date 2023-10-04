import MenuPDF from "../assets/drive-in-menu.pdf"
import menuJPG from "../assets/drive-in-menu.jpg"

export default function Menu() {
    return (
        <section className="pdfSection container-fluid">
            <div className="row text-center py-3">
                <h1>Our Concession Stand is Open!</h1>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded mb-0" src={MenuPDF} title="Menu PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div className="d-flex justify-content-center row mw-100 p-3">
                <img
                src={menuJPG}
                alt="menu"
                className="col-lg-6 col-md-12 border border-3 border-dark p-0"/>
            </div>
        </section>
    );
};