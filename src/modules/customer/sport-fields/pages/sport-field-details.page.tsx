import { getSportFieldByUuid } from "@/services/customer/sport-fields/sport-fields.service";
import { Carousel } from "@/shared/components/carousel/carousel.component";
import { PageProps } from "@/shared/interfaces/types";
import { getTranslations } from "next-intl/server";
import { BiCheckCircle } from "react-icons/bi";
import BackButton from "../components/sport-field-details/back-button";
import { FavoriteButton } from "../components/sport-field-details/favorite-button";
import LocationSection from "../components/sport-field-details/location-section";

const SportFieldDetailsPage = async ({ params }: PageProps) => {
  const t = await getTranslations("public.pages.sportFieldsDetail");
  const uuid = (await params).uuid;
  const product = await getSportFieldByUuid(uuid);

  const images = [
    ...(product?.featureImage ? [product.featureImage] : []),
    ...(product?.galery ?? []),
  ];

  if (!images.length) {
    images.push("/default-image.svg");
  }

  let direction = "";

  if (product?.establishment.street && product.establishment.streetNumber) {
    direction = `${product.establishment.department} - ${product.establishment.street} ${product.establishment.streetNumber}`;
  } else {
    direction = `${product?.establishment.country} ${product?.establishment.department}`;
  }

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
              <BackButton />
              <FavoriteButton />
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h1>

                    <LocationSection
                      latitude={product.establishment.latitude}
                      longitude={product.establishment.longitude}
                    />

                    <p className="text-sm text-gray-500">
                      {t("text.location")}: {direction}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src={product.user.userImg || "/default-image.svg"}
                          alt={product.user.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("text.owner")}:{product.user.name}{" "}
                        {product.user.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.successfulreservations}{" "}
                        {t("text.successful_reservations")}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {t("text.includes")}:
                    </h3>
                    <div className="space-y-3">
                      {product.establishmentExtraServices.map((service) => (
                        <div
                          key={service.establishmentExtraServicesId}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <BiCheckCircle className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        S/ {product.pricePerHour}{" "}
                        <span className="text-lg font-normal text-gray-600">
                          {t("text.hour")}
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-lg text-lg transition-colors duration-200 shadow-sm">
                      {t("buttons.reservation")}
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
