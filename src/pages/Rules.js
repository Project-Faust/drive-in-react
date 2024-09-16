import rulesWebp from "../assets/2024-rules.webp"

export default function Rules() {
    return (
        <section className="pdfSection d-flex flex-column justify-content-center align-items-center container-fluid bg-dark mw-100 mh-100">
            <div className="row text-center p-3">
                <div className="col border border-light border-4 rounded bg-dark text-light p-4 m-3">
                    <h1><strong>Please be Mindful of Our Rules and Regulations!</strong></h1>
                </div>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded" src={rulesPDF} title="Rules PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div className="row justify-content-center mw-100 p-3">
                <img
                    src={rulesWebp}
                    alt="rules"
                    className="col-lg-6 col-md-12 border border-3 rounded border-primary bg-danger p-3" />
            </div>
        </section>
    );
};