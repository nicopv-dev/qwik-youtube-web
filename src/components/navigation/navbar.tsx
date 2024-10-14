import { $, component$, useSignal } from "@builder.io/qwik";
import CategoryButton from "../common/category-button";
import { useTheme } from "~/contexts/theme-context";
import {
  TbBulb,
  TbNotification,
  TbBookmark,
  TbUpload,
  TbSearch,
} from "@qwikest/icons/tablericons";
import { Link } from "@builder.io/qwik-city";

const categories = ["All", "React", "Vue", "Angular"];

export default component$(() => {
  const theme = useTheme();
  const selectedCategory = useSignal<string>("All");

  const toogleCategory = $((category: string) => {
    selectedCategory.value = category;
  });

  return (
    <header class="container flex h-20 w-full items-center justify-between py-4">
      <div class="flex items-center gap-2">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            text={category}
            isSelected={selectedCategory.value === category}
            toogleCategory={toogleCategory}
          />
        ))}
      </div>

      <div class="flex h-full w-full items-center justify-end gap-5">
        <div class="bg-background flex w-full max-w-md items-center gap-2 rounded-md px-4">
          <input
            placeholder="Search video"
            class="h-10 w-full rounded-md bg-transparent text-sm placeholder:text-gray-400"
          />
          <button>
            <TbSearch font-size={14} />
          </button>
        </div>
        <Link
          href="#"
          class="text-primary border-primary flex items-center gap-2 rounded-md border px-4 py-2"
        >
          <TbUpload font-size={20} />
          <span class="text-xs">Upload Video</span>
        </Link>
        <a href="#" type="button" class="text-gray-300">
          <TbBookmark font-size={20} />
        </a>
        <button type="button" class="text-gray-300">
          <TbNotification font-size={20} />
        </button>
        <button
          class="bg-primary rounded-md p-2"
          onClick$={() => {
            theme.value = theme.value === "light" ? "dark" : "light";
          }}
        >
          <TbBulb font-size={20} />
        </button>
      </div>
    </header>
  );
});
