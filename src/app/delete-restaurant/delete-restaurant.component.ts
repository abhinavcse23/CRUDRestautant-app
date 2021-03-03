import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  alert:boolean = false;

  

   public collectTrash:any;

  deleteRestaurant = new FormGroup({
    name: new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.collectTrash = result;

      this.deleteRestaurant = new FormGroup({
        name: new FormControl(this.collectTrash['name']),
        address:new FormControl(this.collectTrash['address']),
        email:new FormControl(this.collectTrash['email'])
      })
    })
  }

  deleteResto(){
    this.resto.deleteResto(this.router.snapshot.params.id).subscribe((result)=>{
      this.alert = true;
      console.log("this resto has been deleted", result);
      setTimeout("location.href='/list';",1500);
    })
  }

  closeAlert(){
    this.alert = false;
  }
}
