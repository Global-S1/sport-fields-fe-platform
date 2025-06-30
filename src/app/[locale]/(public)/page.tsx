import SportFields from "@/modules/customer/sport-fields/pages/sport-fields.page";
import { PageProps } from "@/shared/interfaces/types";

export default async function HomePage(props: PageProps) {
  return <SportFields {...props} />;
}
