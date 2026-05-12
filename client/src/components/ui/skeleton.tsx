// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | mithaq.support@gmail.com
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
