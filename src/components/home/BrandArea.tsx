 
import  { useEffect } from 'react'

export default function BrandArea() {
  const logos = [
    "costrings.webp",
    "foresight-logo-white.webp",
    "genera.webp",
    "icici.webp",
    "iics_logo_main.webp",
    "memorae.webp",
    "one-tap.webp",
    "sparklin.webp",
  ];
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Company I Worked For</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                  {logos.map((logo, index) => {
  if (logo === "sparklin.webp" || logo === "costrings.webp") {
    const name = logo.replace(".webp", "");
    return (
      <div
        key={index}
        style={{
          width: '200px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#f0f0f0',
          color: '#000',
        }}
      >
        {name}
      </div>
    );
  }

  return (
    <img
      key={index}
      src={`/assets/images/client_work/${logo}`}
      alt="Company"
      style={{
        width: '200px',
        height: '100px',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
})}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
