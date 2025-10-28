const PageHeader = ({ title }) => {
  return (
    <div className="w-full h-40 pageHeader">
      <div className="w-full h-full bg-black/40 flex justify-center items-center">
        <h2 className="text-5xl font-[500] uppercase text-white">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
