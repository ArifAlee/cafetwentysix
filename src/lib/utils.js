import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function track(name, params){
  if (window.gtag) {
    window.gtag("event", name, params);
  }
};

