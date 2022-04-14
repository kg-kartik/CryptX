import React from "react";

const DOC = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FdOifXvFq3U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p
          style={{
            color: "transparent",
          }}
        >
          You think this is bad? THIS?!
        </p>
      </div>
    </section>
  );
};

export default DOC;
