export const getVWSize = (size: number) => {
  switch (size) {
    case 1:
      return `${(16 / 1440) * 100}vw`;
    case 2:
      return `${(24 / 1440) * 100}vw`;
    case 3:
      return `${(32 / 1440) * 100}vw`;
    case 4:
      return `${(80 / 1440) * 100}vw`;

    default:
      return `${(16 / 1440) * 100}vw`;
  }
};
