export interface IProfileDataContent {
  buttons: {
    closeSesion: string;
    changeAdministrator: string;
  };
  editModal: {
    title: string;
    buttons: {
      cancel: string;
      save: string;
    };
    inputName: {
      label: string;
      required: string;
    };
    inputLastName: {
      label: string;
      required: string;
    };
    inputCellphone: {
      label: string;
      required: string;
    };
  };
  editAvatar: {
    buttons: {
      save: string;
    };
    inputFile: {
      required: string;
    };
  };
}

export interface IProfileFavoritesContent {
  title: string;
}

export interface IProfileContent {
  title: string;
  profileData: IProfileDataContent;
  favorites: IProfileFavoritesContent;
}
