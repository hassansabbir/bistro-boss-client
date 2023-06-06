const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-20">
      <p className="text-yellow-600 text-xl">---{subHeading}---</p>
      <h3 className="text-4xl border-y-4 mx-auto w-6/12 my-5 py-3 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
