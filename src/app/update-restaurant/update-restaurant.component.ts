import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  public collect:any;

  alert:boolean = false;
  
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
       this.collect = result
     // console.log(result)
      this.editRestaurant = new FormGroup({
        name: new FormControl(this.collect['name']),
        address:new FormControl(this.collect['address']),
        email:new FormControl(this.collect['email'])
     })
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result)=>{
      console.log(result,"data updated successfully");
      this.alert = true;
      setTimeout("location.href='/list';",1500);
    })
  }

  closeAlert(){
    this.alert = false
  }

}
