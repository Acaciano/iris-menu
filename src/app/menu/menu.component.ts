import { Component, OnInit } from '@angular/core';
import { MenuService } from '../core/services/menu.service';
import { Menu } from '../core/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.get().subscribe(data => {
      this.menus = data;
    });
  }
}
