import { Cars } from './models/cars';
import { Component,OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    trigger('slideInProgress',[
      state('open',style({
        width : '0px',
        // backgroundColor : 'red'
      })),
      state('close',style({
        width: '{{progress_width}}',
        // backgroundColor : 'black'
      }),{params : { progress_width : 0 }}),
      // transition('* => *',animate(3000)),
      transition('open => close',[animate(1500)]),
      transition('close => open',[animate(0)])  
    ]),
    trigger('needleInProgress',[
      state('open',style({
        transform : 'rotate(0deg)'
        // backgroundColor : 'red'
      })),
      state('close',style({
        transform: 'rotate({{progress_angle}}deg)',
        // backgroundColor : 'black'
      }),{params : { progress_angle : 0 }}),
      // transition('* => *',animate(3000)),
      transition('open => close',[animate(1500)]),
      transition('close => open',[animate(0)])  
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  selectedCar = null;
  selectedCarIndex = -1;
  selectedCarColorIndex = -1
  isAnimate = false;
  private data: [Cars] = [
    {
      styles: [
        {
          color: 'blue',
          carColorImg: '../assets/blue.jpg',
          colorName : 'Blue Teal'
        },
        {
          color: 'grey',
          carColorImg: '../assets/grey.jpg',
          colorName : 'Grey Hound'
        },
        {
          color: 'red',
          carColorImg: '../assets/red.jpg',
          colorName : 'Red Velvet'
        },
        {
          color: 'silver',
          carColorImg: '../assets/silver.jpg',
          colorName : 'Silver Metallica'
        }
      ],
      rating: {
        critic : 87,
        performance : 97,
        interior : 88,
        safety : 90,
        reliability : 92,
        overall : 100
      },
      name : "Swift"
    },
    {
      styles: [
        
        {
          color: 'grey',
          carColorImg: '../assets/grey.jpg',
          colorName : 'Grey Hound'
        },
        {
          color: 'blue',
          carColorImg: '../assets/blue.jpg',
          colorName : 'Blue Teal'
        },
        {
          color: 'red',
          carColorImg: '../assets/red.jpg',
          colorName : 'Red Velvet'
        },
        {
          color: 'silver',
          carColorImg: '../assets/silver.jpg',
          colorName : 'Silver Metallica'
        }
      ],
      rating: {
        critic : 87,
        performance : 97,
        interior : 88,
        safety : 90,
        reliability : 92,
        overall : 80
      },
      name : "Swift XS"
    },
    {
      styles: [
        {
          color: 'red',
          carColorImg: '../assets/red.jpg',
          colorName : 'Red Velvet'
        },
        {
          color: 'silver',
          carColorImg: '../assets/silver.jpg',
          colorName : 'Silver Metallica'
        }
      ],
      rating: {
        critic : 50,
        performance : 97,
        interior : 96,
        safety : 80,
        reliability : 85,
        overall : 90
      },
      name : "Swift L"
    },
    {
      styles: [
        {
          color: 'blue',
          carColorImg: '../assets/blue.jpg',
          colorName : 'Blue Teal'
        },
        {
          color: 'grey',
          carColorImg: '../assets/grey.jpg',
          colorName : 'Grey Hound'
        },
        {
          color: 'red',
          carColorImg: '../assets/red.jpg',
          colorName : 'Red Velvet'
        },
      ],
      rating: {
        critic : 95,
        performance : 97,
        interior : 88,
        safety : 90,
        reliability : 92,
        overall : 90
      },
      name : "Swift VXI"
    },
   
  ]

  constructor() {}

  ngOnInit(){
    
    if(this.data.length > 0){
      this.selectedCar = this.data[0];
      this.selectedCarIndex = 0;
      this.selectedCarColorIndex = 0;
      // this.isAnimate = !this.isAnimate;
    }
      
  }

  ngAfterViewInit(){
    this.isAnimate = true;
  }

  carColorChange(index){
    this.selectedCarColorIndex = index;
  }

  selectCar(index){
    console.log(index)
    this.isAnimate = false;
    // this.isAnimate = false;
    this.selectedCar = this.data[index];
    this.selectedCarIndex = index;
    this.selectedCarColorIndex = 0;
    console.log(this.data[index]);
    setInterval(()=>{
      this.isAnimate = true;
    },1);
    // this.isAnimate = true;
  }
  
}
