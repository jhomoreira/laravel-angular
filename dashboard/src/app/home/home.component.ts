import { Component, OnInit } from '@angular/core';
import { AppHttpService} from '../app-http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public home: any;

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.service.build('home')
      .list()
      .subscribe((data) => {
        this.home = data;
      });
  }

}
