export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFsbWVydSIsImEiOiJjbG9ma3gxZzgwcXhlMmluMGVrbnR6eGExIn0.UiuA-BqcQrm2zbMKuYUOSA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/halmeru/clofmngzo004g01picprr412p',
    scrollZoom: false,
    // center: [51.186, 51.447],
    // zoom: 5,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
