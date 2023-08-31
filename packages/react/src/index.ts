import { useColors, useFonts } from "@villa-ui/tokens";

export function useFormAction() {
  const colors = useColors();
  const fonts = useFonts();

  return {
    name: "Bat React",
    skills: ["ReactJS", "TypeScript"],
    colors,
    fonts,
  };
}
