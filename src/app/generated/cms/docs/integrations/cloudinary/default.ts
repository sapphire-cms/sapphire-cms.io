import {Docs} from "../../docs.types";

export const cloudinary_default: Docs = {
  "title": "Cloudinary",
  "precedent": "docs/integrations/github:default",
  "next": "docs/deployment/deployment-overview:default",
  "content": "Media are a fundamental part of any CMS. Documents often reference images, videos or audio files.\nRather than storing those binaries together with documents, Sapphire CMS delegates media management to a dedicated **media layer**.\n\nThe media layer is responsible for:\n\n- storing media binaries;\n- retrieving media content;\n- generating media URLs for delivery;\n- providing optimized renderings such as thumbnails or resized images.\n\nSapphire stores media metadata as ordinary documents in its **persistence layer**. Actual media binaries are managed by the configured media provider.\n\nThe cloudinary module provides a media layer implementation backed by [Cloudinary](https://cloudinary.com)."
};
