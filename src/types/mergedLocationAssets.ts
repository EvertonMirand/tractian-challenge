import { AssetSensorType, AssetStatus } from './assets';

export interface LocationAsset {
  id: string;
  name: string;
  locationId?: string;
  parentId?: string;
  sensorId?: string;
  sensorType?: AssetSensorType;
  status?: AssetStatus;
  gatewayId?: string;
  children?: LocationAsset[];
  assets?: LocationAsset[];
  isLocation?: boolean;
  isAsset?: boolean;
}
