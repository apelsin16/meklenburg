import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgVideo from 'lightgallery/plugins/video';

import i1 from './img/8.jpg';
import i2 from './img/9.jpg';
import i3 from './img/10.jpg';
import i4 from './img/11.jpg';
import i5 from './img/12.jpg';
import i6 from './img/13.jpg';
import i7 from './img/14.jpg';

const RuegenGallery = () => {
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
                    <img src={i1} alt="Rügen" />
                </a>
                <a href={i2}>
                    <img src={i2} alt="Rügen" />
                </a>
                <a href={i3}>
                    <img src={i3} alt="Rügen" />
                </a>
                <a href={i4}>
                    <img src={i4} alt="Rügen" />
                </a>
                <a href={i5}>
                    <img src={i5} alt="Rügen" />
                </a>
                <a href={i6}>
                    <img src={i6} alt="Rügen" />
                </a>
                <a href={i7}>
                    <img src={i7} alt="Rügen" />
                </a>
            </LightGallery>
     );
}
 
export default RuegenGallery;