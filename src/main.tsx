import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import faviconHref from "@/assets/favicon.jpg?url";

// Ensure favicon.jpg is used
const ensureFavicon = () => {
	const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
	if (link) {
		link.type = "image/jpeg";
		link.href = faviconHref;
	} else {
		const newLink = document.createElement('link');
		newLink.rel = 'icon';
		newLink.type = 'image/jpeg';
		newLink.href = faviconHref;
		document.head.appendChild(newLink);
	}
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
