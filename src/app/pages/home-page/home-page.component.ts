import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: "app-home-page",
    imports: [SharedModule],
    templateUrl: "./home-page.component.html",
    styleUrl: "./home-page.component.scss"
})
export class HomePageComponent {
    private pageContent?: PageContent;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<PageContent>("https://rabeea-cv-default-rtdb.firebaseio.com/home.json")
            .subscribe((response) => {
                this.pageContent = {
                    name: response.name,
                    title: response.title,
                    subtitle: response.subtitle,
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
    name?: string;
    title?: string;
    subtitle?: string;
    email?: string;
    linkedin?: string;
}
