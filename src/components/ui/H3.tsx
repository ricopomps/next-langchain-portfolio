import { cn } from "@/lib/utils";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("text-1xl font-bold tracking-tight", props.className)}
    ></h3>
  );
}
