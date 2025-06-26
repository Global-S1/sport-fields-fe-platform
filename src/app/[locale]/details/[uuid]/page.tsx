interface Props {
  params: Promise<{ uuid: string }>;
}

export default async function SportFieldsDetails({ params }: Props) {
  const { uuid } = await params;
  return <div>Páginas de recuperación de contraseña {uuid}</div>;
}
