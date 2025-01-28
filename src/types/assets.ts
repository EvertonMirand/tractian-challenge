export type AssetStatus = 'operating' | 'alert';

export type AssetSensorType = 'vibration' | 'energy';

export interface Asset {
  id: string;
  name: string;
  locationId?: string; // Optional: Asset may not be linked to a location
  parentId?: string; // Optional: Asset may not have a parent asset
  sensorId?: string; // Optional: Present if the asset has an associated sensor
  sensorType?: AssetSensorType; // Optional: Type of sensor, if applicable
  status?: AssetStatus; // Optional: Operational status of the asset
  gatewayId?: string; // Optional: Identifier for the gateway, if applicable
  children?: Asset[]; // Recursively nested assets
}
