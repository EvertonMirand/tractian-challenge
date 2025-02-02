export const assetsMock = [
  {
    id: '656a07bbf2d4a1001e2144c2',
    locationId: '656a07b3f2d4a1001e2144bf',
    name: 'CONVEYOR BELT ASSEMBLY',
    parentId: null,
    sensorType: null,
    status: null,
  },
  {
    gatewayId: 'QHI640',
    id: '656734821f4664001f296973',
    locationId: null,
    name: 'Fan - External',
    parentId: null,
    sensorId: 'MTC052',
    sensorType: 'energy',
    status: 'operating',
  },
  {
    id: '656734448eb037001e474a62',
    locationId: '656733b1664c41001e91d9ed',
    name: 'Fan H12D',
    parentId: null,
    sensorType: null,
    status: null,
  },
  {
    gatewayId: 'FRH546',
    id: '656a07cdc50ec9001e84167b',
    locationId: null,
    name: 'MOTOR RT COAL AF01',
    parentId: '656a07c3f2d4a1001e2144c5',
    sensorId: 'FIJ309',
    sensorType: 'vibration',
    status: 'operating',
  },
  {
    id: '656a07c3f2d4a1001e2144c5',
    locationId: null,
    name: 'MOTOR TC01 COAL UNLOADING AF02',
    parentId: '656a07bbf2d4a1001e2144c2',
    sensorType: null,
    status: null,
  },
  {
    gatewayId: 'QBK282',
    id: '6567340c1f4664001f29622e',
    locationId: null,
    name: 'Motor H12D- Stage 1',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'CFX848',
    sensorType: 'vibration',
    status: 'alert',
  },
  {
    gatewayId: 'VHS387',
    id: '6567340c664c41001e91dceb',
    locationId: null,
    name: 'Motor H12D-Stage 2',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'GYB119',
    sensorType: 'vibration',
    status: 'alert',
  },
  {
    gatewayId: 'VZO694',
    id: '656733921f4664001f295e9b',
    locationId: null,
    name: 'Motor H12D-Stage 3',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'SIF016',
    sensorType: 'vibration',
    status: 'alert',
  },
  {
    id: '656734968eb037001e474d5a',
    locationId: '656733b1664c41001e91d9ed',
    name: 'Motors H12D',
    parentId: null,
    sensorType: null,
    status: null,
  },
];

export const locationsMock = [
  {
    id: '656a07b3f2d4a1001e2144bf',
    name: 'CHARCOAL STORAGE SECTOR',
    parentId: '65674204664c41001e91ecb4',
  },
  {
    id: '656733611f4664001f295dd0',
    name: 'Empty Machine house',
    parentId: null,
  },
  {
    id: '656733b1664c41001e91d9ed',
    name: 'Machinery house',
    parentId: null,
  },
  {
    id: '65674204664c41001e91ecb4',
    name: 'PRODUCTION AREA - RAW MATERIAL',
    parentId: null,
  },
];

export const companiesMock = [
  {
    id: '662fd0ee639069143a8fc387',
    name: 'Jaguar',
  },
  {
    id: '662fd0fab3fd5656edb39af5',
    name: 'Tobias',
  },
  {
    id: '662fd100f990557384756e58',
    name: 'Apex',
  },
];

export const locationAsset = [
  {
    id: '656a07b3f2d4a1001e2144bf',
    name: 'CHARCOAL STORAGE SECTOR',
    parentId: '65674204664c41001e91ecb4',
    assets: [
      {
        id: '656a07bbf2d4a1001e2144c2',
        locationId: '656a07b3f2d4a1001e2144bf',
        name: 'CONVEYOR BELT ASSEMBLY',
        parentId: null,
        sensorType: null,
        status: null,
        isAsset: true
      }
    ],
    isLocation: true
  },
  {
    id: '656733611f4664001f295dd0',
    name: 'Empty Machine house',
    parentId: null,
    assets: [],
    isLocation: true
  },
  {
    id: '656733b1664c41001e91d9ed',
    name: 'Machinery house',
    parentId: null,
    assets: [
      {
        id: '656734448eb037001e474a62',
        locationId: '656733b1664c41001e91d9ed',
        name: 'Fan H12D',
        parentId: null,
        sensorType: null,
        status: null,
        isAsset: true
      },
      {
        id: '656734968eb037001e474d5a',
        locationId: '656733b1664c41001e91d9ed',
        name: 'Motors H12D',
        parentId: null,
        sensorType: null,
        status: null,
        isAsset: true
      }
    ],
    isLocation: true
  },
  {
    id: '65674204664c41001e91ecb4',
    name: 'PRODUCTION AREA - RAW MATERIAL',
    parentId: null,
    assets: [],
    isLocation: true
  },
  {
    gatewayId: 'QHI640',
    id: '656734821f4664001f296973',
    locationId: null,
    name: 'Fan - External',
    parentId: null,
    sensorId: 'MTC052',
    sensorType: 'energy',
    status: 'operating',
    assets: [],
    isAsset: true
  },
  {
    gatewayId: 'FRH546',
    id: '656a07cdc50ec9001e84167b',
    locationId: null,
    name: 'MOTOR RT COAL AF01',
    parentId: '656a07c3f2d4a1001e2144c5',
    sensorId: 'FIJ309',
    sensorType: 'vibration',
    status: 'operating',
    assets: [],
    isAsset: true
  },
  {
    id: '656a07c3f2d4a1001e2144c5',
    locationId: null,
    name: 'MOTOR TC01 COAL UNLOADING AF02',
    parentId: '656a07bbf2d4a1001e2144c2',
    sensorType: null,
    status: null,
    assets: [],
    isAsset: true
  },
  {
    gatewayId: 'QBK282',
    id: '6567340c1f4664001f29622e',
    locationId: null,
    name: 'Motor H12D- Stage 1',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'CFX848',
    sensorType: 'vibration',
    status: 'alert',
    assets: [],
    isAsset: true
  },
  {
    gatewayId: 'VHS387',
    id: '6567340c664c41001e91dceb',
    locationId: null,
    name: 'Motor H12D-Stage 2',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'GYB119',
    sensorType: 'vibration',
    status: 'alert',
    assets: [],
    isAsset: true
  },
  {
    gatewayId: 'VZO694',
    id: '656733921f4664001f295e9b',
    locationId: null,
    name: 'Motor H12D-Stage 3',
    parentId: '656734968eb037001e474d5a',
    sensorId: 'SIF016',
    sensorType: 'vibration',
    status: 'alert',
    assets: [],
    isAsset: true
  }
]
