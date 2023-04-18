import { cn } from "@/lib/utils";
import { SpinnerProps } from "./Spinner.types";

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn(
        "w-4 aspect-square rounded-full border-2 border-white border-t-transparent animate-spin",
        className
      )}
    >
      <div className="sr-only">Spinner</div>
    </div>
  );
}
