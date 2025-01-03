import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: "app-skills",
    imports: [SharedModule],
    templateUrl: "./skills.component.html",
    styleUrl: "./skills.component.scss"
})
export class SkillsComponent {
    private pageContent?: PageContent;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<PageContent>("https://rabeea-cv-default-rtdb.firebaseio.com/skills.json")
            .subscribe((response) => {
                this.pageContent = {
                    front: response.front,
                    back: response.back,
                    cms: response.cms,
                    db: response.db,
                    services: response.services
                };
            });
    }

    get PageContent() {
        return this.pageContent;
    }
}
interface PageContent {
    front?: string[];
    back?: string[];
    cms?: string[];
    db?: string[];
    services?: string[];
}
