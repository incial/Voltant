const ClientsSection = () => {
  return (
    <section className="w-full mt-[97px] max-md:mt-10">
      <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-[#7F7F7F] text-4xl font-black mb-8 text-center">
          Major Clients
        </h2>
        
        {/* Client List */}
        <div className="flex flex-col items-center gap-2 text-2xl font-black text-[#7F7F7F] leading-none">
          <div>Major Clients</div>
          <div>Major Clients</div>
          <div>Major Clients</div>
          <div>Major Clients</div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;