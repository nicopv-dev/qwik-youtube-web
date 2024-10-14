import { component$, $, useSignal } from "@builder.io/qwik";
import {
  TbSmartHome,
  TbExposurePlus1,
  TbShoppingBag,
  TbVideo,
  TbSettings,
  TbMusicCog,
  TbUsersGroup,
  TbDeviceTv,
  TbMenuDeep,
} from "@qwikest/icons/tablericons";
import logo from "~/assets/images/logo.png";
import { type Link as NavLinkType } from "~/types/types";
import NavLink from "./link";
import { Link } from "@builder.io/qwik-city";
import { cn } from "~/utils/methods";

const links: NavLinkType[] = [
  {
    text: "Home",
    href: "/",
    icon: $(TbSmartHome),
  },
  {
    text: "Explore",
    href: "/explore/",
    icon: $(TbExposurePlus1),
  },
  {
    text: "Subscriptions",
    href: "#",
    icon: $(TbVideo),
  },
  {
    text: "Services",
    href: "#",
    icon: $(TbShoppingBag),
  },
];

const youtubeLinks: NavLinkType[] = [
  {
    text: "Creator Studio",
    href: "#",
    icon: $(TbSettings),
  },
  {
    text: "Youtube Music",
    href: "#",
    icon: $(TbMusicCog),
  },
  {
    text: "Youtube Kids",
    href: "#",
    icon: $(TbUsersGroup),
  },
  {
    text: "Youtube TV",
    href: "#",
    icon: $(TbDeviceTv),
  },
];

export default component$(() => {
  const isExpanded = useSignal<boolean>(false);

  return (
    <aside
      class={cn(
        "bg-background sticky left-0 top-0 h-screen py-4 text-white transition-all duration-200 ease-in-out",
        isExpanded.value ? "w-60 px-4" : "w-20 px-3",
      )}
    >
      <div class="relative flex flex-col gap-6">
        <Link
          href="/"
          class={cn(
            "flex",
            isExpanded.value ? "justify-start" : "justify-center",
          )}
        >
          <img
            src={logo}
            alt="logo"
            width="40"
            height="40"
            class="aspect-square object-cover"
          />
        </Link>

        {/* profile */}
        <div
          class={cn(
            "flex items-center gap-2",
            isExpanded.value ? "justify-start" : "justify-center",
          )}
        >
          <div class="border-primary w-max rounded-full border p-1">
            <img
              src="https://marketplace.canva.com/EAFjv-5HJds/1/0/1600w/canva-miniatura-youtube-influencer-morado-y4LHM995xbc.jpg"
              alt="profile"
              width="40"
              height="40"
              class="aspect-square rounded-full object-cover"
            />
          </div>
          <div class={cn("space-y-1", isExpanded.value ? "block" : "hidden")}>
            <h4 class="text-sm font-semibold">Nicolas Pereira</h4>
            <p class="text-xs text-gray-400">No validate yet</p>
          </div>
        </div>

        {/* links */}
        <div class="flex flex-col divide-y divide-white/20">
          <nav class="flex w-full flex-col items-center gap-2 py-4">
            {links.map((link, index) => (
              <NavLink key={index} link={link} onlyIcon={isExpanded} />
            ))}
          </nav>

          <nav class="flex w-full flex-col items-center gap-2 py-4">
            {youtubeLinks.map((link, index) => (
              <NavLink key={index} link={link} onlyIcon={isExpanded} />
            ))}
          </nav>
        </div>

        {/* button sidebar expanded */}
        <button
          class="border-primary/60 bg-background absolute -right-7 top-2 rounded-full border p-1 shadow"
          onClick$={() => (isExpanded.value = !isExpanded.value)}
        >
          <TbMenuDeep />
        </button>
      </div>
    </aside>
  );
});
