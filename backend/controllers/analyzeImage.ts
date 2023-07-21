import vision from '@google-cloud/vision';
import fs from 'fs';

export const analyzeImage = async (image: string) => {
  try {
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.safeSearchDetection(image);
    const detections = result.safeSearchAnnotation;
    fs.unlink(image, (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log(detections);
    return detections;
  } catch (error) {
    console.error(error);
  }
};
