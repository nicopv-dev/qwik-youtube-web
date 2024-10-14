import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Video } from "~/types/types";

interface Props {
  video: Video;
}

export default component$<Props>(({ video }) => {
  return (
    <div class="flex flex-col gap-2">
      <Link href={`/watch/${video.id}`}>
        <img
          src="https://marketplace.canva.com/EAFjv-5HJds/1/0/1600w/canva-miniatura-youtube-influencer-morado-y4LHM995xbc.jpg"
          alt="thumbnail"
          width={300}
          height={200}
          class="aspect-video rounded-md object-cover"
        />
      </Link>
      <div class="flex gap-2">
        <div>
          <img
            src="https://marketplace.canva.com/EAFjv-5HJds/1/0/1600w/canva-miniatura-youtube-influencer-morado-y4LHM995xbc.jpg"
            alt="thumbnail"
            width={20}
            height={20}
            class="aspect-square w-10 rounded-full object-cover"
          />
        </div>
        <Link href={`/watch/${video.id}`} class="w-full">
          <h4 class="line-clamp-1">{video.title}</h4>
          <p class="text-xs text-gray-400">1.2M views - 2 days ago</p>
        </Link>
      </div>
    </div>
  );
});
