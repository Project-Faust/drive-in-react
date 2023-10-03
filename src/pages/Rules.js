import rulesPDF from "../assets/drive-in-rules.pdf"

export default function Rules() {
    return (
        <section className="pdfSection p-3">
            <div className="text-center">
                <h1>Here are our rules and regulations!</h1>
            </div>
            <div className="pdfContainer text-center">
                <iframe className="pdfViewer border border-3 border-dark rounded" src={rulesPDF} title="Rules PDF" width="100%" height="100%"></iframe>
            </div>
        </section>
    );
};