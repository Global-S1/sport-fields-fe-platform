export interface ISportFieldDetailsResponse {
  host: {
    booking: string;
    to: string;
    distance: string;
    address: string;
  };
  field: {
    services: {
      title: string;
      service: string;
    }[];
    comments: string;
    price: string;
    images: string[];
    title: string;
  };
}
