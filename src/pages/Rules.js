import rulesPDF from "../assets/drive-in-rules.pdf"

export default function Rules() {
    return (
        <section >
            <div className="text-center m-3">
                <h1>Here are our rules and regulations!</h1>
            </div>
            <div className="pdfContainer text-center">
                <iframe className="pdfViewer " src={rulesPDF} title="Resume PDF" width="100%" height="100%"></iframe>
            </div>
        </section>
    );
};