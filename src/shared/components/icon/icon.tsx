import { TiChartLine } from 'react-icons/ti';
import {
  MdLock,
  MdOutlineAccountBalanceWallet,
  MdOutlineCancel,
  MdOutlineCheckCircleOutline,
  MdOutlineCreditScore,
  MdOutlineDateRange,
  MdOutlineEmail,
  MdOutlineHelpOutline,
  MdOutlineMail,
  MdOutlinePendingActions,
  MdOutlineSearch,
  MdCameraAlt,
  MdStar,
  MdCalendarToday,
} from 'react-icons/md';
import { GoHistory, GoShieldLock } from 'react-icons/go';
import { PiPiggyBankBold, PiWarningCircleFill } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';
import {
  IoClose,
  IoInformationCircleSharp,
  IoPhonePortraitOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { IconComponentProps } from './icon.interface';
import { LuDownload } from 'react-icons/lu';
import {
  IoIosAlert,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosCloseCircle,
} from 'react-icons/io';
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaRegCopy,
  FaCircleCheck,
} from 'react-icons/fa6';
import { FaCheck, FaCheckCircle, FaHandHoldingMedical, FaRegClock, FaTimes, FaTools } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { CiShare1 } from 'react-icons/ci';
import { GiUsaFlag } from 'react-icons/gi';
import { BiHide, BiShow } from 'react-icons/bi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { AiFillStop, AiOutlineClear } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import { FcGoogle } from 'react-icons/fc';

export const getIcon = ({ iconName, ...rest }: IconComponentProps) => {
  return {
    tiChartLine: <TiChartLine {...rest} />,
    mdOutlineAccountBalanceWallet: <MdOutlineAccountBalanceWallet {...rest} />,
    goHistory: <GoHistory {...rest} />,
    piPiggyBankBold: <PiPiggyBankBold {...rest} />,
    ioSettingsOutline: <IoSettingsOutline {...rest} />,
    fiLogOut: <FiLogOut {...rest} />,
    mdOutlineEmail: <MdOutlineEmail {...rest} />,
    ioClose: <IoClose {...rest} />,
    LuDownload: <LuDownload {...rest} />,
    IoIosArrowDown: <IoIosArrowDown {...rest} />,
    IoIosArrowUp: <IoIosArrowUp {...rest} />,
    FaArrowTrendUp: <FaArrowTrendUp {...rest} />,
    FaArrowTrendDown: <FaArrowTrendDown {...rest} />,
    FaRegCopy: <FaRegCopy {...rest} />,
    ioPhonePortraitOutline: <IoPhonePortraitOutline {...rest} />,
    FaTimes: <FaTimes {...rest} />,
    IoIosCloseCircle: <IoIosCloseCircle {...rest} />,
    FaCheckCircle: <FaCheckCircle {...rest} />,
    MdOutlineMail: <MdOutlineMail {...rest} />,
    RxAvatar: <RxAvatar {...rest} />,
    CiShare1: <CiShare1 {...rest} />,
    GoShieldLock: <GoShieldLock {...rest} />,
    MdOutlineCreditScore: <MdOutlineCreditScore {...rest} />,
    FaRegClock: <FaRegClock {...rest} />,
    MdOutlineSearch: <MdOutlineSearch {...rest} />,
    MdOutlineDateRange: <MdOutlineDateRange {...rest} />,
    GiUsaFlag: <GiUsaFlag {...rest} />,
    MdOutlineCheckCircleOutline: <MdOutlineCheckCircleOutline {...rest} />,
    BiHide: <BiHide {...rest} />,
    BiShow: <BiShow {...rest} />,
    HiOutlineCurrencyDollar: <HiOutlineCurrencyDollar {...rest} />,
    MdOutlinePendingActions: <MdOutlinePendingActions />,
    MdOutlineCancel: <MdOutlineCancel />,
    MdOutlineHelpOutline: <MdOutlineHelpOutline />,
    IoInformationCircleSharp: <IoInformationCircleSharp {...rest} />,
    FaCircleCheck: <FaCircleCheck {...rest} />,
    IoIosAlert: <IoIosAlert {...rest} />,
    AiFillStop: <AiFillStop {...rest} />,
    PiWarningCircleFill: <PiWarningCircleFill {...rest} />,
    SlOptionsVertical: <SlOptionsVertical {...rest} />,
    MdLock: <MdLock {...rest} />,
    AiOutlineClear: <AiOutlineClear {...rest} />,
    MdCameraAlt: <MdCameraAlt {...rest} />,
    FcGoogle: <FcGoogle {...rest} />,
    FaHandHoldingMedical: <FaHandHoldingMedical {...rest} />,
    FaCheck: <FaCheck {...rest} />,
    FaTools: <FaTools {...rest} />,
    MdStar: <MdStar {...rest} />,
    MdCalendarToday: <MdCalendarToday {...rest} />,
  }[iconName];
};
