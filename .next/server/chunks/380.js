"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 7380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ testimonial_2)
});

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/testimonialSlider-2.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function TestimonialSlider2() {
  const settings = {
    dots: true,
    dotsClass: "swiper-container testimonial-thumbs d-flex",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "swiper-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-pic",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `images/testimonials/pic${i + 1}.jpg`,
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "shape-bx"
          })]
        })
      });
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-12",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "testimonials-wraper-2",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "swiper-container testimonial-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "swiper-wrapper",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "swiper-slide",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "testimonial-4 quote-right",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "testimonial-text",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                        className: "testimonial-name",
                        children: "Cak Dikin"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: "testimonial-position text-primary m-b20",
                        children: ["CEO & Founder", " "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Duis feugiat est tincidunt ligula maximus convallis. Aenean ultricies, mi non vestibulum auctor, erat tortor porttitor ipsum, nec dictum tortor sem eget nunc. Etiam sed facilisis erat. Vestibulum sed posuere augue, ut molestie erat. Nam ipsum tellus, tempus vel ante ut, aliquet finibus dui. Proin lacinia, erat ut feugiat fringilla, tortor eros ultricies sem, sed finibus massa ex sit amet ligula."
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "swiper-slide",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "testimonial-4 quote-right",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "testimonial-text",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                        className: "testimonial-name",
                        children: "Cak Dikin"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: "testimonial-position text-primary m-b20",
                        children: ["CEO & Founder", " "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Duis feugiat est tincidunt ligula maximus convallis. Aenean ultricies, mi non vestibulum auctor, erat tortor porttitor ipsum, nec dictum tortor sem eget nunc. Etiam sed facilisis erat. Vestibulum sed posuere augue, ut molestie erat. Nam ipsum tellus, tempus vel ante ut, aliquet finibus dui. Proin lacinia, erat ut feugiat fringilla, tortor eros ultricies sem, sed finibus massa ex sit amet ligula."
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "swiper-slide",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "testimonial-4 quote-right",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "testimonial-text",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                        className: "testimonial-name",
                        children: "Cak Dikin"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: "testimonial-position text-primary m-b20",
                        children: ["CEO & Founder", " "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Duis feugiat est tincidunt ligula maximus convallis. Aenean ultricies, mi non vestibulum auctor, erat tortor porttitor ipsum, nec dictum tortor sem eget nunc. Etiam sed facilisis erat. Vestibulum sed posuere augue, ut molestie erat. Nam ipsum tellus, tempus vel ante ut, aliquet finibus dui. Proin lacinia, erat ut feugiat fringilla, tortor eros ultricies sem, sed finibus massa ex sit amet ligula."
                      })]
                    })
                  })
                })]
              }))
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "swiper-pagination"
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ const testimonialSlider_2 = (TestimonialSlider2);
;// CONCATENATED MODULE: ./element/testimonial-2.js





function Testimonial2() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg17.png)",
        "backgroundSize": "contain",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "sub-title text-primary bgl-primary m-b15",
            children: "TESTIMONIAL"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "See What Our Clients Say\u2019s"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx(testimonialSlider_2, {})
          })
        })]
      })
    })
  });
}

/* harmony default export */ const testimonial_2 = (Testimonial2);

/***/ })

};
;