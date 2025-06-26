
import { FaArrowCircleRight } from "react-icons/fa";
import { getIcon } from "./icon";
import { IconComponentProps } from "./icon.interface";

export const Icon = ({ iconName, ...rest }: IconComponentProps) => {

  const icon = getIcon({ iconName, ...rest });

  return icon ? icon : <FaArrowCircleRight {...rest} />
}
