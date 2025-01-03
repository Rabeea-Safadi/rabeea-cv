import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-experience",
    imports: [SharedModule],
    templateUrl: "./experience.component.html",
    styleUrl: "./experience.component.scss"
})
export class ExperienceComponent {
    private pageContent?: PageContent;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<PageContent>("https://rabeea-cv-default-rtdb.firebaseio.com/experiences.json")
            .subscribe((response) => {
                this.pageContent = {
                    title: response.title,
                    "Personal Side Projects": response["Personal Side Projects"],
                    "SQLink & Zigit (2023 - Present)": response["SQLink & Zigit (2023 - Present)"]
                };
            });
    }

    get PageContent() {
        return this.pageContent;
    }
}
interface PageContent {
    title?: string;
    "SQLink & Zigit (2023 - Present)"?: string;
    "Personal Side Projects"?: string;
}
