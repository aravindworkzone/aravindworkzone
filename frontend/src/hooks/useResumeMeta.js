import { useState, useEffect } from "react";

const RESUME_FILE_ID = "13eorKFJZ3_E1Leln6ACrFNICCiNnmxBu";

// Direct-download URL (not the Drive preview page)
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

/**
 * Fetches the resume's last-modified date from the Google Drive API.
 * Returns { updated, downloadUrl } — `updated` is "D MMM YYYY" (e.g. "12 Jul 2026"),
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
        setUpdated(d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
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
