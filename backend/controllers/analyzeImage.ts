import vision from '@google-cloud/vision';

export const analyzeImage = async (image: string) => {
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.safeSearchDetection(image);
  const detections = result.safeSearchAnnotation;
  console.log(detections);
  return detections;
};
