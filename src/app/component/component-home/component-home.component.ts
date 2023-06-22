import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';
import { IHome } from 'src/module/home.interface';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.scss'],
})
export class ComponentHomeComponent implements OnInit {
  resultsPerPage: number = 10;
  term: string = '';
  home: IHome[] = [];
  page = 1;
  totalHome: number | undefined;
  filteredHome: IHome[] = [];

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.getHome();
    this.filterHome();
  }

  getHome() {
    this.myDataService.getData(10, this.page).subscribe((response: any) => {
      this.totalHome = response.count;
      response.results.forEach((result: any) => {
        this.myDataService
          .getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.home.push(uniqResponse);
          });
      });
    });
  }

  filterHome() {
    const slicedHome = this.home.slice(0, this.resultsPerPage);
    this.filteredHome = slicedHome.filter((home: IHome) => {
      const matchesSearchTerm = home.name
        .toLowerCase()
        .includes(this.term.toLowerCase());
      return matchesSearchTerm;
    });
  }
}
