import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';
import { IHome } from 'src/module/home.interface';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.scss'],
})
export class ComponentHomeComponent implements OnInit {
  resultsPerPage: number = 20;
  term: string = '';
  home: IHome[] = [];
  page = 1;
  totalHome: number | undefined;
  searchTerm: string = '';

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.getHome();
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
      this.filterData();
    });
  }

  filterData() {
    if (this.searchTerm === '') {
      this.home = this.home.slice();
    } else {
      this.home = this.home.filter((res) => {
        return res.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
}
