import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  TbPlayerPlay,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "@qwikest/icons/tablericons";
import YoutubeCard from "~/components/common/youtube-card";
import { VIDEOS_DATA } from "~/utils/faker";

export default component$(() => {
  return (
    <div class="container w-full">
      <div class="flex gap-4">
        {/* videos */}
        <div class="flex w-full flex-col gap-4 rounded-md bg-background p-6">
          <h3 class="text-gray-300">BASED ON WHAT YOU LIKE</h3>

          <div class="grid grid-cols-4 gap-4">
            {VIDEOS_DATA.map((video, index) => (
              <YoutubeCard key={index} video={video} />
            ))}
          </div>
        </div>

        {/* especific content */}
        <div class="w-1/3">
          <div class="rounded-md bg-background pt-6">
            <div class="px-6">
              <h3 class="text-gray-300">WHERE YOUR LEFT</h3>
            </div>

            <div class="flex flex-col gap-4 px-6 py-4">
              <img
                src="https://marketplace.canva.com/EAFjv-5HJds/1/0/1600w/canva-miniatura-youtube-influencer-morado-y4LHM995xbc.jpg"
                alt="thumbnail"
                width={100}
                height={40}
                class="aspect-video w-full rounded-md object-cover"
              />
              <div class="flex flex-col items-center gap-2">
                <h4 class="font-semibold">Music title</h4>
                <p class="text-xs text-gray-300">1.2M views - 2 days ago</p>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-300">2:34</span>
                <div class="h-[2px] w-full rounded-md bg-primary" />
                <span class="text-xs text-gray-300">3:25</span>
              </div>
            </div>

            <div class="flex h-20 items-center justify-center gap-5 rounded-md bg-primary">
              <button>
                <TbPlayerTrackPrevFilled />
              </button>
              <button class="rounded-md bg-white p-2 text-primary">
                <TbPlayerPlay />
              </button>
              <button>
                <TbPlayerTrackNextFilled />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Youtube - Developing with Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
