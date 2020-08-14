import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Contacts';

  deferredPrompt: any;

  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: { preventDefault: () => void; }) {
    console.log(e);

    this.deferredPrompt = e;
    this.showButton = true;
  };

  addToHomeScreen() {
    this.showButton = false;

    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice
      .then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the prompt')
        } else {
          console.log('User dismissed the prompt')
        }
        this.deferredPrompt = null;
      });
  };
}
