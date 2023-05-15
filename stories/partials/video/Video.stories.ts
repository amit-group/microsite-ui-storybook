import { MicrositeVideo } from "@amitgroup/microsite/video";
import { DefaultVideoProps, createVideo } from "./Video";
import VideoTemplate from './Video.template.mdx';

export default {
  title: "Partials/Video",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: VideoTemplate
    }
  }
}

const Template = (args) => {
  return createVideo(args);
}

export const Video = Template.bind({});
Video.args = DefaultVideoProps;
Video.play = ({ canvasElement, args }) => {
  const element = canvasElement.querySelector(`video`);
  new MicrositeVideo(element, {
    customControl: args.customControl,
    tracking: {
      category: "Engagement",
      label: "Video Interaction",
      events: {
        videoSoundOn: {
          category: "Engagement",
          label: "General",
        },
        videoSoundOff: {
          category: "Engagement",
          label: "General",
          target: ""  
        }
      }
    }
  });
}
Video.parameters = {
  docs: {
    source: {
      code: `
<div class="am-video-container" style="width: 600px">
  <video class="am-video" id="video-example" data-name="Example Video" src="/videos/video-example.mp4" poster="https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg" controls autoplay></video>
</div>
<script>
  const element = document.getElementById("video-example");
  new MicrositeVideo(element, {
    customControl: true,
    tracking: {
      category: "Engagement",
      label: "Main Video",
    }
  });
</script>
`
    }
  }
}