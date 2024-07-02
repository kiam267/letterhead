'use client';
import React, { useEffect, useRef } from 'react';

export interface InputData {
  color: string;
  size?: number;
  fontFamily?: string;
}

interface Props {
  isDownload: boolean;
  inputData: InputData;
}

const CanvasImage = ({ isDownload, inputData }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null); // to keep the reference of the image

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set a high resolution for the canvas
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size (display size)
    canvas.style.width = '500px';
    canvas.style.height = '500px';

    // Set the actual drawing buffer size
    const scale = window.devicePixelRatio; // Use the device pixel ratio for scaling
    canvas.width = 500 * scale;
    canvas.height = 500 * scale;

    // Scale the context to ensure high resolution
    context.scale(scale, scale);

    const image = new Image();
    image.src = '/letterhead.jpg';

    image.onload = () => {
      imageRef.current = image; // save the image reference
      context.drawImage(
        image,
        0,
        0,
        canvas.width / scale,
        canvas.height / scale
      );

      // Set font properties and add initial text
      context.font = '30px Arial';
      context.fillStyle = inputData.color;
      context.fillText('Your Text Here', 50, 50);
    };
  }, [inputData.color]);

  const redrawText = () => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Clear only the text area by redrawing the image
    context.drawImage(
      image,
      0,
      0,
      canvas.width / window.devicePixelRatio,
      canvas.height / window.devicePixelRatio
    );

    // Redraw the text with the new color
    context.font = '30px Arial';
    context.fillStyle = inputData.color;
    context.fillText('Your Text Here', 50, 50);
  };

  useEffect(() => {
    if (inputData.color) {
      redrawText();
    }
  }, [inputData.color]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 1.0); // Set quality to 1.0 for best quality
    link.download = 'canvas-image.jpg';
    link.click();
  };

  useEffect(() => {
    if (isDownload) {
      handleDownload();
    }
  }, [isDownload]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
      ></canvas>
    </div>
  );
};

export default CanvasImage;
