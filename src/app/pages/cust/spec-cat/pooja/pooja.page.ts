import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.page.html',
  styleUrls: ['./pooja.page.scss'],
})
export class PoojaPage implements OnInit {
  public pooja=[
    {id:25,image_url:"assets/img/pooja/1.png",t_name:"மஞ்சள்",s_name:"हरिद्रा",h_name:"हल्दी",e_name:"Turmeric Powder"},
    {id:25,image_url:"assets/img/pooja/2.png",t_name:"குங்குமம்",s_name:"कुङ्कुम",h_name:"कुमकुम",e_name:"Kumkum Powder"},
    {id:25,image_url:"assets/img/pooja/3.png",t_name:"ஊதுபத்தி ",s_name:"धूपं",h_name:"अगरबत्ती",e_name:"Agarbathi"},
    {id:25,image_url:"assets/img/pooja/4.png",t_name:"கற்பூரம்",s_name:"कर्पूरम्",h_name:"कपूर",e_name:"Camphor"},
    {id:25,image_url:"assets/img/pooja/5.png",t_name:"சாம்பிராணி",s_name:"धूपं",h_name:"धुप",e_name:"Dhoop"},
    {id:25,image_url:"assets/img/pooja/6.png",t_name:" கலசம்",s_name:"कलसं",h_name:"कास्केट",e_name:"Kalasam"},
    {id:25,image_url:"assets/img/pooja/7.png",t_name:"தேன் ",s_name:"मधु",h_name:"शहद",e_name:"Honey"},
    {id:25,image_url:"assets/img/pooja/8.png",t_name:"உலர் பழங்கள்",s_name:"",h_name:"मेवे",e_name:"Dry Fruits(mixed)"},
    {id:25,image_url:"assets/img/pooja/9.png",t_name:"நவ தானியங்கள்",s_name:"नव धान्य",h_name:"नव धन्या",e_name:"Nava Dhanya"},
    {id:25,image_url:"assets/img/pooja/10.png",t_name:"அரிசி",s_name:"अनस्",h_name:"चावल",e_name:"Rice"},
    {id:25,image_url:"assets/img/pooja/11.png",t_name:"அரிசி மாவு",s_name:"पिष्टानि",h_name:"चावल का आटा",e_name:"Rice Flour"},
    {id:25,image_url:"assets/img/pooja/12.png",t_name:"சர்க்கரை",s_name:"शर्करा",h_name:"चीनी",e_name:"Sugar"},
    {id:25,image_url:"assets/img/pooja/13.png",t_name:"வெள்ளை நூல்",s_name:"श्वेत सूत्र",h_name:"सफेद धागा",e_name:"White Thread"},
    {id:25,image_url:"assets/img/pooja/14.png",t_name:"பிளவுஸ் துண்டுகள்",s_name:"चोलक पट",h_name:"ब्लाउज के टुकड़े",e_name:"Blouse Pieces"},
    {id:25,image_url:"assets/img/pooja/15.png",t_name:"புடவை",s_name:"शाटिका",h_name:"साड़ी",e_name:"Saree"},
    {id:25,image_url:"assets/img/pooja/16.png",t_name:"தர்பே",s_name:"दर्भ",h_name:"धरबे",e_name:"Dharbe"},
    {id:25,image_url:"assets/img/pooja/17.png",t_name:"பாக்கு",s_name:"पूग",h_name:"सुपारी",e_name:"Betal Nuts"},
    {id:25,image_url:"assets/img/pooja/18.png",t_name:"தீபம் எண்ணெய்",s_name:"",h_name:"दीपक का तेल",e_name:"Deepam Oil"},
    {id:25,image_url:"assets/img/pooja/19.png",t_name:"காட்டன் திரி",s_name:"तूलिका",h_name:"कपास की ईंटें",e_name:"Cotton Wicks"},
    {id:25,image_url:"assets/img/pooja/20.png",t_name:"சுற்று காட்டன்",s_name:"गोलाकार तूलिका",h_name:"कॉटन विक्स राउंड",e_name:"Round Cotton Wick"},
    {id:25,image_url:"assets/img/pooja/21.png",t_name:"தீப்பெட்டி",s_name:"अग्निपेटिका",h_name:"दियासलाई",e_name:"Match Box"},
    {id:25,image_url:"assets/img/pooja/22.png",t_name:"ஹோமா குச்சிகள்",s_name:"समिध",h_name:"होमा लाठी",e_name:"Homa Sticks"},
    {id:25,image_url:"assets/img/pooja/23.png",t_name:"அரச சமிதா",s_name:"पवित्रक	समिध",h_name:"हराली समिधा",e_name:"Harali Samidha"},
    {id:25,image_url:"assets/img/pooja/24.png",t_name:"நவகிரக சமிதா",s_name:"नवग्रह	समिध",h_name:"नवग्रह समिधा",e_name:"Navagraha Samidha"},
    {id:25,image_url:"assets/img/pooja/25.png",t_name:"ஹவன் சப்ளைஸ்",s_name:"",h_name:"वह समगरी है",e_name:"Havan Samagri"},
    {id:25,image_url:"assets/img/pooja/26.png",t_name:"நெல்பொரி",s_name:"",h_name:"बाल्ड हार",e_name:"Battada arallu"},
    {id:25,image_url:"assets/img/pooja/27.png",t_name:"வெண் கடுகு",s_name:"श्वेतसर्षप",h_name:"सफेद सरसों",e_name:"White Mustard"},
    {id:25,image_url:"assets/img/pooja/28.png",t_name:"நிறங்கள்",s_name:"वर्ण",h_name:"रंग",e_name:"Colors"},
    {id:25,image_url:"assets/img/pooja/29.png",t_name:"அகல் விளக்கு",s_name:"मृत्तिकादीप",h_name:"मिट्टी का दीपक",e_name:"Clay Deepa"},
    {id:25,image_url:"assets/img/pooja/30.png",t_name:"நதி நீர",s_name:"जाह्नवी	जल",h_name:"गंगा जल",e_name:"Ganga Jal"},
    {id:25,image_url:"assets/img/pooja/31.png",t_name:"உலர்ந்த தேங்காய்",s_name:"शुष्कनारिकेल",h_name:"सूखा नारियल",e_name:"Dry Coconut"},
    {id:25,image_url:"assets/img/pooja/32.png",t_name:"பசு சிறுநீர்",s_name:"गोमूत्र",h_name:"गोमूत्र",e_name:"Gomutra"},
    {id:25,image_url:"assets/img/pooja/33.png",t_name:"வேட்டி",s_name:"",h_name:"धोती",e_name:"Dothi"},
    {id:25,image_url:"assets/img/pooja/34.png",t_name:"பட்டு உடை",s_name:"कौशेयवस्त्र",h_name:"रेशमा एक कपड़ा है",e_name:"Reshme Vastra"},
    {id:25,image_url:"assets/img/pooja/35.png",t_name:"சிவப்புதுண்டு",s_name:"रक्तवस्त्र",h_name:"रेडक्लोथ",e_name:"RedCloth"},
    {id:25,image_url:"assets/img/pooja/36.png",t_name:"சந்தனம் பவுடர்",s_name:"गन्धयुति",h_name:"चंदन पाउडर	",e_name:"sandal powder"},
    {id:25,image_url:"assets/img/pooja/37.png",t_name:"பூனல்",s_name:"उपवीतक",h_name:"धागा",e_name:"Janivar"},
    {id:25,image_url:"assets/img/pooja/38.png",t_name:"கருப்பு எள்",s_name:"कृष्णतिल",h_name:"ब्लैक तक",e_name:"Black til"},
    {id:25,image_url:"assets/img/pooja/39.png",t_name:"தொன்னை",s_name:"",h_name:"कटोर डोना प्लेट",e_name:"dhonne"},
    {id:25,image_url:"assets/img/pooja/40.png",t_name:"வெற்றி வேர்",s_name:"खटिका",h_name:"",e_name:"Lavancha"},
    {id:25,image_url:"assets/img/pooja/41.png",t_name:"தொன்னை தட்டுகள்",s_name:"",h_name:"कटोर	डोने प्लेट्स",e_name:"Donne Plates"},
    {id:25,image_url:"assets/img/pooja/42.png",t_name:"நெய்",s_name:"हवनीय",h_name:"घी",e_name:"Ghee"},
    {id:25,image_url:"assets/img/pooja/43.png",t_name:"விபூதி",s_name:"भस्मन्",h_name:"विभूति",e_name:"Vibhoothi"},
    {id:25,image_url:"assets/img/pooja/44.png",t_name:"பன்னீர்",s_name:"पाटलपुष्पजल",h_name:"गुलाब जल",e_name:"Rose water"},
    {id:25,image_url:"assets/img/pooja/45.png",t_name:"பெட்டி வெல்லம்",s_name:"ेटिकागुड",h_name:"बॉक्स गुड़",e_name:"Box Jaggery"},
    {id:25,image_url:"assets/img/pooja/46.png",t_name:"ஹோமா குந்தா",s_name:"",h_name:"होमा कुंडा",e_name:"Homa Kunda"},
    {id:25,image_url:"assets/img/pooja/47.png",t_name:"மஞ்சள் / ஹால்டி குச்சிகள்",s_name:"",h_name:"हारिद्र	हल्दी / हल्दी की छड़ें",e_name:"Turmeric/Haldi sticks"},
    {id:25,image_url:"assets/img/pooja/48.png",t_name:"பேரீச்சம்பழம்",s_name:"काठिन",h_name:"खर्जुरा",e_name:"Karjura"},
    {id:25,image_url:"assets/img/pooja/49.png",t_name:"கலப்பு பழங்கள்",s_name:"मिश्रफल",h_name:"मिश्रित फल",e_name:"Mixed Fruits"},
    {id:25,image_url:"assets/img/pooja/50.png",t_name:"தளர்வான மலர்கள்",s_name:"पुष्प",h_name:"ढीले फूल",e_name:"Loose Flowers"},
    {id:25,image_url:"assets/img/pooja/51.png",t_name:"மலர் மாலை",s_name:"मालिका",h_name:"फूल माला (माला)",e_name:"Flower Garland"},
    {id:25,image_url:"assets/img/pooja/52.png",t_name:"தேங்காய்",s_name:"नारिकेल",h_name:"नारियल",e_name:"Coconuts"},
    {id:25,image_url:"assets/img/pooja/53.png",t_name:"வெற்றிலை",s_name:"ताम्बूल",h_name:"बेताल पत्तियां",e_name:"Betal Leaves"},
    {id:25,image_url:"assets/img/pooja/54.png",t_name:"பால்",s_name:"क्षीरम्",h_name:"दूध",e_name:"Milk"},
    {id:25,image_url:"assets/img/pooja/55.png",t_name:"தயிர்",s_name:"दधि",h_name:"दही",e_name:"Curd"},
    {id:25,image_url:"assets/img/pooja/56.png",t_name:"மா இலைகள்",s_name:"आम्रपत्र",h_name:"आम की पत्तियाँ",e_name:"Mango Leaves"},
    {id:25,image_url:"assets/img/pooja/57.png",t_name:"வாழை இலைகள்",s_name:"कदलीपत्र",h_name:"केले के पत्ते",e_name:"Banana Leaves"},
    {id:25,image_url:"assets/img/pooja/58.png",t_name:"வாழை மரங்கள்",s_name:"ऊरुस्तम्भा",h_name:"केले के पेड़",e_name:"Banana Trees"},
    {id:25,image_url:"assets/img/pooja/59.png",t_name:"மூலிகை இலைகள்",s_name:"पत्त्रशाकतृण",h_name:"फ्लाई दुल्हन",e_name:"Machi Patri"},
    {id:25,image_url:"assets/img/pooja/60.png",t_name:"பூசணிக்காய்",s_name:"कुष्माण्ड",h_name:"कद्दू",e_name:"Pumpkin"},
    {id:25,image_url:"assets/img/pooja/61.png",t_name:"எலுமிச்சை",s_name:"जम्बीर",h_name:"नींबू",e_name:"Lemon"},
    {id:25,image_url:"assets/img/pooja/62.png",t_name:"அறுகம்புல்",s_name:"शतग्रन्थि",h_name:"हरी घास",e_name:"Green Grass"},
    {id:25,image_url:"assets/img/pooja/63.png",t_name:"வாழைபழம்",s_name:"कदली",h_name:"केला",e_name:"Banana"},
  ]
  constructor(public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router) { }

  ngOnInit() {
    this.alertService.developmentNote('To reduce app size images are hidden!');
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
