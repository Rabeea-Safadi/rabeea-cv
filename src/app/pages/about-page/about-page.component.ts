import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-about-page",
    imports: [SharedModule],
    templateUrl: "./about-page.component.html",
    styleUrl: "./about-page.component.scss"
})
export class AboutPageComponent {
    private pageContent?: PageContent;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<PageContent>("https://rabeea-cv-default-rtdb.firebaseio.com/about.json")
            .subscribe((response) => {
                this.pageContent = {
                    bio: response.bio,
                    education: response.education
                };
            });
    }

    get PageContent() {
        return this.pageContent;
    }
}
interface PageContent {
    bio?: string;
    education?: string[];
}
