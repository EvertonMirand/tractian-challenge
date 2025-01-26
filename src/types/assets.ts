export interface Asset {
  id: string;
  name: string;
  locationId?: string; // Optional: Asset may not be linked to a location
  parentId?: string; // Optional: Asset may not have a parent asset
  sensorId?: string; // Optional: Present if the asset has an associated sensor
  sensorType?: 'vibration' | 'energy'; // Optional: Type of sensor, if applicable
  status?: 'operating' | 'alert'; // Optional: Operational status of the asset
  gatewayId?: string; // Optional: Identifier for the gateway, if applicable
}
