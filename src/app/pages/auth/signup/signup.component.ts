import { Component } from '@angular/core';

// ICONS
import { staticIcon } from '@assets/icons';

// LOGO
import { staticImages } from '@assets/images';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  logo = staticImages.LOGO;
  eyeOpen = staticIcon.EYE_OPEN;
  eyeClose = staticIcon.EYE_CLOSE;
}
