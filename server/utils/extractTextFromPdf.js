import { PDFParse } from "pdf-parse";

const extractTextFromPdf = async (buffer) => {
  try {
    const parser = new PDFParse({ data: buffer });

    const result = await parser.getText();

    await parser.destroy();

    return result.text;
  } catch (error) {
    console.log("PDF Parse Error:", error);

    throw new Error("Unable to extract text from PDF");
  }
};

export default extractTextFromPdf;
