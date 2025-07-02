import clsx from "clsx";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface Props {
  profileFavoriteId?: number | null;
}

export const FavoriteButton = ({}: Props) => {
  // const params = useParams();

  // const { toggleFavoriteProduct, isFavorite, isPending } = useFavorite(
  //   params?.id || "",
  //   profileFavoriteId ?? null
  // );

  return (
    <>
      <button
        // onClick={() => toggleFavoriteProduct()}
        className={clsx(
          "absolute top-2 z-40 right-2 size-10 rounded-full   flex items-center justify-center"
          // isFavorite && !isPending ? "bg-red-500" : "bg-white"
        )}
      >
        {/* {isPending ? ( */}
        {/* <LoaderIcon className={clsx(`${isFavorite ? "text-white" : ""}`)} /> */}
        {/* ) : ( */}
        <MdOutlineFavoriteBorder
          size={26}
          // className={clsx(`${isFavorite ? "text-white" : ""}`)}
        />
        {/* )} */}
      </button>
    </>
  );
};
