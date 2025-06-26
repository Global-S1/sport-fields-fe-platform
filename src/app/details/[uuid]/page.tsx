interface Props {
  params: { uuid: string };
}

export default function SportFieldsDetails({ params }: Props) {
  const { uuid } = params;
  return <div>Páginas de recuperación de contraseña {uuid}</div>;
}
