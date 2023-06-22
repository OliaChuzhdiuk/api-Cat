import { Pipe, PipeTransform } from '@angular/core';
import { IHome } from 'src/module/home.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(home: IHome[], search: string): IHome[] {
    return home.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
