export interface Location  {
  id: string;
  name: string;
  parentId?: string ;
  children?: Location[];
}
