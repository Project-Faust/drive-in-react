import MenuPDF from "../assets/drive-in-menu.pdf"

export default function Menu() {
    return (
        <section className="pdfSection">
            <div className="text-center m-3 py-3">
                <h1>Our Concession Stand is Open!</h1>
            </div>
            <div className="pdfContainer text-center">
                <iframe className="pdfViewer border border-3 border-dark rounded" src={MenuPDF} title="Menu PDF" width="100%" height="100%"></iframe>
            </div>
        </section>
    );
};