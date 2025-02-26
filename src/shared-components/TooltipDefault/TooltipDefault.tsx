import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipDefaultProps {
  icon: string;
  width: number;
  height: number;
  tooltip: string;
}

const TooltipDefault: React.FC<TooltipDefaultProps> = ({
  icon,
  width,
  height,
  tooltip,
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Icon icon={icon} width={width} height={height} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDefault;
