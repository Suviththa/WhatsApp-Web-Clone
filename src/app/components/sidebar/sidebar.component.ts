import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();

  conversations = [
    { name: "Thulasi", time: "8:30", message: "Good Morning!", readMessage: false },
    { name: "Gajani", time: "2:20", message: "Good Morning!", readMessage: true },
    { name: "Vigani", time: "3:32", message: "Good Morning!", readMessage: false },
    { name: "Asvi", time: "4:50", message: "Good Morning!", readMessage: true },
    { name: "Mathura", time: "7:34", message: "Good Morning!", readMessage: true },
    { name: "Vinoji", time: "10:28", message: "Good Morning!", readMessage: false },
    { name: "Vithu", time: "6:24", message: "Good Morning!", readMessage: true },
    { name: "Vanu", time: "5:25", message: "Good Morning!", readMessage: false },
    { name: "Tharani", time: "7:30", message: "Good Morning!", readMessage: true },
    { name: "Vinthu", time: "1.30", message: "Good Morning!", readMessage: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
