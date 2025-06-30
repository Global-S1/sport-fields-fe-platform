export const clearObject = (object?: Record<string, unknown>) => {
  const clearObject: Record<string, unknown> = {};

  for (const key in object) {
    const value = object[key];

    if (value !== null && value !== undefined && value !== "") {
      clearObject[key] = value;
    }
  }

  return clearObject;
};
