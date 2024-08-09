import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgVideo from 'lightgallery/plugins/video';

import i1 from './img/15.jpg';
import i2 from './img/16.jpg';
import i3 from './img/17.jpg';
import i4 from './img/18.jpg';
import i5 from './img/19.jpg';
import i6 from './img/20.jpg';
import i7 from './img/21.jpg';

const SchwerinGallery = () => {
    return ( 
        <LightGallery
                plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                galleryId={'nature'}
                autoplayFirstVideo={false}
                elementClassNames={'gallery'}
                mobileSettings={{
                  controls: false,
                  showCloseIcon: false,
                  download: false,
                  rotate: false,
                }}
            >
                <a href={i1}>
                    <img src={i1} alt="Schloss Schwerin" />
                </a>
                <a href={i2}>
                    <img src={i2} alt="Schloss Schwerin" />
                </a>
                <a href={i3}>
                    <img src={i3} alt="Schloss Schwerin" />
                </a>
                <a href={i4}>
                    <img src={i4} alt="Schloss Schwerin" />
                </a>
                <a href={i5}>
                    <img src={i5} alt="Schloss Schwerin" />
                </a>
                <a href={i6}>
                    <img src={i6} alt="Schloss Schwerin" />
                </a>
                <a href={i7}>
                    <img src={i7} alt="Schloss Schwerin" />
                </a>
            </LightGallery>
     );
}
 
export default SchwerinGallery;