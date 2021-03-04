import { HttpHeaders } from '@capacitor-community/http';

export interface IRepository {
  get(key: string): Promise<any>;

  set(key: string, value: any, headers: HttpHeaders): Promise<any>;

  update(key: string, value: any): Promise<any>;

  delete(key?: string, value?: any): Promise<any>;
}
