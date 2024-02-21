import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemoteData } from 'src/app/core/data/remote-data';
import { Bitstream } from 'src/app/core/shared/bitstream.model';
import { Community } from 'src/app/core/shared/community.model';
import { ListableObjectComponentLoaderComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object-component-loader.component';

@Component({
  selector: 'ds-ri-community-card',
  templateUrl: './ri-community-card.component.html',
  styleUrls: ['./ri-community-card.component.scss'],
})
export class RiCommunityCardComponent extends ListableObjectComponentLoaderComponent {}
// @Input() community: Community; // Define input property
// logoSubscription: Subscription;
// logoHref: string;
// ngOnInit() {
//   this.getLogoUrl();
// }
// getLogoUrl(): string | null {
//   // Check if the community and logo properties are defined
//   if (this.community) {
//     // Get the bitstream from the resolved data
//     const bitstream: Bitstream = this.community._links.logo.href;
//     // Return the URL of the bitstream
//     return bitstream._links.self.href;
//   } else {
//     return null;
//   }
// }
// ngOnDestroy() {
//   if (this.logoSubscription) {
//     this.logoSubscription.unsubscribe();
//   }
// }
