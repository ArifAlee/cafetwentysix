import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function trackEvent(event_name, button_id, subdomain) {
  await fetch("https:www.scanlocal.co.uk/api/track", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      event_name,
      button_id,
      subdomain,
    }),
  });
}
