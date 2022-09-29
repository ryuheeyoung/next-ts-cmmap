import { Coordinate } from 'ol/coordinate';
import { ProjectionLike, transform } from 'ol/proj';

const tCoord = (coord: Coordinate, target?: ProjectionLike, source?: ProjectionLike) =>
  transform(coord, target || 'EPSG:4326', source || 'EPSG:3857');

export { tCoord };
