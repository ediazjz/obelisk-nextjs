export function lightnessToLuminance(l: number) {
  if (l <= 8) {
    return 1.0 * l / 903.2962962;
  } else {
    return 1.0 * Math.pow((l + 16) / 116, 3);
  }
}
