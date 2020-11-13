import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';


const Wrapper = styled.div`    
    .carousel .carousel-inner{
        height:885px
    }
    .carousel-inner .carousel-item img{
        min-height:200px;
        object-fit:cover
        align-items: center;
    }
    .carousel-inner .carousel-item .carousel-caption{
        padding-bottom: 107px;
    }
    .carousel-inner .carousel-item .carousel-indicators{
        padding-bottom: 107px;
    }
    
    @media(max-width:768px){
    .carousel .carousel-inner{
        height:auto
        }
    }
`;
const Main = (props) => {
    return (
        <Wrapper >
        <Carousel>
            <Carousel.Item interval={1000000}>
            
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?text=First slide&bg=373940"
                    alt="First slide"
                />
     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
			</Carousel.Item>
		</Carousel>
        </Wrapper>
    )
}

export default Main;
