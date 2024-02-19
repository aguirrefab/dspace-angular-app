import { Component } from '@angular/core';
import { ListableObjectComponentLoaderComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object-component-loader.component';

@Component({
  selector: 'ds-ri-community-card',
  templateUrl: './ri-community-card.component.html',
  styleUrls: ['./ri-community-card.component.scss'],
})
export class RiCommunityCardComponent extends ListableObjectComponentLoaderComponent {}
