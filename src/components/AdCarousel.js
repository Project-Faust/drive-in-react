// src/components/AdCarousel.js
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AdCarousel.css';

import allPro from "../assets/advertisements/all-pro-banner.jpg";
import eppsHvac from '../assets/advertisements/epps-hvac.webp';
import groovyBeast from "../assets/advertisements/groovy-beast.jpg";
import mavericks from "../assets/advertisements/Mavericks Banner.jpg"
import twoChicks from "../assets/advertisements/Two Chicks Banner Image.jpeg"

const AdCarousel = ({
    // Default props with sensible defaults
    title = "Our Business Partners",
    partners = [
        {
            id: 1,
            name: "All Pro Enviro",
            logo: allPro
        },
        {
            id: 2,
            name: 'Epps HVAC Co',
            logo: eppsHvac
        },
        {
            id: 3,
            name: 'Groovy Beast',
            logo: groovyBeast
        },
        {
            id: 4,
            name: 'Mavericks',
            logo: mavericks
        },
        {
          id: 5,
          name: 'Two Chicks',
          logo: twoChicks
        }
        // {
        //     id: 3,
        //     name: 'Business 3',
        //     logo: business3Logo
        // },
    ],
    logosPerSlide = 4,
    interval = 5000,
    pauseOnHover = true,
    showControls = true,
    showIndicators = true,
}) => {
    // If partners is a flat array, chunk it into slides based on logosPerSlide
    const partnerSlides = Array.isArray(partners[0])
        ? partners
        : partners.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / logosPerSlide);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // Start a new chunk
            }

            resultArray[chunkIndex].push(item);
            return resultArray;
        }, []);

    return (
        <section className="partner-section">
            <Container>
                {title && <h2 className="text-center mb-4">{title}</h2>}

                {partnerSlides.length > 0 ? (
                    <Carousel
                        interval={interval}
                        indicators={showIndicators}
                        controls={showControls}
                        pause={pauseOnHover ? "hover" : false}
                        keyboard={true}
                    >
                        {partnerSlides.map((slidePartners, slideIndex) => (
                            <Carousel.Item key={`slide-${slideIndex}`}>
                                <Row>
                                    {slidePartners.map((partner) => (
                                        <Col md={12 / Math.min(logosPerSlide, 4)} key={partner.id}>
                                            <div className="logo-wrapper">
                                                <img
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    className="partner-logo"
                                                />
                                            </div>
                                            <p className="partner-name">{partner.name}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : (
                    <p className="text-center text-white">No partner logos to display.</p>
                )}
            </Container>
        </section>
    );
};

AdCarousel.propTypes = {
    title: PropTypes.string,
    partners: PropTypes.arrayOf(
        PropTypes.oneOfType([
            // Either a flat array of partner objects
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                name: PropTypes.string.isRequired,
                logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
            }),
            // Or a pre-chunked array of arrays of partner objects
            PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                    name: PropTypes.string.isRequired,
                    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
                })
            )
        ])
    ),
    logosPerSlide: PropTypes.number,
    interval: PropTypes.number,
    pauseOnHover: PropTypes.bool,
    showControls: PropTypes.bool,
    showIndicators: PropTypes.bool,
};

export default AdCarousel;
