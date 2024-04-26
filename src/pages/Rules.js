import rulesWebp from "../assets/2024-rules.webp"

export default function Rules() {
    return (
        <section className="pdfSection d-flex flex-column justify-content-center align-items-center container-fluid mw-100 mh-100">
            <div className="row text-center p-3">
                <h1>Here are our rules and regulations!</h1>
            </div>
            {/* <div className="pdfContainer text-center p-3">
                <iframe className="pdfViewer border border-3 border-dark rounded" src={rulesPDF} title="Rules PDF" width="100%" height="100%"></iframe>
            </div> */}
            <div className="d-flex justify-content-center row mw-100 p-3">
                <img
                    src={rulesWebp}
                    alt="rules"
                    className="col-lg-6 col-md-12 border border-3 border-dark p-0" />
            </div>
        </section>
    );
};