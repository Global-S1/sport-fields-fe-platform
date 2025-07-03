export interface PageProps {
  searchParams: Promise<Record<string, string>>;
  params: Promise<Record<string, string>>;
}

export interface GenerateMetadataProps {
  params: Record<string, string>;
}
