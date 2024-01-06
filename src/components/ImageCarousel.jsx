import React from 'react';

const ImageCarousel = () => {
    const imageNames = [
        'contadina.jpg',
        'image-2-min.png',
        'image-3-min.png',
        'image-4-min.png',
        'image-5-min.png',
        'image-6-min.png',
        'image-7-min.png',
        'image-8-min.png',
    ];

    return (
        <div className='=image-carousel'>
            {imageNames.map((imageName, index) => (
                <img
                    key={index}
                    src={`/images/carousel/${imageName}`}
                    alt={`Image ${index + 2}`}
                    loading='lazy'
                    className='carousel-image'
                />
            ))}
        </div>
    );
};
export default ImageCarousel;

