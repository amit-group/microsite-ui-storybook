import { createCarousel } from "./Carousel";
import { MicrositeCarousel } from "@amitgroup/microsite/carousel";

export default {
  title: "Partials/Carousel",
  tags: ["autodocs"]
};

const Template = (args) => {
  return createCarousel(args);
};

export const Carousel = Template.bind({});
Carousel.args = {};
Carousel.storyName = "Carousel";
Carousel.play = ({ canvasElement, args }) => {
  const carousel = canvasElement.querySelector(".am-carousel");
  new MicrositeCarousel(carousel, {
    tracking: {
      category: "Engagement",
      label: "Example Carousel",
      events: {
        carouselClickItem: {
          action: "{name} _Click",
        },
        carouselClickNext: {
          action: "_Next_Click",
        },
        carouselClickPrev: {
          action: "_Prev_Click",
        },
      },
    },
  });
};
Carousel.parameters = {
  docs: {
    source: {
      code: `
<div class="owl-carousel owl-theme am-carousel">
  <div class="item" data-name="1">
    <img src="https://picsum.photos/1920/1080?random=1" alt="Image 1">
  </div>  
  <div class="item" data-name="2">
    <img src="https://picsum.photos/1920/1080?random=2" alt="Image 2">
  </div>  
  <div class="item" data-name="3">
    <img src="https://picsum.photos/1920/1080?random=3" alt="Image 3">
  </div>  
  <div class="item" data-name="4">
    <img src="https://picsum.photos/1920/1080?random=4" alt="Image 4">
  </div>  
  <div class="item" data-name="5">
    <img src="https://picsum.photos/1920/1080?random=5" alt="Image 5">
  </div>  
  <div class="item" data-name="6">
    <img src="https://picsum.photos/1920/1080?random=6" alt="Image 6">
  </div>  
</div>
<script>
  new MicrositeCarousel(document.querySelector(".am-carousel"));
</script>
      `,
    },
  },
};
