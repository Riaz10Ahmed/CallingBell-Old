import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { EnvService } from '../../../../services/env.service';
@Component({
  selector: 'app-celeb-item',
  templateUrl: './celeb-item.page.html',
  styleUrls: ['./celeb-item.page.scss'],
})
export class CelebItemPage implements OnInit {
  segment:any;
  segment2:any;
  segment3:any;
  segment4:any;
  service:any;

  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:false
  };

  public wholeCakes=[
    {id:1,name:"Butter Scotch",price:"630",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Butterscotch.jpg",desc:"Discover the genius of the Parkinsons of Donaster, who invented butterscotch that takes this spongy, creamy cake loaded with layers of freshly whipped cream to a different level"},
    {id:2,name:"Strawberry",price:"462",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Strawberry.jpg",desc:"The tingly, lingering flavour of strawberry flavoured cream slathers this soft and delicious gastronomic delight"},
    {id:3,name:"Black currant",price:"515",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Black-currant.jpg",desc:"It's quite neat, it's a treat, and it's truly very bittersweet"},
    {id:4,name:"Black Forest",price:"572",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Black-forest-2.jpg",desc:"On some occasions you just can’t deny yourself the indulgence of a chocolate sponge that’s battered with fresh cream, candied cherries and showered with a torrent of chocolate flakes"},
    {id:5,name:"Choco Truffle",price:"630",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Choco-truffle.jpg",desc:"You can't help but lick your fingers with this luxurious, delicious, gooey masterpiece that’s crafted from rich chocolate truffle cream"},
    {id:6,name:"White Forest",price:"572",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/White-forest.jpg",desc:"For a heart that is pure, it’s always white for sure with this classic that’s rich and creamy and dressed in a coat of white chocolate flake"},
    {id:7,name:"Red Velvet",price:"630",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/RedVelvet.jpg",desc:"A vibrant red that’s a feast for the eyes and an eggless wonder that does wonders to the palate"},
    {id:8,name:"Chocolate & Nuts",price:"693",image_url:this.env.IMG_API_URL + "Cakes/Whole Cakes/Choco-nuts.jpg",desc:"Its twist comes with a generous topping of chocolate truffle cream and a liberal sprinkling of nuts"},
  ]

  public themeCakes=[
    {id:9,name:"Bear Adventure",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-0.jpg", desc:"3 little bears climb a rose wall made of frosted cream, sweet almond icing and fresh cream."},
    {id:10,name:"Minion Rock",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-1.jpg",desc:"It’s the bright yellow, sunshine fellow cake! Soft cream vanilla cake is covered with almond icing for everyone to say Baboi!"},
    {id:11,name:"Jungle Book",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-2.jpg",desc:"Green grass and animals frolic on this dreamy cake of fresh cream vanilla with Pista icing."},
    {id:12,name:"Bear Dare",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-3.jpg",desc:"Bear are out on a dare! Playing on blue icing and enjoying a bite of the softest, smoothest cake filled with fresh cream."},
    {id:13,name:"Cream Bears",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-4.jpg", desc:"Little bears gambol on a sweet, creamy land of soft white icing. What can be more enchanting?"},
    {id:14,name:"Pengu Love",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-5.jpg", desc:"An icy world of almonds and cake. A place where cute penguins gather to make your life merry!"},
    {id:15,name:"Go for Goal",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-6.jpg", desc:"You just netted a sumptuous all pista delight that will turn all your friends into fans of your taste!"},
    {id:16,name:"Honky Tonk",price:"500",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-7.jpg",desc:"A journey of a cake with peppermint sun shining bright and a delicious car to take you wherever you want!"},
    {id:17,name:"Bear Hug",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Theme Cakes/ThemeCake-8.jpg", desc:"Pink candy hearts raise this fluffly, creamy cake to dreamy heights! You’ll simply love it."},
  ]

  public birthdayCakes=[
    {id:18,name:"Elifantasy",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-0.jpg", desc:"An adorable elephant sits on joyfully coloured butter cream to bring good times to the birthday darling."},
    {id:19,name:"Chocrazy",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-2.jpg",desc:"Thick swirls of chocolate add a terrific zest to rich, chocolate cake that’s heightened with chocolate icing"},
    {id:20,name:"All in Choc",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-9.jpg",desc:"A cocoa river flows down an iceland of sweet almond taking into a horizon of flavorsome heaven."},
    {id:21,name:"Box of Delight",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-14.jpg",desc:"This rich caramel cake is full of hidden gifts. Chocalate candy and the vanilla icing all galore! Open and discover true heaven!"},
    {id:22,name:"Cookies and Cream",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-10.jpg", desc:"Crunchy bits of Ore cookies turn rich, fresh cream vanilla cake into a cocoa dreamland."},
    {id:23,name:"Crowning Glory",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-15.jpg", desc:"A fresh as a rose cake, topped by creamy swirls and crowned with a rose candy!"},
    {id:24,name:"Tender Hill",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Birthday Cakes/Birthday-cake-16.jpg", desc:"A glorious brown cocoa hill has rivers of molten chocolate flowing down it and peaks of white candy crowning it."},
  ]

  public weddingCakes=[
    {id:25,name:"Happily troth",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-0.jpg", desc:"A vanilla butter cake filled with whipped cream and frosted with white and lavender chiffon frosting."},
    {id:26,name:"Purple Daze",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-1.jpg",desc:"For all the moony eyed, a cake of royal passion! With blackberries. Swoon into it."},
    {id:27,name:"Tower of love",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-7.jpg",desc:"A pure fresh cream tower in gentle meringue. An ode to your forever love."},
    {id:28,name:"Love in red and White",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-3.jpg",desc:"A rich chocolate cake with crafted hearts or ornamenting it."},
    {id:29,name:"Ringed",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-6.jpg", desc:"A swirl of vanilla and chocolate romance in this dense cake. It’s a love story by itself."},
    {id:30,name:"Heart of Hearts",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Wedding Cakes/Wedding-Cake-2.jpg", desc:"A cake that stands for true love all the way. A white chocolate cake is covered with silky almond fondant and covered with Candy hearts. A memory you’ll cherish forever."},
  ]

  public barbieCakes=[
    {id:31,name:"Empress Barbie",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-01.jpg",desc:"Rich, sumptuous full cream cake Is covered in royal swirls of fondant and iced strawberry flowers"},
    {id:32,name:"Sugar N’ Spice Barbie",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-02.jpg",desc:"Barbie comes floating in multi-colour swirls of soft almond icing that cover yummy chocolate cream cake."},
    {id:33,name:"Pretty Bow Barbie",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-05.jpg",desc:"This gentle Barbie is graceful in pink and blue fondant, that hide a heart of creamy strawberry jelly cake."},
    {id:34,name:"Wild Rose Barbie",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-04.jpg",desc:"Luscious rose and vanilla flavored cake is covered in layers and layers of butter cream icing. Yummy!"},
    {id:35,name:"Strawberry dream Barbie",price:"650",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-06.jpg",desc:"Tangy and sweet strawberry cake enveloped in dreamy yet tangy raspberry and strawberry cream."},
    {id:36,name:"Pretty-pretty Barbie",price:"750",image_url:this.env.IMG_API_URL + "Cakes/Barbie Cakes/Barbie-03.jpg",desc:"Layers of vanilla and Strawberry icing make a pink and white Barbie your birthday dream."},
  ]

  public photoCakes=[
    {id:37,name:"Center Stage",price:"600",image_url:this.env.IMG_API_URL + "Cakes/Photo Cakes/photo_cake_7.jpg", desc:"The apple of everyone’s eyes, your pretty smile brings alive this cake. Be the centre of attraction along with this tasty delight."},
    {id:38,name:"Thalapathi Special",price:"700",image_url:this.env.IMG_API_URL + "Cakes/Photo Cakes/photo_cake_1.jpg",desc:"Superstar of a cake meant for the action hero. In chocolate and cream, enjoy a cake dream!"},
  ]

  public physicalCard=[
    {id:39,name:"red-wedding",price:"99",image_url:this.env.IMG_API_URL + "Card/theme2.jpg"},
    {id:40,name:"colourful-bday",price:"99",image_url:this.env.IMG_API_URL + "Card/theme1.jpg"},
    {id:41,name:"basic-bday",price:"99",image_url:this.env.IMG_API_URL + "Card/theme3.jpg"},
  ]
  public eCard=[
    {id:42,name:"colourful-bday",price:"10",image_url:this.env.IMG_API_URL + "Card/theme1.jpg"},
    {id:43,name:"red-wedding",price:"10",image_url:this.env.IMG_API_URL + "Card/theme2.jpg"},
    {id:44,name:"basic-bday",price:"10",image_url:this.env.IMG_API_URL + "Card/theme3.jpg"},
  ]

  public comboPacks=[
    {id:45,name:"Card + Bouquet",min_price:"399",max_price:"699",image_url:this.env.IMG_API_URL + "Combo/1.jpg",desc:"'A Personalised Card and a bouquet'"},
    {id:46,name:"Card + Cake (1/2 Kg)",min_price:"599",max_price:"799",image_url:this.env.IMG_API_URL + "Combo/2.jpg",desc:"'A Personalised Card and a delicious 1/2 kg cake'"},
    {id:47,name:"Card + Cake (1 Kg)",min_price:"999",max_price:"1299",image_url:this.env.IMG_API_URL + "Combo/3.jpg",desc:"'A Personalised Card and a delicious 1 kg cake'"},
    {id:48,name:"Card + Cake + Return Gift",min_price:"1199",max_price:"1999",image_url:this.env.IMG_API_URL + "Combo/3.jpg",desc:"'A Personalised Card, a delicious 1/2 kg cake and a worthy return gift'"},
  ]

  public grilledPanini=[
    {id:49,name:"Veg & Cheese",price:"79",image_url:"assets/img/Snacks/Grilled panni/veg-cheese.jpg",desc:"True taste for the intenditoreitaliano with an autentico Panini packed with the pick of vegetables and original sauces"},
    {id:50,name:"Paneer Tikka",price:"100",image_url:"assets/img/Snacks/Grilled panni/paneer-tikka.jpg",desc:"Modificare for the fusion minded with marinated paneer filling bedded across a layer of lettuce, cucumber, tomato, onion and capsicum sandwiched and grilled for a deliziosipanini"},
    {id:51,name:"Peri Peri Paneer",price:"100",image_url:"assets/img/Snacks/Grilled panni/peri-peri-paneer.jpg",desc:"The 4 p's that make up a great all round dish. Delicious cottage cheese lathered with rich and savory seasoning & loaded with periperi sauce with freshly stacked veggies all around."},
    {id:52,name:"Chicken Tikka",price:"105",image_url:"assets/img/Snacks/Grilled panni/chicken-tikka.jpg",desc:"Oven cooked pollo marinated in yoghurt and spices, jumbled on a mountain of lettuce, cucumber, onion, tomato and capsicum for a incrediblementepanini"},
    {id:53,name:"Smoked Chicken",price:"105",image_url:"assets/img/Snacks/Grilled panni/smoked-chicken.jpg",desc:"Pollo fresco, marinated and slow cooked for a smoky flavour and mingled with a diversity of vegetables for an esperienzastraordinaria"},
    {id:54,name:"Peri Peri Chicken",price:"105",image_url:"assets/img/Snacks/Grilled panni/grilled.jpg",desc:"The exciting combination of tongue tingling periperi sauce, tender pieces of chicken and a generous dose of a tasty filling enough to make feel happy inside and out simultaneously."},
  ]

  public classicGrilledSandwich=[
    {id:55,name:"Veg & Cheese",price:"58",image_url:"assets/img/Snacks/Classic Sandwich/veg_cheese.jpg",desc:"The marriage of just born vegetables and classic cheese, sandwiched and grilled between two wedges of heaven"},
    {id:56,name:"Paneer Tikka",price:"79",image_url:"assets/img/Snacks/Classic Sandwich/paneer_tikka.jpg",desc:"The artistry of marinated cottage cheese, grilled and amalgamated with a slurry of vegetables slathered with south west sauce and imprisoned between two slices of shangrila"},
    {id:57,name:"Peri Peri Paneer",price:"79",image_url:"assets/img/Snacks/Classic Sandwich/peri_peri_paneer.jpg",desc:"Periperipaneer is the portuguese sauce used on grilled cottage cheese squeezed by finely toasted fresh bread slices that makes for a great tasting snack if you’re in the mood for one."},
    {id:58,name:"Chicken Tikka",price:"84",image_url:"assets/img/Snacks/Classic Sandwich/chicken_tikka.jpg",desc:"A classic duet between succulent grilled chicken and a medley of vegetables captured in the arena of two oven fresh slices"},
    {id:59,name:"Smoked Chicken",price:"84",image_url:"assets/img/Snacks/Classic Sandwich/smoked_chicken.jpg",desc:"Tender chicken smoked into carefully carved strips, mounted on a bed of garden fresh vegetables, drenched in the mystique of south west sauce and boxed in by two slices of classic bread"},
    {id:60,name:"Peri Peri Chicken",price:"84",image_url:"assets/img/Snacks/Classic Sandwich/classic.jpg",desc:"Periperi sauce, one of the best additions to our already tasty chicken sandwiches makes that taste linger in your taste buds for a long time."},
  ]

  public puffsSamosas=[
    {id:61,name:"Veg Puff",price:"20",image_url:"assets/img/Snacks/Samosa/veg_puff.jpg",desc:"Fulfill your craving for a crisp ‘n ‘flaky savoury with this luscious puff pastry that’s stuffed with a delightful medley of juicy vegetables"},
    {id:62,name:"Chicken Puff",price:"33",image_url:"assets/img/Snacks/Samosa/chicken_puff.jpg",desc:"Delight your taste buds with a tender, juicy chicken stuffing that’s garnished with a melange of spices"},
    {id:63,name:"Choco Puff",price:"30",image_url:"assets/img/Snacks/Samosa/chocopuff2.jpg",desc:"Are these puffs savory or sweet? Both! For inside them Is rich dark chocolate!"},
    {id:64,name:"Chicken Samosa",price:"35",image_url:"assets/img/Snacks/Samosa/samosa.jpg",desc:"Spicy, tangy chicken enveloped in crisp aromatic parcels! One will never be enough!"},
    {id:65,name:"Paneer Samosa",price:"33",image_url:"assets/img/Snacks/Samosa/samosa.jpg",desc:"Succulent and fiery paneer play inside this Samosa, making it simply irresistible."},
    {id:66,name:"Veg Samosa",price:"17",image_url:"assets/img/Snacks/Samosa/samosa.jpg",desc:"Take a spicy journey with this savoury that’s bundled with a unique combination of succulent vegetables"},
    {id:67,name:"Chicken Sausage Roll",price:"35",image_url:"assets/img/Snacks/Samosa/chicken-sausage-roll.jpg",desc:"What lies in the belly of this roll? A piece of delicious Chicken sausage!"},
  ]

  public bread=[
    {id:68,name:"Sweet bread (300gms)",price:"25",image_url:"assets/img/Snacks/Breads/sweet_bread.jpg",desc:"Gratify your sweet tooth with feather soft sweet bread as you enjoy a crunchy toast or a delicious French toast"},
    {id:69,name:"Salt bread (300gms)",price:"25",image_url:"assets/img/Snacks/Breads/sweet_bread.jpg",desc:"Savour the texture of a wonderfully baked and perfectly sliced bread that will melt your taste buds with its wheaty zing"},
  ]

  public Beverages=[
    {id:"70",name:"Butterscotch Milkshake",price:"25",image_url:"assets/img/Beverages/Beverages/butterscotch_milkshake.jpg",desc:""},
    {id:"71",name:"Maa Apple",price:"10",image_url:"assets/img/Beverages/Beverages/apple.jpg",desc:""},
    {id:"72",name:"Maa Mango",price:"10",image_url:"assets/img/Beverages/Beverages/maa.jpg",desc:""},
    {id:"73",name:"Kinley Water 500 ML",price:"10",image_url:"assets/img/Beverages/Beverages/waterbottle.jpg",desc:""},
    {id:"74",name:"Kinley Water 1l",price:"20",image_url:"assets/img/Beverages/Beverages/1lwatterbottle.jpg",desc:""},
  ]

  public Puddings=[
    {id:"75",name:"Black Forest",price:"63",image_url:"assets/img/Beverages/Puddings/black_forest.jpg",desc:"Layers of thick fresh cream sandwiched between floors of chocolate sponge and topped with a bountiful serving of whipped cream"},
    {id:"76",name:"Strawberry",price:"63",image_url:"assets/img/Beverages/Puddings/strawberry.jpg",desc:"A fresh & cushiony cake layered with enticing slabs of semi-sweet strawberry flavoured cream that's cloaked with whipped cream and a generous sprinkle of candied cherries"},
    {id:"77",name:"Choco",price:"63",image_url:"assets/img/Beverages/Puddings/black_forest.jpg",desc:"Silky smooth pudding of rich sinful chocolate and Pure cream all set to send you to a choco dream-world"},
    {id:"78",name:"Red Velvet",price:"63",image_url:"assets/img/Beverages/Puddings/red_velvet.jpg",desc:"In its own distinctive natural red shade without food colouring, and capped by rich, smooth, silky cream"},
  ]

  public Donuts=[
    {id:"79",name:"Oreo Filled Donut",price:"48",image_url:"assets/img/Beverages/Donuts/oreo-filled-donut.jpg",desc:"Real Oreos add a crunchy twist to this donut, making It simply too good to resist!"},
    {id:"80",name:"Strawberry Filed Donut",price:"48",image_url:"assets/img/Beverages/Donuts/strawberry-filled-donut.jpg",desc:"Tangy, sweet strawberry filling makes this donut a delicious delight."},
  ]

  public Brownies=[
    {id:"81",name:"Chocolate Brownie",price:"40",image_url:"assets/img/Beverages/Brownies/chocolate_brownie.jpg",desc:"A warm and fudgy brownie topped with chocolate sauce. It is the ultimate decadent experience."},
    {id:"82",name:"Walnut Brownie",price:"40",image_url:"assets/img/Beverages/Brownies/walnut_brownie.jpg",desc:"A fudgy chocolate brownie with a right blend of toasted walnuts."},
    {id:"83",name:"Lava Cake",price:"40",image_url:"assets/img/Beverages/Brownies/Lavacake-01.jpg",desc:"Soft succulent sponge cake reveals its fiery side of liquid, molten chocolate, ready to roll."},    
  ]

  public swissRolls=[
    {id:"84",name:"Red Velvet swiss roll",price:"99",image_url:"assets/img/Beverages/Swiss Rolls/red.jpg",desc:"Swirls of Red Velvet in cream make this a luxurious and delicious dream."},
    {id:"85",name:"Butterscotch swiss roll",price:"99",image_url:"assets/img/Beverages/Swiss Rolls/butter.jpg",desc:"Melting butterscotch is a naughty addition to the good old Swiss Roll."},
    {id:"86",name:"Choco swiss roll",price:"89",image_url:"assets/img/Beverages/Swiss Rolls/choco.jpg",desc:"Rolling in coco! This Swiss roll is elevated by the presence of chocolate."},
  ]

  constructor(public navCtrl: NavController,
              private router: Router,
              private route:ActivatedRoute,
              private env: EnvService) {
      this.segment ="Whole Cakes";
      this.segment2 ="E card";
      this.segment3 ="Grilled Panini";
      this.segment4 ="Puddings";

      this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {id:25,name:"the grow kit",image_url:this.env.IMG_API_URL + "Gifts/2p.jpg",price:"200",desc:
            ["seeds packet : 1"," Cocopeat disc : 1"," Plastic pots : 2"," Coir pot : 1"," Packing bag : 1"," Name & description tag : 1"]
          },
          {id:25,name:"the spa hamper",image_url:this.env.IMG_API_URL + "Gifts/6p.jpg",price:"200",desc:
            ["Pumice stone : 1"," Scented soap : 1"," Towel : 1"," Loofah : 1"," Packing bag : 1"," Name & description tag : 1"]
          },
          {id:25,name:"the coffee hamper",image_url:this.env.IMG_API_URL + "Gifts/4p.jpg",price:"200",desc:
            ["Coffee mug steel : 1"," Coaster : 1"," Packing bag : 1"," Name & description tag : 1"]
          },
          {id:25,name:"the gardener",image_url:this.env.IMG_API_URL + "Gifts/2p.jpg",price:"350",desc:
            ["Plastic pots : 2"," Seed packets : 2"," Cocopeat disc : 2"," Garden gloves : 1"," Garden tool set : 1"," Packing tray : 1"," Name & description tag : 1"]
          },
          {id:25,name:"THE PAMPERED",image_url:this.env.IMG_API_URL + "Gifts/6p.jpg",price:"350",desc:
            ["Pumice stone : 1"," Scented soap : 1"," Towel : 1"," Loofah : 1"," Scented candles : 2"," Packing bag : 1"," Fragrance sachet : 1"," Name & description tag : 1"]
          },
          {id:25,name:"THE MADRASI",image_url:this.env.IMG_API_URL + "Gifts/3p.jpg",price:"350",desc:
            ["Dabara coffee glass brass : 1 set"," Pickle jars : 2"," filter coffee powder : 50 gms"," Steel filter : 1"," Packing tray : 1"," Name & description tag : 1"]
          }
        ]
      };
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.service = this.router.getCurrentNavigation().extras.state.package;
        console.log(this.service);
      }
   });
  }

  goToCardForm(card){
    let navigationExtras: NavigationExtras={
      state:{
        package:card
      }
    }
    this.router.navigate(['celeb-form'],navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack('celeb-package');
  }
}
