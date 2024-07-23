
// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoieWFuZ3N1bnN1biIsImEiOiJjbHlxYTc1czAxMmo3MmpvaXo3bTFzbHNmIn0.Zch6wqFo02Aj41KVfS22_Q';

// create map
const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/yangsunsun/clyxozq4a00xs01qohrlg1omt', // map style URL from Mapbox Studio
center: [-122.7725, 49.2931],
zoom: 9
});

// wait for map to load before adjusting it
map.on('load', () => {


// define layer names
const layers = [
    'Loss over 100',
    'Loss 50 to 100',
    'Loss 25 to 50',
    'Loss 10 to 25',
    'Loss 5 to 10',
    'Almost no change',
    'Gain 5 to 10',
    'Gain 10 to 25',
    'Gain 25 to 50',
    'Gain 50 to 100',
    'Gain over 100'
];
const colors = [
    "#a50026",
    "#d62f27",
    "#f46d43",
    "#fdad60",
    "#fee08b",
    "#feffbe",
    "#d9ef8b",
    "#a6d86a",
    "#65bd63",
    "#199750",
    '#006837'
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
        layers: ['vancouverdata']
    });
    document.getElementById('pd').innerHTML = areas.length
    ? `<p>This dissemination area in ${areas[0].properties['Region Name']} <strong><em>${areas[0].properties.density_status} ${areas[0].properties.abs_num} people </strong><em>per hectare between 1971 and 2021.</em></p>`
    : `<p>Hover over an area in Vancouver CMA!</p>`;
});
});

