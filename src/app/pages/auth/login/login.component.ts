import { Component } from '@angular/core';

// ICONS
import { staticIcon } from '@assets/icons';

// LOGO
import { staticImages } from '@assets/images';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logo = staticImages.LOGO;
  eyeOpen = staticIcon.EYE_OPEN;
  eyeClose = staticIcon.EYE_CLOSE;
}
