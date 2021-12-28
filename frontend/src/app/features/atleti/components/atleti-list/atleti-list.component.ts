import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaStore } from '../../../../shared/services/atleta.store';
import { AtletiService } from '../../../../shared/services/atleti.service';
import { MatListModule } from '@angular/material/list';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AtletaDto } from '../../../../shared/models/atleta-dto.model';

@Component({
  selector: 'app-atleti-list',
  templateUrl: './atleti-list.component.html',
  styleUrls: ['./atleti-list.component.scss']
})
export class AtletiListComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['name', 'surname', 'sex', 'nascita', 'team'];
  public dataSource!: MatTableDataSource<AtletaDto>;
  public atleti!: AtletaDto[];


  constructor(private _liveAnnouncer: LiveAnnouncer,public router:Router, public atletaStore: AtletaStore, public atletaService:AtletiService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.atletaService.getAtletiSub().subscribe(res => {
      this.dataSource.data=Object.values(res);
      console.log(Object.values(res));
      this.atletaStore.init(Object.values(res))});
  }

  public showDetails(id:number){
    this.router.navigate(["atleti", "details", id]);
  }

  public addNew(){
    this.router.navigate(["atleti", "add"]);
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public formattedDate(nas: Date){
    let a = new Date(nas);
    return  a.getDate()+'/'+(a.getMonth()+1)+'/'+a.getFullYear();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
