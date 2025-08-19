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

export function easeInOutQuart(x: number): number {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

export function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export function easeInOutQuint(x: number): number {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
