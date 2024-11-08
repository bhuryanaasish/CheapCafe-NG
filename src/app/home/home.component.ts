import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  services = [
    {
      name: 'PAN Card',
      position: 'पैन कार्ड',
      image: 'assets/img/services/PanCard.jpg',
      alt: 'Pan Card',
      details: [
        'यदि आपके आधार कार्ड मे फ़ोन नंबर लिंक है तो 3-4 घंटे मे पैन कार्ड प्राप्त करे |',
        'यदि आपके आधार कार्ड मे फ़ोन नंबर लिंक नहीं है तो 3-4 दिन मे पैन कार्ड प्राप्त करे |',
        'पैन कार्ड मे 5-10 दिन के अंदर सुधार कराए |'
      ],
      link: '/services/pan-card'
    },
    {
      name: 'Income Certificate',
      position: 'आय प्रमाण पत्र',
      image: 'assets/img/services/IncomeCertificate.jpg',
      alt: 'Income Certificate',
      details: [
        'आय प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है|'
      ],
      link: '/services/income-certificate'
    },
    {
      name: 'Caste Certificate',
      position: 'जाति प्रमाण पत्र',
      image: 'assets/img/services/CasteCertificate.jpg',
      alt: 'Caste Certificate',
      details: [
        'जाति प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है |'
      ],
      link: '/services/caste-certificate'
    },
    {
      name: 'Domicile Certificate',
      position: 'निवास प्रमाण पत्र',
      image: 'assets/img/services/IncomeCertificate.jpg',
      alt: 'Domicile Certificate',
      details: [
        'निवास प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है|'
      ],
      link: '/services/domicile-certificate'
    }
  ];
  ngOnInit(): void {
  }

}
