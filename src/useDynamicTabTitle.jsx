import { useEffect } from "react";
import axios from "./utils/axiosInstance";

function useDynamicTabTitle(pageTitle) {
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("/settings");
        const siteTitle = res.data.general?.siteName;
        document.title = pageTitle ? `${pageTitle} ` : siteTitle;

        const favicon =
          document.querySelector("link[rel='icon']") ||
          document.createElement("link");
        favicon.rel = "icon";
        favicon.href = res.data.general?.favicon || "/default-favicon.ico";
        document.head.appendChild(favicon);
      } catch (err) {
        console.error("Error fetching site settings for tab title:", err);
      }
    };
    fetchSettings();
  }, [pageTitle]);
}

export default useDynamicTabTitle;
