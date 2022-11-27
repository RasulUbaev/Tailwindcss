tailwind.config = {
  theme: {
    fontFamily: {
      'roboto': ['Roboto, sans-serif'],
    },
      extend: {
          container: {
              center: true,
              padding: {
                  DEFAULT: '1rem',
                  sm: '2rem',
                  lg: '3rem',
                  md: "4rem",
                  xl: '4rem',
                  '2xl': '5rem',
                  '3xl': '6rem',
              },
              screens: {
                  xsm: "370px",
                  sm: "504px",
                  md: "688px",
                  lg: "864px",
                  xl: "1088px",
                  "2xl": "1260px",
                  "3xl": "1392px"
              }
          }
      },
      // screens: {
      //     xsm: "370px",
      //     sm: "440px",
      //     md: "560px",
      //     lg: "768px",
      //     xl: "960px",
      //     "2xl": "1130px",
      //     "3xl": "1440px"
      // },
      screens: {
          "3xl": { max: "1440px" },
          "2xl": { max: "1130px" },
          xl: { max: "960px" },
          lg: { max: "768px" },
          md: { max: "560px" },
          sm: { max: "440px" },
          xsm: { max: "370px" }
      },
      keyframes: {
          fade: {
              '0%': { transform: 'rotateX(-3deg)', opacity: 0 },
              '100%': { transform: 'rotateX(3deg)', opacity: 1 },
          }
      },
      animation: {
          'fade': 'fade 1s linear infinite',
      }

  }
}