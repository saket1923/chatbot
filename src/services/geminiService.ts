import { GEMINI_API_KEY } from '../config';

export const sendMessageToGemini = async (text: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text }]
            }
          ]
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text from the Gemini API response
    const responseText = data.candidates[0]?.content?.parts[0]?.text || 'No response from the AI';
    return responseText;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};