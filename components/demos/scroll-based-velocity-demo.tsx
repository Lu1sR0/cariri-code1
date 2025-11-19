import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Cariri Code"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-[#2420ee] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
