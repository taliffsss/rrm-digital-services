export const toSnakeCase = (obj: unknown): unknown => {
  if (
    obj === null ||
    obj === undefined ||
    typeof obj !== 'object' ||
    obj instanceof Date
  ) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(toSnakeCase);
  }

  if (typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    Object.keys(obj).forEach((key: string) => {
      const snakeKey = key.replace(
        /[A-Z]/g,
        letter => `_${letter.toLowerCase()}`
      );
      result[snakeKey] = toSnakeCase((obj as Record<string, unknown>)[key]);
    });
    return result;
  }

  return obj;
};

export const toCamelCase = (obj: unknown): unknown => {
  if (
    obj === null ||
    obj === undefined ||
    typeof obj !== 'object' ||
    obj instanceof Date
  ) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(toCamelCase);
  }

  if (typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    Object.keys(obj).forEach((key: string) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      result[camelKey] = toCamelCase((obj as Record<string, unknown>)[key]);
    });
    return result;
  }

  return obj;
};
