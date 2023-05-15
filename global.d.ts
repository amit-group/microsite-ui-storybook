import { MicrositeVideo } from "@amitgroup/microsite/video";
import { MicrositeVideoSoundOffControl, MicrositeVideoSoundOnControl, MicrositeVideoPlayControl, MicrositeVideoReplayControl } from "@amitgroup/microsite/video";
import { MicrositeToggle } from "@amitgroup/microsite/toggle";
import { MicrositePlaylist } from "@amitgroup/microsite/playlist";
import { MicrositeModalGallery } from "@amitgroup/microsite/modal";
import { MicrositeMinigame } from "@amitgroup/microsite/minigame";
import { MicrositeLoader } from "@amitgroup/microsite/loader";
import { MicrositeGallery } from "@amitgroup/microsite/gallery";
import { MicrositeCarousel } from "@amitgroup/microsite/carousel";
import { MicrositeElement } from "@amitgroup/microsite/core";
import { TrackingUtils } from "@amitgroup/microsite/tracking";

declare module "*.png";
declare module "*.mp4";
declare module "*.jpg";

declare global {
  interface Window {
    MicrositeCarousel: typeof MicrositeCarousel;
    MicrositeElement: typeof MicrositeElement;
    MicrositeGallery: typeof MicrositeGallery;
    MicrositeLoader: typeof MicrositeLoader;
    MicrositeMinigame: typeof MicrositeMinigame;
    MicrositeModalGallery: typeof MicrositeModalGallery;
    MicrositePlaylist: typeof MicrositePlaylist;
    MicrositeToggle: typeof MicrositeToggle;
    MicrositeVideo: typeof MicrositeVideo;
    MicrositeVideoSoundOffControl: typeof MicrositeVideoSoundOffControl;
    MicrositeVideoSoundOnControl: typeof MicrositeVideoSoundOnControl;
    MicrositeVideoPlayControl: typeof MicrositeVideoPlayControl;
    MicrositeVideoReplayControl: typeof MicrositeVideoReplayControl;
    TrackingUtils: typeof TrackingUtils;
  }
}
