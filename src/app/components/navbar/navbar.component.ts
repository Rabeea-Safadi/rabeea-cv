import { Component, TemplateRef } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { Router } from "@angular/router";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-navbar",
    imports: [SharedModule],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss"
})
export class NavbarComponent {
    navItems: NavItem[];

    constructor(private router: Router, private offcanvasService: NgbOffcanvas) {
        this.navItems = [
            {
                label: "Home",
                path: "/"
            },
            {
                label: "About",
                path: "/about"
            },
            {
                label: "Skills",
                path: "/skills"
            },
            {
                label: "Experience",
                path: "/experience"
            },
            // {
            //     label: "Portfolio",
            //     path: "/portfolio"
            // },
            {
                label: "Contact",
                path: "/contact"
            }
        ];
    }

    openMobileNav(offCanvas: TemplateRef<any>) {
        this.offcanvasService.open(offCanvas);
    }

    closeMobileNav(offCanvas: TemplateRef<any>) {
        this.offcanvasService.dismiss(offCanvas);
    }

    get ActiveRoute() {
        return this.router.url;
    }
}

interface NavItem {
    label: string;
    path: string;
}
