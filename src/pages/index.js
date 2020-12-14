/*
export {default as ThingA} from './ThingA'
export {default as ThingB} from './ThingB'
export {default as ThingC} from './ThingC'
*/
import gettingStarted from '../components/GettingStarted.vue';
import map from './map';
import marker from './marker';
import features from './features';
import drawing from './drawing';
import generic from './generic';
import feedback from './feedback';
import ui from './ui';
import location from './location';

const pageMap = {
    main: gettingStarted,
    sections: [
        map,
        marker,
        features,
        drawing,
        generic,
        feedback,
        ui,
        location
    ]
};

export default pageMap;



/*
import mapClicked from './components/events/map.clicked.vue';
import markerAfterAdd from './components/events/marker.added.vue';
import markerClicked from './components/events/marker.clicked.vue';
import featureEvent from './components/events/feature.event.vue';
import drawingEvent from './components/events/drawing.event.vue';
import feedbackResult from './components/events/feedback.result.vue';
import routeResult from './components/events/route.result.vue';
import seachResult from './components/events/search.result.vue';
import userLocationEvent from './components/events/user.location.event.vue';
*/