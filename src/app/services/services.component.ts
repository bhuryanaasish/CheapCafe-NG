import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

    services = [
      {
        name: 'PAN Card',
        position: 'पैन कार्ड',
        description: [
          'यदि आपके आधार कार्ड मे फ़ोन नंबर लिंक है तो 3-4 घंटे मे पैन कार्ड प्राप्त करे |',
          'यदि आपके आधार कार्ड मे फ़ोन नंबर लिंक नहीं है तो 3-4 दिन मे पैन कार्ड प्राप्त करे |',
          'पैन कार्ड मे 5-10 दिन के अंदर सुधार कराए |'
        ],
        image: 'assets/img/services/PanCard.jpg',
        link: '/pan-card'
      },
      {
        name: 'Income Certificate',
        position: 'आय प्रमाण पत्र',
        description: [
          'आय प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस',
          'आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है |'
        ],
        image: 'assets/img/services/IncomeCertificate.jpg',
        link: '/income-certificate'
      },
      {
        name: 'Caste Certificate',
        position: 'जाति प्रमाण पत्र',
        description: [
          'जाति प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस',
          'आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है |'
        ],
        image: 'assets/img/services/CasteCertificate.jpg',
        link: '/caste-certificate'
      },
      {
        name: 'Domicile Certificate',
        position: 'निवास प्रमाण पत्र',
        description: [
          'निवास प्रमाण पत्र के लिए - समय 8 से 20 कार्यदिवस',
          'आधार कार्ड, फोटो, मोबाइल न०, माता का नाम, व्यवसाय, किस कार्य के लिए आवश्यकता है |'
        ],
        image: 'assets/img/services/IncomeCertificate.jpg',
        link: '/domicile-certificate'
      },
      {
        name: 'Ayushman Card',
        position: 'आयुष्मान कार्ड',
        description: [
          'यदि आपके आधार कार्ड मे फ़ोन नंबर लिंक है तो 3-4 दिन मे आयुष्मान कार्ड प्राप्त करे |',
          'पहले से बना हुआ या खोया हुआ आयुष्मान कार्ड निकलवाने के लिए आधार कार्ड, आधार कार्ड से लिंक मोबाइल नम्बर, आवेदक का नाम और पिता/पति का नाम होना जरूरी है|'
        ],
        image: 'assets/img/services/AyushmanCard.jpg',
        link: '/ayushman-card'
      },
      {
        name: 'Passport',
        position: 'पासपोर्ट',
        description: [
          'एक दिन मे पासपोर्ट का आवेदन कराये|',
          'सबसे जल्दी पासपोर्ट की अपॉइंटमेंट प्राप्त करे|'
        ],
        image: 'assets/img/services/Passport.jpg',
        link: '/passport'
      },
      {
        name: 'Driving Licence',
        position: 'ड्राइविंग लाइसेंस',
        description: [
          'एक दिन मे ड्राइविंग लाइसेंस का आवेदन कराये|',
          'सबसे जल्दी ड्राइविंग लाइसेंस की अपॉइंटमेंट प्राप्त करे|'
        ],
        image: 'assets/img/services/DrivingLicence.jpg',
        link: '/driving-licence'
      },
      {
        name: 'Ration Card',
        position: 'राशन कार्ड',
        description: ['एक दिन मे राशन कार्ड का आवेदन कराये|'],
        image: 'assets/img/services/RationCard.jpg',
        link: '/ration-card'
      },
      {
        name: 'PM Kisan Samman Nidhi',
        position: 'किसान सम्मान निधि योजना',
        description: [
          'यदि आपके नाम भी जमीन है तो जल्द उठाये किसान सम्मान निधि योजना का लाभ|'
        ],
        image: 'assets/img/services/PmKisan.jpg',
        link: '/pm-kisan'
      },
      {
        name: 'HDFC Bank',
        position: 'Account Opening',
        description: [
          'यदि आप HDFC Bank मे खाता खुलवाने के लिए Apply बटन पर क्लिक करे|'
        ],
        image: 'assets/img/services/HDFC.png',
        link: '/hdfc-account'
      },
      {
        name: 'AXIS Bank',
        position: 'Account Opening',
        description: [
          'यदि आप AXIS Bank मे खाता खुलवाने के लिए Apply बटन पर क्लिक करे|'
        ],
        image: 'assets/img/services/AXISBank.jpg',
        link: '/axis-account'
      },
      {
        name: 'Insurance',
        position: 'बीमा',
        description: [
          'किसी भी तरीके का बीमा कराने के लिए Apply बटन पर Click करे|'
        ],
        image: 'assets/img/services/Insurance.jpg',
        link: '/insurance'
      },
      {
        name: 'Union Bank',
        position: 'घर बैठे बैंक खाता खुलवाये |',
        description: ['यूनियन बैंक में खता खुलवाने के लिए घर पर ही सेवा |'],
        image: 'assets/img/services/UnionBank.jpg',
        link: '/union-bank'
      },
      {
        name: 'AEPS Retailer',
        position: 'Money transfer, withdrawal etc.',
        description: [
          'आधार कार्ड से पैसे निकालने, ट्रान्सफर करने वाली ID बनवाने के लिए Apply Button पर क्लिक करे |'
        ],
        image: 'assets/img/services/Ban-AEPS-01.jpg',
        link: '/rnfi-retailer'
      },
      {
        name: 'PF (Provident Fund)',
        position: 'भविष्य निधि',
        description: [
          'किसी भी कंपनी का PF निकलवाने के लिए Apply बटन पर क्लिक करे|'
        ],
        image: 'assets/img/services/PF.jpg',
        link: '/provident-fund'
      },
      {
        name: 'Pension',
        position: 'पेंशन',
        description: ['Coming Soon...'],
        image: 'assets/img/services/Pension.png',
        link: '/'
      }
    ];
    
  ngOnInit(): void {
  }

}
