import { Component, OnInit } from "@angular/core";
import { NgxCommunicateService } from "ngx-communicate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ngx-libraries";

  constructor(private communicate: NgxCommunicateService) { }

  ngOnInit() {
    this.communicate.on("server:start", console.log);
    this.communicate.on("server:stop", console.log);

    setInterval(() => {
      this.communicate.broadcast('server:start', 'Server Started');
      // this.communicate.broadcast('server:stop', 'Server stopped');

    }, 3000);
  }
}
