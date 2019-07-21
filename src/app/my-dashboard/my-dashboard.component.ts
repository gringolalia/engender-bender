import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Discagens', cols: 2, rows: 1 },
          { title: 'Botões', cols: 2, rows: 1 },
          { title: 'Volante', cols: 2, rows: 1 },
          { title: 'Engrenagem', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Internet Discada', cols: 2, rows: 1 },
        { title: 'Apertar Botões', cols: 1, rows: 1 },
        { title: 'Pegar no Tranco', cols: 1, rows: 2 },
        { title: 'Dar Marcha Rê', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
