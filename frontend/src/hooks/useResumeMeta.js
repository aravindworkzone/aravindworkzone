import { useState, useEffect } from "react";

const RESUME_FILE_ID = "PASTE_YOUR_GOOGLE_DRIVE_FILE_ID_HERE";

// Direct-download URL (not the Drive preview page)
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

/**
 * Fetches the resume's last-modified date from the Google Drive API.
 * Returns { updated, downloadUrl } — `updated` is "MMM YYYY" (e.g. "Jul 2026"),
 * or null until loaded / if the fetch fails (the UI should just omit the label).
 * Requires VITE_DRIVE_API_KEY in the environment; never hardcode the key here.
 */
export default function useResumeMeta() {
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    const key = import.meta.env.VITE_DRIVE_API_KEY;
    if (!key || RESUME_FILE_ID.startsWith("PASTE_")) return;

    let cancelled = false;
    fetch(
      `https://www.googleapis.com/drive/v3/files/${RESUME_FILE_ID}?fields=modifiedTime&key=${key}`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Drive API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled || !data.modifiedTime) return;
        const d = new Date(data.modifiedTime);
        setUpdated(d.toLocaleString("en-US", { month: "short", year: "numeric" }));
      })
      .catch((err) => {
        console.warn("Resume last-updated date unavailable:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { updated, downloadUrl: RESUME_DOWNLOAD_URL };
}
