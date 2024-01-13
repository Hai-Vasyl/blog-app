type ClassNameType = (boolean | string | null | undefined)[];

export const joinClass = (...classList: ClassNameType) =>
  classList.filter((className) => !!className).join(" ");
