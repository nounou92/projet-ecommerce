import {Produit} from "./Produit";

export const PRODUITS : Produit[] = [
{
    id: 1,
    nom: 'legging',
    marque: 'Nike',
    prix: 69.95,
    description: 'Light and smooth, with plenty of stretch to move, the Nike Dri-FIT Retro Run Leggings look to the past for inspiration, with a bright collage over warm-weather coverage. Bring a key, card or phone and stash them in one of the secure pockets. This product is made from at least 75% recycled polyester fibres.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0f7e6d15-5c8f-4021-9f2f-16bc3626a928/dri-fit-retro-run-7-8-length-mid-rise-running-leggings-RhVNcX.png',
    categorie: 'Femme',
    dateCreation: new Date

},

{
    id: 2,
    nom: 'Brassiere',
    marque: 'Nike',
    prix: 24.97,
    description:'With wide, comfy straps and a squared neckline, the Nike Dri-FIT Swoosh Sports Bra feels snug, secure and cool while you move.The smooth, lightweight design wicks sweat to keep you dry, comfortable and focused.Fabric with a slight shimmer lets your confidence shine.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/79ed0326-43de-42a5-851c-1a159222923e/dri-fit-swoosh-support-1-piece-pad-shine-sports-bra-B06rqJ.png',
    categorie: 'Femme',
    dateCreation: new Date

},
{
    id: 3,
    nom: 'Nike Air Max 2021',
    marque: 'Nike',
    prix: 86.97,
    description:'We could tell you that our innovative Air system delivers the best sensation you have ever felt. Or say how the honeycombed foam midsole gives you an incredible, super-soft feel. We could tell you a lot of things about these shoes. But what fun is giving away all the surprises? Lace up and ride the next era of Air for yourself.',
    image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9f4b3c3a-8280-4d0c-87f3-d992c79de253/air-max-2021-shoes-KTgFDB.png',
    categorie: 'Basket Femme',
    dateCreation: new Date

},
{
    id: 4,
    nom: 'Nike Sportswear Tech Pack',
    marque: 'Nike',
    prix: 289.95,
    description: 'The Nike Sportswear Jacket is fully water-resistant and made to move through the city no matter what the weather.Updating a classic trench silhouette, it features heritage Windrunner design lines, laser-perforated Swoosh ventilation and adjustability throughout to help you personalise the fit and style.This product is made from 100% recycled polyester and recycled nylon fibres.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3628223b-b1f5-4c15-8071-c766a90c8d36/sportswear-tech-pack-jacket-6Qk7dN.png',
    categorie: 'Veste Femme',
    dateCreation: new Date

},
{
    id: 5,
    nom: 'Nike Sportswear',
    marque: 'Nike',
    prix: 17.95,
    description:'A clean design that fits your style and your essentials, the Nike Sportswear Futura Cross-Body Bag features a zip back pocket and magnetic flap closure. It is made from fabric that contains a blend of at least 75% recycled fibres.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c186139c-3cb3-4e86-827f-49da665b0605/sportswear-futura-365-cross-body-bag-3ngRJp.png',
    categorie: 'Accessoire Femme',
    dateCreation: new Date

},
{
    id:6,
    nom: 'Nike Icon Classic',
    marque: 'Nike',
    prix: 59.95,
    description: 'Lifted. Classic hoops detailing. Strappy but easy to wear. Tick all the boxes in the Nike Icon Classic. Its big, bold midsole wows with comfort. The outsole pattern delivers iconic Air Force 1 vibes, while the multiple hook-and-loop straps add a fearless look. Get ready to shine with this new voice in sandal style.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cd461445-d17d-4eee-9140-4fb2a80653f3/icon-classic-sandals-VNCTCn.png',
    categorie: 'Chaussure Femme',
    dateCreation: new Date

},
{
    id: 7,
    nom: 'Ensemble',
    marque: 'Nike',
    prix: 44.95,
    description:'Ready? Steady. Play! The Nike Set includes a full-zip jacket and trousers to keep kiddos comfortable for their next adventure.',
    image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9c036b0e-24b5-493f-a451-6543089de3e0/tracksuit-set-KTX0B4.png',
    categorie: 'Vetement petite Fille',
    dateCreation: new Date

},
{
    id: 8,
    nom: 'Nike Sportswear',
    marque: 'Nike',
    prix: 49.95,
    description:'The Nike Sportswear Set makes it easy and fun to mix and match outfits so little ones can look coordinated or get creative.',
    image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bb29ba5d-1467-42a8-a350-c04214001f82/sportswear-hoodie-and-trousers-set-QlZnJD.png',
    categorie: 'Vetement petit Garçon',
    dateCreation: new Date

},
{
    id: 9,
    nom: 'NikeCourt Dri-FIT Slam',
    marque:'Nike',
    prix: 74.95,
    description:'With its crisp layers of curving pleats and stretchy fabric, the NikeCourt Dri-FIT Slam Skirt puts a sophisticated twist on a court classic. Layered pleats flow and flare while you run the court, highlighting your movement for a bold look and feel. This product is made from at least 75% recycled polyester fibres.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4f32dfb0-3079-46d3-a951-19664209a81f/nikecourt-dri-fit-slam-tennis-skirt-Vfd9m2.png',
    categorie:'Vetement de Tennis Femme',
    dateCreation: new Date

},

]
