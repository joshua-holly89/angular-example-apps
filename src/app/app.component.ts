import { Component } from '@angular/core';

type AppInfo = {
  name: string;
  date: string;
  link: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public apps:AppInfo[] = [
    {
      name: 'Star Wars',
      date: '2023-09',
      link: 'https://star-wars-angular-app.web.app/',
      description:
        "Displaying Star Wars characters on an overview page and a detail page. New characters can be added. Consumes the API: 'https://swapi.dev/'.",
        image: "star_wars.png"
      },
      {
        name: "Knob Display",
        date: "2023-08",
        link: "https://knob-display.web.app/",
        description: "A knob that displays a current value between a minimum and a maxium value.",
        image: "knob.png"
      },
      {
        name: "Calendar",
        date: "2022-06",
        link: "https://sample-calendar-angular.web.app/",
        description: "A calendar that displays events. A month on the left side and a week on the right side. If a date is selected in month view, according week is opened and date is marked there as well. Events can be opened in a modal from week-view. (Desktop only)",
        image: "calendar.png"
      },
      {
        name: "Connect four",
        date: "2023-12",
        link: "https://connect-four-angular.web.app/",
        description: "A hotseat version of the game 'Connect four'.",
        image: "connect_four.png"
      },
      {
        name: "Donite",
        date: "2020-07",
        link: "https://donite-meet-people.web.app/",
        description: "A platform that arranges get-together for making new friends. You can create a profile by choosing your interests, your periods of free time and some miscellaneous infos.",
        image: "donite.png"
    },

  ];
}
1
