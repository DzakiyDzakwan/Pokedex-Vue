module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-large": ["24px", { fontWeight: "700" }],
        "heading-medium": ["20px", { fontWeight: "700" }],
        "heading-small": ["18px", { fontWeight: "700" }],
        "subheading-large": ["20px", { fontWeight: "600" }],
        "subheading-medium": ["16px", { fontWeight: "600" }],
        "subheading-small": ["14px", { fontWeight: "600" }],
        large: ["16px", { fontWeight: "400" }],
        medium: ["14px", { fontWeight: "400" }],
        small: ["12px", { fontWeight: "400" }],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".card": {
          padding: "0.5rem 1rem",
          display: "block",
          width: "160px",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px 5px rgb(0, 0, 0, 0.025)",
          backgroundColor: "#FFFF",
          "@screen md": {
            width: "310px",
            padding: "1rem 1.5rem",
          },
        },
        ".card-header": {
          textAlign: "left",
        },
        ".card-body": {
          backgroundColor: "#F0F0F0",
        },
        ".image-container": {
          width: "128px",
          height: "128px",
          display: "flex",
          "@screen md": {
            width: "262px",
            height: "262px",
          },
        },
        ".image-card": {
          width: "64px",
          height: "64px",
          "@screen md": {
            width: "128px",
            height: "128px",
          },
        },
        ".btn": {
          padding: "5px 1rem",
          textAlign: "center",
          width: "fit-content",
          borderRadius: "5px",
          "@screen md": {},
        },
        ".modal-container": {
          width: "100%",
          height: "100%",
          border: "1px solid",
          backgroundColor: "rgb(240,240,240,50%)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".modal": {},
      });
    },
  ],
};
