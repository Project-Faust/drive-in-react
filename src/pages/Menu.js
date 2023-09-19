import MenuPDF from "../assets/drive-in-menu.pdf"

export default function Menu() {
    return (
        <section id="pdfSection">
            <div className="text-center m-3 py-3">
                <h1>Our Concession Stand is Open!</h1>
            </div>
            <div className="pdfContainer text-center">
                <iframe className="pdfViewer " src={MenuPDF} title="Resume PDF" width="" height="100%"></iframe>
            </div>
        </section>
    );
};
