import { adsenseEnabled } from "@/content/ads";

type AdSlotProps = {
  size?: "inline" | "rectangle";
};

export function AdSlot({ size = "inline" }: AdSlotProps) {
  return (
    <aside
      className={`ad-slot ad-slot--${size} ${adsenseEnabled ? "is-live" : "is-idle"}`}
      data-ad-slot={size}
      aria-hidden={!adsenseEnabled}
    />
  );
}
