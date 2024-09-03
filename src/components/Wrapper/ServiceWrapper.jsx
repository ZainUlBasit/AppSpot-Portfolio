const ServiceWrapper = ({ children, title, className }) => {
  return (
    <div
      className={`px-8 w-full font-spartan bg-[#0F0B07] text-white ${className}`}
    >
      <h1 className="text-lg font-medium lg:text-2xl lg:font-bold py-6">
        {title}
      </h1>
      <div className="flex w-full flex-wrap">{children}</div>
    </div>
  );
};

export default ServiceWrapper;
