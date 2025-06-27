import { Link } from "@/i18n/navigation";

interface Props {
  link?: string;
  noLogo?: boolean;
}

export const Logo = ({ link, noLogo = false }: Props) => {
  return (
    <>
      {!noLogo ? (
        <Link href={link ?? "/"}>
          <LogoText />
        </Link>
      ) : (
        <LogoText />
      )}
    </>
  );
};

const LogoText = () => {
  return (
    <span className="text-xl md:text-2xl text-transparent font-bold text-clip bg-gradient-to-r from-blueSport-500 to-greenLemon-600 w-fit bg-clip-text">
      Sport Fields
    </span>
  );
};
