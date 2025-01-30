export type AssetStatus = 'operating' | 'alert';

export type AssetSensorType = 'vibration' | 'energy';

export interface Asset {
  id: string;
  name: string;
  locationId?: string;
  parentId?: string;
  sensorId?: string;
  sensorType?: AssetSensorType;
  status?: AssetStatus;
  gatewayId?: string;
  children?: Asset[];
}
