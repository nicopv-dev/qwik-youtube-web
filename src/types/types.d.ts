import { SVGProps, type JSXNode, QRL } from "@builder.io/qwik";

type IconType = (props: SVGProps<SVGSVGElement>) => JSXNode<unknown>;

export interface Link {
  text: string;
  href: string;
  icon: QRL<IconType>;
}

export interface Video {
  id: string;
  title: string;
  url: string;
}
