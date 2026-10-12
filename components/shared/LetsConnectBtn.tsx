import { ArrowRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const LetsConnectBtn = () => {
    return (
        <Button className="group flex items-center gap-2 rounded-full  bg-[#0485F7]  px-7 text-[14px] font-semibold  transition-all duration-200 hover:shadow-[0_0_20px_rgba(181,140,255,0.25)]">
            <span className="opacity-90 group-hover:opacity-100">Let&apos;s Connect</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
    );
};

export default LetsConnectBtn;