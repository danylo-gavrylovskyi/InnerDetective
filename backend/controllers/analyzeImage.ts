import vision from '@google-cloud/vision';

export const analyzeImage = async (image: string) => {
  try {
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.safeSearchDetection(image);
    const detections = result.safeSearchAnnotation;
    return detections;
  } catch (error) {
    console.error(error);
  }
};
