import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './intenalco.component.html',
  styleUrls: ['./intenalco.component.css']
})

export class IntenalcoComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  public quotes:any[] = [
    'Nuevas experiencias 🍹',
    'Cada momento, una oportunidad 🚀', 
    // 'Texo de prueba 3', 
    // 'Texo de prueba 4'
  ];

  public quote:string = '';
  public timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  public calculateTimeRemaining(targetDate: Date): { days: number, hours: number, minutes: number, seconds: number } {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;
  
    if (timeRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }

  public positionRandom = (array: any[]):string => array.length ? array[Math.floor(Math.random() * array.length)] : undefined;

  ngOnInit(): void {
    const updateCountdown = ()=>this.timeRemaining = this.calculateTimeRemaining(new Date('2023-10-31T16:30:00Z'));
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    const id = this.route.snapshot.paramMap.get('id');
    if(id) this.quote = this.quotes[Number(id)];
    else this.quote = this.positionRandom(this.quotes);
    
    setInterval(() => this.quote = this.positionRandom(this.quotes), 10000);
  }
}