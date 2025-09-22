import React from "react";

const ResumeViewer: React.FC = () => {
  const src = `${import.meta.env.BASE_URL}resume.pdf`;
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title text-center mb-6">Resume</h1>

        <div className="flex items-center justify-center gap-3 mb-4">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="neobrutalist-button px-4 py-2 text-sm"
          >
            Open PDF
          </a>
          <a
            href={src}
            download
            className="neobrutalist-button px-4 py-2 text-sm"
          >
            Download PDF
          </a>
        </div>

        <div className="neobrutalist-card p-0">
          <iframe
            title="Resume"
            src={src}
            className="w-full h-[85vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
