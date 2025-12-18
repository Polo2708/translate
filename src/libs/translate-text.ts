export const translateText = async (
  text: string,
  source = "en",
  target = "es"
): Promise<string> => {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${source}|${target}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error translating text");
  }

  const data = await response.json();

  return data.responseData.translatedText;
};
