import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Pega a referência da tag <audio> lá do HTML
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  sheSaidNo = false;
  isPlaying = false;

  buttonTop = 50;
  buttonLeft = 60;

  photos = [
    { url: 'Retrovisor.jpg', caption: 'Essa foto ficou tão tão ❤️' },
    { url: 'lalaMoletomHeat.jpg', caption: 'Quando você ficou com meu moletom ❄️' },
    { url: 'FinalDoAno.jpg', caption: 'Aquele dia especial ✨' },
    { url: 'Sapoo.jpg', caption: 'Te amo muito! 🥰' }
  ];

  moveButton() {
    this.buttonTop = Math.floor(Math.random() * 60) + 15;
    this.buttonLeft = Math.floor(Math.random() * 50) + 10;
  }

  accepted() {
    this.sheSaidNo = true;
    this.audioPlayer.nativeElement.volume = 0.2;
    this.toggleMusic();

  }

  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }
}
