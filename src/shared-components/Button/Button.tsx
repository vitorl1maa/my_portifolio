import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useHover } from "@/hook/use-hover";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const Button = () => {
  const { hover, setHover } = useHover();

  return (
    <ShimmerButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-black text-white flex items-center justify-center gap-3 h-12 md:w-56 md:h-16 md:text-2xl font-semibold rounded-lg mt-8"
    >
      <span className="flex items-center gap-3 mt-2">
        Fale comigo
        <PaperPlaneTilt
          className="text-xl md:text-3xl"
          weight="fill"
          style={{
            color: hover ? "#ea580c" : "inherit",
            transform: hover ? "translate(5px, -5px)" : "translate(0, 0)",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
        />
      </span>
    </ShimmerButton>
  );
};

export default Button;
