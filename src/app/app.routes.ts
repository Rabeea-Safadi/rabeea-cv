import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        title: "Rabeea Safadi | Home"
    },
    {
        path: "about",
        title: "Rabeea Safadi | About",
        component: AboutPageComponent
    },
    {
        path: "skills",
        title: "Rabeea Safadi | Skills",
        component: SkillsComponent
    },
    {
        path: "experience",
        title: "Rabeea Safadi | Experience",
        component: ExperienceComponent
    },
    // {
    //     path: "portfolio",
    //     title: "Rabeea Safadi | Portfolio",
    //     component: PortfolioComponent
    // },
    {
        path: "contact",
        title: "Rabeea Safadi | Contact",
        component: ContactComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];
