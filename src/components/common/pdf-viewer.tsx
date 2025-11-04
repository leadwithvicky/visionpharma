interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  return (
    <div className="w-full relative lg:h-[1000px] md:h-[800px] sm:h-[600px] h-[400px] flex-1">
      <iframe src={fileUrl} title="PDF Viewer" className="w-full h-full" />
    </div>
  );
};

export default PdfViewer;
