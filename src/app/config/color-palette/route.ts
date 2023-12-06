// import type { NextRequest } from 'next/server';

// import { Hsluv } from 'hsluv';

// import { ColorObject, colorsToParams, paramsToColors } from '@/tools';

// export function GET(request: NextRequest) {
//   // Initialize HSLuv objects
//   let primary = new Hsluv()
//   let accent = new Hsluv()
//   let light = new Hsluv()
//   let dark = new Hsluv()
//   let success = new Hsluv()
//   let warning = new Hsluv()
//   let error = new Hsluv()

//   // Assign Hex values to HSLuv objects
//   primary.hex = request.nextUrl.searchParams.get('primary') || "#323F68";
//   accent.hex = request.nextUrl.searchParams.get('accent') || "#891470";
//   light.hex = request.nextUrl.searchParams.get('light') || "#FBFBFB";
//   dark.hex = request.nextUrl.searchParams.get('dark') || "#2C2C2C";
//   success.hex = request.nextUrl.searchParams.get('success') || "#115918";
//   warning.hex = request.nextUrl.searchParams.get('warning') || "#B24B00";
//   error.hex = request.nextUrl.searchParams.get('error') || "#A40000";

//   // Convert Hex values to HSLuv values
//   primary.hexToHsluv();
//   accent.hexToHsluv();
//   light.hexToHsluv();
//   dark.hexToHsluv();
//   success.hexToHsluv();
//   warning.hexToHsluv();
//   error.hexToHsluv();

//   // Fill ColorPalette
//   let primaryLighter = primary;
//   let primaryDarker = primary;
//   let accentLighter = accent;
//   let accentDarker = accent;
//   let successLighter = success;
//   let warningLighter = warning;
//   let errorLighter = error;
//   let gray900 = primary;

//   const searchParams = request.nextUrl.searchParams;
//   const colors: ColorObject | Object = {
//     primary: {
//       lighter: {
//         value: getLighterHsluv(primary),
//         text: getLighterHsluv(primary)
//       },
//       DEFAULT: {
//         value: primary.hsluvToHex(),
//         text: getLighterHsluv(primary)
//       },
//       darker: getDarkerHsluv(primary),
//     },
//     accent: searchParams.get('accent') || "#891470",
//     light: searchParams.get('light') || "#FBFBFB",
//     dark: searchParams.get('dark') || "#2C2C2C",
//     success: searchParams.get('success') || "#115918",
//     warning: searchParams.get('warning') || "#B24B00",
//     error: searchParams.get('error') || "#A40000",
//   };

//   if (!request.nextUrl.searchParams.get('primary')) {
//     return new Response(JSON.stringify({ error: 'Params are missing :(' }), {
//       status: 400,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
  
//   const colorObject = paramsToColors(colors.primary, colors.accent, colors.light, colors.dark, colors.success, colors.warning, colors.error);
//   return new Response(JSON.stringify(colorObject), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }

// export async function POST(request: NextRequest) {
//   const colorObject = await request.json();
//   const queryString = colorsToParams(colorObject);

//   return new Response(queryString, {
//     status: 200,
//     headers: {
//       'Content-Type': 'text/plain',
//     },
//   });
// }
