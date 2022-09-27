import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

import { MapLayout } from "components/cmmap/cmmap.styled";
import { mapAtom } from "store/mapAtom";

const Cmmap = () => {
  const ref = useRef(null);
  const [map] = useAtom(mapAtom);

  useEffect(() => {
    if (map && ref) {
      map.setTarget(ref.current);
      window["map"] = map;
    }
  }, [map, ref]);

  return <MapLayout ref={ref}></MapLayout>;
};

export default Cmmap;
