export default function BrandStrip({ data }) {
  return (
    <section className="brands-strip">
      <p className="strip-label">{data.label}</p>
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {[...data.logos, ...data.logos].map((brand, index) => (
            <span key={`${brand}-${index}`} className="marquee-item">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
