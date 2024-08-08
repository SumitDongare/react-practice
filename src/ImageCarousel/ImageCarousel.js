import React, { useEffect, useState } from 'react'

export default function ImageCarousel() {
    const images = [
      
        'https://media.istockphoto.com/id/1134112833/photo/banff-national-park-in-alberta-canada.jpg?s=612x612&w=0&k=20&c=VJ9YZLPdjZVCNukBCzu1FITG990mgk_W5b1IXjQwKiM=',
        'https://media.istockphoto.com/id/849220498/photo/blue-tiger-butterfly-on-a-pink-zinnia-flower-with-green-background.jpg?s=612x612&w=0&k=20&c=McO2dHI1oL0KITPuqXmZbRsk4ePnnXg1yP1283LwRDM=',
        'https://media.istockphoto.com/id/539829042/photo/proud-gardener.jpg?s=612x612&w=0&k=20&c=WrhKK9tgxLds1ikZYabVsHSGxay65NpMO8ICz-5uwRo=',
        'https://media.istockphoto.com/id/1456341806/photo/vibrant-butea-monosperma-flame-of-the-forest-flower-in-branches-commonly-known-as-palash-in.jpg?s=612x612&w=0&k=20&c=4SWUfNIj63z31Yonmx3MnvttkWkkj5mod7RMIiKJhZI=',
        'https://media.istockphoto.com/id/1294998177/photo/mustard-flower.jpg?s=612x612&w=0&k=20&c=vng01u6GUzsbL2u2zPz7BzkAWCUJkkfWfZEYaL6tQtk=',
        'https://media.istockphoto.com/id/959387358/photo/vesak-day-buddhist-lent-day-buddhas-birthday-worshiping-concept-with-womans-hands-holding.jpg?s=612x612&w=0&k=20&c=0S_g-X12lmNF4y-OiXb0YrIlsUwsSnqujRPpw_5nNxg='
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const onNext = ()=>{
        const nextIndex = currentImageIndex +1;
        // setCurrentImageIndex(nextIndex === 6 ? 0 : nextIndex )
        setCurrentImageIndex(nextIndex === images.length ? 0 : nextIndex )
        
    }

    const onPrev = ()=>{
     const nextIndex = currentImageIndex -1;

        // setCurrentImageIndex(nextIndex === -1 ? 5 : nextIndex)
        setCurrentImageIndex(nextIndex === -1 ? images.length-1 : nextIndex)
    }

    useEffect(()=>{
      const timer =  setTimeout(()=>{
             onNext()
        }, 5000);

        return ()=>{
            clearTimeout(timer)
        }

    },[currentImageIndex]);

  return (
    <div>
        <h1>Image Carousel</h1>
        {/* {
            images.map((url)=>{
                return <img src={url} style={{width:"500px"}}></img>
            })
        } */}

        <button onClick={onPrev}>Prev</button>
        <img src={images[currentImageIndex]} style={{width:'700px', height:'400px'}} alt='wallpaper'></img>
        <button onClick={onNext}>Next</button>
      
    </div>
  )
}
