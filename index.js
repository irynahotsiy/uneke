window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
        },
      },
    ],
  });
});
