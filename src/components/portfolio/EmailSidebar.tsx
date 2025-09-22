const EmailSidebar = () => {
  return (
    <div className="fixed right-16 bottom-8 z-40">
      <div className="flex flex-col items-center space-y-6">
        <a
          href="mailto:yashpalav48@gmail.com"
          className="text-gray-400 hover:text-primary transition-colors duration-300 font-mono text-md tracking-wider"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          yashpalav48@gmail.com
        </a>
        <div className="w-px h-20 bg-border" />
      </div>
    </div>
  );
};

export default EmailSidebar;