export const getSlugFromImageUrl = (imageurl: string): string => {
  return (
    imageurl
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/\.[^/.]+$/, "") ?? ""
  );
};
