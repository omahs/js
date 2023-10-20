import { Platform } from "react-native";

export const textVariants = {
  defaults: {
    fontFamily: Platform.OS === "ios" ? "san Francisco" : "Roboto",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    color: "textPrimary",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
    color: "textPrimary",
  },
  headerBold: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    color: "textPrimary",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "textSecondary",
  },
  link: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "linkPrimary",
    letterSpacing: -0.02,
  },
  bodyLarge: {
    color: "textPrimary",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
  },
  bodyLargeBold: {
    color: "textPrimary",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    color: "textPrimary",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
  },
  bodySmallBold: {
    color: "textPrimary",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
  },
  bodySmallSecondary: {
    color: "textSecondary",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
  },
  error: {
    color: "error",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
};
