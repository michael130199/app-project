import {Plugins} from '@capacitor/core';
import {Injectable} from '@angular/core';
import { IRepository } from '../contracts/repository.interface';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalRepository implements IRepository  {

  public async get(key: string): Promise<any> {

    try {

      const res: { value: string } = await Storage.get({ key });

      return JSON.parse(res.value);

    } catch (error) {

      return Promise.reject(error);
    }
  }

  public async set(key: string, value: any): Promise<any> {

    try {

      return await Storage.set({
        key,
        value: JSON.stringify(value)
      });

    } catch (error) {

      return Promise.reject(error);
    }
  }

  public async update(key: string, value: any): Promise<any> {

    return await this.set(key, value);
  }

  public async delete(key?: string): Promise<any> {

    try {

      if (key) {

        return await Storage.remove({
          key
        });
      }

      return await Storage.clear();

    } catch (error) {

      return Promise.reject(error);
    }

  }
}
