import jsPDF from "jspdf";

export const downloadAsPDF = (trip) => {
  const doc = new jsPDF();

  doc.setFontSize(18);

  doc.text("Travel Itinerary", 20, 20);

  doc.setFontSize(12);

  const text = doc.splitTextToSize(
    trip.generatedItinerary || "No itinerary available",
    170,
  );

  doc.text(text, 20, 40);

  doc.save("travel-itinerary.pdf");
};

export const downloadAsTXT = (trip) => {
  const element = document.createElement("a");

  const file = new Blob([trip.generatedItinerary], {
    type: "text/plain",
  });

  element.href = URL.createObjectURL(file);

  element.download = "travel-itinerary.txt";

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
