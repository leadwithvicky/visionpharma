import Image from 'next/image';
import React from 'react';

//NOT USED YET
export default function HeroSectionBackground() {
  return (
    <div>
      <figure>
        <object
          type="image/svg+xml"
          data="https://cdn.svgator.com/images/2022/06/background-svg-image-pattern.svg"
          width="100%"
        >
          <Image
            src="https://cdn.svgator.com/images/2022/06/background-svg-image-pattern.svg"
            alt="Animated background with patterns changing shapes and moving around"
            className="lightense-target"
          />
        </object>
        {/* <figcaption>
          Animated background with patterns changing shapes and moving around -
          Made by SVGator
        </figcaption> */}
      </figure>
    </div>
  );
}
