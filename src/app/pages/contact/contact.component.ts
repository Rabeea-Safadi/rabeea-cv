import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-contact",
    imports: [SharedModule],
    templateUrl: "./contact.component.html",
    styleUrl: "./contact.component.scss"
})
export class ContactComponent {
    private pageContent?: PageContent;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<PageContent>("https://rabeea-cv-default-rtdb.firebaseio.com/home.json")
            .subscribe((response) => {
                this.pageContent = {
                    email: response.email,
                    linkedin: response.linkedin
                };
            });
    }

    get PageContent() {
        return this.pageContent;
    }
}
interface PageContent {
    email?: string;
    linkedin?: string;
}
