import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHuggingface, SiKaggle } from "react-icons/si";
import type { IconType } from "react-icons";

export const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  huggingface: SiHuggingface,
  kaggle: SiKaggle,
};
