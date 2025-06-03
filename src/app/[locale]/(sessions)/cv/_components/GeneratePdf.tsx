import React from "react";
import jsPDF from "jspdf";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PiFilePdfLight } from "react-icons/pi";

export default function GeneratePdf({ resumeData }: any) {
  const curriculum = useTranslations("curriculum");

  const generatePDF = () => {
    const doc = new jsPDF();

    // Cabeçalho do PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Glauber Monteiro", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("glaubermonteirodev@gmail.com", 190, 20, {
      align: "right",
    });
    doc.text("+55 83 8777-5187", 190, 25, {
      align: "right",
    });
    doc.text(
      "https://www.linkedin.com/in/glauber-monteiro-40439b238/",
      190,
      30,
      {
        align: "right",
      }
    );

    // Resumo Profissional
    doc.setFontSize(14);
    doc.text(resumeData.summary.title, 20, 30);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(resumeData.summary.skills.join(" | "), 20, 40);
    doc.text(resumeData.summary.objective, 20, 50);

    // Formação Acadêmica
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(curriculum("educationTitle"), 20, 65);

    doc.setFont("helvetica", "normal");
    resumeData.education.forEach((edu: any, index: any) => {
      doc.text(edu, 20, 75 + index * 10); // Espaçamento ajustado
    });

    // Idiomas
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(curriculum("languagesTitle"), 20, 90);

    doc.setFont("helvetica", "normal");
    resumeData.languages.forEach((lang: any, index: any) => {
      doc.text(lang, 20, 100 + index * 10); // Espaçamento ajustado
    });

    // Experiência Profissional
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(curriculum("professionalTitle"), 20, 135);

    let yOffset = 145;
    resumeData.experiences.forEach((exp: any) => {
      doc.setFont("helvetica", "normal");
      doc.text(exp.period, 20, yOffset);
      doc.text(exp.role, 100, yOffset); // Adicionado espaçamento
      doc.setFont("helvetica", "bold");
      doc.text(exp.company, 20, yOffset + 10);

      yOffset += 20;
      doc.setFont("helvetica", "normal");
      exp.details.forEach((detail: any) => {
        doc.text(`- ${detail}`, 20, yOffset);
        yOffset += 10; // Espaçamento entre detalhes
      });
      yOffset += 15; // Adiciona um espaço após cada experiência
    });

    // Salvar o PDF
    doc.save("Glauber_Monteiro_Resume.pdf");
  };

  return (
    <Button
      variant={"secondary"}
      className="capitalize gap-2 w-fit"
      onClick={generatePDF}
    >
      <PiFilePdfLight className="w-6 h-6" />
      {curriculum("generatePdf")}
    </Button>
  );
}
