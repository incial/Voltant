export default function LegalLayout({ title, sections, children }) {
  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "var(--font-cairo), 'Cairo', sans-serif" }}
    >
      {/* Dark strip so the white navbar text stays readable on a white page */}
      <div className="bg-black h-20 md:h-24" aria-hidden="true" />

      <div className="w-full px-8 sm:px-16 md:px-12 lg:px-20 xl:px-[183px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[120px]">
        {/* Title */}
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#7f7f7f] mb-[10px]">
          {title}
        </h1>
        <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] leading-relaxed mb-[25px] sm:mb-[35px] md:mb-[45px]">
          Voltant Energy LLC SOC
        </p>

        {/* Table of contents */}
        <nav
          aria-label={`${title} contents`}
          className="mb-[40px] sm:mb-[50px] md:mb-[65px] lg:mb-[80px]"
        >
          <ol className="space-y-1">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] leading-relaxed underline underline-offset-4 decoration-[#bdbdbd] hover:text-[#2e7a38] hover:decoration-[#2e7a38] transition-colors"
                >
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div>{children}</div>
      </div>
    </div>
  );
}