const { getFavorites } = ProfileService();

interface Props {
  content: IProfileFavoritesContent;
}

export const ProfileFavorites = ({ content }: Props) => {
  const user = useAtomValue(currentUserAtom);
  const { data } = useQuery({
    queryKey: ["profile-favorites"],
    queryFn: async () => {
      if (!user) return null;
      return (await getFavorites(user.userUuid)).data
        .items as IProfileFavorites[];
    },
    enabled: !!user,
  });

  return (
    <Box className="container mx-auto px-4">
      <Box className="flex items-center gap-2 my-4">
        <i className="block w-fit p-2 rounded-full bg-red-400 ">
          <IoMdHeartEmpty className="text-white" size={25} />
        </i>
        <Text className="font-bold">{content.title}</Text>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((item, index) => (
            <Link
              to={`/details/${item.productUuid}`}
              key={index}
              className="p-4 rounded-lg shadow-lg flex gap-4"
            >
              <img
                src={item.featureImage}
                alt={item.name}
                className="size-16 object-cover rounded-lg"
              />
              <Box className="flex flex-col justify-center">
                <Text className="font-bold text-blueSport-700">
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};
