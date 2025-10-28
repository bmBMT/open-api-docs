import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

interface IScrollbar extends PropsWithChildren {
  ref?: React.Ref<Scrollbars>;
  className?: string;
}

const Scrollbar = ({ children, ref, className }: IScrollbar) => {
  return (
    <Scrollbars
      ref={ref}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      hideTracksWhenNotNeeded
      className={cn("!h-[100vh] [&>div:last-child>div]:!bg-secondary-foreground/20", className)}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
