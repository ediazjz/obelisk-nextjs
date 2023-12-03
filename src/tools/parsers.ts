export type ColorObject = {
  [key: string]: string;
};

export function colorsToParams(obj: Record<string, string>): string {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export function paramsToColors(primary: string, accent: string, light: string, dark:string, success: string, warning: string, error: string): Record<string, string> {
  return {
    primary,
    accent,
    light,
    dark,
    success,
    warning,
    error,
  };
}

