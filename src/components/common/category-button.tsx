import { $, component$ } from "@builder.io/qwik";
import { cn } from "~/utils/methods";

interface Props {
  text: string;
  isSelected: boolean;
  toogleCategory: (category: string) => void;
}

export default component$<Props>(({ text, isSelected, toogleCategory }) => {
  return (
    <button
      type="button"
      class={cn(
        "rounded-md px-4 py-2 text-xs",
        isSelected ? "bg-primary text-white" : "bg-slate-600/20",
      )}
      onClick$={() => {
        console.log("hola");
        toogleCategory(text);
      }}
    >
      {text}
    </button>
  );
});
