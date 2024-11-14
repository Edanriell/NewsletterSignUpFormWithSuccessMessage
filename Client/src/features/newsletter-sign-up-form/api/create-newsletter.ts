import { postData } from "@shared/api";

type CreateNewsletterParameters = {
	emailAddress: string;
};

export const createNewsletter = async ({ emailAddress }: CreateNewsletterParameters) => {
	try {
		const response = await postData("/api/newsletter", {
			emailAddress
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to send newsletter data. Status: ${response.status}. Message: ${errorText || "Unknown error"}`
			);
		}

		const contentType = response.headers.get("Content-Type");

		if (!contentType || !contentType.includes("application/json")) {
			throw new Error("Expected JSON response but received a different format.");
		}

		return await response.json();
	} catch (error) {
		console.error("An error occurred while sending the newsletter data:", error);
		throw error;
	}
};
