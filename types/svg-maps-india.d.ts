declare module "@svg-maps/india" {
  export interface IndiaMapLocation {
    id: string;
    name: string;
    path: string;
  }

  export interface IndiaMapData {
    label: string;
    viewBox: string;
    locations: IndiaMapLocation[];
  }

  const IndiaMap: IndiaMapData;
  export default IndiaMap;
}

