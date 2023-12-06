// import { group } from "console";
// import { Hsluv } from "hsluv";
// import { lightnessToLuminance } from ".";

// type TInitialPalette = {
//   name: string;
//   colors: string[];
// }[];

// const getSingleColor = (color: string) => {
//   let colorHelper = new Hsluv();
//   colorHelper.hex = color;
//   colorHelper.hexToHsluv();

//   return colorHelper;
// }

// function contrastRatio(l1: number, l2: number) {
//   return (l1 + 0.05) / (l2 + 0.05);
// }

// function buildNeutralColors(light: string, dark: string) {
//   let lightHsluv = getSingleColor(light);
//   let darkHsluv = getSingleColor(dark);
//   let contrast = 1;

//   while(contrast < 0.222) {
//     if(contrast !== 1) {
//       lightHsluv.hsluv_l = Math.min(lightHsluv.hsluv_l + 4, 96);
//       darkHsluv.hsluv_l = Math.max(darkHsluv.hsluv_l - 4, 12)
//     }

//     contrast = contrastRatio(
//       lightnessToLuminance(lightHsluv.hsluv_l),
//       lightnessToLuminance(darkHsluv.hsluv_l)
//     );
//   }

//   return [
//     {
//       name: "lighter",
//       light: {
//         value: lightHsluv.hsluvToHex(),
//         text: darkHsluv.hsluvToHex(),
//       },
//       dark: {
//         value: darkHsluv.hsluvToHex(),
//         text: lightHsluv.hsluvToHex(),
//       }
//     },
//     {
//       name: "darker",
//       light: {
//         value: darkHsluv.hsluvToHex(),
//         text: lightHsluv.hsluvToHex(),
//       },
//       dark: {
//         value: lightHsluv.hsluvToHex(),
//         text: darkHsluv.hsluvToHex(),
//       }
//     }
//   ]
// }

// function buildFeedbackColors(colors: string[], darkText: Hsluv) {
//   let feedbackColors = [];

//   for (let i = 0; i < colors.length; i++) {
//     let color = getSingleColor(colors[i]);
//     let ligther = color;
//     let contrast = 1;
    
//     ligther.hsluv_l = Math.min(color.hsluv_l + 32, 96);

//     while(contrast < 0.222) {
//       if(contrast !== 1) {
//         ligther.hsluv_l = Math.min(color.hsluv_l + 4, 96);
//       }

//       contrast = contrastRatio(
//         lightnessToLuminance(color.hsluv_l),
//         lightnessToLuminance(i === 1 ? darkText.hsluv_l :ligther.hsluv_l)
//       );
//     }

//     return {

//     }
//   }
// }

// function buildBrandColors(colors: string[]) {
//   for (let i = 0; i < colors.length; i++) {
//     let color = getSingleColor(colors[i]);
//     let ligther = color;
//     let darker = color;
  
//     ligther.hsluv_l = Math.min(color.hsluv_l + 32, 96);

//     let contrast = 1;

//     while(contrast < 0.222) {
//       if(contrast !== 1) {
//         ligther.hsluv_l = Math.min(color.hsluv_l + 4, 96);
//       }
  
//       contrast = contrastRatio(
//         lightnessToLuminance(color.hsluv_l),
//         lightnessToLuminance(ligther.hsluv_l)
//       );
//     }
//   }
// }

// export function buildColorPalette(primary, accent, light, dark, success, warning, error) {

//   const initialPalette: TInitialPalette = [
//     {
//       name: "brand",
//       colors: [
//         primary,
//         accent,
//       ]
//     },
//     {
//       name: "feedback",
//       colors: [
//         success,
//         warning,
//         error,
//       ]
//     },
//     {
//       name: "neutral",
//       colors: [
//         light,
//         dark,
//       ]
//     },
//   ]

//   let colorPalette = initialPalette.map((group) => {
//     let colors = group.colors.map((color) => {
//       let colorHelper = new Hsluv();
//       colorHelper.hex = color;
//       colorHelper.hexToHsluv();

//       if (group.name === "brand") {

//       }
//     })
//   })
// }

// // export function getLighterHsluv(color: Hsluv): string {
// //   let lighter = new Hsluv();
// //   lighter.hsluv_h = color.hsluv_h;
// //   lighter.hsluv_s = color.hsluv_s;
// //   lighter.hsluv_l = Math.min(color.hsluv_l + 50, 96);
// //   lighter.hsluvToHex()

// //   return lighter.hex;
// // }

// // export function getDarkerHsluv(color: Hsluv): string {
// //   let darker = new Hsluv();
// //   darker.hsluv_h = color.hsluv_h;
// //   darker.hsluv_s = color.hsluv_s;
// //   darker.hsluv_l = Math.max(color.hsluv_l - 15, 16);
// //   darker.hsluvToHex()

// //   return darker.hex;
// // }
