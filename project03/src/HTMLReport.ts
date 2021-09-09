import { writeFileSync } from "fs";
import { OutputTarget } from "./interfaces";

export class HTMLReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;
        writeFileSync('report.html', html);
    }
}