export const useGetContentProfile = () => {
  const { data: profileContent, isLoading } = useAtomValue(profileContentAtom);

  return {
    content: profileContent,
    isLoading,
  };
};
