import type { NextRequest } from 'next/server';

import { ColorObject, colorsToParams, paramsToColors } from '@/tools';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const colors: ColorObject = {
    primary: searchParams.get('primary') || "#323F68",
    accent: searchParams.get('accent') || "#891470",
    light: searchParams.get('light') || "#FBFBFB",
    dark: searchParams.get('dark') || "#2C2C2C",
    success: searchParams.get('success') || "#115918",
    warning: searchParams.get('warning') || "#B24B00",
    error: searchParams.get('error') || "#A40000",
  };

  if (colors[1] === null) {
    return new Response(JSON.stringify({ error: 'Params are missing :(' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  const colorObject = paramsToColors(colors.primary, colors.accent, colors.light, colors.dark, colors.success, colors.warning, colors.error);
  return new Response(JSON.stringify(colorObject), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: NextRequest) {
  const colorObject = await request.json();
  const queryString = colorsToParams(colorObject);

  return new Response(queryString, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
