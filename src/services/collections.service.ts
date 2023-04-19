import { BASE_API_URL } from "@/constants/url.constants";
import { CollectionEntity } from "@/entities/collection.entity";

export const fetchCollections = async (
  slug: string
): Promise<CollectionEntity> => {
  const response = await fetch(`${BASE_API_URL}/collections/${slug}`, {
    next: { revalidate: 60 },
  });
  const responseBody = await response.json();

  return responseBody.data;
};
