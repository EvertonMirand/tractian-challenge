import { Asset } from './assets';

export interface Location {
  id: string;
  name: string;
  parentId?: string;
  children?: Location[];
  assets?: Asset[];
}
