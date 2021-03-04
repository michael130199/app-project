import { Injectable } from '@angular/core';
import { IRepository } from '../contracts/repository.interface';
import { HttpResponse, HttpHeaders } from '@capacitor-community/http';
// tslint:disable-next-line: no-duplicate-imports
import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
import { ToastImpl } from '../toast/toast.impl';

const { Http } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class RemoteRepository implements IRepository {

  constructor(private readonly toast: ToastImpl) { }

  public async get(endpoint: string, value?: any): Promise<HttpResponse> {

    let response: HttpResponse;

    const headers: HttpHeaders = await this.getHeaders();

    response = await Http.request({
      method: 'GET',
      headers: headers,
      url: endpoint,
      params: value
    });

    const hasError: boolean = this.responseValidator(response);

    if (hasError) {

      response = undefined;
    }

    return response;
  }

  public async set(endpoint: string, value: any): Promise<HttpResponse> {

    let response: HttpResponse;

    const headers: HttpHeaders = await this.getHeaders();

    response = await Http.request({
      method: 'POST',
      headers: headers,
      url: endpoint,
      data: value
    });

    const hasError: boolean = this.responseValidator(response);

    if (hasError) {

      response = undefined;
    }

    return response;
  }

  public async update(endpoint: string, value: any): Promise<HttpResponse> {

    let response: HttpResponse;

    const headers: HttpHeaders = await this.getHeaders();

    response = await Http.request({
      method: 'PUT',
      headers: headers,
      url: endpoint,
      data: value
    });

    const hasError: boolean = this.responseValidator(response);

    if (hasError) {

      response = undefined;
    }

    return response;
  }

  public async patch(endpoint: string, value: any): Promise<HttpResponse> {

    let response: HttpResponse;

    const headers: HttpHeaders = await this.getHeaders();

    response = await Http.request({
      method: 'PATCH',
      headers: headers,
      url: endpoint,
      data: value
    });

    const hasError: boolean = this.responseValidator(response);

    if (hasError) {

      response = undefined;
    }

    return response;
  }

  public async delete(endpoint?: string, value?: any): Promise<HttpResponse> {

    let response: HttpResponse;

    const headers: HttpHeaders = await this.getHeaders();

    response = await Http.request({
      method: 'DELETE',
      headers: headers,
      url: endpoint,
      data: value
    });

    const hasError: boolean = this.responseValidator(response);

    if (hasError) {

      response = undefined;
    }

    return response;
  }

  private responseValidator(response: HttpResponse): boolean {

    let hasError: boolean;

    switch (response.status) {

      case 500:

        hasError = true;
        this.toast.presentGeneralError();
        break;

      case 401:

        hasError = true;
        this.toast.presentError('No tienes permisos');
        break;
    }

    return hasError;
  }

  private async getHeaders(): Promise<HttpHeaders> {

    const header: HttpHeaders = {
      'Content-Type': 'application/json'
    };

    return header;
  }
}
