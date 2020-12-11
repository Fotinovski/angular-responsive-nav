import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() isOpenNav:boolean = false ;
  @Output() isOpenNavChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeNav() {
    this.isOpenNav = !(this.isOpenNav); 
    this.isOpenNavChange.emit(this.isOpenNav);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
