import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Menu } from '../models/menu';

@Injectable()
export class MenuService extends ApiService {
    public get(): Observable<Menu[]> {
      return super.get(`/menus`);
    }
}
