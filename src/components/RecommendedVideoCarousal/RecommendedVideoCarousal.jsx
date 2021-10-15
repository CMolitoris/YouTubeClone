import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'



function RecommendedVideoCarousal(props) {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [itemVideo, setItemVideo] = useState({
        videoOne : props.relatedVideos[0].snippet.thumbnails.high.url,
        videoTwo : props.relatedVideos[1].snippet.thumbnails.high.url,
        videoThree : props.relatedVideos[2].snippet.thumbnails.high.url,
        videoFour : props.relatedVideos[3].snippet.thumbnails.high.url,
        videoFive : props.relatedVideos[4].snippet.thumbnails.high.url
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSelect = (selectedIndex, event) => {
      setIndex(selectedIndex);
    };
    
    return (
      <>
        <Button varient='primary' onClick={handleShow}>Recommended</Button>


        <Carousel show={show} activeIndex={index} onSelect={handleSelect} onHide={handleClose}>
            <Carousel.Header closeButton></Carousel.Header>


            <Carousel.Item>
            <img
                className="d-block w-100"
                src={itemVideo.VideoOne}
                alt="First slide"
            />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={itemVideo.VideoTwo}
                alt="Second slide"
            />

            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={itemVideo.VideoThree}
                alt="Third slide"
            />
    
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={itemVideo.VideoFour}
                alt="Fourth slide"
            />
    
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={itemVideo.VideoFive}
                alt="Fifth slide"
            />
    
            </Carousel.Item>

        </Carousel>
      </>
    );
  }


export default RecommendedVideoCarousal;