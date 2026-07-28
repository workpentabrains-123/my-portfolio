import bannerImg from "../assets/banner.jpg";

// Full-width banner shown at the very top of the page, above the Hero.
// A gradient overlay is layered on top so it fades smoothly into the dark theme below.
function Banner() {
  return (
    <section className="banner">
      <img src={bannerImg} alt="Suseendhar — Developer. Think. Code. Deliver." />
      <div className="banner-fade"></div>
    </section>
  );
}

export default Banner;
