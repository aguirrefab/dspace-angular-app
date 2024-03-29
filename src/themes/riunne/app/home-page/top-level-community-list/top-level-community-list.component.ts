import { Component } from '@angular/core';
import { TopLevelCommunityListComponent as BaseComponent } from '../../../../../app/home-page/top-level-community-list/top-level-community-list.component';
import { ViewMode } from 'src/app/core/shared/view-mode.model';

@Component({
  selector: 'ds-top-level-community-list',
  styleUrls: ['./top-level-community-list.component.scss'],
  // styleUrls: [
  //   '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.scss',
  // ],
  templateUrl: './top-level-community-list.component.html',
  //templateUrl: '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.html'
})
export class TopLevelCommunityListComponent extends BaseComponent {
  viewMode = ViewMode.GridElement;
  Bitstream = 'Bitstream';
}
