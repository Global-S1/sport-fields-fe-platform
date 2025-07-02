import { Carousel } from "@/shared/components/carousel/carousel.component";
import { PageProps } from "@/shared/interfaces/types";
import { FavoriteButton } from "../components/sport-field-details/favorite-button";

const SportFieldDetailsPage = async ({}: PageProps) => {
  // const {
  //   data,
  //   states: { isLoading, isError },
  //   content,
  // } = useProductDetail(params?.id || "");

  const images = [];

  // const images = [
  //   ...(data?.featureImage ? [data.featureImage] : []),
  //   ...(data?.galery ?? []),
  // ];

  if (!images.length) {
    images.push("/default-image.svg");
  }

  // const direction = "";

  // if (data?.establishment.street && data.establishment.streetNumber) {
  //   direction = `${data.establishment.department} - ${data.establishment.street} ${data.establishment.streetNumber}`;
  // } else {
  //   direction = `${data?.establishment.country} ${data?.establishment.department}`;
  // }

  return (
    <>
      <div className="">
        <main className="px-6 py-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative ">
              <Carousel
                data={{
                  type: "slide",
                  items: images,
                }}
                className="object-scale-down "
                imgClassName="object-scale-down"
              />
              {/* <BackButton className="absolute top-2 left-2 md:hidden" /> */}
              <FavoriteButton />
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {/* {data.name} */}
                      Proyecto
                    </h1>
                    {/* {data.distance && (
                      <p className="text-gray-600 mb-1">
                        {data.distance.replace("km", "")}{" "}
                        {content?.text.distance}
                      </p>
                    )} */}

                    <p className="text-sm text-gray-500">
                      {/* {content?.text.location}: {direction} */}
                      Dirección
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          // src={data.user.userImg || "/default-image.svg"}
                          // alt={data.user.name}
                          src={"/default-image.svg"}
                          alt={"Usuario"}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {/* {content?.text.owner}: {data.user.name}{" "}
                        {data.user.lastName} */}
                      </p>
                      <p className="text-sm text-gray-500">
                        {/* {data.successfulreservations} reserva exitosas */}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {/* {content?.text.includes}: */}
                      incluye
                    </h3>
                    <div className="space-y-3">
                      {/* {data.establishmentExtraServices.map((service) => (
                        <div
                          key={service.establishmentExtraServicesId}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <BiCheckCircle className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{service.name}</span>
                        </div>
                      ))} */}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {/* S/ {data.pricePerHour}{" "} */}
                        120
                        <span className="text-lg font-normal text-gray-600">
                          {/* {content?.text.hour} */}
                          Por hora
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-lg text-lg transition-colors duration-200 shadow-sm">
                      {/* {content?.buttons.reservation} */}
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SportFieldDetailsPage;
