export const extractErrorMessage = (errorMessage: string): string => {
	try {
		// Find the start of the JSON part in the error message
		const jsonStartIndex = errorMessage.indexOf("{");
		if (jsonStartIndex === -1) {
			// Fallback if no JSON is found
			return "Could not submit form. Try again latter.";
		}

		// Extract and parse the JSON string
		const jsonString = errorMessage.substring(jsonStartIndex);
		const parsedError = JSON.parse(jsonString);

		// Return the "message" field (either a string or the first element of an array)
		if (typeof parsedError.message === "string") {
			return parsedError.message;
		} else if (Array.isArray(parsedError.message)) {
			return parsedError.message[0] || "An unknown error occurred";
		}

		// Fallback for unexpected formats
		return "An unknown error occurred";
	} catch {
		// Fallback for parsing errors
		return "An unknown error occurred";
	}
};
