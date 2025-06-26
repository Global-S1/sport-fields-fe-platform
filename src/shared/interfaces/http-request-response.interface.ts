export interface IHttpBase {
  success: boolean;
  kindMessage: string;
  pagination?: IPagination;
  httpCode?: number;
  timeLapse?: ITimeLapse;
}

export interface IHttpResponse<T> extends IHttpBase {
  items?: T[];
  item?: T;
}

export interface IHttpDataItem<T> extends IHttpBase {
  data: {
    item: T;
  };
}

export interface IHttpDataItems<T> extends IHttpBase {
  data: {
    items: T[];
  };
}

export interface IHttpData<T> extends IHttpBase {
  data: T;
}

export interface IPagination {
  page: number;
  size: number;
  total?: number;
  totalItems: number;
  totalPages: number;
}

export interface ITimeLapse {
  started: string;
  ended: string;
  duration: number;
}
