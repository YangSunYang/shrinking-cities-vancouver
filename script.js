
// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoieWFuZ3N1bnN1biIsImEiOiJjbHlxYTc1czAxMmo3MmpvaXo3bTFzbHNmIn0.Zch6wqFo02Aj41KVfS22_Q';

// create map
const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/yangsunsun/cm7c64r6h00b201p7fd5l9glo', // map style URL from Mapbox Studio
center: [-123.1029, 49.2545],
zoom: 11.38
});

// wait for map to load before adjusting it
map.on('load', () => {


// define layer names
const layers = [
    'Loss over 100',
    'Loss 50 to 100',
    'Loss 5 to 50',
    'Almost no change',
    'Gain 5 to 50',
    'Gain 50 to 100',
    'Gain over 100'
];
const colors = [
    "#d73027",
    "#fc8d59",
    "#fee08b",
    "#ffffbf",
    "#d9ef8b",
    "#91cf60",
    "#1a9850"
];

// // create legend
const legend = document.getElementById('legend');

layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
});

// change info window on hover
map.getCanvas().style.cursor = 'default';

map.on('mousemove', (event) => {
    const areas = map.queryRenderedFeatures(event.point, {
        layers: ['van-city-mapping-0plhtx']
    });
    document.getElementById('pd').innerHTML = areas.length
    ? `<p>This dissemination area covers ${areas[0].properties['hectars']} hectares. Its population <strong>${areas[0].properties['narrate1']}</strong> from 1971 to 2021, resulting in <strong>${areas[0].properties['narrate2']}<strong>.</p>`
    : `<p>Hover over an area in the City of Vancouver!</p>`;
});
});
