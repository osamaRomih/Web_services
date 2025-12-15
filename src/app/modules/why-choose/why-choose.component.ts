import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss',
})
export class WhyChooseComponent {
  features: Feature[] = [
    {
      icon: 'fas fa-palette',
      title: 'تصميم عصري',
      description:
        'واجهة مستخدم وتجربة استخدام نظيفة، عصرية واستجابة لجميع الأجهزة',
      delay: 70,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-bolt',
      title: 'أداء سريع',
      description: 'مواقع ويب محسنة للسرعة وتجربة مستخدم سلسة',
      delay: 140,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'متوافق مع جميع الأجهزة',
      description: 'يظهر بشكل مثالي على جميع الأجهزة وأحجام الشاشات',
      delay: 210,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-lock',
      title: 'آمن وموثوق',
      description: 'موقعك محمي ويعمل بشكل موثوق دون توقف',
      delay: 280,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-user-friends',
      title: 'مركز على العميل',
      description:
        'وضع احتياجاتك في المقام الأول وألحافظ على التواصل الواضح معك طوال المشروع',
      delay: 350,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'أسعار اقتصادية',
      description:
        'حلول ويب احترافية بأسعار تنافسية تناسب جميع الميزانيات بدون التنازل عن الجودة',
      delay: 100,
      bgColor: '#0084ff',
    },
    {
      icon: 'fas fa-headset',
      title: 'دعم على مدار الساعة',
      description: 'دائمًا هنا لمساعدتك والإجابة على استفساراتك',
      delay: 420,
      bgColor: '#0084ff',
    },
  ];
}
interface Feature {
  icon: string;
  title: string;
  description: string;
  delay: number;
  bgColor?: string;
}
