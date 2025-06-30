import { IProfileDataContent } from "../../interfaces/profile-content.interface";

interface Props {
  content: IProfileDataContent;
}

export const ProfileButtons = ({ content }: Props) => {
  const {
    logout,
    states: { isPendingLogout },
  } = useLogout();

  const navigate = useNavigate();

  const isAdmin = useAtomValue(isAdminAtom);

  const changueAdministratorView = () => {
    if (isAdmin) {
      navigate("/admin");
    }
  };

  return (
    <>
      <Box className="md:hidden flex flex-col items-center gap-6 mt-6 pt-6 border-t border-gray-200">
        {isAdmin && (
          <Button
            color="secondary"
            className="w-fit"
            onClick={changueAdministratorView}
          >
            {content.buttons.changeAdministrator}
          </Button>
        )}

        <Button
          color="red"
          outline
          className="w-fit"
          onClick={logout}
          isLoading={isPendingLogout}
        >
          {content.buttons.closeSesion}
        </Button>
      </Box>

      <Box className="hidden md:flex space-x-4 mb-6">
        {isAdmin && (
          <Button color="secondary" onClick={changueAdministratorView}>
            {content.buttons.changeAdministrator}
          </Button>
        )}

        <Button
          color="red"
          outline
          onClick={logout}
          isLoading={isPendingLogout}
        >
          {content.buttons.closeSesion}
        </Button>
      </Box>
    </>
  );
};
