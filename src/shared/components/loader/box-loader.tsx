import clsx from "../../../libs/clsx";
import { Box } from "../box/box.component";

interface IProps {
    className?: string;
}

export const BoxLoader = ({ className }: IProps) => {
    return (
        <Box
            className={clsx(
                "animate-pulse bg-main-600 w-full h-12 rounded-lg",
                className
            )}
        >
        </Box>
    )
}