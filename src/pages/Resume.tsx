import React from "react";

const ResumeViewer: React.FC = () => {
  const src = `${import.meta.env.BASE_URL}resume.pdf`;
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title text-center mb-6">Resume</h1>
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
