import React, { useState } from "react";
import { AlertCircle } from "lucide-react";

const ResumeViewer: React.FC = () => {
  const [loadError, setLoadError] = useState(false);
  const src = `${import.meta.env.BASE_URL}resume.pdf`;
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title text-center mb-6">Resume</h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="neobrutalist-button neobrutalist-button-primary px-6 py-3 text-sm"
          >
            <span className="relative z-10">Open PDF</span>
          </a>
          <a
            href={src}
            download
            className="neobrutalist-button neobrutalist-button-secondary px-6 py-3 text-sm"
          >
            <span className="relative z-10">Download PDF</span>
          </a>
        </div>

        <div className="neobrutalist-card p-0 relative">
          {loadError ? (
            <div className="w-full h-[85vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
              <AlertCircle size={48} className="text-destructive" />
              <h3 className="text-xl font-bold">Failed to Load Resume</h3>
              <p className="text-foreground/80">
                The PDF viewer couldn't load the resume. Please try downloading it using the button above.
              </p>
            </div>
          ) : (
            <iframe
              title="Resume"
              src={src}
              className="w-full h-[85vh]"
              onError={() => setLoadError(true)}
            >
              <p className="p-4">
                Your browser does not support PDFs. 
                <a href={src} className="text-primary underline">Download the PDF</a> to view it.
              </p>
            </iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
