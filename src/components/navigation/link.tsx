import {
  Resource,
  type Signal,
  component$,
  useResource$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { type Link as NavLink } from "~/types/types";
import { cn } from "~/utils/methods";

interface Props {
  link: NavLink;
  onlyIcon: Signal<boolean>;
}

export default component$<Props>(({ link, onlyIcon }) => {
  const { url } = useLocation();

  const iconResource = useResource$(async () => {
    const icon = await link.icon({
      "font-size": 20,
    }); // Ejecuta el QRL
    return icon;
  });

  return (
    <Link
      href={link.href}
      class={cn(
        "flex w-full items-center gap-2 rounded-md p-3 transition-all duration-300 ease-in-out",
        link.href === url.pathname
          ? "bg-white/10"
          : "text-white/50 hover:bg-white/10 hover:text-white",
        !onlyIcon.value ? "justify-center" : "justify-start",
      )}
    >
      <Resource value={iconResource} onResolved={(Icon) => Icon} />
      {/* <link.icon font-size={20} /> */}
      <span class={cn("text-xs", !onlyIcon.value ? "hidden" : "block")}>
        {link.text}
      </span>
    </Link>
  );
});
