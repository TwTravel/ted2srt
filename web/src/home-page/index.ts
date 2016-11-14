import Http from '../services/http';
import HomeService from './home.service';
import HomeComponent from './home.component';


class Home {
  component: HomeComponent;

  constructor(http: Http, private root: HTMLElement) {
    document.title = 'TED2srt: Download bilingual subtitles of TED talks';
    const service = new HomeService(http);
    service.fetch().then(() => {
      this.component = new HomeComponent(service);
      this.render();
    });
  }

  render() {
    this.root.innerHTML = this.component.render();
  }
}

export default Home;