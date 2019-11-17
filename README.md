[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0eb77784475f4ed1824fdda9ef00a0f6)](https://www.codacy.com/manual/prog98rammer/ngx-communicate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prog98rammer/ngx-communicate&amp;utm_campaign=Badge_Grade)

# NgxCommunicate

**Share data between any two components in an easy way**

## Installation

```bash
npm i ngx-communicate
```

## Add the **NgxCommunicateModule** to your **AppModule**

```ts
@NgModule({
 ...
  imports: [
    ...
    NgxCommunicateModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

## Use the Service

**To broadcast data**

```ts
this.communicate.broadcast("server:start", "Server Started");
```

**To receive data**

```ts
this.communicate.on("server:start", (data: any) => {
  console.log(data);
});
```

---

## Example

```ts
import { NgxCommunicateService } from "ngx-communicate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private communicate: NgxCommunicateService) {}

  ngOnInit() {
    // Broadcasting a new event with it's data
    this.communicate.broadcast("server:start", "Server Started");

    // Receive the data for that event.
    // Note: It can be used inside any other component.
    this.communicate.on("server:start", (data: any) => {
      console.log(data);
    });
  }
}
```

### License

MIT
