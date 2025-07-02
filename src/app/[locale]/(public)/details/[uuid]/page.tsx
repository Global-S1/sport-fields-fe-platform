import SportFieldDetailsPage from "@/modules/customer/sport-fields/pages/sport-field-details.page";
import { PageProps } from "@/shared/interfaces/types";

export default async function DetailPage(props: PageProps) {
  return <SportFieldDetailsPage {...props} />;
}
