import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function OptimizedImage({ publicId }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dav9ybik7",
      api_key: customFields.api_key, 
      api_secret: customFields.api_secret
    },
  });

  const myImage = cld.image(`${publicId}`);

  myImage.quality('auto').format('auto').resize(scale().width(480));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}