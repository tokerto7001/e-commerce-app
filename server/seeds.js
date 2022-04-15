const mongoose = require('mongoose');
const Products = require('./models/productsModel')
const main = () => {
    mongoose.connect('mongodb://localhost:27017/eCommerce')
    .then(console.log('success'))
    .catch(err => console.log(err))
}
main();

const products = [
    {
      title: 'Custom lighter cover sleeve, Beautiful 3D printed case, Cool lighter Gift',
      description: 'Custom lighter cover sleeves/case. Sleeves fit standard size BIC lighters. Perfect as a funny gift or for personal use to spice your lighter up a little bit. Give your lighter a little personality with these cool custom lighter sleeves. All these lighter covers are made to order and time will vary based on the amount you purchase. \n' +
        '\n' +
        'Lighter covers/sleeves are great as gifts! Pick some up for your family, friends, or coworkers. These cases come in beautiful vibrant colors and will bring a whole new style to your boring lighter. \n' +
        '\n' +
        'We now have new Sparkle colors available as well. Check them out in our pictures for this ad. \n' +
        '\n' +
        'All lighter cases will have font on both sides unless you request different. These are two sided font prints, so if you want “Ted” it will be on written on both sides of the case. Hope this information helps you with your purchase. \n' +
        '\n' +
        '*All sleeves are tested for quality and fitting before they’re sent out.\n' +
        '\n' +
        'IMPORTANT:\n' +
        '-DO NOT USE ON ALREADY SLEEVED (lighter with sticker) LIGHTERS! \n' +
        '\n' +
        '-Letter customization plays a part in letter size. \n' +
        '\n' +
        '-Be sure to double check your order because we print based on your customization selections ( If you choose all capitals then that what you’ll receive, spelling plays no part in selection). \n' +
        '\n' +
        '- Color (shade/Dark or light) may vary based on batch from filament suppliers. \n' +
        '\n' +
        '\n' +
        '\n' +
        '•These are 3D printed and may show lining\n' +
        '\n' +
        '•Bulk item orders may take longer\n' +
        '\n' +
        'Do NOT leave in direct sunlight \n' +
        'Lighters are NOT included \n' +
        '\n' +
        '\n' +
        'These cases are custom made/designed by me and have no affiliation with BIC lighters at all! \n' +
        '\n' +
        '\n' +
        'No returns nor refunds \n' +
        'Please contact me if you have any issues, questions or concerns.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Thank you!',
      quantity: 17,
      num_favorers: 606,
      tags: [
        'beautiful 3D',
        'art collectibles',
        'groomsmen gifts',
        'gifts mementos',
        'custom bic lighter',
        'Bic custom lighter',
        'cool lighters',
        'custom lighter',
        'Personalized lighter',
        'Case sleeve holder',
        'aesthetic accessory',
        'custom engraved',
        'designer lighter'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5,
      img: 'https://i.etsystatic.com/15639613/r/il/86c4d5/3459393780/il_fullxfull.3459393780_d5s3.jpg',
      onSale: true
    },
    {
      title: 'Custom Rose Gold Birthday Photo Magnets, Personalized Gift, First Birthday Favors, Baby Picture Frames, Birthday Party Gifts, Birthday Gifts',
      description: 'Berel Design offers the best quality with these affordable Acrylic 1st Birthday Gifts.\n' +
        '\n' +
        'Here are a few things you might want to know:\n' +
        'If you buy 1 from this listing, it includes 10 Birthday Gifts.\n' +
        'The product size is about 10 cm and the picture area is 5 cm. Sizes may vary according to different names. For special measurement information, you can contact us via Etsy convo.\n' +
        'If you want larger or smaller size, please let us know. We can make a special order for you.\n' +
        '\n' +
        'All of our favors are personalized. We can write whatever you want on these mirrors.\n' +
        '\n' +
        '📌Would you like to use your own picture?\n' +
        'There is a mirror surface in the frame area. We stick pictures into frames. We use sticky paper for printing. If you would like to use it your own, you should print the pictures on sticky paper. \n' +
        'Or if you want to use the real picture format, you can use any glue to stick the pictures.\n' +
        'Please note that corner figure mirrors will be sent separately if you prefer to use your own images. You will need to apply yourself.\n' +
        '\n' +
        '📌The shapes of the corner mirrors are round tag, oval, rectangle, hexagon, unicorn, baseball ball, flower, balloon, airplane, hot air balloon, wings, deer, star, cloud, crown, tiara, elephant, zebra, heart, teddy bear, butterfly, lion, carousel, swan, horse and bow. Please add the image you want to choose for your order, on the personalization section.\n' +
        '📌Flower colors are, Navy Blue, Baby Blue, Mint Green, Dark Green, Pink, Yellow, Gray, Red, Black, White, Purple, Black, Burgundy, Gold.\n' +
        '\n' +
        'There are magnets behind the picture frames that you can use on the fridge, refrigerator or magnetic surfaces.\n' +
        'You can choose your mirror color preference from the listing options as gold, silver or rose gold.\n' +
        '\n' +
        'Please make sure to let us know the customization message you want in the notes to seller section at checkout.\n' +
        'If no messages are received, we&#39;ll assume none were requested and your item will be shipped plain.\n' +
        'Our products are special favors for your guests for your special days.\n' +
        '\n' +
        '\n' +
        'Our First Birthday Gifts are an unforgettable decor for your memories.\n' +
        '\n' +
        'Acrylic Party Favors are a great way to thank everyone for attending your event! These uniquely designed and created Party Favors are birthday party themed. These 1st Birthday Party Items are an addition you won&#39;t want to miss at any stylish event.\n' +
        '\n' +
        'Special favors for your guests on your special days. You can use these Gifts on your birthday, baby shower, special days and special occasions.\n' +
        '\n' +
        'Acrylic and laser engraved, no printing. Engraving/etching is a process in which designs are burned onto the surface of a piece of material. The engraving is transparent transparent, not colored.\n' +
        '\n' +
        'Please beware of imitators. We offer the highest quality at affordable prices. There are other pages that copy our designs and put lower prices on lower quality items. Please be sure of the quality of the product when purchasing, even if you have ordered from another store.\n' +
        '\n' +
        'SHIPPING and RETURN\n' +
        'Please consider the processing time. Since these are special products, there is a preparation process.\n' +
        'Average delivery time is 2-5 days. There may be delay due to customs.\n' +
        'Sometimes delivery may take up to 7-10 days depending on your area.\n' +
        '\n' +
        'Please note that no refunds will be made for delays caused by the carrier.\n' +
        ' Please always place a few days before when ordering to avoid late shipments or other problems.\n' +
        '\n' +
        '\n' +
        'If you want to take a look at our other products:\n' +
        'https://www.etsy.com/shop/BerelDesignFavors',
      quantity: 5976,
      num_favorers: 827,
      tags: [
        'Birthday Favors',
        'Custom Birthday',
        'Custom Favors',
        'First Birthday',
        'First Birthday Favor',
        'Picture Frames',
        'Birthday Party Gifts',
        'Birthday Party',
        'Birthday Gifts',
        'Birthday Theme Gifts',
        'Rose Gold Favors',
        'Personalized Gift',
        'photo magnets'
      ],
      processing_min: 6,
      processing_max: 8,
      price: 3.7,
      img: 'https://i.etsystatic.com/19220200/r/il/2ecb88/3515475470/il_fullxfull.3515475470_fjhp.jpg',
      onSale: true
    },
    {
      title: '7th Month Anniversary Card - 7 Months Later and Still Awesome',
      description: 'Our funny greeting cards are designed and printed in the United Kingdom with environmentally friendly, recycled materials and no plastic. Made with enthusiasm and dispatched with speed.\n' +
        '\n' +
        'The Card:\n' +
        'Professional print quality on premium 350gsm matt white card, which is responsibly sourced, environmentally friendly, FSC approved and CO2 neutral.\n' +
        'Folded size A5 - 210mm x 148mm (approximately 8” x 6”).\n' +
        'Blank inside for your own personal message.\n' +
        'Supplied with a 100gsm high quality, recycled kraft brown ribbed C5 envelope.\n' +
        '100% plastic free.\n' +
        '\n' +
        'Delivery:\n' +
        'All orders are dispatched the same day if ordered and paid before 3:00pm Monday - Friday. If we receive your order late Friday or during the weekend this would be treated as if received Monday morning.\n' +
        '\n' +
        'Card Design & Layout\n' +
        'Copyright © Paul Turner / Waffle & Faff. All rights reserved.',
      quantity: 4,
      num_favorers: 0,
      tags: [
        '7th month card',
        '7 month anniversary',
        '7th month together',
        '7 month wedding',
        'seven month card',
        'awesome husband',
        'anniversary wife',
        'funny anniversary',
        'partner couple',
        'romantic love',
        'boyfriend girlfriend',
        'wedding anniversary',
        'anniversary husband'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 3.45,
      img: 'https://i.etsystatic.com/21318719/r/il/0ba6cb/3179212690/il_fullxfull.3179212690_k4km.jpg',
      onSale: true
    },
    {
      title: '6th Month Anniversary Card - 6 Months Later and Still Awesome',
      description: 'Our funny greeting cards are designed and printed in the United Kingdom with environmentally friendly, recycled materials and no plastic. Made with enthusiasm and dispatched with speed.\n' +
        '\n' +
        'The Card:\n' +
        'Professional print quality on premium 350gsm matt white card, which is responsibly sourced, environmentally friendly, FSC approved and CO2 neutral.\n' +
        'Folded size A5 - 210mm x 148mm (approximately 8” x 6”).\n' +
        'Blank inside for your own personal message.\n' +
        'Supplied with a 100gsm high quality, recycled kraft brown ribbed C5 envelope.\n' +
        '100% plastic free.\n' +
        '\n' +
        'Delivery:\n' +
        'All orders are dispatched the same day if ordered and paid before 3:00pm Monday - Friday. If we receive your order late Friday or during the weekend this would be treated as if received Monday morning.\n' +
        '\n' +
        'Card Design & Layout\n' +
        'Copyright © Paul Turner / Waffle & Faff. All rights reserved.',
      quantity: 4,
      num_favorers: 61,
      tags: [
        '6th month card',
        '6 month anniversary',
        '6th month together',
        '6 month wedding',
        'six month card',
        'awesome husband',
        'anniversary wife',
        'funny anniversary',
        'partner couple',
        'romantic love',
        'boyfriend girlfriend',
        'wedding anniversary',
        'anniversary husband'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 3.45,
      img: 'https://i.etsystatic.com/21318719/r/il/4c4d3c/3226917671/il_fullxfull.3226917671_s9f3.jpg',
      onSale: true
    },
    {
      title: 'SAME HOUR Yes or No Pendulum Reading by Geidi',
      description: 'Thank you so much for looking at my listing. You were brought here for a reason.🌹\n' +
        '\n' +
        'I will use my pendulum to answer any yes/no question you have.\n' +
        'This listing is for ONE question. If you wish to include more questions, please select the desired quantity.\n' +
        '\n' +
        'You will be given a straightforward “Yes”, “No”, or “Maybe” answer. I will include additional details if they pop out during the session.\n' +
        'If you need something more in depth, feel free to check out my tarot reading listings💜\n' +
        '\n' +
        'What I will need:\n' +
        '1. Your name \n' +
        '2. Dates of Birth\n' +
        '3. Your question(s)\n' +
        '\n' +
        '🔮ALL READINGS WILL BE DONE WITHIN THE SAME HOUR IF PURCHASED BETWEEN 9AM - 9PM EASTERN STANDARD TIME🔮\n' +
        ' \n' +
        'Nothing will be shipped to you. Photos and the reading will be sent through Etsy messages.\n' +
        '~\n' +
        'My name is Geidi. I am a witch, empath, reader, and reiki healer who was been helping others spiritually since I was gifted my first tarot deck as a child. Coming from a long line of Filipino witches, I’ve been surrounded by the craft and divination at a young age. My dream is to help others grow spiritually and heal beautifully, and I intend on following my dreams for the rest of my life.\n' +
        '\n' +
        'Disclaimer:\n' +
        'As per Etsy policy, I must state this service is for entertainment purposes only. I have no liability and/or responsibility for any actions and/or decisions any buyer/client chooses to take or make based on his/her consultation. All sales are final.',
      quantity: 892,
      num_favorers: 45,
      tags: [
        'Pendulum Reading',
        'same hour pendulum',
        'yes or no reading',
        'fast reading',
        'fast yes or no',
        'Fast tarot reading',
        'fast pendulum',
        'fast psychic reading',
        'psychic reading',
        'tarot reading',
        'intuitive reading',
        'psychic tarot',
        'love reading'
      ],
      processing_min: null,
      processing_max: null,
      price: 0.77,
      img: 'https://i.etsystatic.com/33665555/r/il/6a79ae/3718677478/il_fullxfull.3718677478_o2cs.jpg',
      onSale: true
    },
    {
      title: 'Vintage Heart Mug Rug Pattern - Featuring Foundation Paper Piecing - Original Quilt Design by Lisa Capen Quilts',
      description: 'Hello !!!  You are viewing my original mini quilt design called &quot;Vintage Heart&quot;  This pattern is a 4 page instant digital PDF download, including a cover sheet, supplies needed page, and two pattern pieces.  One Pattern is for foundation paper piecing, featured in the pictures in this listing.  The other pattern piece is of a solid heart of the same size incase you would rather forgo paper piecing for a faster project.  The finished size of this quilt is 8&quot; x 12&quot;.\n' +
        '\n' +
        'This listing is for the pattern only, and it will be an instant download.  No physical copies will be mailed, you can start quilting right now!!  The quilt in the photos is for display purposes only and is not part of this listing.\n' +
        '\n' +
        'A full tutorial on how to make this mini quilt has been downloaded to YouTube.  You can find this tutorial by searching for: Lisa Capen Quilts and Vintage Heart Mug Rug Quilt.\n' +
        'This is a 6 page instant download.  You will need a PDF reader/viewer in order to print out your pattern.  No resizing needed :)\n' +
        '\n' +
        'What you can do with this pattern:  You may sell finished quilts made by using this pattern.\n' +
        '\n' +
        'What can not be done with this pattern:  You may not sell printed copies of this pattern or digital copies of this pattern.\n' +
        '\n' +
        'Due to the nature of my listing, being available directly after payment, no refunds will be issued, thank you for your understanding!',
      quantity: 46,
      num_favorers: 353,
      tags: [
        'paper piecing',
        'quilt',
        'mug rug',
        'mug rug pattern',
        'lisa capen quilts',
        'applique pattern',
        'foundation piecing',
        'fast quilt',
        'easy quilt',
        'heart mug rug',
        "Valentine's project",
        "Valentine's day",
        'heart'
      ],
      processing_min: null,
      processing_max: null,
      price: 2.5,
      img: 'https://i.etsystatic.com/13116576/r/il/07352a/1415912378/il_fullxfull.1415912378_ehik.jpg',
      onSale: true
    },
    {
      title: 'I Am The Storm,  Breast Cancer Awareness Shirt, Breast Cancer Shirt, Pink Ribbon Shirt, Breast Cancer Gifts, Breast Cancer Fighter Shirt',
      description: 'I Am The Storm,  Breast Cancer Awareness Shirt, Breast Cancer Shirt, Pink Ribbon Shirt, Breast Cancer Gifts, Breast Cancer Fighter Shirt \n' +
        '\n' +
        'Ordering Process for our valued customers\n' +
        '\n' +
        '~ Please follow all steps to place an order.\n' +
        '~ Please select the hoodie type and size.\n' +
        '~ Please select color of the hoodie from drop down options.\n' +
        '~ If you want to purchase more than 1 , add current item to your cart and then you can click back, add more items for each product.\n' +
        '~ Once all your desired items , you can complete your order by entering your payment method and submit your order.\n' +
        '\n' +
        'CHOOSING A SIZE:\n' +
        '• Please see the size charts in the listing images. Measure twice, ship once!\n' +
        '• Our unisex tees look great on men and women!\n' +
        '• Questions? Contact us.\n' +
        '\n' +
        'APPAREL QUALITY:\n' +
        '• All of our apparel is pre-shrunk.\n' +
        '• Our prints are made to last for years via direct-to-garment (DTG) printing technology.\n' +
        '\n' +
        'FREQUENTLY ASKED QUESTIONS:\n' +
        '• We can make customizations to any design for FREE, Please contact us.\n' +
        '\n' +
        '✔ Tracking Number for every order\n' +
        '✔ Secure Payments via Credit / Debit Card or PayPal\n' +
        '✔ Fast Order Processing\n' +
        '✔ Top Quality Products\n' +
        '✔ Every product is inspected before shipment\n' +
        '✔ 24 / 7 Customer Support.\n' +
        '.\n' +
        'Stickers ⚡️\n' +
        'Add your own design of any shape and create uniquely personalized die-cut stickers. These blank stickers are great for both indoor and outdoor use as they are made with thick, waterproof, laminate vinyl material. The easy-peel backing makes for great ease-of-use, while the matte finish helps your designs look sleek on any surface.\n' +
        '.: Material: water-resistant vinyl\n' +
        '.: Waterproof sticky adhesive\n' +
        '.: Suitable for indoor and outdoor use\n' +
        '.: Easy peel backing\n' +
        '.: Matte finish',
      quantity: 20699,
      num_favorers: 2,
      tags: [
        'Breast Cancer',
        'Awareness Shirt',
        'Breast Cancer Shirt',
        'Cancer Awareness',
        'Pink Ribbon Shirt',
        'Pink Shirt',
        'Cancer Shirt',
        'Breast Cancer Gift',
        'Breast Cancer Tshirt',
        'Cancer Survivor',
        'Womans Cancer Shirt',
        'Cancer Support Shirt',
        'Hope Shirt'
      ],
      processing_min: 2,
      processing_max: 7,
      price: 14.97,
      img: 'https://i.etsystatic.com/21265879/r/il/fe8bc1/3469384037/il_fullxfull.3469384037_977h.jpg',
      onSale: true
    },
    {
      title: 'Gift for my Dad who plays Golf, Personalized Leather Wallet Toffee 7751',
      description: 'This laser engraved genuine leather RFID blocking men&#39;s wallet is no ordinary wallet. The personalized, custom engraving, turns this identity protection wallet into a keepsake that he will actually use and cherish - the perfect gift for Father&#39;s Day, Christmas, graduation, birthday, going away, or just because you love him. \n' +
        '\n' +
        'Color - note color may vary monitor to monitor\n' +
        '• Toffee\n' +
        '\n' +
        'Specifications\n' +
        '• Genuine top grain cowhide leather\n' +
        '• 4 1/4&quot; x 3 1/4&quot; \n' +
        '• 11 slots for cards\n' +
        '• 1 slot for license \n' +
        '• 2 hidden slots for keys\n' +
        '• 2 compartments for cash/receipts\n' +
        '• Beautiful classic cotton/silk fabric interior accents (photo available upon request)\n' +
        '• RFID lining - every pocket is shielded, protecting your identity even when open \n' +
        '\n' +
        '✏️ PERSONALIZING\n' +
        '\n' +
        '(ENGRAVING OPTIONS) - (Note prices in pull down menu include wallet)\n' +
        '• Front ONLY - choose this if you want a Golf Clubs monogram engraved on the front and no message inside.\n' +
        '• Front & INSIDE -  If you want Golf Clubs Monogram and inside message engraving.  Select area 1, 2 or both 1&2\n' +
        '   under the pull down options - see photo in listing for the areas.  \n' +
        '   Maximum characters for inside area (1) is 100. Maximum characters for inside area (2) is 100. \n' +
        '                         Also, Note: Maximum lines of text is 7 (each side.)\n' +
        '\n' +
        '\n' +
        '(FRONT OPTIONS)\n' +
        '• Golf Plain -Golf Clubs, without initials (on the front of the wallet). \n' +
        '• Golf Initials -Golf Clubs, with initials (on the front of the wallet).  Please provide his first and last name initials.\n' +
        '\n' +
        'If you have any questions please ask before you place your order. Once an item is engraved, it can not be changed or cancelled and there are no refunds or exchanges on custom orders, unless I am at fault.\n' +
        '\n' +
        'COLOR OPTIONS FOR FRONT ONLY\n' +
        'Metallic gold\n' +
        'Natural, which is the natural dark leather exposed by the laser ( on cover photo)\n' +
        '\n' +
        '🎨 Note: Color options are for the GOLF CLUBS MONOGRAM ONLY. NOT the engraving inside the wallet. The lettering inside has to be the natural color of the leather engraved. Each piece of the leather is different, so what unveils when I engrave is always a beautiful surprise. So to reiterate, the color of the lettering inside can not be changed and I have no control over the shade that appears.\n' +
        '\n' +
        '🐥Back to &quot;April & Kiwi&quot; \n' +
        'https://www.etsy.com/shop/AprilandKiwi?ref=hdr_shop_menu',
      quantity: 863,
      num_favorers: 0,
      tags: [
        'gift for dad',
        "men's wallet",
        'golf clubs',
        'mens golf',
        "men's golf",
        'golf gifts',
        'golf gift',
        'golf gifts for men',
        'golf personalized',
        'personalized golf',
        'golf wallet',
        'golf for him',
        "Father's Day Gift"
      ],
      processing_min: 1,
      processing_max: 3,
      price: 38.9,
      img: 'https://i.etsystatic.com/13100246/r/il/4aad22/3811896004/il_fullxfull.3811896004_8avj.jpg',
      onSale: true
    },
    {
      title: 'Marshmallow Fluff | Easter Egg Shape Soy Wax Melt',
      description: 'One handmade Easter egg shaped soy wax melt in the scent marshmallow fluff. Totals approx 25g.\n' +
        '\n' +
        'This fragrance is packed with a creamy, sugary, vanilla aroma, with smooth and light top notes. A light and fluffy fragrance.\n' +
        '\n' +
        '——-\n' +
        '\n' +
        'About our wax melts:\n' +
        'Our wax melts are made with eco friendly soy wax and the highest quality fragrance oil to give you a long lasting scent. Our melts are all made by hand in small batches so there may be some very slight colour variation in our melts.\n' +
        '\n' +
        '——-\n' +
        '\n' +
        'How to use:\n' +
        'You will need a wax burner. Simply put a lighted, unscented tea light candle underneath your burner and enjoy the released fragrance as the wax melts. Our wax melts are highly fragranced so can be used multiple times. When you fancy a change, wait for the wax to cool and harden. You can then either put your burner in the freezer for 5-10 minutes and the pop the hardened wax out, or put a lighted tea light candle underneath your burner for a minute or so until the wax starts to melt slightly and then pop it out.\n' +
        '\n' +
        '——-\n' +
        '\n' +
        'Safety:\n' +
        'All of our wax melts are CLP compliant meaning each has a label attached that contains essential information about the fragrance oil used in each melt. Never leave a lit candle unattended and keep away from children and pets. Do not touch or move the burner when lit as the burner itself and the melted wax will be hot.\n' +
        '\n' +
        'Visit our shop for lots more wax melts in a variety of scents and shapes!',
      quantity: 19,
      num_favorers: 3,
      tags: [
        'wax melt gift',
        'Easter wax melt',
        'lush wax melt',
        'wax melt snap bar',
        'wax melt shape',
        'wax melt slab',
        'scented candle',
        'unique wax melt',
        'wax melt bar',
        'scented wax',
        'Home Fragrance',
        'pretty wax melt',
        'wax melt gift set'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.2,
      img: 'https://i.etsystatic.com/28543190/r/il/3422e1/3763575028/il_fullxfull.3763575028_btt8.jpg',
      onSale: true
    },
    {
      title: 'personalized children&#39;s cup, name breakfast board, enamel cup deer, children&#39;s dishes, gift school enrollment, birth, squirrel',
      description: 'a personalized breakfast set from the WALDTIERE series is an unmistakable gift and so that the right cup is available for every age, you can choose from 3 versions.\n' +
        '\n' +
        'How&#39;s it going?\n' +
        'Select the desired ARTICLE and MOTIF when ordering and communicate your NICKNAME* + FONT.  *Nickname max. 10 letters including blank line for double names. If no font is communicated, I design as shown. If the cup is needed in kindergarten, the last name can also be used.\n' +
        '\n' +
        'ARTICLES to choose from:\n' +
        'Idea Helga Berrill©\n' +
        '1: Ceramic cup approx. 82 mm x H 95 mm, capacity 0.25l\n' +
        '2: Enamel cup approx. 80 mm x H 80 mm, capacity 0.30l\n' +
        '3: Plastic cup approx. Ø 80 mm x H 93 mm, capacity 0.32l\n' +
        '3. Breakfast board Xl = 25 cm x 20 cm\n' +
        '4: Breakfast board with CERAMIC CUP\n' +
        '5: Breakfast board with EMAILLETASSE\n' +
        '6: Breakfast board with PLASTIC CUP\n' +
        'Each Atikel is personalized according to your specifications\n' +
        'Delivery without decoration!\n' +
        '\n' +
        'MATERIAL INFO:\n' +
        'The CERAMIC CUP is printed in thermal transfer printing, has a glossy and scratch-resistant surface. It is suitable for dishwashers and microwaves without the motifs fading. The cup is sturdy, but not indestructible.\n' +
        'SIZE: approx. Ø 82 mm x H 95 mm, capacity 0,25l\n' +
        '\n' +
        'The PLASTIC CUP is made of polypropylene, unbreakable and food-safe. The motif is applied in thermal transfer printing and sealed with a shiny and scratch-resistant surface. So the cup is suitable for the dishwasher without the motifs fading, but NOT suitable for the microwave.\n' +
        'SIZE: Ø 80 mm x H 93 mm, 0.32l, weight: 140g, therefore super light and ideal for toddlers.\n' +
        '\n' +
        'The EMAILLETASSE is made of double-walled steel and provided with a high-quality enamel coating. Basic colour white with silver-coloured drinking edge. Although our cups are very robust, enamel can flake off at the edges or corners when it hits the floor. An enamel cup may be heated on any stove, but is NOT suitable for microwave or freezer. Enamel is food-safe and free of harmful substances.\n' +
        'We recommend rinsing the cup by hand and then drying it well, otherwise there is a risk of rust forming because of steel.\n' +
        'The cups are handcrafted in France, so small bumps during production are unavoidable and make each cup unique.\n' +
        '\n' +
        'The BREAKFAST BOARD in size Xl = 25 cm x 20cmx04cm is made of robust polymer plastic, is 100% food-safe, dimensionally stable and absolutely suitable for children, but NOT suitable for the microwave.\n' +
        '\n' +
        'The colors/screen colors displayed on the website may differ slightly in the original, as the colors look different depending on the screen setting, but the colors can also differ slightly for production reasons.',
      quantity: 1,
      num_favorers: 125,
      tags: [
        'Personalized',
        'Name',
        'Children&#39;s tableware',
        'Children&#39;s cup name',
        'Breakfast board personalized',
        'Emailletasse Name',
        'Gift Enrollment',
        'Squirrel',
        'Fox',
        'Hedgehog',
        'Roe deer'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 12,
      img: 'https://i.etsystatic.com/10574094/r/il/bccf6a/3055052924/il_fullxfull.3055052924_90ut.jpg',
      onSale: true
    },
    {
      title: 'Halloween Spider Web Mask for Women Rhinestone embellished Metal Mask Spider Web Masquerade Mask',
      description: 'This Spider Web Mask combines mysterious beauty & enigmatic fright. Spider Web design is accented with rhinestones available in with or without luscious feathers to adorn the upper corner. \n' +
        '\n' +
        'S H I P P I N G  -  \n' +
        'Processed same day or within 24 hours. \n' +
        '1-2 day guaranteed delivery services offered, add items to cart and click on shipping tab for rates. \n' +
        '\n' +
        'Pls leave a check out note with your need date & contact number (especially for expedited and custom orders)\n' +
        ' \n' +
        '  Msg for delivery time frames (Include your state/country). \n' +
        '\n' +
        '\n' +
        'I N C L U D E D\n' +
        'Mask comes with matching ribbons \n' +
        '\n' +
        'S I Z E \n' +
        'Measures approx. 9.5 inches in length, 2.5 inches from forehead to nose tip. \n' +
        'Detailed dimensions available upon request.\n' +
        '\n' +
        'C U S T O M I Z A T I O N\n' +
        'If you would like to color & embellish the mask to match your costume/dress, choose custom color and get in touch, we love to work on custom orders! \n' +
        '\n' +
        'C O N T A C T \n' +
        'Text: 1-516-654-4643\n' +
        'Email: Lanai.ink6 [!at] gmail.com\n' +
        'Web: www.higginscreek.com \n' +
        '\n' +
        'P H O T O \n' +
        'Images displayed on this listing are property of www.higginscreek.com\n' +
        '\n' +
        'A B O U T\n' +
        'HigginsCreek makes elegant face Masks for masquerade balls, Prom Dances, Bachelorette parties, Graduation, costume Birthdays, Halloween, musical & theater productions, Mardi Gras celebration and Carnival festivals. \n' +
        '\n' +
        'Thank you & wish you a fabulous Etsy experience!',
      quantity: 47,
      num_favorers: 174,
      tags: [
        'Spider Web Mask',
        'metal mask',
        'Spider Masks',
        'halloween',
        'Spider Womens Mask',
        'Masquerade Mask',
        'Web Design',
        'Rhinestone Mask',
        'Halloween Masks',
        'Halloween Face Mask',
        'Spider Face Mask',
        'Spider Costume Mask',
        'Spider Web Halloween'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 23.1,
      img: 'https://i.etsystatic.com/9105221/r/il/700c64/1108741521/il_fullxfull.1108741521_fye4.jpg',
      onSale: true
    },
    {
      title: 'Just Dance T Shirt - Irish Dance Shirt - Irish T Shirt',
      description: 'Just Dance T Shirt\n' +
        'This t-shirt is everything you&#39;ve dreamed of and more. It feels soft and lightweight, with the right amount of stretch. It&#39;s comfortable and flattering for all. \n' +
        '\n' +
        '• Pre-shrunk fabric\n' +
        '• Side-seamed construction\n' +
        '• Shoulder-to-shoulder taping\n' +
        '\n' +
        'We strive for customer satisfaction. If there is a problem or we have made a mistake with your order please contact us first to give us a chance to make it right.\n' +
        'All orders are made to order. We are unable to offer exchanges or returns. If you have any questions on sizing, colors, or anything else please contact us prior to purchasing.',
      quantity: 120,
      num_favorers: 12,
      tags: [
        'holiday gift',
        'gift for her',
        'stocking stuffer',
        'white elephant gift',
        'irish dance gift',
        'irish dance t shirt',
        'dance t shirt',
        'just dance',
        'just dance shirt',
        'gift for girlfriend',
        'gift to girlfriend',
        'St patricks day',
        'irish shirt'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 24.95,
      img: 'https://i.etsystatic.com/23555337/r/il/eb6375/3472683579/il_fullxfull.3472683579_emgw.jpg',
      onSale: true
    },
    {
      title: 'Antique Repousse Bronze And Velvet Cupid Jewelry Casket Beveled Mirror Interior',
      description: 'Antique 1890s - 1900s art nouveau style bronze cupid cherub themed jewelry casket box.  It is made with black velvet which shows through the bronze cut out patterns.  Interior is galvanized with a mirrored lid.  Lid has lovely silk satin fabric still intact draped beautifully around the beveled mirror.  This all sits on 4 elaborate feet.  All in very good antique condition.  Shows normal signs of wear.  Lid has come off its hinge which you can see in pics. Price is reflective. \\ Still fits nicely on the jewelry box.  Measures 10.75&quot; x 7.5&quot; at widest points x 5.25&quot; tall.  Weighs almost 6 lbs.  Price of shipping includes insurance.',
      quantity: 1,
      num_favorers: 19,
      tags: [
        'antique casket',
        'art nouveau box',
        'bronze jewelry box',
        'antique bronze',
        'bronze velvet box',
        'antique jewel box',
        'beveled mirror',
        'repousse cupids',
        'cupid putti box',
        'ornate jewel box',
        'ornate bronze box',
        'footed box',
        'rare cupid bronze'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 200,
      img: 'https://i.etsystatic.com/5531809/r/il/60ca5d/1576778136/il_fullxfull.1576778136_31bk.jpg',
      onSale: true
    },
    {
      title: 'Personalised Husband Wedding Card|Typography Script Card|Wife Card | Romantic Bride Card | Romantic Groom Card| Variations Wedding Day Card',
      description: 'Farrah & Eve are proud to present this romantic &#39;A Note to My Future Husband&#39; wedding day card for your future Husband.  Fully personalised with your wedding date.\n' +
        '\n' +
        'A Note to My Future Wife also available. \n' +
        '\n' +
        'Pen a special message to your future husband with this personalised wedding card.\n' +
        '\n' +
        '°ºOº°¨¨¨¨¨¨°ºOº°¨¨¨¨¨¨°ºOº°\n' +
        '\n' +
        '• A B O U T • T H I S • C A R D •\n' +
        '\n' +
        '• 148mm x 148mm card (S4)\n' +
        '• This card also offers great value for money as it is larger than the A6 cards you see on Etsy, measuring at 148mm x 148mm, when folded\n' +
        '• Printed on textured 350gsm/110lbs cotton card made in the UK\n' +
        '• Comes with a S4 envelope - choose from 9 carefully selected colours that will compliment your cards perfectly\n' +
        '• Blank inside for your own message\n' +
        '\n' +
        '• Cards and envelopes are packed with care using clear cello bags and sent in &#39;do not bend&#39; A5 mailers to keep them in mint condition\n' +
        '\n' +
        '• A L S O • A V A I L A B L E •\n' +
        '\n' +
        'We have lots more cards in this design - please visit our shop to view the range! Personalised versions also available. \n' +
        '\n' +
        '• A Note to My Future Husband with Date \n' +
        '• A Note to My Future Wife with Date \n' +
        '\n' +
        'and more...\n' +
        '\n' +
        '°ºOº°¨¨¨¨¨¨°ºOº°¨¨¨¨¨¨°ºOº°\n' +
        '\n' +
        '• D E L I V E R Y •\n' +
        '\n' +
        '• UK orders | 2-5 days using Standard Royal Mail (No tracking available so please ensure your address is correct when checking out)\n' +
        '  (Orders over 10 cards will be sent via Royal Mail using signed for, 2nd class).  \n' +
        '\n' +
        '• INTERNATIONAL Orders | 7-10 days using a standard, non-trackable service. This figure is an estimate as we have no control over any custom delays.  \n' +
        '  (Please order in plenty of time to avoid disappointment - if you need something quicker, we can send tracked for a supplement.  Contact us for details)\n' +
        '\n' +
        '°ºOº°¨¨¨¨¨¨°ºOº°¨¨¨¨¨¨°ºOº°\n' +
        '\n' +
        '• K E Y • T E R M S • \n' +
        '\n' +
        ' Can&#39;t Wait to be Your Husband,  Can&#39;t Wait to be Your Wife, Groom Card, Wife Card, Wedding Card, Romantic Wedding Card\n' +
        '\n' +
        '• I N S T A G R A M • P R O M O T I O N S • \n' +
        '\n' +
        'If you&#39;re on Instagram, come and visit us @farrah&eve, like and comment one of our posts and we&#39;ll send you discount code!  Please private message letting us know you&#39;ve commented and liked a post and we&#39;ll come back to you with your discount code.\n' +
        '\n' +
        '• O T H E R  • \n' +
        '\n' +
        'Please note, any personalised item purchased is non-refundable. as we are unable to resell the item(s).Here is our full ranges of wedding cards \n' +
        '\n' +
        'Bridesmaid Cards \n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1175371655&section_id=25890707\n' +
        '\n' +
        'A6 Bridesmaid Cards \n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1174706865&section_id=36780627\n' +
        '\n' +
        'Parents, In Law, Step Parents + Vendor Cards \n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1175371655&section_id=27986446\n' +
        '\n' +
        'Best Man and Groomsman\n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1162339915&section_id=27986430\n' +
        '\n' +
        '\n' +
        'Bridal Party Cards \n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1175371655&section_id=27986430\n' +
        '\n' +
        'Engagement Cards\n' +
        '\n' +
        'www.etsy.com/uk/shop/FarrahandEve?ref=simple-shop-header-name&listing_id=1162339915&section_id=30674972',
      quantity: 611,
      num_favorers: 70,
      tags: [
        'wedding cards',
        'will you be my cards',
        'bridal party card',
        'wedding day cards',
        'to my groom',
        'wedding day card',
        'groom card',
        'husband card',
        'bride card',
        'wife wedding card',
        'wedding card',
        'future husband card',
        'future wife card'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 3.55,
      img: 'https://i.etsystatic.com/19023775/r/il/8ac319/3673761410/il_fullxfull.3673761410_jqmw.jpg',
      onSale: true
    },
    {
      title: 'Gold Ocean Wave Anklet, Burgundy Ocean Wave Anklet, Black Ocean Wave Anklet, Tidal Wave Jewelry, Beach Lovers Jewelry, Surfer Girl Jewelry',
      description: 'Burgundy, Black & Gold Ocean Wave Anklet Stack 🌊\n' +
        '\n' +
        '***can be shipped quick in as little as 1-3 business days!***\n' +
        '\n' +
        '***gift wrapping is available on all GoodLife Jewelry Co. items!***',
      quantity: 1,
      num_favorers: 13,
      tags: [
        'burgundy anklet',
        'black wave anklet',
        'gold wave anklet',
        'ocean wave anklet',
        'tidal wave anklet',
        'ocean wave jewelry',
        'tidal wave jewelry',
        'boho anklet stack',
        'boho anklet',
        'beach girl gift',
        'beach girl anklet',
        'beach girl jewelry',
        'ocean wave gift'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 19.95,
      img: 'https://i.etsystatic.com/21137503/r/il/792ce1/2208117552/il_fullxfull.2208117552_36hg.jpg',
      onSale: true
    },
    {
      title: 'Softball Mom Black PNG, Sublimation Design Downloads',
      description: 'This item is a digital download only and can be downloaded after purchase.\n' +
        '\n' +
        '&gt;&gt;NO physical item will be sent or mailed&lt;&lt;\n' +
        '**This is PNG FILE - NOT an SVG for cutting.**\n' +
        '\n' +
        '----------------------------------------------------------------\n' +
        'WHAT YOU WILL RECEIVE:\n' +
        '---------------------------------------------------------------\n' +
        '\n' +
        '✮ 1 PNG files with transparent background\n' +
        '\n' +
        '✮ 300dpi\n' +
        '\n' +
        '**This is PNG FILE - NOT an SVG for cutting.**\n' +
        '\n' +
        '\n' +
        'This PNG is great for creating t-shirts, mugs, sublimation, scrapbooking, pillows, framed prints, Cards\n' +
        '\n' +
        '\n' +
        'REFUNDS ARE NOT AVAILABLE ON DIGITAL DOWNLOADS.\n' +
        '\n' +
        '----------------------------------------------------------------\n' +
        'Terms of Use:\n' +
        '---------------------------------------------------------------\n' +
        '\n' +
        'Designs are for personal/small businesses only. You may use our designs to create physical end product to sell (shirt, bag, mug, tumbler, cup, etc.) Your product must be made by you.\n' +
        '\n' +
        '*SELLING TRANSFERS:\n' +
        '\n' +
        'You MUST purchase an extended license if you wish to sell our design as Screen print transfers, Sublimation transfers or similar printed products\n' +
        '\n' +
        'There are 2 options for our license:\n' +
        '\n' +
        '- Single Design License (Design Sold Separately) :$7.5\n' +
        'https://www.etsy.com/listing/958228646/\n' +
        '\n' +
        '- Whole Shop License (Design Sold Separately): $62.00\n' +
        'https://www.etsy.com/listing/972202751/\n' +
        '\n' +
        '\n' +
        'you MAY NOT:\n' +
        '✮ Shared, Distributed or Resold\n' +
        '✮ use all or part of any of my designs to create new designs to resell in any digital format\n' +
        '✮ Upload the files to print on demand sites, such as Zazzle, printful, spoonflower, Amazon Merch etc.',
      quantity: 519,
      num_favorers: 116,
      tags: [],
      processing_min: null,
      processing_max: null,
      price: 3.7,
      img: 'https://i.etsystatic.com/23635462/r/il/b871bb/3699451970/il_fullxfull.3699451970_ix7z.jpg',
      onSale: true
    },
    {
      title: 'Fumikage Tokoyami Mask Template',
      description: 'My Hero Academia - Fumikage Tokoyami - Template only - This is only the front and top portion of his head for an very quick an easy build. \n' +
        '\n' +
        'Modified from a 3D file using Pepakura and exported, I created a PDF that has the front of his face for anyone that may want to create this character.  This format is to be laid to foam, it is not a paper model. \n' +
        '\n' +
        'I used 6mm foam to create mine and simply put an elastic strip along the back to hold the mask to my face.',
      quantity: 396,
      num_favorers: 1672,
      tags: [
        'my hero academia',
        'fumikage',
        'tokoyami',
        'mask',
        'cosplay',
        'foam',
        'template',
        'pepakura'
      ],
      processing_min: null,
      processing_max: null,
      price: 1,
      img: 'https://i.etsystatic.com/10471735/r/il/890990/1731539572/il_fullxfull.1731539572_lkh0.jpg',
      onSale: true
    },
    {
      title: 'Bunny Bucks - Easter Egg Stuffers, egg filler, Easter basket stuffer, Kids Reward Coupons, Easter Basket Ideas, Printable, Coupons for Kids',
      description: 'Move over Carrot Cash, BUNNY BUCKS is here!\n' +
        '\n' +
        'Perfect for Easter Egg hunts or adding to Easter Baskets. These fun downloadable printable coupons are a fun way to celebrate the holiday without spending extra money on toys and candy. \n' +
        '\n' +
        '\n' +
        'You will receive one downloadable PDF that can be printed as many times as needed. \n' +
        '\n' +
        'There are 8 reward coupons on one 8.5x11 page. One page has 8 filled-in coupons, the other page is blank. There is also an Ink Friendly version.\n' +
        '\n' +
        'Simply trim in half vertically and then in between each coupon.\n' +
        '\n' +
        '\n' +
        'Looking to add something more?? Hop over to amazon or any craft store and get self-Adhesive Scratch off stickers and cover up the rewards. When they open the reward they will have to scratch off to see what the surprise is!\n' +
        '\n' +
        '\n' +
        'How it works:\n' +
        '1. Purchase this listing\n' +
        '2. You will immediately be able to download your reward coupons \n' +
        'Link to download provided in email from Etsy and in your account under &quot;purchases and reviews&quot;\n' +
        '3. Print as many copies as you&#39;d like at any time once downloaded\n' +
        '\n' +
        'Comes with:\n' +
        '• one version with 8 already filled in reward coupons\n' +
        '• one blank version so you can create your own rewards\n' +
        '=\n' +
        '\n' +
        '*These Bunny Bucks are for personal use only. Original design and copyright belong to glowinthedarkblankets',
      quantity: 967,
      num_favorers: 34,
      tags: [
        'Easter Basket Ideas',
        'East Basket Stuffer',
        'East Bunny Cash',
        'Carrot Cash',
        'Bunny Bucks',
        'easter egg hunt',
        'easter for kids',
        'kid coupons',
        'easter egg filler',
        'kid reward ticket',
        'kids easter ideas',
        'Easter egg stuffer',
        'non candy easter'
      ],
      processing_min: null,
      processing_max: null,
      price: 2.99,
      img: 'https://i.etsystatic.com/26703332/r/il/eecc5c/3768833625/il_fullxfull.3768833625_qo5z.jpg',
      onSale: true
    },
    {
      title: 'Vintage Goldtone Mickey Necklace/chain/necklace/costume jewelry/gold/vintage/goldtone/mickey mouse/disney',
      description: 'Vintage goldtone Disney Mickey Mouse necklace. I don&#39;t know if it came this way but there are 2 thin goldtone metal Mickey pendants on a chain. Both are exactly the same and marked &quot;Disney&quot;. This is a dainty, lightweight piece.\n' +
        '\n' +
        'In good condition with some wear and patina. The chain has definitely faded and darkened. There is some plating wear.\n' +
        '\n' +
        'Chain measures 18&quot; long.\n' +
        'Pendants are 7/8&quot; x 7/8&quot;.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Necklace',
        'chain',
        'chain necklace',
        'costume jewelry',
        'gold chain',
        'goldtone',
        'Disney',
        'Disney jewelry',
        'Mickey',
        'mickey mouse',
        'Mouse',
        'Animal jewelry'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.99,
      img: 'https://i.etsystatic.com/16809637/r/il/902e5e/3859407945/il_fullxfull.3859407945_lxw5.jpg',
      onSale: true
    },
    {
      title: '36&quot; Acrylic Custom name sign wall decor nursery room decoration backdrop',
      description: 'Custom signs are all the rage. Dress up your cake table, backdrop, bar, party, business, office, nursery, or bedroom with our custom acrylic signs. Our beautiful signs can transition from your baby shower to the nursery for an added personal touch, or from your party to your room. Whatever the occasion or theme, nothing makes a statement like a custom sign! \n' +
        '\n' +
        '6”-24” signs available here: \n' +
        'https://etsy.me/2r7uZOR \n' +
        '\n' +
        '48” sign available here:\n' +
        'https://etsy.me/30UmA0F \n' +
        '\n' +
        'We recommend ordering ONE sign per word/name. Contact us for multiple word signs. For example “Mr. & Mrs. Jones” “Happy Birthday Emily”. \n' +
        '\n' +
        'All signs will be in one piece. For example if you order Skylar Gray it will be cut as “SkylarGray”so all characters touch. If you would like them as separate pieces, please message shop and let us know.  All lowercase &quot;i&quot;s and &quot;j&quot;s unless otherwise requested will be connected. \n' +
        'Please message shop with font selection at checkout \n' +
        '\n' +
        'Name will be scaled to the selected width. Height will vary depending on number of characters, font style, etc.\n' +
        '\n' +
        'Don’t see exactly what you want? Please Request a Custom Order, and we’ll work together to create something magical. \n' +
        '\n' +
        'MATERIALS -\n' +
        'Our color and mirror acrylic is 1/8” thick. All signs that are 36” and larger come with a 1/8” wood backing. \n' +
        '                       \n' +
        'MIRROR COLOR - Mirror acrylic create an elegant and luxurious feel for any decor. Choose from gold or silver, pink, and Blue.\n' +
        '\n' +
        'SOLID COLORS - White and Black acrylic \n' +
        'Had a different color in mind? Message shop for available options. \n' +
        '\n' +
        'A list of fonts are provided in the photos. Please submit font # selection with personalization details. Want a font you don’t see listed? Let us know what you would like and we will work together to create the sign in the font you like. If no font is selected, we will attempt to contact you. If we do not get a response, we will send you the sign in the font pictured on the cover photo. Conversations— you will be notified by email from Etsy, however, responses must be made through Etsy Messaging for us to receive them. Conversations— you will be notified by email from Etsy, however, responses must be made through Etsy Messaging for us to receive them.\n' +
        '\n' +
        'Care Instructions:\n' +
        '*acrylic is fragile. Always handle with care.\n' +
        '*This is not a toy; keep away from children\n' +
        '*acrylic is easy to scratch and break causing sharp corners. Mirror acrylic has a grey backing. It can easily scratch from front and back. \n' +
        '*To clean: wash with mild soap and water. Dry with soft cloth. \n' +
        '*please note that all items are handmade and slight variations may \n' +
        '\n' +
        '\n' +
        'It is the consumers responsibility to read all product descriptions and care instructions',
      quantity: 175,
      num_favorers: 59,
      tags: [
        'custom baby blanket',
        'wedding sign',
        'custom nursery sign',
        'nursery name sign',
        'name for backdrop',
        'gold acrylic sign',
        'backdrop name sign',
        'mirror name sign',
        'mirrored name sign',
        'custom acrylic sign',
        'name sign',
        'custom name sign',
        'acrylic name sign'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 135,
      img: 'https://i.etsystatic.com/17146808/r/il/15136a/2081919335/il_fullxfull.2081919335_rzrt.jpg',
      onSale: true
    },
    {
      title: 'Winston Bishop Card, Prank Sinatra Greeting Card, Birthday Card, Coworker Card, Funny Card, All Occasion Card, New Girl Card, TV Show Card',
      description: 'CARD:\n' +
        'WINSTON BISHOP / PRANK SINATRA\n' +
        '\n' +
        '• Card for: ALL OCCASIONS\n' +
        '• Blank inside\n' +
        '• Comes with a high-quality Kraft Brown envelope.\n' +
        '• Printed and shipped from Long Beach, CA.\n' +
        '\n' +
        'MATERIAL & PACKAGING:\n' +
        '- Printed on premium, heavy cardstock. \n' +
        '- Card measures 4.25&quot; x 5.5&quot; inches folded (A2)\n' +
        '- Blank inside for your personal message.\n' +
        '- Includes a 4.6&quot; x 6.3&quot;  envelope for your card.\n' +
        '- Card wrapped in a protective cellophane sleeve as well.\n' +
        '- Ships in a sturdy, rigid envelope so your card(s) arrives safe and sound!\n' +
        '\n' +
        'SHIPPING:\n' +
        'I offer free shipping on most of my greeting cards!\n' +
        '\n' +
        'BUNDLE DEALS:\n' +
        'If you’d like a good deal, be sure to check out my listing for bundles of 3 OR 5 cards at  a special rate. Shipping is also free.\n' +
        'ABOUT THE SHOP\n' +
        'All of the greeting cards and coloring books are illustrated by me in hopes to have more fun + modern paper goods. Need a different quantity? Interested in a personalized message? Simply send me a message and I’ll be happy to work with you!\n' +
        '\n' +
        'FOLLOW US ON INSTAGRAM\n' +
        'IG: @readysetgoghpaperco',
      quantity: 47,
      num_favorers: 269,
      tags: [
        'winston bishop',
        'prank sinatra',
        'new girl',
        'winston card',
        'new girl card',
        'winston bishop card',
        'new girl birthday',
        'winston birthday',
        'funny birthday card',
        'funny greeting card',
        'new girl tv show',
        'coworker birthday',
        'lamorne morris'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5.65,
      img: 'https://i.etsystatic.com/25184565/r/il/750ee8/2842155801/il_fullxfull.2842155801_50lq.jpg',
      onSale: true
    },
    {
      title: 'Fairy Garden Wood & Stone Pathway Walkway, Miniature Garden Decor, Dollhouse Miniatures',
      description: 'This unique faux stone and wood curved walkway will be a nice addition to your fairy garden or miniature garden.  Different colors of flowers also dot the pathway .\n' +
        '\n' +
        'Approximate Size: 5&quot; long x 2&quot; wide\n' +
        '\n' +
        'Materials: Resin\n' +
        '\n' +
        'This listing is only for the items described in the title and description. \n' +
        '\n' +
        '🏠  To browse our shop for more fairy garden accessories and miniatures click here:\n' +
        '\n' +
        'https://www.etsy.com/shop/onlyinminiature\n' +
        '\n' +
        '🚑  This item is a choking risk for small children. This item is only sold as an adult collectible for decorative purposes.',
      quantity: 14,
      num_favorers: 41,
      tags: [
        'fairy garden pathway',
        'stone pathway',
        'fairy pathway',
        'garden decor',
        'fairy accessories',
        'garden accessories',
        'miniature garden',
        'fairy garden',
        'fairy',
        'fairy garden supply',
        'dollhouse miniatures',
        'walkway'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.49,
      img: 'https://i.etsystatic.com/19718282/r/il/e0625c/3207056750/il_fullxfull.3207056750_dkfy.jpg',
      onSale: true
    },
    {
      title: '14k solid gold initial Necklace,Initial Necklace, Personalized Jewelry, Personalized Gifts, Letter necklace ,Gifts for her, Mothers day gift',
      description: 'Sideways Initial Necklace , Initial Necklace , Personalized Necklace , Letter Necklace , Dainty Necklace, initial jewelry , Black Friday\n' +
        ',\n' +
        'Features\n' +
        '• Made to Order\n' +
        '• Material Options 8k Solid gold , 14K Solid Gold,  18K Solid Gold\n' +
        '• Color Options: Yellow Gold, Rose Gold, White Gold\n' +
        '• Production Techniques: Handmade and Laser Cutting (for High Quality)\n' +
        '• Package: Jewelry Box\n' +
        '\n' +
        'How to Order?\n' +
        '• Customization: We can design for you name, date, coordinate, fingerprint, image and any other shapes in this personalized necklace\n' +
        '• Please select your preferred material, color, text font and chain length from the menu while adding to your shopping card.\n' +
        '\n' +
        'Assurances\n' +
        ' Nickel Free\n' +
        ' Tarnish Resistant\n' +
        ' High Quality Materials\n' +
        'Standart  Deliver in 10-12 Business Days // Express Deliver in 1-3 business days \n' +
        ' Contact us about any problems related to the products\n' +
        '\n' +
        '\n' +
        '\n' +
        'Necklace and Chain Size Guide\n' +
        '• 14&quot; NECKLACE: Fits most like a choker\n' +
        '• 16&quot; NECKLACE: Falls perfectly around the base of the neck like a collar. On a petite woman it will hit your collarbone while for plus size women it might feel more like a choker.\n' +
        '• 18&quot; NECKLACE: A common choice for women that will fall just below the throat at the collarbone. This length is popular for adding pendants which will hang over a crew neck.\n' +
        '• 20&quot; NECKLACE: Will fall a few\n' +
        'inches below the collarbone and allow a little more breathing room. Perfect for a low, plunging neckline or if you want to wear it over a turtleneck.\n' +
        '• 22&quot; NECKLACE: Falls at or above a low neckline.\n' +
        '\n' +
        '\n' +
        'Visit our shop, https://www.etsy.com/shop/GoldHillJewelry\n' +
        '\n' +
        '❤❤❤ \n' +
        '\n' +
        'Thank You\n' +
        'Maggie',
      quantity: 344,
      num_favorers: 2698,
      tags: [
        'Gold Name Necklace',
        'Personalized Jewelry',
        'initial necklace',
        'gold initial',
        'initial jewelry',
        'personalized gift',
        'name necklace',
        '14k gold initial',
        'letter necklace',
        'solid gold initial',
        'Personalized Gifts',
        'Gifts for her',
        'Mothers day gift'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 150,
      img: 'https://i.etsystatic.com/21108362/r/il/4f7211/2970912964/il_fullxfull.2970912964_117n.jpg',
      onSale: true
    },
    {
      title: 'Cherry Blossom Flower Acrylic Glass Wall Art, Large High Gloss Floral Home Decor Nature Wall Art, Ready To Hang Flower Print On Glass.',
      description: 'Cherry Blossom Flower Acrylic Glass Wall Art, Large High Gloss Floral Home Decor Nature Wall Art, Ready To Hang Flower Print On Glass.\n' +
        '\n' +
        'Hi and welcome to Lithe Design Creations. . Personalized acrylic glass prints are ideal for indoor and outdoor applications, while being scratch resistant with a frameless design.\n' +
        '\n' +
        'For those looking for a frame free wall art option, our scratch\n' +
        'resistant acrylic glass is perfect for hanging any photograph or\n' +
        'print. A custom acrylic panel creates a dramatic focal point for\n' +
        'any wall, shelf or mantelpiece.\n' +
        '\n' +
        'A 12-colour fine art Giclée print is hand mounted onto 10mm\n' +
        'thick high-gloss acrylic perspex with an invisible floating subframe with\n' +
        'no visible bolts.\n' +
        '\n' +
        'Acrylic panels are durable, water resistant and will protect your\n' +
        'pictures from harmful UV light, keeping colours fresh and vivid\n' +
        'for years to come.\n' +
        '\n' +
        '• Crystal clear, diamond polished edges\n' +
        '• Stunning, luminous colours with brilliant depth\n' +
        '• Shatter and scratch resistant\n' +
        '• 100+ year colour guarantee\n' +
        '• Modern, contemporary look\n' +
        '\n' +
        'Our custom acrylic prints are printed with latex inks for extreme color vibrancy and long-lasting durability. Our acrylic prints contain UV inhibitors for outdoor use to prevent fading from direct sunlight. Our acrylic prints are water-resistant and anti-yellowing.\n' +
        '\n' +
        'Our personalized acrylic glass prints come ready to hang with a pre-installed mounting on the backside. All of Lithe Design Creations’ acrylic glass prints can be easily cleaned with non-abrasive or alcohol-based cleaners.\n' +
        '\n' +
        'Features:\n' +
        '\n' +
        'Material\n' +
        '- Clear acrylic with polished edges\n' +
        '- 10mm thick\n' +
        '\n' +
        'Print\n' +
        '- Printed with latex inks for extreme color vibrancy and long-lasting durability\n' +
        '\n' +
        'Mounting\n' +
        '- Ready to hang\n' +
        '- Pre-installed mounting on backside of print for hanging\n' +
        '\n' +
        'Local fulfillment reduces carbon emissions.',
      quantity: 4,
      num_favorers: 0,
      tags: [
        'aesthetic room decor',
        'home decor wall art',
        'office decor',
        'bedroom wall art',
        'wall art living room',
        'flower print',
        'floral print',
        'nature wall art',
        'ready to hang',
        'acrylic glass print',
        'print on glass',
        'modern wall art',
        'cherry blossom print'
      ],
      processing_min: 2,
      processing_max: 6,
      price: 89.95,
      img: 'https://i.etsystatic.com/27401664/r/il/18704d/3811901638/il_fullxfull.3811901638_g6b7.jpg',
      onSale: true
    },
    {
      title: 'Name Necklace , Gold Name Necklace , Mothers day gift  , Gold Name Necklace  , Personalized Jewelry, Personalized Gifts , Gifts for her',
      description: 'Mini Name Necklace - Gold Name Necklace  - 14k solid gold Name necklace  - Dainty Gold Name Necklace - Personalized Jewelry -Christmas Gift\n' +
        ',\n' +
        'Features\n' +
        '• Made to Order\n' +
        '• Material Options: High Quality 925 Silver, 14K Solid Gold and 18K Solid Gold\n' +
        '• Color Options: Yellow Gold, Rose Gold, White Gold\n' +
        '• Production Techniques: Handmade and Laser Cutting (for High Quality)\n' +
        '• Package: Jewelry Box\n' +
        '\n' +
        'How to Order?\n' +
        '• Customization: We can design for you name, date, coordinate, fingerprint, image and any other shapes in this personalized necklace\n' +
        '• Please select your preferred material, color, text font and chain length from the menu while adding to your shopping card.\n' +
        '\n' +
        'Assurances\n' +
        ' Nickel Free\n' +
        ' Tarnish Resistant\n' +
        ' High Quality Materials\n' +
        'Standart  Deliver in 10-12 Business Days // Express Deliver in 1-3 business days \n' +
        ' Contact us about any problems related to the products\n' +
        '\n' +
        '\n' +
        '\n' +
        'Necklace and Chain Size Guide\n' +
        '• 14&quot; NECKLACE: Fits most like a choker\n' +
        '• 16&quot; NECKLACE: Falls perfectly around the base of the neck like a collar. On a petite woman it will hit your collarbone while for plus size women it might feel more like a choker.\n' +
        '• 18&quot; NECKLACE: A common choice for women that will fall just below the throat at the collarbone. This length is popular for adding pendants which will hang over a crew neck.\n' +
        '• 20&quot; NECKLACE: Will fall a few\n' +
        'inches below the collarbone and allow a little more breathing room. Perfect for a low, plunging neckline or if you want to wear it over a turtleneck.\n' +
        '• 22&quot; NECKLACE: Falls at or above a low neckline.\n' +
        '\n' +
        '\n' +
        'Visit our shop, https://www.etsy.com/shop/GoldHillJewelry\n' +
        '\n' +
        '❤❤❤ \n' +
        '\n' +
        'Thank You\n' +
        'Maggie',
      quantity: 860,
      num_favorers: 1811,
      tags: [
        'Name Necklace',
        'Gold Name Necklace',
        'Silver Name necklace',
        'Personalized Jewelry',
        'Dainty Name Necklace',
        'name jewelry',
        'name necklaces',
        'gold name',
        '14K gold name',
        'Personalized Gifts',
        'mother necklace',
        'Gifts for her',
        'Mothers day gift'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 25,
      img: 'https://i.etsystatic.com/21108362/r/il/6173f4/3031454620/il_fullxfull.3031454620_fugv.jpg',
      onSale: true
    },
    {
      title: 'Black Magic - Supreme Pakistani Black Tea - 50g Exotic cardiovascular diuretic',
      description: 'Black Magic - Supreme Pakistani Black Tea - 50g Exotic cardiovascular diuretic\n' +
        '\n' +
        '50g Black Magic BlendTea\n' +
        ' \n' +
        'Green Tea Marrakech Petals\n' +
        '\n' +
        'Supreme Pakistani Black Tea \n' +
        '\n' +
        'Its essential properties are its exotic flavor and its stimulating power on the nervous system, but in a natural and healthy way. Taken in moderation on a daily basis, it would prevent cardiovascular and neurodegenerative diseases, is diuretic, would slow down the aging of cells, improve bad cholesterol levels in the blood, circulation and would be an excellent remedy in case of hypertension and a propensity to dizziness. .\n' +
        '\n' +
        'USE: 2-3 grams per 200 ml at 90ºC-95ºC and let stand for 3-4 minutes. Add milk or plant-based substitute.\n' +
        '\n' +
        'Materials / Ingredients\tBlack tea (76.0%), cinnamon, orange peel, ginger, green cardamom, cloves, crushed black pepper, aroma',
      quantity: 1,
      num_favorers: 4,
      tags: [
        'witch',     'wicca',
        'pagan',     'gift',
        'birthday',  'Halloween',
        'Christmas', 'Altar',
        'unique',    'gothic',
        'magical',   'witchy',
        'Black'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.99,
      img: 'https://i.etsystatic.com/8316639/r/il/aa1630/3623406830/il_fullxfull.3623406830_1avo.jpg',
      onSale: true
    },
    {
      title: 'PC-6 Digital Pet Care Stickers for Goodnotes | Pet Care Stickers | iPad Digital Stickers Set | PNG Stickers for Goodnotes',
      description: 'PC-6\n' +
        '\n' +
        'This Mini Kit of functional Pet Care Digital Stickers is made for your Digital Planner or Journal. This set is made to use with digital planners in Goodnotes, Zoomnotes, Notability, Noteshelf, etc. and comes with individual PNG stickers (transparent backgrounds) as well as a pre-cropped Goodnotes file. This is a digital instant download set.\n' +
        '\n' +
        'This mini kit includes 3 pages of functional pet care PNG stickers in the 3 colors shown. It also comes with pre-cropped Goodnotes file (so no cropping!) and individual PNG&#39;s for non-Goodnotes users.\n' +
        '\n' +
        '* This is a DIGITAL DOWNLOAD available immediately after your purchase - no physical product will be shipped. This kit is formatted for use in digital planner and journals and is NOT meant for printing. For personal use only. *\n' +
        '\n' +
        'PLANNERS ARE NOT INCLUDED (for picture purposes only) BUT ARE AVAILABLE IN MY ETSY SHOP\n' +
        'https://www.etsy.com/shop/CCMDigitals\n' +
        '\n' +
        'WHAT YOU WILL DOWNLOAD:\n' +
        '(1) PDF file containing the DROPBOX link to your sticker collection',
      quantity: 18,
      num_favorers: 39,
      tags: [
        'digital planner',
        'digital journal',
        'digital stickers',
        'goodnotes',
        'ipad stickers',
        'iPad planner',
        'digital download',
        'goodnotes planner',
        'Ipad planning',
        'Planner stickers',
        'planner sticker',
        'stickers for',
        'pet care stickers'
      ],
      processing_min: null,
      processing_max: null,
      price: 3,
      img: 'https://i.etsystatic.com/15786824/r/il/32a3f2/2223024451/il_fullxfull.2223024451_j7fb.jpg',
      onSale: true
    },
    {
      title: 'Baby Opalite Dinosaur Totem Figurine Fetish Miniature Diplodocus Spirit Animal 9150',
      description: 'This beautiful Opalite carving is synthetic in nature, yet captures the beauty and essence of opals.\n' +
        'This genus of dinosaur lived during the late Jurassic Period, about 155.7 million to 150.8 million years ago, and primarily roamed western North America.\n' +
        'Extinct  animals often represents the primordial past out of which your present self has grown. It may also suggest something you are dealing with that is no longer alive or functioning in your life.\n' +
        'Front to Back - approx 1&quot;\n' +
        'Top to Bottom - approx 5/8&quot; \n' +
        'Width approx - 3/8&quot;\n' +
        'Each item has natural variations.\n' +
        'Fast Secure Shipping/Combined Shipping Available',
      quantity: 36,
      num_favorers: 162,
      tags: [
        'Animal Spirit', 'Blue',
        'Chakra',        'Meditation',
        'Extinct',       'Hand Carved',
        'Dinosaur',      'Opalite',
        'Collectible',   'Totem',
        'Figurine',      'Fetish',
        'Diplodocus'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 13.98,
      img: 'https://i.etsystatic.com/13959042/r/il/07c22a/2240772267/il_fullxfull.2240772267_icdq.jpg',
      onSale: true
    },
    {
      title: 'Opalite Tiger Totem Spirit Animal Fetish Stone Figurine 9290',
      description: 'Simply blend in today and no one will notice that you are ready to pounce. Patience! \n' +
        'Opalite Associations\n' +
        'Chakras - Third Eye Chakra\n' +
        'Typical colors - clear or milky, and iridescent blue hues.\n' +
        'The eye of the tiger gleams in iridescent splendor. It is more than the thrill of a fight--it is clear-sighted vision to see past survival.\n' +
        'Front to back measures approx 1&quot; 1/4\n' +
        'Top to bottom approx 11/16&quot;\n' +
        'Easy to carry. Great for totem bags or as a display piece.\n' +
        'Each item has natural variations.\n' +
        'A distinguished work of miniature sculptured art.\n' +
        'Fast Secure Shipping/Combined Shipping available',
      quantity: 5,
      num_favorers: 252,
      tags: [
        'Carved',   'Animal Spirit',
        'Totem',    'Fetish',
        'Figurine', 'Collectible',
        'Chakra',   'Meditation',
        'Tiger',    'Cat',
        'Feline',   'Gemstone',
        'blue'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 14.23,
      img: 'https://i.etsystatic.com/13959042/r/il/be91e2/2660858162/il_fullxfull.2660858162_q0go.jpg',
      onSale: true
    },
    {
      title: 'Rainbow Functional Digital Planner Stickers | Goodnotes Planner Stickers | iPad Planning | Weekly Sticker Set | Digital Sticker Set',
      description: 'This Rainbow Functional Sticker Set is designed for use with Goodnotes, Zoomnotes or other digital planning apps (not included). This item is NOT designed for printing, it is a digital download. \n' +
        '\n' +
        'You will receive:\n' +
        '\n' +
        '* 210 individual cropped PNG stickers (Zipped File)\n' +
        '* 1 Goodnotes Pre-cropped file\n' +
        '\n' +
        'Planner pictured is not included.\n' +
        '\n' +
        '*Please Note* - this is a DIGITAL DOWNLOAD available immediately after purchase. No physical product will be shipped. \n' +
        '\n' +
        'You may not sell or give away the original files. Please do not distribute or use for commercial purposes - this produce is for personal use only. \n' +
        '\n' +
        'Given the digital nature of our products we are unable to offer any refunds. Please ask any questions prior to purchase.',
      quantity: 80,
      num_favorers: 99,
      tags: [
        'Planner stickers',
        'Digital planning',
        'Digital stickers',
        'Pre cropped stickers',
        'Goodnotes stickers',
        'Png stickers',
        'Digital sticker kit',
        'Functional stickers',
        'iPad planner sticker',
        'Rainbow Stickers',
        'Digital Sticker Set',
        'Sticker Kit',
        'Goodnotes functional'
      ],
      processing_min: null,
      processing_max: null,
      price: 3,
      img: 'https://i.etsystatic.com/20220183/r/il/f82e19/3364192659/il_fullxfull.3364192659_obqg.jpg',
      onSale: true
    },
    {
      title: 'Rude That You&#39;re Leaving But Ok - Funny New Job  Card, Card for Boss, Work Card, Staff Card, Co Worker Card, New Job Card, Going Away Card',
      description: 'Funny Greeting Card.\n' +
        'Please look at the pictures of this listing for the front and inside graphics and text.\n' +
        '\n' +
        'PERSONALIZATION:\n' +
        'All my cards are completely customizable. Just add your text to the &quot;Add Your Personalization&quot; drop-down box, and I will update the card according to your instructions.\n' +
        '\n' +
        'DETAILS:\n' +
        'The card is 5&quot;X7&quot; in size and printed on thick, quality card stock.\n' +
        'Choose from a selection of envelope colours in the “Envelope Colours” drop-down box.\n' +
        'Card and envelope are protected in an acid-free, clear protective sleeve.\n' +
        'Back of card has Sweet Whispers Studio logo and website.\n' +
        '\n' +
        'MIX & MATCH CARD DEAL:\n' +
        '2+ cards, save 15% with code SALE15\n' +
        '5+ cards, save 20% with code SALE20\n' +
        '8+ cards, save 25% with code SALE25\n' +
        '\n' +
        'Get the Matching Mug Here:\n' +
        'https://www.etsy.com/ca/listing/1191292797/rude-that-youre-leaving-but-ok-mug-funny?click_key=b5d69e9a510c0d5771e38d8db0967456d79caec4%3A1191292797&click_sum=030d8fd5&ref=shop_home_active_1\n' +
        '\n' +
        'SHIPPING:\n' +
        'Items are shipped by standard Canada Post and are not tracked unless you choose from one of the shipping upgrades during checkout.  Multiple options are presented during checkout to select tracked shipping and/or expedited shipping times.\n' +
        '\n' +
        'Check out my other items at:\n' +
        'https://www.etsy.com/ca/shop/SweetWhispersStudio',
      quantity: 900,
      num_favorers: 2530,
      tags: [
        'co-worker card',
        'funny co-worker card',
        'boss card',
        'staff card',
        'funny work card',
        'card for boss',
        'card for co-worker',
        'funny greeting card',
        'funny workplace',
        'new job card',
        'goodbye gift',
        'coworker leaving',
        'co-worker leaving'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 6.09,
      img: 'https://i.etsystatic.com/15731296/r/il/f2fedd/3363038262/il_fullxfull.3363038262_f7o7.jpg',
      onSale: true
    },
    {
      title: 'Playboy Magazine - November 1976 - Centerfold Good',
      description: 'Playboy Magazine - November 1976 - Centerfold Good',
      quantity: 1,
      num_favorers: 3,
      tags: [ 'collectible', 'playboy', 'magazine', 'vintage' ],
      processing_min: 1,
      processing_max: 2,
      price: 20,
      img: 'https://i.etsystatic.com/27771769/r/il/27d386/3632491023/il_fullxfull.3632491023_4qcy.jpg',
      onSale: true
    },
    {
      title: 'To My Shieldmaiden Necklace, ShieldMaiden Jewelry, Nordic Necklace, Norse Jewelry For Women, Wife Gift, Girlfriend Gift, Viking Gift',
      description: 'The Love Knot Necklace represents an unbreakable bond between two souls. This symbol of eternal love is a forever favorite and trending everywhere. Surprise your loved one with this gorgeous gift today!\n' +
        '\n' +
        'The beautiful Love Knot is crafted with brilliant 14k white gold over stainless steel, and swings from an adjustable cable chain, fastened securely with a lobster clasp. The center cubic zirconia crystal measures 6mm in diameter, and is surrounded with smaller cubic zirconia, showcasing added sparkle and shine to this gorgeous gift. You must see it for yourself!\n' +
        '\n' +
        'Specifications:\n' +
        '\n' +
        '• 14k white gold over stainless steel\n' +
        '\n' +
        '• 6mm round cut cubic zirconia stone\n' +
        '\n' +
        '• 18&quot;-22&quot; adjustable cable chain necklace\n' +
        '\n' +
        '• Lobster clasp attachment\n' +
        '\n' +
        'Once shipped, delivery within:\n' +
        '• USA: 2-5 Business Days\n' +
        '• Canada: 3-8 Business Days (Covid may increase shipping times)\n' +
        '• International: 5-21 Business Days (Covid may increase shipping times)\n' +
        '• All orders ship with Love from New Jersey & Florida, USA',
      quantity: 889,
      num_favorers: 685,
      tags: [
        'viking necklace',
        'thor',
        'mjolnir pendant',
        'norse silver',
        'norse jewelry',
        'odin symbol necklace',
        'rune necklace',
        'futhark necklace',
        'gift for wife',
        'wife birthday gift',
        'message card',
        'girlfriend gift',
        'orchid necklace'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 49,
      img: 'https://i.etsystatic.com/14306657/r/il/ebe167/2907884782/il_fullxfull.2907884782_8u2b.jpg',
      onSale: true
    },
    {
      title: 'Vintage 18 Carat Gold Plated Knot Chain Necklace // 80’s Skinny Two Strand Short Necklace // Brand New',
      description: 'Skinny, delicate, gold plated necklace made from two skinny chains with knots. A really pretty and modern design from the 80’s. It has a secure spring ring fastening and it sits atop the collarbone. True 80’s vintage that’s right back in fashion! Perfect for everyday, layered with other necklaces or on its own.\n' +
        '\n' +
        'Made in the 80’s, it’s been locked away for over 30 years in a disused factory, in England - awaiting its big come back! The factory produced high quality jewellery for England’s fanciest names and department stores, starting with Selfridges and Harrods.\n' +
        '\n' +
        'Made in England by Florsheim of London.\n' +
        '18 carat gold plated.\n' +
        'Each strand is approximately 2mm thick. The chain is non adjustable and measures 42.5cm long.\n' +
        '\n' +
        'Brand NEW, excellent condition.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'vintage necklace',
        'vintage gold chain',
        'gold plated chain',
        'gold plated necklace',
        '18 carat gold plated',
        'two strand necklace',
        'skinny knot necklace',
        'knotted necklace',
        'skinny gold necklace',
        'thin gold necklace',
        'made in England',
        'short gold chain',
        '80s chain necklace'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 24,
      img: 'https://i.etsystatic.com/5753178/r/il/18a422/3859409837/il_fullxfull.3859409837_pds7.jpg',
      onSale: true
    },
    {
      title: 'Modern Contemporary Property Number Door Sign Plaque - Anthracite Gray (Ral 7016) (EXA5-C-H1-27W-A)',
      description: 'A5 - Exalted Contemporary House Sign\n' +
        '\n' +
        'This sign = Anthracite Gray (Ral 7016)\n' +
        '\n' +
        'Your sign will appear just like the one in the photos. BEFORE or AFTER purchasing please let us know your house number and street name, this can be done by sending us a message.\n' +
        '\n' +
        'The sign measures 200mm x 130mm which is the same size as an A5 piece of paper and easily viewable from 60ft away.\n' +
        '\n' +
        'The Sign is a single layer composite aluminium which appears floating off the wall once fitted, The coloured backplate is made from Composite aluminium with a beautiful crisp aluminium cut finish giving it that 100% pure authentic architectural modern clean look.\n' +
        '\n' +
        'Manufactured from the actual K Smart Sign Branded Composite aluminium.\n' +
        '\n' +
        'We use UV cured ink printing which is impervious to the HARSH UK elements.\n' +
        '\n' +
        'The fixings are included.\n' +
        '\n' +
        'Fitting this sign can be done by ANY individual who can operate a drill and will take no longer than 15 minutes.\n' +
        '\n' +
        'To personalise your sign please view the options and examples below and take the time to study our text styles, then simply fill out the form above and add to your shopping basket.',
      quantity: 975,
      num_favorers: 1844,
      tags: [
        'KSmartSign',
        'House Signs',
        'House Numbers',
        'Door Plaques',
        'Door Numbers',
        'Modern house signs',
        'Numbers',
        'House name sign',
        'house name plaque',
        'decorative plaque',
        'silver house sign',
        'perspex house sign'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 10.99,
      img: 'https://i.etsystatic.com/12837035/r/il/e76264/2746197959/il_fullxfull.2746197959_z5oq.jpg',
      onSale: true
    },
    {
      title: 'Orange Bird Inspired PopSocket®/Keychain/Badge Reel/Magnet/Christmas Ornament',
      description: 'Minnie and Tinkamabobs: \n' +
        '\n' +
        '🧡\n' +
        '**Please read the listing and description in its entirety to help answer any questions you may have to avoid any dissatisfaction or confusion. (Items are not able to be returned or refunded, but if you have any concerns before or after receiving your product don&#39;t hesitate to reach out.)\n' +
        'Please let us know if there is anything we can do to help make your experience more magical!**\n' +
        '\n' +
        'Get your handmade resin pieces by Minnie and Tink! This piece is perfect for the Disney Orange Bird lover. What&#39;s not to love about that adorable face combined with magical glow-in-the-dark orange glitter?! The Orange Bird inspired PopSocket is made with non-toxic resin.😍 Don&#39;t miss out on this little bit of citrus happiness! 🍊  (Glowing effect works best after being exposed to direct UV light ☀️)\n' +
        '\n' +
        'It is placed onto a genuine swappable PopSocket . Just twist to interchange! They are adhered together with Loctite Super Glue professional liquid bond. The head measures approximately 2 1/2 inches by 2 1/2 inches.\n' +
        '\n' +
        'The “swappable” function can take some getting used to. Here is a video on how it works:\n' +
        '\n' +
        'https://www.youtube.com/watch?v=gTrqZ9tE3-o\n' +
        '\n' +
        'The key chain is also a must-have option! It is the same size and adorableness as the PopSocket and includes a matching purple tassel.\n' +
        '\n' +
        'You can also order as a badge reel! You have 2 options for the style of badge reel. (See Options in photos)\n' +
        '\n' +
        'Because our products are hand made with love, the exact colors/product may vary. Tiny bubbles or slight imperfections can occur as a result of being individually handmade. Resolution/saturation settings on mobile or computer devices may also cause slight variations when receiving products. (Meaning… they’re much better in real life!)\n' +
        '\n' +
        '**DUE TO THE EPOXY, THESE POPSOCKETS® MAY NOT FIT THE POPSOCKETS® HOLDER**\n' +
        '\n' +
        'SHIPPING:\n' +
        'This item is made to order and will be shipped in 7-10 business days. It is always our goal to get each product out as soon as possible, so keep an eye out for a possible early surprise! International customers, please note that the shipping cost does not include any custom fees. Any customs fees will be at the expense of the buyer upon your package arrival.\n' +
        '\n' +
        '*Please note that shipping times may vary due to the pandemic. We will have your package out at the said time but once taken to the post office it is out of our control.\n' +
        '\n' +
        'CARE:\n' +
        'Look at your Minnie and Tinkamabobs’ gorgeous beauty and enjoy the sparkle each and every day. Please avoid dropping, leaving in extreme heat, or submerging underwater for long periods of time. They also like to have a break! So remember to get a few other options to switch them out every once in a while!\n' +
        '\n' +
        'RETURNS:\n' +
        'Please read the listing in its entirety. This customized item is not refundable. To avoid dissatisfaction with our customers, please read the whole listing in its entirety and we encourage open communication for optimal satisfaction.\n' +
        '\n' +
        '**These items are uniquely hand-made with Epoxy Resin, which is durable, but not an indestructible material. It is ideal to treat them with the same care you would your cell phone screen that may break if dropped or otherwise compromised. \n' +
        '\n' +
        'Minor imperfections can occur being hand made by only the two of us, but that is what helps makes them so special and one of a kind. Please read the description in its entirety for optimum satisfaction and we appreciate open communication at any time during your experience with us!**',
      quantity: 16,
      num_favorers: 9,
      tags: [
        'teacher gifts',
        'hand made gifts',
        'nurse gifts',
        'orange bird',
        'disney world',
        'disneyland',
        'glitter popsocket',
        'glitter badge reel',
        'custom disney',
        'disney style',
        'custom popsocket',
        'custom badge reel',
        'glow in the dark'
      ],
      processing_min: 7,
      processing_max: 10,
      price: 18,
      img: 'https://i.etsystatic.com/24620337/r/il/be8ad7/3825541045/il_fullxfull.3825541045_qpmf.jpg',
      onSale: true
    },
    {
      title: 'Samsung Galaxy buds live case | Samsung Galaxy buds PRO cute case | Earphone Silicone Protective | Samsung buds live case cover',
      description: 'A cute and handy Samsung galaxy buds case will help you keep your brand new buds safe in style. These cases come in a choice of 4 colors and characters! cute Samsung galaxy buds case | cute live buds PRO case | Samsung | cute Samsung case | gift ideal | gift for her | cute earphone case |',
      quantity: 18,
      num_favorers: 348,
      tags: [
        'samsung buds case',
        'galaxy buds pro',
        'galaxy buds live',
        'galaxy buds case',
        'gift for her',
        'cutes buds live case',
        'cartoon case',
        'galaxy live earphone'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 14.99,
      img: 'https://i.etsystatic.com/26890697/r/il/b4c4d0/3591981548/il_fullxfull.3591981548_kt3t.jpg',
      onSale: true
    },
    {
      title: 'Set of 6 Baha&#39;i Prayer Cards for Parents and Children, Gift Cards, Six Cards with  White Envelopes',
      description: 'Set of Assorted Baha&#39;i Prayer Cards for Parents and Children with prints from my original watercolor paintings.\n' +
        '\n' +
        '6 high quality print, flat, prayer cards with a smooth, gloss-free matte finish.  \n' +
        '\n' +
        'Printed on high quality card stock\n' +
        '\n' +
        'Size: 5.5&quot;x 4&quot; \n' +
        '\n' +
        'Includes white envelopes.\n' +
        '\n' +
        'Enclosed in protective crystal clear bag\n' +
        '\n' +
        'Baha&#39;i Prayers - Copyright © Bahá&#39;í International Community',
      quantity: 2,
      num_favorers: 17,
      tags: [
        "Baha'i cards", "Baha'i prayers",
        "Baha'i",       'gift',
        'prayers',      'Spirituality',
        'Children',     'infants',
        'parents',      'birth cards',
        'gift cards',   'Bahai'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10,
      img: 'https://i.etsystatic.com/11486885/r/il/b56e0a/2368566168/il_fullxfull.2368566168_o25m.jpg',
      onSale: true
    },
    {
      title: 'Badge Reel-Stitch Inspired',
      description: 'Minnie and Tinkamabobs: \n' +
        '\n' +
        '**Please read the listing and description in its entirety to help answer any questions you may have to avoid any dissatisfaction or confusion. (Items are not able to be returned or refunded, but if you have any concerns before or after receiving your product don&#39;t hesitate to reach out.)\n' +
        'Please let us know if there is anything we can do to help make your experience more magical!**\n' +
        '\n' +
        'Get your handmade resin piece by Minnie and Tink! This piece is perfect for the Stitch lover. It combines a cute Stitch face vinyl and magical glitter that anyone would love! The Stitch inspired PopSocket is made with non-toxic resin and highlights beautiful blue glitter! 😍 \n' +
        '\n' +
        'There are 2 options for the style of badge reel we offer. (See Options in photos) They are adhered together with Loctite Super Glue professional liquid bond. The head measures approximately 2 1/2 inches by 2 1/2 inches.\n' +
        '\n' +
        'If you have a badge reel style you already love and want just the resin piece blank to adhere yourself, just send us a message for pricing and details! \n' +
        '\n' +
        'Because our products are hand made with love, the exact colors/product may vary. Tiny bubbles or slight imperfections can occur as a result of being individually handmade. Resolution/saturation settings on mobile or computer devices may also cause slight variations when receiving products. (Meaning… they’re much better in real life!)\n' +
        '\n' +
        '\n' +
        'SHIPPING:\n' +
        'This item is made to order and will be shipped in 7-10 business days. It is always our goal to get each product out as soon as possible, so keep an eye out for a possible early surprise! International customers, please note that the shipping cost does not include any custom fees. Any customs fees will be at the expense of the buyer upon your package arrival.\n' +
        '\n' +
        '*Please note that shipping times may vary due to the pandemic. We will have your package out at the said time but once taken to the post office it is out of our control.\n' +
        '\n' +
        'CARE:\n' +
        'Look at your Minnie and Tinkamabobs’ gorgeous beauty and enjoy the sparkle each and every day. Please avoid dropping, leaving in extreme heat, or submerging underwater for long periods of time. \n' +
        '\n' +
        'RETURNS:\n' +
        'Please read the listing in its entirety. This customized item is not refundable. To avoid dissatisfaction with our customers, please read the whole listing in its entirety and we encourage open communication for optimal satisfaction.\n' +
        '\n' +
        '**These items are uniquely hand-made with Epoxy Resin, which is durable, but not an indestructible material. It is ideal to treat them with the same care you would your cell phone screen that may break if dropped or otherwise compromised. \n' +
        '\n' +
        'Minor imperfections can occur being hand made by only the two of us, but that is what helps makes them so special and one of a kind. Please read the description in its entirety for optimum satisfaction and we appreciate open communication at any time during your experience with us!**',
      quantity: 13,
      num_favorers: 46,
      tags: [
        'teachers',
        'nurses',
        'disney teacher',
        'custom badge reel',
        'disney nurse',
        'stitch',
        'stitch badge reel',
        'badge reel',
        'disney badge reel',
        'lil and stitch',
        'mickey badge reel'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 22,
      img: 'https://i.etsystatic.com/24620337/r/il/6d6b37/3650914977/il_fullxfull.3650914977_b2i0.jpg',
      onSale: true
    },
    {
      title: 'Whiskey svg, drinks label, Beer Logos and Labels Pack, beer logo, beer svg, drink svg, wine quotes svg, beer logo for cricut',
      description: 'You will receive High Resolution PNG artwork designed for sublimation printing, This digital and unique artwork Can be printed on anything such as T-shirt, Mug, Stickers or Sign!\n' +
        '\n' +
        '✔️ DOWNLOAD:\n' +
        '\n' +
        '- An email will be sent to your Etsy email address, which will contain your download links.\n' +
        '- Once payment has been processed, Check &quot;Your Account&quot; at the top right corner, then click &quot;Purchases & Reviews&quot;. From here you will be able to download all available files.\n' +
        '- You should receive the email within a few minutes. If not, please check your spam folder.\n' +
        '\n' +
        '✔️NOTE:\n' +
        '\n' +
        'This is a digital product ( INSTANT DOWNLOAD)\n' +
        'NO PHYSICAL ITEM will be sent.\n' +
        '------------------------------------\n' +
        'Please contact me if you have any trouble with the files. I always want to ensure a happy customer.',
      quantity: 533,
      num_favorers: 184,
      tags: [
        'Alcohol bundle',
        'vodka logo svg',
        'beer label svg',
        'Whisky label svg',
        'Whisky svg',
        'drinks label',
        'miller light logo',
        'alchool logo',
        'Beer Sublimation',
        'wine quotes svg',
        'drink svg',
        'beer svg',
        'beer logo'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.75,
      img: 'https://i.etsystatic.com/7570832/r/il/25e438/3676004728/il_fullxfull.3676004728_ot3r.jpg',
      onSale: true
    },
    {
      title: 'bedroom wall decor over the bed, master bedroom wall decor, above bed decor,bedroom wall art,bedroom wall decor,bedroom signs,above bed sign',
      description: 'if you love me, let me sleep, bedroom wall decor for over the bed\n' +
        '\n' +
        'VIEW ALL OF OUR SIGNS..\n' +
        'www.nesteddecor.com\n' +
        '\n' +
        'We offer different size options, for your convenience.\n' +
        'Please select the appropriate size for your area. \n' +
        'SIZE OPTIONS: \n' +
        '7&quot;height, 20&quot;width\n' +
        '8&quot;height, 24&quot;width\n' +
        '10&quot;height, 30&quot;width\n' +
        '12&quot;height, 36&quot;width\n' +
        '16&quot;height, 50&quot;width\n' +
        '\n' +
        'BACKGROUND AND TEXT:\n' +
        'White with black text\n' +
        'Black with white text\n' +
        'Gray with black text\n' +
        '\n' +
        'HANDMADE IN THE USA!\n' +
        '\n' +
        'FRAME OPTIONS:\n' +
        'All frames are made from pine that we personally hand pick and mill. \n' +
        'All frames are colored with stain- Natural, Classic Brown, Ebony and Gray.\n' +
        'A true black frame is available upon request.\n' +
        'All of our signs come installed with one saw tooth hanger.\n' +
        '\n' +
        'SHIPPING:\n' +
        'Shipping is FREE! Packages are shipped VIA USPS First Class or Priority Mail.\n' +
        'We will ship your order to your Etsy account address. Please make sure you have listed the correct address.\n' +
        '\n' +
        'CUSTOM ORDERS:\n' +
        'Don&#39;t see the size or design you&#39;re looking for? Send us a message. We&#39;d love to create something for you.\n' +
        '\n' +
        'CANCELLATIONS & RETURNS:\n' +
        'We do not accept order cancellations at this time. \n' +
        'NO returns or exchanges, but please contact us if your product arrives damaged, ASAP. We will be happy to send you a replacement. \n' +
        '\n' +
        'DESIGN:\n' +
        'All of our signs are made to order. Please note each piece of wood has its own exceptional beauty (knots, holes, grains, etc). All signs have the same saying, font and design, but because each sign is made to order, no two signs are exact.',
      quantity: 1,
      num_favorers: 1789,
      tags: [
        'if you love me',
        'let me sleep sign',
        'bedroom wall decor',
        'bedroom wall art',
        'wall decor',
        'master bedroom signs',
        'over the bed',
        'decor over the bed',
        'master bedroom decor',
        'bedroom sign',
        'bedroom decor',
        'above bed decor',
        'farmhouse wall decor'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 49,
      img: 'https://i.etsystatic.com/20548563/r/il/3f9660/3015573287/il_fullxfull.3015573287_fiph.jpg',
      onSale: true
    },
    {
      title: 'Astronaut Svg, Space Svg, I&#39;m Astronaut Panda Svg, Space Svg, Astronaut Clipart, Ufo Svg, Planet Svg Astronaut Helmet Svg, Rocket Svg, Moon',
      description: 'This is a digital file and it can be used for various purposes such as, printing, designing, decoration, etc.\n' +
        '\n' +
        'Astronaut Svg Png, Space Svgs Png, Astronaut Clipart, Space Helmet Svg, Astronaut Helmet Svg, Rocket Svg, Moon Svg, Space Shuttle Svg Png, Astronaut SVG Cut Files, Space svg, Rocket Svg, Space shuttle svg, Moon svg, Astronaut Clipart, Spaceship Cut File, Space Cricut, Ufo Svg, Space Helmet svg, Nasa, Astronaut clipart, Space svg, spaceflight, Astronaut svg, svg files for cricut, rocket svg, space spacer,nasa svg\n' +
        '\n' +
        'After purchasing, you will be able to download this design in following formats:\n' +
        '\n' +
        'SVG file\n' +
        'PNG file\n' +
        'EPS file\n' +
        'DXF file\n' +
        'AI file\n' +
        '\n' +
        'If you face any difficulty while downloading this file or if you have any special requirement in terms of file size, kindly let us know via message in inbox. We shall try our best to fulfil your demand within 48 hours.',
      quantity: 999,
      num_favorers: 0,
      tags: [
        'Astronaut Svg',
        'Astronaut Clipart',
        'Space Svg',
        'Animal Svg',
        'Nasa Svg',
        'Ufo Svg Png',
        'Space Helmet Svg',
        'Panda Svg',
        'Moon Svg',
        'Space Shuttle Svg',
        'Space Ship Svg',
        'Panda Svg Cutfile',
        'Trendy Svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 2,
      img: 'https://i.etsystatic.com/27386484/r/il/081279/3811893030/il_fullxfull.3811893030_nsu8.jpg',
      onSale: true
    },
    {
      title: 'Embroidered Bride Sweatshirt, Embroidered Personalized Bride Sweatshirt, Embroidered Sweatshirt, Bride Sweatshirt',
      description: 'Please make sure you enter your text exactly how you&#39;d like. Your text will be embroidered exactly as you entered it regardless of lowercase and uppercase. \n' +
        '\n' +
        'Sweatshirts & Tshirts are unisex sizing, For clear visibility please read the following. \n' +
        'It is recommended to not match light thread colors with light color clothes & dark thread color with dark fabric clothes\n' +
        '\n' +
        'Perfect Embroidered sweatshirt or T-shirt that can be given as a gift or a gift to yourself. Clothing are a minimalist look but big statement. Embroidered makes it more special and unique look. Thank You for visiting my shop. \n' +
        '\n' +
        '\n' +
        'Sweatshirts\n' +
        '•\t50% cotton, 50% polyester\n' +
        '•\tPill-resistant air jet yarn\n' +
        '•\tDouble-needle stitching throughout\n' +
        '•\tSet-in sleeve \n' +
        '•\tGildan Brand\n' +
        '•\tWhen running low items used will be a similar brand\n' +
        '\n' +
        '\n' +
        'T-Shirts\n' +
        'About\n' +
        '-4.2 oz., 52% airlume combed and ringspun cotton, 48% polyester, 32 singles\n' +
        '-Heather Prism Colors: 99% Airlume combed and ring-spun cotton, 1% poly, 32 singles, 4.2 oz.\n' +
        '-Athletic Heather and Black Heather are 90% airlume combed and ring-spun cotton, 10% polyester\n' +
        '-Shoulder taping\n' +
        '-Unisex sizing\n' +
        '-Side-seamed\n' +
        '-Pre-shrunk\n' +
        '-Retail fit\n' +
        '-Tear away label\n' +
        '-Bella Canvas Brand\n' +
        '-When running low items used will be a similar brand\n' +
        '\n' +
        'Shipping\n' +
        'Each item is carefully shipped within 2-4 Weeks. My small shop is a one person shop and unfortunately I cannot prioritize orders above others and provide this listing to push your order to the top. \n' +
        'https://www.etsy.com/listing/1018434765/rush-my-order?ref=shop_home_feat_4&frs=1',
      quantity: 20,
      num_favorers: 217,
      tags: [
        'crew neck sweatshirt',
        'oversized sweatshirt',
        'fall sweatshirt',
        'aesthetic sweatshirt',
        'plus size sweatshirt',
        'embroidered sweater',
        'embroidered clothes',
        'collar sweatshirt',
        'embroidered shirt',
        'embroidered wife',
        'embroidered bribe',
        'bride sweatshirt',
        'wifey sweatshirt'
      ],
      processing_min: 10,
      processing_max: 20,
      price: 39.5,
      img: 'https://i.etsystatic.com/25375543/r/il/05d6d6/3410189928/il_fullxfull.3410189928_1sxz.jpg',
      onSale: true
    },
    {
      title: 'zartrosa Haarnadel, Hutnadel, Schalnadel, Brosche, Reversnadel, 12cm, rosa',
      description: 'Hutnadel, Schalnadel, Brosche, Anstecker.. \n' +
        'diese mit Perlen verzierte Nadel ist einfach universell einsetzbar.\n' +
        'Beispielsweise kann sie ein Revers schmücken, einen Schal zusammenhalten oder ganz einfach einen Hut zieren.\n' +
        '\n' +
        '\n' +
        'Die goldfarbenen Nadel hat eine Länge von 12 cm und ist fein genug um in einen  Stoff einzustechen, sie ist aber auch gut geeignet, um einen Schal zu halten, einen Hut oder eine Mütze zu verzieren oder findet Platz in einer Hochsteckfrisur.  Das Perlenteil wurde fixiert, damit es nicht abrutschen kann.\n' +
        ' Die Spitze  ( Vorsicht bei der Verwendung als Haarnadel) der Nadel wurde mit einem Stopper/Endstück gesichert.\n' +
        '\n' +
        'Verwendet wurden Polarisperlen in zartrosa und eine böhmische Perle. Die Länge betragt ohne Stopper 12cm.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Haarnadel',
        'Hutnadel',
        'Schalnadel',
        'Brosche',
        'Reversnadel',
        '12cm',
        'Anstecker',
        'lange Hutnadel',
        'Brosche rosa Polaris',
        'zartrosa Hutnadel',
        'hellrosa Schalnadel',
        'rosa hellrosa',
        'Haarnadel hellrosa'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 8.5,
      img: 'https://i.etsystatic.com/6299895/r/il/e72f83/3859428791/il_fullxfull.3859428791_ds3b.jpg',
      onSale: true
    },
    {
      title: 'To Teach is to Touch a Life Forever Tote Bag - PERSONALIZED - Teaching Totes - Totes for Teachers - Teacher Gifts - Tote Bags - Bargain Tote',
      description: 'Now available to be personalized with your favorite teacher&#39;s name! \n' +
        '\n' +
        '&quot;To Teach is to Touch a Life Forever&quot; - one of our most popular designs is now available on a tote bag! Super cute gift to give to your favorite teacher or to grab for yourself.\n' +
        '\n' +
        'Our designs are printed using ink as we print via Direct to Garment.\n' +
        '_______________________________________________________\n' +
        'Every Totes is printed to order with love.\n' +
        '\n' +
        'Printed on Cotton Totes. These are 15.75 x15.25&quot;. They are lightweight totes that can be taken anywhere. \n' +
        'Color: Natural\n' +
        'Handle Color: Natural, Royal Blue, Black or Red\n' +
        '\n' +
        'Please note since all tees are handmade, graphic placement may vary slightly. Colors will also vary per monitor/screen. \n' +
        '\n' +
        'For current turnaround times and any other questions, please see our Policies: https://www.etsy.com/shop/VazzieTees?ref=seller-platform-mcnav#policies\n' +
        '*FAQ Section located below listing details.\n' +
        ' \n' +
        '||CARE INSTRUCTIONS||\n' +
        '•\tWe do not recommend washing the totes. However, if you choose to wash it, we recommend hand washing it in cold/warm water and hanging it to dry.\n' +
        '\n' +
        '||SOCIAL MEDIA||\n' +
        '•\tShow us your apparel on Instagram & Facebook!\n' +
        '•\tTag us on Instagram @VazzieTees or send us your photos on Facebook for a chance to be featured!\n' +
        '________________________________________________________\n' +
        '♥Want to see more designs, check us out♥\n' +
        ' www.VazzieTees.com',
      quantity: 444,
      num_favorers: 2128,
      tags: [
        'Direct to Garment',
        'Teacher Tote Bag',
        'Teachers Gifts',
        'Personalized',
        'Bargain Totes',
        'Teaching is a',
        'Work of Heart',
        'Teacher Life',
        'Teacher Squad',
        'to teach is to',
        'touch a life forever',
        'teacher appreciation',
        'teacher totes'
      ],
      processing_min: 2,
      processing_max: 3,
      price: 9.99,
      img: 'https://i.etsystatic.com/10924079/r/il/cca42a/1911236577/il_fullxfull.1911236577_kp4h.jpg',
      onSale: true
    },
    {
      title: 'Digital Download - Happy Ridvan Maze Printable Game - Baha&#39;i Children&#39;s Activity for the Festival of Ridvan, Baha&#39;u&#39;llah&#39;s Declaration',
      description: 'I’m a Baha’i parent and teacher creating resources for families.\n' +
        '\n' +
        'Please note that this listing is for a digital download.\n' +
        '\n' +
        'This maze activity was created with the themes of the great Festival of Ridvan in mind. In the Garden of Ridvan, Baha&#39;u&#39;llah declared Himself as the Promised One of all religions. During His stay, He commented on the devotion of the nightingales to the roses as a metaphor for believers who are truly in love with God.\n' +
        '\n' +
        'Stay tuned for more activity sheets to create bundles and join my newsletter by visiting andreahope.org.\n' +
        '\n' +
        'Have an idea for an activity? I’d love to hear it!',
      quantity: 11,
      num_favorers: 0,
      tags: [
        'bahai gift',
        'bahai faith',
        'bahai gifts',
        'bahai children',
        'bahai kids',
        'andrea hope',
        'ridvan',
        'festival of Ridvan',
        "Baha'u'llah",
        'garden of ridvan'
      ],
      processing_min: null,
      processing_max: null,
      price: 2.5,
      img: 'https://i.etsystatic.com/12244598/r/il/559e14/3796278438/il_fullxfull.3796278438_mpgc.jpg',
      onSale: true
    },
    {
      title: 'Personalized Teacher Earrings, Sublimated Earrings, Teacher Gift',
      description: 'Perfect gift for the teacher in your life! These double-sided, personalized sublimation earrings are 1.5 x 1 inch (height x width), and printed on high quality MDF. Thickness measures about .12 inches. The earring hooks are made of quality metal (silver in color), they are durable and lightweight!',
      quantity: 17,
      num_favorers: 9,
      tags: [
        'teacher earrings',
        'personalized',
        'teacher name',
        'teacher gift',
        'apple earrings'
      ],
      processing_min: 2,
      processing_max: 4,
      price: 10,
      img: 'https://i.etsystatic.com/31625668/r/il/107f17/3675795013/il_fullxfull.3675795013_q0fs.jpg',
      onSale: true
    },
    {
      title: 'Davallia heterophylla Tall Form, Small Terrarium Fern',
      description: 'This beautifully ribbed fern maxes out at around 3&quot;-4&quot; tall and would do great in a jar or mounted on a piece of wood in a tank. This needs high humidity and prefers to grow in a terrarium or greenhouse. You will be receiving an established plant growing in a 16 oz drinking cup, its own little perfect terrarium!\n' +
        '\n' +
        'Plants are living, growing things and may not always be picture perfect. Our plants may have slight imperfections on older leaves, including the occasional brown leaf tip or spot. We strive to grow and send out the healthiest, happiest plants we can, but please be aware that minor blemishes on older leaves do occasionally happen and are completely normal. If you are ever unhappy with a plant you receive from us for any reason, you&#39;re welcome to return it to us at your cost for a refund of the plant price minus shipping.  \n' +
        '\n' +
        'Our nursery is located in Fountain Valley, CA and local pick up is always welcome! We ship Monday-Wednesday every week.\n' +
        '\n' +
        'We only ship USPS Priority. If you&#39;re experiencing temperatures below 50 degrees, please purchase our &quot;Cold Weather Shipping&quot; to add a heat pack and insulation to your package. We cannot guarantee live arrival if your temperatures are below 50 degrees and you don&#39;t purchase a heat pack. If you have very chilly temperatures, please message us to see about arranging &quot;Hold for Pickup&quot; at the post office so your box isn&#39;t out all day in a cold truck. Also, some delicate plants don&#39;t ship well with heat packs so we might only use insulation. Please feel free to message me for any questions on how to best get your plants to you safely in cold temps. We&#39;ve been shipping plants for 10 winters now and have lots of experience',
      quantity: 2,
      num_favorers: 68,
      tags: [],
      processing_min: 3,
      processing_max: 5,
      price: 20,
      img: 'https://i.etsystatic.com/30219203/r/il/34e5ac/3312189575/il_fullxfull.3312189575_kmm9.jpg',
      onSale: true
    },
    {
      title: 'Baguette Eternity Ring, Gemstone Stacking Ring, Emerald Green/ Blue Sapphire Statement Ring, Unique Mother&#39;s Day Jewelry Gift/ Her Birthday',
      description: 'Saturated with the most remarkable color of emerald green AND sapphire blue, this stunning square-shape baguette eternity ring is bordered with the brilliant sparkle of cubic zirconia.\n' +
        '\n' +
        'This ring comes in emerald green and sapphire blue.\n' +
        '\n' +
        'Be aware of tarnish if exposed to rubbing alcohol/ Hand Sanitizer\n' +
        '\n' +
        '***PLEASE CHECK MY OTHER PRODUCTS***\n' +
        '\n' +
        'These gemstone rings celebrate a special May and September moment and make a meaningful gift. Treat yourself or delight the special Taurus or Gemini/Virgo Or Libra in your life. 10th Anniversary, 20th Anniversary, 35th Anniversary. Special gift for her. Birthday gift for moms. Promise Ring. Engagement Ring. Wedding Jewelry Ring. \n' +
        '\n' +
        'GemPoint Jewelry carries high quality custom designed Jewelry. We sell unique gemstones, including lab created emerald, Ruby, sapphire, cubic zirconia and sterling silver.\n' +
        '\n' +
        'We stock bridal jewelry sets, bridesmaids earrings, bridesmaids necklaces, gemstone Earrings, Ruby earrings, praiba necklaces, praiba earrings, praiba rings, neon green jewelry sets, maid of honour jewellery sets, maid of honor Earrings, something Blue, green jewelry set, cubic zirconia necklaces, Cubic zirconia necklaces, mother of bride jewelry sets, mother of bride earrings, anniversary jewelry, birthday jewelry and much more\n' +
        '\n' +
        'This rings are priced to make you smile!\n' +
        '\n' +
        'Feel free to contact us if you have any questions. We are also wholesaler and take custom orders for our unique designs.\n' +
        '\n' +
        '_______________________________\n' +
        '*CANADIAN orders are shipped with Canada Post a includes tracking. Delivery times are generally 3 -12 business days. Expedited shipping is available at checkout for an extra cost. Please choose one of the Expedited options if you are needing your jewelry quicker.\n' +
        '\n' +
        '**USA orders will be shipped through USPS, and will include a tracking number. You can expect to receive your order in 1-3 weeks, although delivery times will vary across the country, and can change due to COVID or peak holiday times. If you would like faster shipping, please choose from the USA expedited shipping options at checkout (and message me with your phone number).\n' +
        '\n' +
        '***INTERNATIONAL orders will be shipped using Canada Post, and will include a tracking number. Delivery times can vary between 2-10 weeks, depending on delays in customs, peak holiday times, etc.\n' +
        '\n' +
        '[Please remember to message me with your phone number]\n' +
        '\n' +
        '\n' +
        '***RETURNS AND EXCHANGES***\n' +
        'If you are not pleased with your jewelry and would like to exchange or return it, please message me within 5 days of receiving it. The buyer is responsible to ship it back to me in unused condition for an exchange or refund (not including the original shipping charges, if any). If the item arrived damaged or defective, please let me know and I will take care of it!\n' +
        '\n' +
        '______________________________\n' +
        '\n' +
        '*PACKAGING*\n' +
        '\n' +
        'EVERY PURCHASE COMES WITH A LUXURY JEWELRY BOX AS A COMPLEMENTARY GIFT FROM GEMPOINT JEWELRY',
      quantity: 6,
      num_favorers: 37,
      tags: [
        'Baguette Ring',
        'Eternity Ring',
        'Stacking Band',
        'Statement Ring',
        'Promise Ring',
        'Hanukkah Jewelry',
        'Christmas Jewelry',
        'Graduation Gift',
        'Unique Gemstone',
        'Trendy Ring',
        'Birthday Gift',
        'Anniversary gift',
        'Moms Gift'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 49,
      img: 'https://i.etsystatic.com/26552494/r/il/f43809/2749597540/il_fullxfull.2749597540_6fu9.jpg',
      onSale: true
    },
    {
      title: 'Milfs bracelet',
      description: 'Beaded bracelet that says I love milfs',
      quantity: 13,
      num_favorers: 1,
      tags: [
        'Funny', 'red',
        'white', 'purple',
        'heart', 'love',
        'milfs', 'grey',
        'pink',  'trendy',
        'cool',  'milf'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 3,
      img: 'https://i.etsystatic.com/32157116/r/il/ef0e3d/3800405920/il_fullxfull.3800405920_737a.jpg',
      onSale: true
    },
    {
      title: 'Hello Spring Flower Round Vinyl Decal Sticker, Spring Decal, Hello Spring Decal, Round Spring Decal, Spring Round Sticker, Hello Spring',
      description: 'Vinyl decals are perfect for all your projects. I sized this to fit on a 12&quot; wood round or square wood sign which can be found at your local big market stores, hardware stores, craft stores and Amazon, but vinyl decals can be adhered to almost anything even your front door and we offer various sizes, and you may choose from black or white.  I would recommend a 10&quot; wide decal for a 12&quot; round sign and 12&quot; wide decal for a 15&quot; round sign.  I also offer other sizes for any sign or project you want to create. \n' +
        '\n' +
        'This is for a vinyl decal only. You will receive the vinyl decal with the transfer paper on top. Make sure the object you are applying it to is clean and dust free, peel off the clear transfer paper, center the image then apply by pressing down, then go over it with an object like a credit card. Peel off the the transfer paper making sure the decal stays down, if it is lifting up press back down and go over it again with credit card until it sticks down. That&#39;s it!\n' +
        '\n' +
        'If you are adhering your decal to a painted surface you will want to spray seal with a semi-gloss sealer, I usually do two coats or more.  If you can&#39;t get the decal to adhere then spray another coat.  I use Rust-Oleum 2X Ultra Cover with great success.  Decals do not adhere right over chalk paint you will need to seal it.  \n' +
        '\n' +
        'Decals are removable, but not reusable. Decals cure in about 3 days and will adhere for about 6 years.\n' +
        '\n' +
        'There are so many possibilities with our decals!\n' +
        '\n' +
        'Check out my Appling Acres Facebook page for more idea&#39;s and samples',
      quantity: 97,
      num_favorers: 1,
      tags: [
        'Hello Spring Decal',
        'Hello Spring Sticker',
        'Spring Flower Decal',
        'Spring Flower',
        'Decal For Sign',
        'Sticker for Sign'
      ],
      processing_min: 3,
      processing_max: 6,
      price: 3,
      img: 'https://i.etsystatic.com/24744797/r/il/460405/3703504270/il_fullxfull.3703504270_9sm9.jpg',
      onSale: true
    },
    {
      title: 'Opalite Seahorse Stone Carved Figurine F137',
      description: 'Opalite can be used to assist you to manifest what you want to create in life. Crown Chakra Stone\n' +
        '\n' +
        'You get one opalite Seahorse Figurine similar to the ones pictured.  Please see the last picture for size.\n' +
        '\n' +
        'Want to see more figurines ??? www.etsy.com/shop/ilovelotus/search?search_query=figurine\n' +
        '\n' +
        'www.etsy.com/shop/ilovelotus/search?search_query=figurine+seahorse\n' +
        '\n' +
        'www.etsy.com/shop/ilovelotus/search?search_query=opalite+figurine\n' +
        '\n' +
        '**Please note - at Lotus we do our very best to give you accurate measurements and descriptions. Please allow for +/- 2mm on spheres, +/- 0.1 ounces on weights and that photos of thick 3D objects on our 2D grid can make the inches look distorted. Please review all photos for details of the item. Natural crystals may have fractures, inclusions, color variations and characteristics that make each one unique and potentially perfectly imperfect. This site and the products or services listed are for entertainment purposes only. They are not intended to diagnose, cure or treat any ailment. Please visit a medical professional for treatment. We appreciate your business and hope you love this item as much as we did. **',
      quantity: 30,
      num_favorers: 178,
      tags: [
        'opalite',
        'figurine',
        'seahorse',
        'opalite seahorse',
        'opalite figurine',
        'seahorse figurine',
        'white seahorse',
        'seahorse gift',
        'seahorse carving',
        'small seahorse',
        'seahorse charm',
        'seahorse fetish',
        'ilovelotus'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6.88,
      img: 'https://i.etsystatic.com/6516175/r/il/d22195/2943086047/il_fullxfull.2943086047_se9u.jpg',
      onSale: true
    },
    {
      title: 'Sets of Cowgirl Boot Tag Cowboy Boot Gift Tags, Personalized Gift Bag Country Tags, Last Rodeo Bachelorette Party Nash Bash Hangover Kit Tag',
      description: 'COWGIRL BOOT TAGS / COWBOY BOOT TAGS\n' +
        '- Leave quantity at 1 & Choose the set needed in the drop-down. \n' +
        '- Choose BOOT COLOR\n' +
        '- Option to Add FREE hand-lettered names (or 1 word) to the tags by writing the names needed in Personalization Box or in &quot;Note to Seller&quot; at check-out. If no info is added, they will arrive blank. Pearl tags will have black lettering, Hot Pink & other colors come with Silver lettering. If you would prefer Gold or Black, please specify.\n' +
        '\n' +
        'Approx. Size: 2.5&quot; tall\n' +
        '\n' +
        'Perfect DIY flair for Last Rodeo Bachelorette Parties for gifts, favor bags & hangover kit goodie bags for Bachelorette Gifts to the Bridal party, a Nash Bash Birthday, Same Cowboy Forever Bachelorette, Space Cowgirl in Austin, Wild West Cowgirl or Cowboy parties, & more!\n' +
        '\n' +
        '*THIS LISTING IS FOR TAGS + twine ONLY* \n' +
        '\n' +
        'Don&#39;t be shy! I would love to see these tags in action at your party! Share with us via Instagram @leeshyannashop',
      quantity: 19,
      num_favorers: 62,
      tags: [
        'bachelorette',
        'hangover kit',
        'leeshyanna',
        'desert vibes',
        'sedona bach',
        'same cowboy forever',
        'nashville bach',
        'nash bash',
        'last rodeo',
        'final ride',
        'disco cowgirl',
        'space cowgirl bach',
        'wild west party'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 0.6,
      img: 'https://i.etsystatic.com/11132078/r/il/af5810/3796942261/il_fullxfull.3796942261_g71a.jpg',
      onSale: true
    },
    {
      title: 'Spring Press On Nails | Mix and Match Press On Nails | Y2k Nails | Smiley Face Press On Nails | Press On Nails | Nails | colorful nails',
      description: 'GET THE SALON LOOK WITHOUT THE TIME, DAMAGE, OR COMMITMENT \n' +
        '\n' +
        'Our press on nails give you a perfect, non-damaging manicure in seconds for a fraction of the salon cost. Wear them weeks straight or a few days at a time—you decide. Hand painted \n' +
        '\n' +
        'IN THE KIT\n' +
        '\n' +
        'Non-Damaging Glue\n' +
        'prep pad\n' +
        'Buffer\n' +
        'File\n' +
        'sticky tabs \n' +
        'cuticle pusher \n' +
        'APPLICATION\n' +
        '\n' +
        'HOW TO APPLY \n' +
        'Apply to clean, natural nails. Use prep pad to rid excess oils (optional). Select the best fitting nail for each finger and set aside in order. \n' +
        '\n' +
        '7-18 Day Wear:\n' +
        '\n' +
        ' Buff and file nails\n' +
        'Use Prep pad to dehydrate nail for better hold\n' +
        'Apply a layer of glue to the back of the nail.\n' +
        'Apply a generous layer of glue to your entire nail.\n' +
        'Use cuticle pusher\n' +
        'Align under cuticle and press down. Hold and squeeze firmly for 25+ seconds.\n' +
        '1-5 Day Wear: Use Sticky Tabs\n' +
        '\n' +
        'PROFESSIONAL TIPS\n' +
        '\n' +
        'TIPS \n' +
        '- Apply enough glue to avoid air pockets, secure properly, and extend wear time.\n' +
        '- The more glue you apply the longer the nails will stay on.\n' +
        '- Push back cuticles prior to applying for best results.\n' +
        '- Do not use lotions or oils before applying.\n' +
        '\n' +
        'REMOVAL\n' +
        '\n' +
        'HOW TO REMOVE:\n' +
        'Gently push under the Nail to lift sides. If ready, the entire  Nail will &quot;pop&quot; off instantly. (Optional) Soak finger tips in hot water for a few minutes to help soften the nails if needed. To avoid damage and best preserve your set never force or pull off nails.',
      quantity: 14,
      num_favorers: 842,
      tags: [
        'false nails',
        'kawaii nails',
        'Smiley face nails',
        'Y2k nails',
        'spring nails',
        'rainbow nails',
        'press on nails',
        'nails',
        'mix and match nails',
        'Prep kit included',
        'fun nails',
        'abstract nails',
        'Summer nails'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 25,
      img: 'https://i.etsystatic.com/26463720/r/il/c596de/3747255990/il_fullxfull.3747255990_5268.jpg',
      onSale: true
    },
    {
      title: 'OLIVE GREEN Sailcloth Canvas/Leather watch band strap TAN Stitch',
      description: 'Canvas & Leather (Sailcloth) watch band Strap\n' +
        '\n' +
        'Specifications\n' +
        '\n' +
        '• Quick Release Springbars\n' +
        '\n' +
        '• Length: 120mm x 80mm (not including buckle) and it’s the only size I make\n' +
        '\n' +
        '• Buckle Size: 2mm taper on 20 & 22mm and 1mm taper on 19 & 21mm straps\n' +
        '\n' +
        '• Buckle Color: Brushed silver\n' +
        '\n' +
        '• Lining: Veg. Tanned Leather\n' +
        '\n' +
        '• Hardware: stainless steel.\n' +
        '\n' +
        '• Handmade with Canvas top and leather bottom\n' +
        '\n' +
        '• Quick Release spring bars for easy on and off\n' +
        '\n' +
        '• 4mm thickness\n' +
        '\n' +
        '• These look great on Rolex, Tudor, Seiko, Citizen watches\n' +
        '\n' +
        '• Shipped with USPS First Class Package.',
      quantity: 19,
      num_favorers: 0,
      tags: [
        'rolex',
        'nylon',
        'French marine',
        'edc',
        'nato',
        'tudor',
        'Watch band',
        '22mm',
        '20mm'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 27.99,
      img: 'https://i.etsystatic.com/17458672/r/il/c04321/3811906470/il_fullxfull.3811906470_t4bu.jpg',
      onSale: true
    },
    {
      title: 'Tree',
      description: 'D',
      quantity: 1,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 1,
      price: 59,
      img: 'https://i.etsystatic.com/31160971/r/il/ac59b8/3856242859/il_fullxfull.3856242859_rqin.jpg',
      onSale: true
    },
    {
      title: 'Opal Koi Fish Goldfish carving',
      description: 'These are some of the most beautiful carvings I’ve ever seen. And they feel so perfect in your hand. So smooth and perfectly proportioned. They are both milky and translucent at the same time. Gorgeous and the perfect size for your side table, crystal display, Desk at work, Or to hold in your pocket. Beautiful and relaxing to touch.\n' +
        '\n' +
        '*** In accordance with Etsy policy, this item is for entertainment purposes only. Seller makes no claims that this item has supernatural powers, it is a curio item only.\n' +
        '\n' +
        'This is not a replacement for medical or professional help!***',
      quantity: 1,
      num_favorers: 63,
      tags: [
        'Wicca',    'pond',
        'quality',  'ocean',
        'artistic', 'resin',
        'carving',  'healing',
        'crystal',  'gemstone',
        'stone',    'gem'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 7.95,
      img: 'https://i.etsystatic.com/18382152/r/il/6c6a1d/3185042600/il_fullxfull.3185042600_469k.jpg',
      onSale: true
    },
    {
      title: 'Wellness Tea Kit for Self Care and Well Being With 12 Organic Tea Blends',
      description: 'Everyone needs a little self care now and then, and a lovely cup of tea can help amend and restore your sense of well being. This is a selection of our premium wellness teas presented in a brushed aluminum gift box. It contains twelve 2 inch (53 mm) glass top containers filled with filled with twelve different wonderful organic tea blends.\n' +
        '\n' +
        'Included in this kit:\n' +
        '\n' +
        'The Glow - green tea\n' +
        'For healthy skin and complexion \n' +
        'with green tea and elderberries\n' +
        '\n' +
        'Easy Rider - herbal tea\n' +
        'For Sleeplessness\n' +
        'with chamomile and valerian root\n' +
        '\n' +
        'Sweet Dreams - herbal tea\n' +
        'with rose and jasmine\n' +
        '\n' +
        'Defense - herbal tea\n' +
        'with hibiscus, moringa and rose hip\n' +
        '\n' +
        'The Golden Ticket - herbal tea\n' +
        'For Inflammation\n' +
        'with turmeric, lemongrass and rooibos\n' +
        '\n' +
        'Serenity - herbal tea\n' +
        'For Relaxation\n' +
        'with rose, elderberries and oat straw\n' +
        '\n' +
        'Unity - green tea\n' +
        'For Harmony\n' +
        'with jasmine and lychee\n' +
        '\n' +
        'Chill Out - herbal tea\n' +
        'For Relaxation\n' +
        'with lemongrass and raspberry\n' +
        '\n' +
        'The Thinker- green tea\n' +
        'For Clarity\n' +
        'with green tea, got kola and ginseng\n' +
        '\n' +
        'Remedy\n' +
        'For Cold & Flu\n' +
        'with elderflowers, thyme, elderberries and echinacea\n' +
        '\n' +
        'Immunity\n' +
        'For Cold and Flu Season\n' +
        'with ginger, astragalus and cinnamon\n' +
        '\n' +
        'Secret Weapon\n' +
        'For improved digestion\n' +
        'with chamomile, ginger and fennel seed\n' +
        '\n' +
        'This kit will make 24 pots of tea for 2 people. \n' +
        'All ingredients are listed on the back of the tray.\n' +
        '\n' +
        'Each container weighs between 1/2 to 1 ounces.\n' +
        'Box size: 8 3/4&quot; x 6 3/4&quot; (22 x 17 cm)\n' +
        'Containers are labeled on the side and are individually sealed for safe shipping.\n' +
        '\n' +
        '©2021 purpose design',
      quantity: 7,
      num_favorers: 682,
      tags: [
        'tray',       'gift box',
        'wellness',   'self care',
        'organic',    'herbs',
        'botanicals', 'gift',
        'tisane',     'green tea',
        'canada',     'totem tea',
        'adaptogens'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 35,
      img: 'https://i.etsystatic.com/5148738/r/il/e8a46c/2494964336/il_fullxfull.2494964336_4dh2.jpg',
      onSale: true
    },
    {
      title: 'Bushel Basket - Gourd -  Seeds',
      description: 'This gourd is such a fun thing to have.  You can use it for all sorts of purposes.  It can even be made into a large drum. Great for using to store things in as well.    Grows to 24 &quot; across\n' +
        '   This is a wonderful project to do with children, as they will love painting them and hanging them in their own trees.  Hard-skinned gourds bloom in the evening and at night, and soft-skinned ones bloom during the day.  This night bloomer will help feed moths, and they will pollinate for you.  It takes about six months after ripe for it to be hard enough to open and turn into useful objects of run things. \n' +
        '\n' +
        '......   15 Seeds\n' +
        '\n' +
        'Visit our website at www.mizztizzysweedsandseeds.com for a copy of the Catalog, a Free copy of the Cookbook, and a Free copy of the Gardening Journal for your own use.',
      quantity: 49,
      num_favorers: 364,
      tags: [
        'Perennials', 'Permaculture',
        'Apron',      'Seeds',
        'Non GMO',    'Herbs',
        'Organic',    'Body Oil',
        'Smudging',   'Skincare',
        'Ayurvedic',  'Tea',
        'Gourds'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 3.75,
      img: 'https://i.etsystatic.com/6661027/r/il/556e0e/1787786907/il_fullxfull.1787786907_sek5.jpg',
      onSale: true
    },
    {
      title: 'New Arrivals Flyer, Pink New Arrivals Social Media Flyer, Boutique Flyer, Cosmetics Flyer, Canva Template',
      description: 'New Arrivals Flyer Canva Template, Social Media Instagram Flyer\n' +
        '\n' +
        'This template is high quality and has the perfect dimensions for your Instagram feed! Let your customers know about new additions to your business in style with this social media flyer. \n' +
        '\n' +
        'Make your brand stand out with this template at ease! This template is fully editable and makes improving your business branding effortless! \n' +
        '\n' +
        'You will receive: \n' +
        'A PDF with a link to the Canva template.\n' +
        '\n' +
        'Template Dimensions: 1080px * 1080px\n' +
        '\n' +
        'Other colours can also be found in my shop: etsy.com/shop/girlbosscreatives',
      quantity: 99,
      num_favorers: 1,
      tags: [
        'new arrivals flyer',
        'social media flyer',
        'skincare canva flyer',
        'boutique canva flyer',
        'editable canva flyer',
        'instagram template',
        'pink canva flyer',
        'pink flyer template',
        'pink marketing flyer',
        'pink canva template',
        'editable pink flyer'
      ],
      processing_min: null,
      processing_max: null,
      price: 8,
      img: 'https://i.etsystatic.com/25846541/r/il/ae857d/3839064053/il_fullxfull.3839064053_fqov.jpg',
      onSale: true
    },
    {
      title: '69 Leaves Svg bundle, Hand drawn leaves svg, Cut Files, leaf svg, Files for Cricut, branches, leaves clipart,Silhouette, Clipart, Vector,png',
      description: 'With 69 leaves svg files bundle INSTANT DOWNLOAD, you can create logos, vinyl, prints, tags, invitation, wedding invitation and designs with ease! \n' +
        '\n' +
        '3 FREE DOWNLOAD GIFT INCLUDED!\n' +
        '\n' +
        'These Files for Cricut and Silhouette are compatible with design software as well or with any cutting machine.\n' +
        '\n' +
        '== DEAL: BUY 6 GET 40% DISCOUNT! ==\n' +
        '\n' +
        'WHAT&#39;S INCLUDED IN THE PACKAGE:\n' +
        '\n' +
        'Hand drawn leaves design and Leaf svg file, branches svg file, Laurel svg files and even some ornament svg file and clip art. The most beautiful design + 3 free download as a gift to say thank you!\n' +
        '\n' +
        '300 DPI High- Resolution: \n' +
        '\n' +
        '- 69 Hand drawn leaves SVG File (Print Ready).\n' +
        '- 69 Hand drawn leaves PNG Print File.\n' +
        '- 69 Hand drawn leaves DXF Print File.\n' +
        '- 69 Hand drawn leaves EPS Print File.\n' +
        '\n' +
        '☞ The design files come with a transparent background for your convenience.\n' +
        '\n' +
        '• PNG files have been pre-sized and formatted in High Resolution. \n' +
        '\n' +
        'Cut is very easy and look amazing for any design projects.\n' +
        '\n' +
        'Can be used with the Silhouette® or Cricut™ cutting machines or other machines that accept SVG, DXF files\n' +
        '\n' +
        '\n' +
        '***INSTANT DOWNLOAD***\n' +
        '\n' +
        '1. As soon as you purchase this item, you will receive an Instant Download link to your files.\n' +
        '\n' +
        '2. Open the file and upload your desired template to your design program.\n' +
        '\n' +
        'Upon completed payment you will receive an e-mail with a link to your product downloads. (Usually takes about 3-5 minutes). You may also access your downloads by viewing your Etsy Purchases page.\n' +
        '\n' +
        'Downloading a Digital Item Guide:\n' +
        'https://www.etsy.com/help/article/3949\n' +
        '\n' +
        '\n' +
        '✪ TIP - Be creative! You can adjust the size of your design to fit, rotate your design, use multiple designs or a print! \n' +
        '\n' +
        '☞ Please contact me with any other questions - I am here to help!\n' +
        '\n' +
        '☞ You are authorized the use of purchased designs from New York Studio Design© for both Personal and Commercial purposes including Print On Demand use.\n' +
        '\n' +
        '☞ You may print physical products to sell for profit using New York Studio Design© designs. \n' +
        '\n' +
        'Thank you for visiting my shop!',
      quantity: 364,
      num_favorers: 182,
      tags: [
        'Leaves Svg file',
        'Cut Files',
        'leaf svg',
        'leaves clipart',
        'leaf silhouette',
        'Vector',
        'dxf png eps',
        'Hand drawn leaves',
        'cut file',
        'branches svg file',
        'Ornament svg file',
        'Plant svg',
        'cricut cut file'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.5,
      img: 'https://i.etsystatic.com/22990315/r/il/e33be5/2913466438/il_fullxfull.2913466438_meq9.jpg',
      onSale: true
    },
    {
      title: 'Big Brother and Big Sister Dog Bandana, Over the Collar Baby Announcement Bandana, Big Sister Dog Bandana, Baby Announcement Dog Accessory',
      description: 'We create a unique over the collar design. Our design make it easy to change your dogs accessories. You simply slide the bandana onto your dogs current tag collar. \n' +
        '\n' +
        'We offer 5 different sizes \n' +
        'Extra Small-5 1/4 inches wide 5 1/2 inches to point.  Pocket size 1 3/4 inches\n' +
        ' \n' +
        'Small- 7 1/8 inches wide  7 1/4 inches to point.  Pocket size 2 inches \n' +
        '\n' +
        'Medium- 9 1/4 inches wide 9 inches to point. Pocket size 2 inches \n' +
        '\n' +
        'Large -11 inches wide 11 inches to point. Pocket size 2 3/4 inches. \n' +
        '\n' +
        'Extra Large-12 1/4inches wide 12 1/4 to point.  Pocket Size 3 1/4 inches. \n' +
        '\n' +
        'We suggest that you measure your dogs current collar.  The size that is closest to the measurement (without the hardware) is the recommended size. You might want to size up if you have furry dog or if your dog is on the taller side. \n' +
        '\n' +
        'Sizes and measurements are approximate. Patterns may very slightly. \n' +
        '\n' +
        'If you have any questions please message me. I’m happy to help!!  \n' +
        '\n' +
        'Please be advices that your are responsible for determining what is appropriate for your pet. We will not be responsible for any injuries caused by our products. \n' +
        '\n' +
        'Thank you for shopping in our shop!  Please tell your dog loving friends about our shop!',
      quantity: 13,
      num_favorers: 1,
      tags: [
        'boy dog bandana',
        'girl dog bandana',
        'Fun dog bandana',
        'special event dog',
        'special occasion dog',
        'new baby gift',
        'Dog lover gift',
        'Big sister Dog scarf',
        'Big Sister Bandana',
        'Big Brother Bandana',
        'Dog Bandana',
        'Baby Announcement',
        'Over the collar'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 8,
      img: 'https://i.etsystatic.com/21305467/r/il/c5597e/3295064101/il_fullxfull.3295064101_cvpr.jpg',
      onSale: true
    },
    {
      title: 'Horseshoe Crab Crochet Pattern Amigurumi Horseshoe Crab Ocean Animal Digital Download Crochet Pattern Stuffed Horseshoe Crab Pattern Pdf',
      description: 'This Adobe Pdf digital download file is my original design crochet pattern for a Horseshoe Crab. The pattern is written in English and is illustrated with photos showing every step in the construction of the horseshoe crab. Please note that this is a pattern only, the finished item is not included. \n' +
        '\n' +
        'The pattern is crocheted in a continuous spiral and requires knowledge of the following stitches (including increases and decreases): chain, slip stitch, and single crochet.\n' +
        '\n' +
        'Item size will depend on the weight of yarn used. I crocheted the sample with I Love This Yarn worsted weight (#4) acrylic yarn and size F crochet hook. Sample is 17 inches long, 8 inches wide and 4 inches tall.\n' +
        '\n' +
        'Please see shop policies regarding use of the pattern.\n' +
        '\n' +
        'You can find more amigurumi crochet patterns here:\n' +
        'http://www.etsy.com/shop/OohLookItsARabbit?section_id=7226562',
      quantity: 5,
      num_favorers: 1261,
      tags: [
        'Horseshoe Crab',
        'Sea Creatures',
        'amigurumi crab',
        'amigurumi animal',
        'ocean animal',
        'stuffed crab',
        'crab pattern',
        'crochet crab',
        'crochet animal',
        'animal pattern',
        'crochet pattern',
        'digital download',
        'oohlookitsarabbit'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 5,
      img: 'https://i.etsystatic.com/5964940/r/il/93167f/323290672/il_fullxfull.323290672.jpg',
      onSale: true
    },
    {
      title: 'Mandala Butterfly Dreamcatcher SVG #4 | Cut Files for Cricut, Silhouette, Cameo | Digital Download',
      description: 'This listing includes 6 files. INSTANT DOWNLOAD!\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        'You will receive :\n' +
        '• 1 SVG File in ZIP Folder (compatible with Cricut)\n' +
        '• 1 PNG File and 1 JPEG File in ZIP Folder (300dpi with transparent & white background respectively)\n' +
        '• 1 EPS File in ZIP Folder\n' +
        '• 1 DXF File in ZIP Folder\n' +
        '• 1 PDF File in ZIP Folder\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        '☆☆☆ DETAILS ☆☆☆\n' +
        'Digital files are perfect for printing, resizing, coloring and modifying with the appropriate software for use them for your project, for example:\n' +
        'Scrapbooking, paper goods, DIY invitations & announcements, clothing and accessories, party favors, cupcake toppers, labels & stickers, stationery, gifts, calendars, banners, postcards, etc.\n' +
        '• This is a DIGITAL DOWNLOAD, no physical product will be shipped. You may use it with Cricut, Silhouette (You will need to have Designer Edition Or Business Edition of Silhouette to cut SVG files, basic Edition will not accept), or other cutting machines, etc.\n' +
        '• All files will be available as an instant download. After confirmed payment, your download will be available via your Etsy purchases. In addition, the download link will be sent to your email, you can redownload it as you wish.\n' +
        '• You will need to unzip/extract the received folder to enable the use of the separate files.\n' +
        '• If you need a commercial license, please check the step below this.\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        '☆☆☆ COMMERCIAL USE LICENSE ☆☆☆\n' +
        'You could follow this step,\n' +
        '1.) Place this design in your cart.\n' +
        '2.) Place the Commercial Use License in your cart too.\n' +
        '3.) In the &quot;message to seller&quot; section of checkout, please list the shop names or links that you will be selling this design at.\n' +
        '4.) Continue with checkout.\n' +
        '\n' +
        'Now we offer 2 choices of Commercial Use License including,\n' +
        '• For 200 uses, please go to ⇨ https://etsy.me/3pum4T0\n' +
        '• For 500 uses, please go to ⇨ https://etsy.me/3bclHHL\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        '☆☆☆ DISCLAIMER & POLICIES ☆☆☆\n' +
        '• These files are intended for personal use & small businesses. You may not resell digital assets or claim it as your own.\n' +
        '• Commercial use for physical products is allowed for up to 50 items per purchase of each design. We support small businesses only, commercial items must be made in house.\n' +
        '• Due to the digital nature of the item WE DO NOT OFFER REFUNDS. Please review the item description and be certain about your order before purchasing. All sales are final, but please contact us if you experience any issues\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        '☆☆☆ TROUBLE & CONTACT ☆☆☆\n' +
        '• Trouble with Downloading ⇨ Etsy help center: https://etsy.me/2Zlp4H2\n' +
        '• Trouble with the Files ⇨ Please contact me: www.etsy.com/shop/KaiFinGDesign\n' +
        '• I strive for customer satisfaction and are always happy to help! You will receive a response as fast as possible.\n' +
        '\n' +
        '-------------------------\n' +
        '\n' +
        'Need more design ? Just go to ⇨ https://etsy.me/3auZ4PL\n' +
        '\n' +
        '--- MAY NOT RESELL & SHARE ---\n' +
        'Copyright © 2021 KaiFinGDesign | All Rights Reserved',
      quantity: 968,
      num_favorers: 102,
      tags: [
        'layered zentangle',
        '3d animal mandala',
        'crescent moon svg',
        'mandala star stencil',
        'space moon phase svg',
        'small dream catchers',
        'boho flower floral',
        'monarch clip art png',
        'butterflies stencil',
        'sunflower mandala',
        'celestial vector',
        'native american',
        'religious feather'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.99,
      img: 'https://i.etsystatic.com/27376912/r/il/812d81/2921655282/il_fullxfull.2921655282_cre6.jpg',
      onSale: true
    },
    {
      title: 'Candy Corn Wood garland- Fall garland - Halloween decor - Tiered Tray - Mantel Decor - Centerpiece',
      description: 'Candy Corn Wood garland- Fall garland - Halloween decor - Tiered Tray - Mantel Decor - Centerpiece\n' +
        '\n' +
        'DETAILS:\n' +
        '•Wooden beads: Hand-painted.\n' +
        '•Tassel APPROX.4 inches with jute \n' +
        '•Colors: Orange/ Natural/ White/ \n' +
        '•Bead size: 16mm/20mm/14mm\n' +
        '\n' +
        'Garland lengths:\n' +
        '(Bead to bead approximately\n' +
        '11 inches ( shown above)\n' +
        '22 inches\n' +
        '33 inches\n' +
        '(These measurements do not include the tassel(s) and tag )\n' +
        '\n' +
        '☆☆If you would like to change anything, please send me a message before purchasing. I would love to work with you in designing your product to your liking!!!\n' +
        '\n' +
        'SAFETY:\n' +
        'Please keep in mind that this item is intended to be used as decor only and not as a toy for children. This item may be tempting for little ones and should be kept out of reach.\n' +
        '\n' +
        'SHIPPING:\n' +
        '•My products are made to order.\n' +
        '\n' +
        '•Will mail within 1-3 weeks. I will get your order out ASAP. My processing time is overestimated in case any unforeseeable events happen or when the holiday season is approaching\n' +
        '\n' +
        '• Shipping is subject to change. Please double-check before placing your order.\n' +
        '☆For shipping delivery times, please see estimated dates in the cart. Please note: these times are estimated. Your order may arrive sooner or LATER than shown due to possible delays. Please see policies for more info.\n' +
        '\n' +
        '☆☆Please feel free to send me a message through Etsy regarding any questions or concerns. THANK YOU!☆☆\n' +
        '\n' +
        '♡Please like and follow us on Facebook for updates and new upcoming items.\n' +
        'https://www.facebook.com/Paige-crafts-106429984776279',
      quantity: 5,
      num_favorers: 18,
      tags: [
        'wooden garland',
        'gift for her',
        'Fall decor',
        'Pumpkin spice decor',
        'Candy corn',
        'Halloween decor',
        'rae dunn',
        'home decor',
        'wood bead garland',
        'halloween vibes',
        'Tiered tray decor',
        'Happy fall yall',
        'Candy corn garland'
      ],
      processing_min: 5,
      processing_max: 15,
      price: 13.99,
      img: 'https://i.etsystatic.com/27223941/r/il/966040/3284183381/il_fullxfull.3284183381_cmc4.jpg',
      onSale: true
    },
    {
      title: 'Abstract passion,set of 3 prints,vintage DIGITAL DOWNLOAD, ready to print#23',
      description: 'Abstract passion, for those who appreciate this style, fantasy has no boundaries !!!! This is a trilogy to save and purchase all three of these beautiful prints.\n' +
        '\n' +
        'THIS IS A READY-TO-PRINT MAGAZINE VERSION OF HIS GREAT MASTERPIECE, SUITABLE FOR DIFFERENT SIZES TO Beautify YOUR HOME, YOUR OFFICE, YOUR RELAXATION CORNER, WE ARE SURE YOU WOULD LIKE, THANK YOU.',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'ABSTRACT VINTAGE',
        'ABSTRACT PICTURE',
        'ABSTRACT DOWNLOAD',
        'ABSTRACT DIGITAL',
        'ABSTRACT SHOP',
        'ABSTRACT PRINTS'
      ],
      processing_min: null,
      processing_max: null,
      price: 13,
      img: 'https://i.etsystatic.com/35153129/r/il/4b5fbf/3811899056/il_fullxfull.3811899056_iqyu.jpg',
      onSale: true
    },
    {
      title: 'Spider Web beaded garland- halloween garland - Tiered Tray- Mantel Decor',
      description: '***MADE TO ORDER**** Need it for a special occasion? Please send me a message and let me know. I’ll see what I can do for you 😁. \n' +
        '\n' +
        'Spider Web beaded garland- Halloween garland - Tiered Tray- Mantel Decor\n' +
        '\n' +
        'DETAILS:\n' +
        '•Wooden beads: Hand-painted.\n' +
        '•Tassel APPROX.4 inches with jute \n' +
        '•Colors: White/ Black\n' +
        '•Bead size: 16mm/20mm\n' +
        '\n' +
        'Garland lengths:\n' +
        '(Bead to bead approximately)\n' +
        '15 inches\n' +
        '30 inches\n' +
        '(These measurements do not include the tassel(s)and tag )\n' +
        '\n' +
        '☆☆If you would like to change anything, please send me a message before purchasing. I would love to work with you in designing your product to your liking!!!\n' +
        '\n' +
        'SAFETY:\n' +
        'Please keep in mind that this item is intended to be used as decor only and not as a toy for children. This item may be tempting for little ones and should be kept out of reach.\n' +
        '\n' +
        'SHIPPING:\n' +
        '•My products are made to order.\n' +
        '•Will mail within 2-7 business days. I will get your order out ASAP. My processing time is overestimated in case any unforeseeable events happen.\n' +
        '• Shipping is subject to change. Please double-check before placing your order.\n' +
        '☆For shipping delivery times, please see estimated dates in the cart. Please note: these times are estimated. Your order may arrive sooner or LATER than shown due to possible delays. Please see policies for more info.\n' +
        '\n' +
        '☆☆Please feel free to send me a message through Etsy regarding any questions or concerns. THANK YOU!☆☆\n' +
        '\n' +
        '♡Please like and follow us on Facebook for updates and new upcoming items.\n' +
        'https://www.facebook.com/Paige-crafts-106429984776279',
      quantity: 5,
      num_favorers: 29,
      tags: [
        'gift for her',
        'Witch',
        'Halloween decor',
        'Spider web garland',
        'home decor',
        'Spooky',
        'Tiered tray decor',
        'Pumpkin decor',
        'Halloween vibes',
        'gothic',
        'Happy fall yall',
        'Wood garland',
        'mantle decor'
      ],
      processing_min: 3,
      processing_max: 10,
      price: 13.99,
      img: 'https://i.etsystatic.com/27223941/r/il/cdfced/3284160413/il_fullxfull.3284160413_7bsn.jpg',
      onSale: true
    },
    {
      title: 'Teacher Lanyard | Lanyard | Teacher | Pencil Teacher Lanyard | Pencil Lanyard | Badge Holder',
      description: 'The sweetest little Teacher Lanyard you ever did see! Perfect as a gift for your favorite teacher!! \n' +
        '\n' +
        'Lanyard Details:\n' +
        '\n' +
        '- Lanyard measures 15 inches from the clasp to the top of the Maple wood disk - \n' +
        '\n' +
        '- Lanyard is constructed of a soft cotton cording and food grade Silicone Beads\n' +
        '\n' +
        '- Silicone Beads measure 14mm x 8mm in various colors and one 9mm Black Silicone Bead\n' +
        '\n' +
        '- Lanyard will stay safely connected with a plastic connector (clasp)\n' +
        '\n' +
        '- The disk used for personalization is made from 1/8&quot; Maple Plywood and custom laser engraved with your choice       \n' +
        '   of name\n' +
        '\n' +
        '- Antique Bronze Jump Rings, Keyring and Swivel adapter\n' +
        '\n' +
        'Please be sure to leave your name of choice in notes to seller - and be sure to check spelling ;)\n' +
        '\n' +
        'We do finish our wood with a non-toxic sealer, this does not make them waterproof, however, since the earrings are made from wood it is not recommended that you shower or swim while wearing them.\n' +
        '\n' +
        'One of the reasons I love working with wood is that each piece I make is unique. Wood grain will vary with each piece of jewelry. Computer monitor settings can vary from computer to computer which may result in displaying slight color differences. \n' +
        '\n' +
        '**NO CRAYONS, MARKERS OR PENCILS ARE INCLUDED IN YOUR ORDER**',
      quantity: 16,
      num_favorers: 524,
      tags: [
        'Lanyard',
        'Teacher Lanyard',
        'Teacher',
        'Lanyards',
        'Teacher Lanyards',
        'Teachers',
        'Pencil Lanyard',
        'Pencil Beads',
        'Badge Holder',
        'Teacher Gifts',
        'Lanyard for Teacher',
        'Lanyard for Teachers',
        'Bead Lanyard'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 16,
      img: 'https://i.etsystatic.com/5265990/r/il/6be455/3303857743/il_fullxfull.3303857743_a9e3.jpg',
      onSale: true
    },
    {
      title: 'Protective film suitable for toniebox, bat',
      description: 'The Toniebox has conquered the hearts of children and parents in recent years in no time at all. All you need is the box and a matching figure and you&#39;re already floating around in the land of stories.\n' +
        '\n' +
        'For small and large Toniebox fans who not only want to personalize their box, but also want to protect it from stains and paint abrasions, we therefore offer our beautiful, personalized protective films for the Toniebox.\n' +
        '\n' +
        'The enchanting toniebox foil makes the story cube appear in a new splendour and invites you to dream.\n' +
        '\n' +
        'The offer includes a high-quality, water-repellent protective film for the Toniebox. Please include the name of the child when ordering.\n' +
        '\n' +
        'We also offer suitable protective films for the charging stations.\n' +
        '\n' +
        'THREE STEPS TO A PERSONALIZED TONIEBOX\n' +
        '\n' +
        '1) Clean the surface with a dirt eraser\n' +
        '2) Stick the protective film on your Toniebox.\n' +
        '3) The protected Toniebox is ready.\n' +
        '\n' +
        'Give yourself or your children a whole new look of the Toniebox with our protective films for the Toniebox!',
      quantity: 59,
      num_favorers: 154,
      tags: [
        'Protective film Toniebox',
        'Sticker Toniebox',
        'Personalized Tonibox',
        'Cover for Toniebox',
        'Gift Christmas',
        'Toniebox Name',
        'Plott file Toniebox',
        'Bat',
        'Guys',
        'Charging station stickers',
        'Animals',
        'sweet bat',
        'Tonie foil'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 9.5,
      img: 'https://i.etsystatic.com/18194431/r/il/7b2472/2860732833/il_fullxfull.2860732833_1jwr.jpg',
      onSale: true
    },
    {
      title: 'Playboy Magazine - September 1980 - Centerfold Good',
      description: 'Playboy Magazine - September 1980 - Centerfold Good',
      quantity: 1,
      num_favorers: 1,
      tags: [ 'vintage', 'magazine', 'playboy', 'collectible' ],
      processing_min: 1,
      processing_max: 2,
      price: 18.99,
      img: 'https://i.etsystatic.com/27771769/r/il/3e7497/3584877572/il_fullxfull.3584877572_9s85.jpg',
      onSale: true
    },
    {
      title: 'Nigeria  world cup retro home classic jersey retro shirt',
      description: 'Chest in inches:\n' +
        'Size S - 38\n' +
        'Size M - 40\n' +
        'Size L - 42\n' +
        'Size XL - 44\n' +
        'Size 2XL - 46\n' +
        '\n' +
        'THESE SHIRTS ARE SMALLER THAN NORMAL SIZES , I ADVISE YOU TO  ORDER ONE SIZE UP',
      quantity: 6,
      num_favorers: 29,
      tags: [
        'retro soccer jersey',
        'football jersey',
        'netherlands jersey',
        'netherlands retro',
        'retro football shirt',
        'soccer',
        'nigeria',
        'nigeria jersey',
        'nigeria shirt',
        'okocha',
        'nigeria retro shirt'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 50,
      img: 'https://i.etsystatic.com/23187994/r/il/408100/3459705136/il_fullxfull.3459705136_i05x.jpg',
      onSale: true
    },
    {
      title: 'Large Fresh Eucalyptus Shower Bundle, Aromatherapy, Eucalyptus Bundle, Shower Eucalyptus Plant, Fresh Eucalyptus, Shower Relaxation, Anxiety',
      description: 'Locally Grown Eucalyptus Bundle.  \n' +
        '\n' +
        '* Free Lavender Sachet when you spend $25.98 or more. \n' +
        '\n' +
        'Our Large Freshly Cut Eucalyptus Bundle Is locally grown in San Diego And shipped the same day its cut. \n' +
        '\n' +
        'This is a perishable product just like any other fresh cut greenery it will dry up overtime. \n' +
        '\n' +
        'Place in warm water after you receive it to hydrate the eucalyptus. \n' +
        '\n' +
        'Putting it in water in between showers will prolong the life of the eucalyptus \n' +
        '\n' +
        'This bundle can be used for a variety of purposes such as Home Decor, Shower, DIY Wedding, Etc. \n' +
        '\n' +
        '\n' +
        'Eucalyptus is known for:\n' +
        'Promoting relaxation\n' +
        'Relieving stress & anxiety\n' +
        'Clearing congestion & sinus headaches\n' +
        '\n' +
        '\n' +
        'The shower steamer is a 1 oz puck made with baking soda, citric acid, kaolin clay, eucalyptus oil, fresh eucalyptus leaves. 1 time use aromatherapy for your shower. Place it on the side of your shower and as water and steam collects it releases natural eucalyptus fragrance for sinus relief and aromatherapy. \n' +
        '\n' +
        'Also Available 6- .5oz Steamers\n' +
        '***\n' +
        'We use the freshest flowers picked up daily from our farm and try to get you the freshest shipped product possible.\n' +
        '\n' +
        'Squeezing the Eucalyptus may help release its fragrance.',
      quantity: 787,
      num_favorers: 8781,
      tags: [
        'shower bundle',
        'aromatherapy',
        'fresh eucalyptus',
        'eucalyptus plant',
        'spa',
        'spa shower',
        'eucalyptus',
        'eucalyptus bundle',
        'shower Eucalyptus',
        'eucalyptus shower',
        'Baby Eucalyptus',
        'housewarming',
        'spa gift'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 31,
      img: 'https://i.etsystatic.com/25632738/r/il/d8311e/3207545174/il_fullxfull.3207545174_ox8a.jpg',
      onSale: true
    },
    {
      title: 'Print on canvas - HERE & NOW',
      description: '&quot;Just do it: Enjoy your HERE + NOW&quot;\n' +
        '\n' +
        'A motif by Karin Tauer - Atelier Zebrafisch.\n' +
        '\n' +
        'The copy protection for the digital images in the shop (the line running across the picture: (co) Karin Tauer - Atelier Zebrafisch) is of course not available in the &quot;real&quot; product.\n' +
        '\n' +
        'Square art print on canvas with stretcher frame.\n' +
        'The side edges are printed with it, so the image does not need another frame. Nail on the wall and hung up.\n' +
        'Format of 20 x 20 cm x 2 cm.\n' +
        '\n' +
        'The color of the screen display may differ from the actual color scheme of the product.',
      quantity: 3,
      num_favorers: 26,
      tags: [
        'Art Printing', 'Zebrafish',
        'Karin Tauer',  'Gift',
        'Motivation',   'Birthday present',
        'Pressure',     'Canvas',
        'enjoy',        'Be quiet',
        'relax',        'Wife',
        'Read'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 24,
      img: 'https://i.etsystatic.com/18352780/r/il/2ebb95/1824986256/il_fullxfull.1824986256_hlbm.jpg',
      onSale: true
    },
    {
      title: 'Birthday Unicorn Applique / Unicorn Face Embroidery / Unicorn Eyelashes / Unicorn Applique / Unicorn Roses / Unicorn Birthday Set',
      description: 'Birthday Unicorn Applique / Unicorn Face Embroidery / Unicorn Eyelashes / Unicorn Applique / Unicorn Roses / Unicorn Birthday Set\n' +
        '\n' +
        '🦄 Welcome to Curtsy Embroidery! 🦄\n' +
        '\n' +
        '&gt;&gt;&gt; Instant download zip file formatted for PES, JEF, EXP, VIP, VP3, DST, XXX & HUS formatted for 4x4, 5x7, & 6x10 inch hoops.\n' +
        '\n' +
        '&gt;&gt;&gt;This listing includes numbers 1 through nine and unicorn design alone for all listed formats and hoops sizes.\n' +
        '\n' +
        '&gt;&gt;&gt; Want to be spoiled with presents and coupon codes? Visit www.curtsyembroidery.com to see what this weeks FREE design is! While you&#39;re there, sign up for my VIP email list and make sure that you NEVER miss an exclusive freebie or discount code. 🧡Carrie\n' +
        '\n' +
        '&gt;&gt;&gt; PLEASE NOTE: This is NOT a patch or a physical product. This is a digital design created to work with embroidery machines. There are no fonts included with this listing. Any names in photographs are for example purposes.\n' +
        '\n' +
        '&gt;&gt;&gt; Small commercial use license is included with your purchase (under 500 physical items). The digital design is not to be altered, shared or sold digitally in any way or uploaded to print-on-demand services (zazzle, merch, etc.)\n' +
        '\n' +
        '© Carrie Dalton, LLC & Curtsy Embroidery, 2017',
      quantity: 480,
      num_favorers: 1062,
      tags: [
        'unicorn face',
        'unicorn embroidery',
        'unicorn applique',
        'embroidery design',
        'applique design',
        'unicorn design',
        'applique unicorn',
        'unicorn head',
        'embroidery applique',
        'embroidery unicorn',
        'machine applique',
        'birthday unicorn',
        'birthday set'
      ],
      processing_min: null,
      processing_max: null,
      price: 9.95,
      img: 'https://i.etsystatic.com/7550151/r/il/9949bc/2793997373/il_fullxfull.2793997373_9sg6.jpg',
      onSale: true
    },
    {
      title: 'iPhone iOS App Icons - Mono - Minimalistic Monochromatic iPhone App Cover Pack (56 Icons) with Wallpapers and Widget',
      description: '-WIDGETS REQUIRE WIDGETSMITH TO CUSTOMIZE-\n' +
        '\n' +
        'Simple, Aesthetic icon pack with Black and White customization.\n' +
        'Enjoy 56 application monochromatic covers with bonus icons, cute backgrounds and widgets.\n' +
        'Both the Black pack and White pack are available in this package when downloaded. Mix and match to your preference.\n' +
        '\n' +
        'Apps:\n' +
        '\n' +
        'Amazon\n' +
        'App Store\n' +
        'Bank\n' +
        'Calculator\n' +
        'Calendar\n' +
        'Camera\n' +
        'Cash App\n' +
        'Clock\n' +
        'Coffee\n' +
        'Contacts\n' +
        'Discord\n' +
        'Disney+\n' +
        'Drive\n' +
        'Etsy\n' +
        'Facebook Messenger\n' +
        'Facebook\n' +
        'FaceTime\n' +
        'Files\n' +
        'Gmail\n' +
        'Health\n' +
        'Home\n' +
        'Hulu\n' +
        'Instagram\n' +
        'LINE\n' +
        'LinkedIn\n' +
        'Lyft\n' +
        'Mail\n' +
        'Maps\n' +
        'Messages\n' +
        'Music\n' +
        'Netflix\n' +
        'Notes\n' +
        'Phone\n' +
        'Photos\n' +
        'Pinterest\n' +
        'Podcasts\n' +
        'Reddit\n' +
        'Reminders\n' +
        'Safari\n' +
        'Settings\n' +
        'Shortcuts\n' +
        'Skype\n' +
        'Snapchat\n' +
        'Spotify\n' +
        'TikTok\n' +
        'Tinder\n' +
        'Translate\n' +
        'Twitch\n' +
        'Twitter\n' +
        'Uber\n' +
        'Venmo\n' +
        'Wallet\n' +
        'Weather\n' +
        'WhatsApp\n' +
        'YouTube\n' +
        'Zoom\n' +
        '\n' +
        'Plus:\n' +
        '\n' +
        'Blank Icon\n' +
        '26 Letters (A-Z) (2 Different Styles)\n' +
        '7 Backgrounds\n' +
        '7 Widgets',
      quantity: 459,
      num_favorers: 148,
      tags: [
        'Aesthetic',
        'Minimalistic',
        'iPhone iOS 14',
        'Application Icons',
        'Phone Customization',
        'Apple',
        'Black and White',
        'Monochromatic',
        'Cute',
        'Simple App Covers',
        'Monochrome',
        'Day Blue',
        'iOS 15'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.99,
      img: 'https://i.etsystatic.com/25328448/r/il/da2779/2654454545/il_fullxfull.2654454545_1fng.jpg',
      onSale: true
    },
    {
      title: 'Weekend Vibes With My Tribe Svg, Girls Trip Shirt SVG, Girls Weekend SVG, Girls Summer Vacation, Girls Trip Gifts,Files for Cricut, Svg, Png',
      description: 'Weekend Vibes With My Tribe Svg, Girls Trip Shirt SVG, Girls Weekend SVG, Girls Summer Vacation, Girls Trip Gifts,Files for Cricut, Svg, Png\n' +
        '\n' +
        '--------------------------------------\n' +
        '\n' +
        'You will get 1 ZIP file that contains 7 files (Unzip to use)\n' +
        '\n' +
        '          -  2 PNG files (Black & White).    300dpi High Resolution Transparent Background.\n' +
        '          -  1 PNG files.   Only for Cricut and Silhouette Transparent Background.\n' +
        '          -  1 JPG file.    300dpi High Resolution White Background.\n' +
        '          -  1 EPS file     Vector file.\n' +
        '          -  1 SVG Group file. Compatible with Cricut Design Space.\n' +
        '          -  1 SVG Ungroup file. (Compatible with Cricut Design Space. You can change size or color with your imagination.)\n' +
        '\n' +
        '*** For Cricut Design Space, Please  use the SVG-Group file.\n' +
        '\n' +
        'My customers and their satisfaction are very important to me. Please know that your satisfaction is always my goal.\n' +
        '\n' +
        'Please feel free to contact me with any questions or requests.\n' +
        '\n' +
        '--------------------------------------\n' +
        'Please verify your software will compatible with these files before purchasing.\n' +
        '\n' +
        'During the download process from Etsy, if there is a mistake, please contact me, I will be happy to send you a direct link.\n' +
        '\n' +
        'If you have issues with the file, please contact me before leaving a review.\n' +
        '\n' +
        'These files are perfect for shirt printing, mugs, stickers, \n' +
        'tumblers, cards, albums, pillows, etc.\n' +
        '\n' +
        'SVG file is compatible with Cricut machine.\n' +
        '\n' +
        'You can change the size to your needs and can also\n' +
        'change the color or add text with graphics software or any other\n' +
        'online editing software.\n' +
        '\n' +
        '--------------------------------------\n' +
        'INSTANT DOWNLOAD :\n' +
        'This is a digital product NO physical product will be shipped to you.\n' +
        '\n' +
        'This is a digital item will be ready to download immediately after your purchase.\n' +
        'More information about Etsy downloads can be found here: https://www.etsy.com/help/article/3949\n' +
        '\n' +
        '--------------------------------------\n' +
        'IMPORTANT:\n' +
        '- Digital designs from TBAdesignshop may be used for personal & small business.\n' +
        '- Do not sold or distributed for free in original format and you may not claim them as your own designs.\n' +
        '- You cannot sell the file as digital files.\n' +
        '- TBAdesignshop shall not be responsible for printing or other end-user errors.\n' +
        ' \n' +
        '\n' +
        'Thank you !\n' +
        '\n' +
        'TBAdesignshop.',
      quantity: 995,
      num_favorers: 14,
      tags: [
        'Weekend Vibes SVG',
        'funny girls travel',
        'Girls trip design',
        'friend trip gifts',
        'girls trip quote svg',
        'girls trip 2022 svg',
        'matching friends',
        'girls camping shirt',
        'Women Vacation Shirt',
        'funny vacation time',
        'girls beach trip svg',
        'vacay vibes svg',
        'girls weekend saying'
      ],
      processing_min: null,
      processing_max: null,
      price: 3,
      img: 'https://i.etsystatic.com/23917828/r/il/8766d1/3702615906/il_fullxfull.3702615906_q8vx.jpg',
      onSale: true
    },
    {
      title: '11 Vintage Japan Assorted Flowers 25x18mm. Oval Carnelian Resin Cabochon Cameos 253',
      description: 'ITEM: VINTAGE JAPANESE CARNELIAN BASE RAISED CREAM ASSORTED FLOWER OVAL FLAT BACK RESIN ACRYLIC CABOCHON CAMEOS\n' +
        '\n' +
        '(PLEASE NOTE: EACH PIECE IS UNIQUE IN DESIGN & VARYING IN CREAM SHADE COLORING)  \n' +
        '\n' +
        'QUANTITY: 11 PIECES\n' +
        '\n' +
        'SIZE & SHAPE: OVAL 25x18mm. (6mm. Thickness) NO HOLES\n' +
        '\n' +
        'MATERIAL: VINTAGE ACRYLIC RESIN\n' +
        '\n' +
        'COLOR: CARNELIAN & CREAM \n' +
        '\n' +
        'AGE & ORIGIN: LATE 1960&#39;S TO EARLY 1970&#39;S MADE IN JAPAN\n' +
        '\n' +
        '\n' +
        'Interested in more Cameos...... Please click below:\n' +
        'https://www.etsy.com/shop/MLRobertsLtd?section_id=18260911&ref=shopsection_leftnav_7',
      quantity: 5,
      num_favorers: 182,
      tags: [
        'Vintage Cameo',
        'Oval Cameo',
        'acrylic cameo',
        'flower cabochon',
        '25x18',
        '25x18mm cabochon',
        'flower cameo',
        'floral cameo',
        'flower bouquet',
        'bouquet',
        'Jewelry Making',
        'Beading',
        'Vintage Resin'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 6.99,
      img: 'https://i.etsystatic.com/6976055/r/il/14f56d/3710472141/il_fullxfull.3710472141_axwd.jpg',
      onSale: true
    },
    {
      title: 'Jungle Cruise Shirt, Funny Disney Shirts, Jungle Cruise, Funny Disneyworld Shirts, Mens Disney Shirts, Boats &#39;N Jokes, Adult S-3X',
      description: 'Jungle Cruise Shirt, Funny Disney Shirts, Jungle Cruise, Funny Disneyworld Shirts, Mens Disney Shirts, Boats &#39;N Jokes, Adult S-3X\n' +
        '\n' +
        '⬥ SHIRT FEATURES ⬥\n' +
        'Designs are printed directly to the garment, not vinyl.\n' +
        'Retail fit - Runs True to Size\n' +
        '100% Soft cotton (fibre content may vary for different colors)\n' +
        'Light fabric (4.2 oz/yd² (142 g/m²))\n' +
        'Colors of the shirt may not be as bright and saturated as pictured due to the brightness and resolution of your monitor or screen.\n' +
        '\n' +
        '⬥ GENERAL SIZING INFO⬥\n' +
        'It is the buyer&#39;s responsibility to consult the chart provided in product photos before placing the order. It is highly recommended to purchase a SIZE UP.\n' +
        '\n' +
        'NOTE: Any sizing info is general suggestions & NOT a substitute for measuring! Since body types & preferences can vary significantly, we DO NOT guarantee fit. ALWAYS MEASURE -- then compare size chart with your own shirt for best results!\n' +
        '\n' +
        '⬥ SIZE VARIATIONS ⬥\n' +
        'Variations in measurements up to 0.5&quot; are acceptable within the manufacturer&#39;s guidelines.\n' +
        '\n' +
        '⬥ PROCESSING TIMES ⬥\n' +
        ' Processing takes 3-6 business days after payment clears on Etsy.\n' +
        '(additional processing time required for orders of multiple items) Rush orders are currently unavailable. If you need something by a certain date please message me before placing your order to see if it can be guaranteed.\n' +
        '\n' +
        'NOTE: Longer processing times during holidays may apply.\n' +
        'Changes in processing times will be noted at the beginning of the item description and in shop announcements. \n' +
        '\n' +
        '⬥ SHIPPING TIMES ⬥\n' +
        'All items are shipped via USPS\n' +
        'Once shipped allow 3-7 business days for delivery\n' +
        'NOTE: We cannot guarantee USPS shipping times -- they are only estimates\n' +
        '\n' +
        '⬥ SHIPPING LIABILITY ⬥\n' +
        '***We have a limited time to provide our print provider address changes, please contact us immediately if you need to change the delivery address.\n' +
        '***We are never responsible for lost, stolen, damaged, or mis-delivered packages\n' +
        '***We are never responsible for USPS transit delays or mishaps\n' +
        '     (once it leaves our store - it&#39;s beyond our control)\n' +
        '***Etsy provides tracking by email with expected delivery-- please watch for expected packages\n' +
        '***We do not offer refunds or replacement order for USPS mishaps, buyer assumes the risk.\n' +
        '\n' +
        'Damaged Packaging:\n' +
        '***If package appears damaged, DO NOT open. Take to local USPS to file a claim.\n' +
        '\n' +
        'Not Received:\n' +
        '••• If an item was marked &quot;delivered&quot; but not received contact the USPS immediately & file &quot;lost mail&quot; claim online\n' +
        '(also check with local P.O. branch, neighbors, and mail carrier)\n' +
        '••• Check with USPS for any delivery/transit issues. We will try to assist you on our end but are only responsible for your order until it is scanned as &quot;received&quot; at post office.\n' +
        '••• On occasion, missing packages turn up and are redelivered later once filed as lost mail.\n' +
        '\n' +
        '⬥ RETURNS ⬥\n' +
        'This is a customized product that cannot be resold. Therefore all sales are final and we cannot accept returns. If seller or print provider has made a mistake a replacement will be sent once the replacement claim steps listed below are completed. \n' +
        '\n' +
        '••• REPLACEMENT CLAIM STEPS:\n' +
        '1) Please contact us within 3 business days via Etsy (not email)\n' +
        '2) Send a VERY CLEAR picture of the error & description via ETSY messenger\n' +
        '3) We will contact our print provider with the provided picture and put replacement into production as soon as possible.',
      quantity: 893,
      num_favorers: 319,
      tags: [
        'Jungle Cruise Shirt',
        'funny disney shirts',
        'jungle cruise',
        'funny disney shirt',
        'funny disneyworld',
        'Disneyworld Shirt',
        'mens disney shirts',
        'disney shirt funny',
        'boats and jokes',
        'disney jungle cruise',
        'boats n jokes',
        'jungle cruise shirts',
        'Funny Disney'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 23,
      img: 'https://i.etsystatic.com/19659051/r/il/e8f595/2530657170/il_fullxfull.2530657170_cs4z.jpg',
      onSale: true
    },
    {
      title: 'LOOPY LOOPS - Longarm Quilting Digital Pattern for Edge to Edge and Pantograph Handiquilter Gammill Statler Stitcher Long Arm Machine',
      description: 'LOOPY LOOPS\n' +
        'Longarm quilting pattern for digital quilting.  File formats include:\n' +
        '\n' +
        '.cqp\n' +
        '.dxf\n' +
        '.hqf\n' +
        '.iqp\n' +
        '.pat\n' +
        '.plt\n' +
        '.qli\n' +
        '.ssd\n' +
        '.txt\n' +
        '.wmf\n' +
        '.jpg image file\n' +
        '\n' +
        'These are compatible with most longarm quilting formats including: Innova, AutoCAD, HQ Pro-Stitcher, Intelliquilter, Side Saddle, Statler Stitcher, QBot and PC Quilter.\n' +
        '\n' +
        'This is a digital product no physical product will be sent.\n' +
        'Once payment is complete a digital file will be available for download in your account and an email will be sent to your Etsy registered email. Please check your spam or junk inbox.\n' +
        '\n' +
        'I also offer long arm quilting services via JulieHirt.com',
      quantity: 19,
      num_favorers: 80,
      tags: [
        'longarm quilting',
        'statler stitcher',
        'gammill',
        'handiquilter',
        'prostitcher',
        'quilt pattern',
        'pantograph',
        'edge to edge',
        'quilting',
        'long arm',
        'intelliquilter',
        'free motion quilting',
        'LOOPY LOOPS'
      ],
      processing_min: null,
      processing_max: null,
      price: 10,
      img: 'https://i.etsystatic.com/5517696/r/il/b5984c/1206657017/il_fullxfull.1206657017_1j02.jpg',
      onSale: true
    },
    {
      title: 'papercraft koala bear, koala bear gift, DIY Crafts, paper model, gift, home decor',
      description: 'INSTANT DOWNLOAD and start the fun !\n' +
        'Koala Bear DIY papercraft template.\n' +
        '\n' +
        'Size : 325mm Height / 290mm Width / 150mm Dept\n' +
        'A4 sheets : 9\n' +
        '\n' +
        'After payment made you will receive 3 PDF contains :\n' +
        'Koala_Bear_Instruction ( 1 page )\n' +
        'Koala_Bear_Ref (9 pages )\n' +
        'Koala_ Bear_Template (9 pages )\n' +
        '\n' +
        'You&#39;ll need a printer to print the template, cardstock, scissors (or stationery knife), ruler, scoring tool and glue. \n' +
        'Bear is in plain white color but you can use your creativity to decorate it using patterned, glitter, gloss or color paper of your own choice. You can easily scale the whole design to get a bigger or smaller model. \n' +
        '\n' +
        'You will receive the digital link for instant download. No paper products will be mailed to you. All items are in digital format, you will receive pdf via Etsy or via your email with the pdf file. \n' +
        '\n' +
        'NOTICE:\n' +
        'THIS PRODUCT IS MEANT FOR YOUR PERSONAL ENTERTAINMENT.\n' +
        'PLEASE DO NOT RESELL, SHARE, PUBLISH, COPY, SELL OR DISTRIBUTE THE PDF FILES. ASSEMBLED AND FINISHED PRODUCTS ALSO SHOULDN&#39;T BE SOLD IN ANY WAY.',
      quantity: 94,
      num_favorers: 177,
      tags: [],
      processing_min: null,
      processing_max: null,
      price: 17,
      img: 'https://i.etsystatic.com/17501893/r/il/21d07c/1987441727/il_fullxfull.1987441727_nyzv.jpg',
      onSale: true
    },
    {
      title: 'Afro Bun Black Woman SVG, Sublimation, Clip Art, Instant Download svg png jpg',
      description: 'Thank you for choosing Purrfect Paws Designs!\n' +
        '\n' +
        'This listing is an 𝐈𝐍𝐒𝐓𝐀𝐍𝐓 𝐃𝐈𝐆𝐈𝐓𝐀𝐋 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n' +
        '*𝐏𝐔𝐑𝐂𝐇𝐀𝐒𝐄 𝐈𝐍𝐂𝐋𝐔𝐃𝐄 *\n' +
        '1 SVG file\n' +
        '1 PNG file\n' +
        '1 JPEG file',
      quantity: 77,
      num_favorers: 1327,
      tags: [
        'black woman',
        'afro bun',
        'black girl magic',
        'black queen',
        'svg',
        'png',
        'sublimation',
        'cut file',
        'cricut',
        'leopard print',
        'cartoon lady'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.29,
      img: 'https://i.etsystatic.com/26095813/r/il/e9c24f/3383336922/il_fullxfull.3383336922_don6.jpg',
      onSale: true
    },
    {
      title: '12 Vintage Hong Kong Tortoise Amber Resin Floral 18x13mm. Cabochon Cameos 280PT',
      description: 'ITEM: VINTAGE TORTOISE AMBER ACRYLIC RESIN CARVED PIERCED HOLE DESIGN OVAL FLAT BACK CABOCHON CAMEOS\n' +
        '\n' +
        '*** EACH PIECE IS UNIQUE IN COLORATION AS SHOWN IN PICTURES***\n' +
        '\n' +
        'QUANTITY: 12 PIECES (IN MANUFACTURER&#39;S ORIGINAL PACKAGE WITH MADE IN HONG KONG TAG)\n' +
        '\n' +
        'SIZE & SHAPE: OVAL 18x13mm. (3mm. Thickness)\n' +
        '\n' +
        'MATERIAL: VINTAGE ACRYLIC RESIN\n' +
        '\n' +
        'COLOR: TORTOISE AMBER\n' +
        '\n' +
        'AGE & ORIGIN: LATE 1970&#39;S TO EARLY 1980&#39;S - MADE IN HONG KONG (IN MANUFACTURER&#39;S ORIGINAL PACKAGE WITH MADE IN HONG KONG TAG)',
      quantity: 19,
      num_favorers: 0,
      tags: [
        'Vintage Cameo',  'flat back',
        'cameo',          'FLOWER',
        'Oval',           'Pierced',
        'carved',         'floral',
        '18x13',          'cabochon',
        'Jewelry Making', 'tortoise',
        'amber'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 5.99,
      img: 'https://i.etsystatic.com/6976055/r/il/db3651/3790601270/il_fullxfull.3790601270_przl.jpg',
      onSale: true
    },
    {
      title: 'Cute bunny with glasses svg, Bow svg, Easter svg, Bunny svg, Easter bunny svg, Bunny bandana svg, Christian svg, Jesus svg, Religion svg',
      description: 'Easter bunny with glasses and bandana Cut File and Printable.\n' +
        '\n' +
        'This Purchase includes an SVG, PNG, EPS and a DXF file, making it perfect for use in Cricut Design Space, Sure Cuts A Lot, Make The Cut, and the Silhouette.\n' +
        '\n' +
        'Designs can be sized or layered according to your project needs.\n' +
        '\n' +
        'File Come&#39;s in a Zip Folder and include SVG, EPS, DXF, PNG Download.\n' +
        '\n' +
        'You will get: \n' +
        '\n' +
        '-1 SVG for Silhouette Studio and Cricut Design Space\n' +
        '\n' +
        '-1 DXF for Silhouette Studio\n' +
        '\n' +
        '-1 PNG  Clip Art for Printing (The PNG has a blank background.)\n' +
        '\n' +
        '-1 EPS Vector file\n' +
        '\n' +
        '*This is a DIGITAL product. I will NOT be sending or mailing a physical product.\n' +
        '\n' +
        '* REFUNDS ARE NOT OFFERED on digital downloads',
      quantity: 947,
      num_favorers: 875,
      tags: [
        'svg',
        'svg file',
        'cricut',
        'cut file',
        'Bow svg',
        'Easter svg',
        'Bunny svg',
        'Easter bunny svg',
        'Bunny bandana svg',
        'Christian svg',
        'Jesus svg',
        'Religion svg',
        'bunny glasses svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.8,
      img: 'https://i.etsystatic.com/21633208/r/il/399235/3733564203/il_fullxfull.3733564203_lrjm.jpg',
      onSale: true
    },
    {
      title: 'Woman afro puff queen glasses eyeshadow - African American Afro Girl - svg cutting file + dxf png - Black queen Afrohair clipart - S536',
      description: 'High quality vector image in 3 different formats: SVG DXF PNG in a zip file.\n' +
        '\n' +
        'IF YOU LIKE THIS ITEM, YOU MAY ALSO LIKE:\n' +
        'Afro puff 3 bundle: https://www.etsy.com/listing/879315777\n' +
        'Eyeshadow: https://www.etsy.com/listing/890511887\n' +
        'Dark glasses: https://www.etsy.com/listing/842219769\n' +
        'Queen crown: https://www.etsy.com/listing/806173860\n' +
        '\n' +
        'This is a DIGITAL PRODUCT. NO PHYSICAL ITEM WILL BE SHIPPED.\n' +
        '\n' +
        'Looking for physical products with this design? Check out the AfroCutieApparel shop! \n' +
        'Tshirt: https://www.etsy.com/listing/1051914693\n' +
        '\n' +
        '***No drop shadows or watermarks will be included on your download***\n' +
        '\n' +
        'TERMS OF USE: \n' +
        '\n' +
        'For personal and commercial use. \n' +
        '\n' +
        'When used for commercial use, you may use the images for printed products for less than 100 sales. For printed products, the design can not be used alone. Please keep in mind that you have to include more and different elements (text, other images, background etc) in order to create something new that&#39;s your own. You can also use the graphic digitally as a part of a bigger project for commercial use as well - such as on an invitation, a video or in a logo. Kindly note, you&#39;re NOT allowed to resell or sell the digital file with minor changes. To purchase a commercial license for use of the image for over 100 sales, please contact me.\n' +
        '\n' +
        'Find more Afro Cutie Designs in the shop: https://www.etsy.com/shop/afrocutiedesigns\n' +
        '\n' +
        'Thanks for visiting!',
      quantity: 771,
      num_favorers: 641,
      tags: [
        'Natural hair',
        'black girl clip art',
        'afrohair',
        'african american',
        'black girl svg',
        'black girl hair art',
        'afro girl clip art',
        'afro puff',
        'girl afro braids',
        'cornrows braids',
        'afro puff eyeshadow',
        'queen cornrows',
        'black queen svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.95,
      img: 'https://i.etsystatic.com/19498165/r/il/4d448a/2967727600/il_fullxfull.2967727600_8zh1.jpg',
      onSale: true
    },
    {
      title: 'Heart design Rose gold Stainless Steel heart pet ID tag, Dog tag, cat tag, Laser engraved.',
      description: 'Create your own funky tag design by choosing your own font and symbols from our images.\n' +
        'Please leave a note at checkout with your custom text, paying special attention to spellings and use of capital letters as it will be engraved exactly how you have stated. \n' +
        '\n' +
        'For example:\n' +
        '\n' +
        'FRONT\n' +
        'Millie with a heart in Verdana font.\n' +
        '\n' +
        'BACK\n' +
        'Vince\n' +
        '40, NG17 7GH \n' +
        '07841910199\n' +
        '\n' +
        'NO MORE THAN 4 LINES MAXIMUM.\n' +
        '\n' +
        'Contact information is always engraved in arial font, It is law in the uk to provide your surname, house number / name,  postcode and telephone number for dogs. \n' +
        '\n' +
        'Unless otherwise stated I will do the exact design and font in the profile picture.\n' +
        '\n' +
        'Please allow up to 2 weeks for dispatch. Sorry returns not accepted on personalised items.\n' +
        '\n' +
        'Care of your ID tag.\n' +
        '\n' +
        'We use the best quality blanks and split rings that we can find on the market so please be assured that your tag should have a lifetime of use. \n' +
        'However,  we realise that sometimes accidents happen and some tags get scratched up quicker than others, particularly on puppies. We recommend attaching your tag to the ring furthest from the buckle to prevent scratching,  particularly on collars with metal buckles.\n' +
        'We also recommend requesting a larger, strong carrier ring on collars with D rings chunkier than the standard 3mm thickness as our small rings may bend out of shape and not snap back tight enough to keep the tag in place.\n' +
        'If you bend your split ring trying to get it on a thick D ring DO NOT attach the tag as it may fall off. Contact me for a replacement ring or we also sell lobster clasps which are great for adding tags to collars quicker.\n' +
        'Split ring pliers are a absolute god send 👌',
      quantity: 57,
      num_favorers: 552,
      tags: [
        'ID tag',
        'dog tag',
        'pet ID tags',
        'pet ID tag',
        'cat ID tag',
        'dog ID tags',
        'dog ID tag',
        'pet tag',
        'dog collar',
        'heart',
        'Rose gold',
        'cat ID tags',
        'dog tags for dogs'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 8,
      img: 'https://i.etsystatic.com/12871578/r/il/eceeeb/2782398418/il_fullxfull.2782398418_f55d.jpg',
      onSale: true
    },
    {
      title: 'Girls Long Multicolour Elastic Hair Band Bow, Colourful Ribbons with Small Pompons Bow Hair Band, Rainbow Hair Band',
      description: 'Handmade colourful ribbons elastic hair band. \n' +
        '\n' +
        'it is made of multicolour ribbons with little fluffy pompons on the bottom of each, ribbon bow attached on elastic hair band.\n' +
        '\n' +
        'Perfect gift for your daughter, granddaughter, niece or a friend.\n' +
        '\n' +
        'it will be posted by Royal Mail 2nd Class Large Letter.\n' +
        '\n' +
        'Thank you very much for looking :)',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'elastic hair band',
        'ribbon hair band',
        'bow ribbon hair band',
        'rainbow hair band',
        'multicolour ribbon',
        'multicolour hair bow',
        'kids hair band',
        'girls hair band'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 5.49,
      img: 'https://i.etsystatic.com/35113879/r/il/9dfd8a/3811875466/il_fullxfull.3811875466_cvq2.jpg',
      onSale: true
    },
    {
      title: 'Boxwood Bunny Wreath - Bunny Wreath - Easter Bunny Wreath - Easter Wreath',
      description: 'This adorable boxwood bunny topped with a bow of your choice makes the perfect decor for Easter and spring.\n' +
        '• Choose your bow color (dozens of bow options, see the last photo) to make this wreath uniquely yours.\n' +
        '• Each bunny has a sheer ribbon loop for easy hanging.\n' +
        '• Handmade especially for you, using high-quality artificial materials.\n' +
        '• Low profile is perfect to fit behind a storm door.\n' +
        '\n' +
        'Features：\n' +
        '\n' +
        'Environmental protection material is tasteless, beautiful, and delicate.\n' +
        'It can be used both indoors and outdoors. It is a perfect decoration.\n' +
        'The rabbit design is cute, elegant, and charming.\n' +
        'You can hang it on the fireplace and front door or on the wall in the living room.\n' +
        'Suitable for home, wedding banquet, party, festival, it is the perfect decoration.\n' +
        '\n' +
        'Package Included:\n' +
        '\n' +
        '1 X Wreath.',
      quantity: 99,
      num_favorers: 0,
      tags: [
        'Easter',
        'Easter Bunny',
        'spring',
        'spring decor',
        'bunny',
        'wreath',
        'Easter wreath',
        'Easter decoration',
        'svg files for cricut',
        'happy easter svg',
        'spring wreath',
        'spring wreath svg',
        'Easter bunny svg'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 35,
      img: 'https://i.etsystatic.com/25253246/r/il/9020b5/3859417137/il_fullxfull.3859417137_glsc.jpg',
      onSale: true
    },
    {
      title: 'CLAM SHELL - Longarm Quilting Digital Pattern for Edge to Edge Pantograph Handiquilter Bernina Gammill Statler Stitcher Long Arm',
      description: 'CLAM SHELL\n' +
        'Longarm quilting pattern for digital quilting. You&#39;ll need to offset every other row to create the clamshell pattern.\n' +
        'File formats include:\n' +
        '\n' +
        '.bqm\n' +
        '.cqp\n' +
        '.dxf\n' +
        '.hqf\n' +
        '.hqv\n' +
        '.iqp\n' +
        '.pat\n' +
        '.plt\n' +
        '.qli\n' +
        '.qcc\n' +
        '.ssd\n' +
        '.txt\n' +
        '.jpg image file\n' +
        '\n' +
        'These are compatible with most longarm quilting formats including: Innova, Bernina,  AutoCAD, HQ Pro-Stitcher, Intelliquilter, Side Saddle, Statler Stitcher, QBot and PC Quilter.\n' +
        '\n' +
        'This is a digital product no physical product will be sent.\n' +
        'Once payment is complete a digital file will be available for download in your account and an email will be sent to your Etsy registered email. Please check your spam or junk inbox.\n' +
        '\n' +
        'I also offer long arm quilting services via JulieHirt.com',
      quantity: 55,
      num_favorers: 63,
      tags: [
        'longarm quilting',
        'statler stitcher',
        'gammill',
        'handiquilter',
        'prostitcher',
        'quilt pattern',
        'pantograph',
        'edge to edge',
        'quilting',
        'long arm',
        'custom',
        'intelliquilter',
        'Clam Shell'
      ],
      processing_min: null,
      processing_max: null,
      price: 10,
      img: 'https://i.etsystatic.com/5517696/r/il/84e506/1017616132/il_fullxfull.1017616132_eb2p.jpg',
      onSale: true
    },
    {
      title: 'Custom Family Pool Decor Sign, Swimming Pool Decor, Poolside Paradise, Welcome, Metal Sign, Family Room Gift Sign 4x18 104182002007',
      description: 'Sizes/Finish Options:\n' +
        '\n' +
        'Economy: 4 inch x 18 inch x .032&quot; Thick w/ HIGH GLOSS Finish\n' +
        'Premium: 4 inch x 18 inch x .040&quot;  Thick w/ MATTE/LOW LUSTER Finish\n' +
        '\n' +
        'Ordering Information and Sign Details\n' +
        '\n' +
        '   - FREE SHIPPING\n' +
        '   - MADE AND SHIPPED IN THE USA!!!\n' +
        '   - Usually ships within 1-2 days. (Custom Signs included.) \n' +
        '   - Durable aluminum that will not rust outside. \n' +
        '   - Pre-drilled holes for easy hanging or mounting. \n' +
        '\n' +
        'Personalization:\n' +
        '\n' +
        '         Please enter the information in the customization box exactly as you want it to appear on the sign. If you would like an &#39;s, please add it\n' +
        '         to the name when you enter the text in the box. \n' +
        '   \n' +
        'Each sign is made to order and manufactured in our shop in Northern California. We have a huge selection of Vintage Reproductions, Personalized Signs, and new designs for any occasion. Our signs make great gifts and they are also perfect for your home, office, business, garage, man cave, she shed, dorm room, game room, kitchen or any place you&#39;d like to display this unique sign. We have several thousand different designs available with more being added every day.',
      quantity: 98,
      num_favorers: 3,
      tags: [
        'Rustic',        'Vintage',
        'Decor',         'metal signs',
        'Swimming pool', 'pool sign',
        'hot tub',       'sauna',
        'custom sign',   'pool gift',
        'Backyard sign', 'backyard gift',
        'tiki'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 21.95,
      img: 'https://i.etsystatic.com/11019183/r/il/246830/3788976280/il_fullxfull.3788976280_6v7u.jpg',
      onSale: true
    },
    {
      title: 'Yellow Ducky / Embroidered / Iron On - Sew / 1x Patch Per Order',
      description: '🔳 Embroidered \n🔳 Iron On - Sew \n🔳 1x Patch Per Order',
      quantity: 4,
      num_favorers: 9,
      tags: [
        'Military Patch',
        'Army Patches',
        'Patch Collection',
        'Funny Patches',
        'Sew On Patch',
        'Embroidered Patch',
        'Patch'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6,
      img: 'https://i.etsystatic.com/22971203/r/il/2b4150/2499821814/il_fullxfull.2499821814_67fc.jpg',
      onSale: true
    },
    {
      title: 'Boys Birth Announcement Pillow - Footprints - Navy Grey - Nursery Pillow - New Baby Gift - Personalized - Cotton',
      description: 'Boys Personalized Birth Announcement Nursery Pillow - Footprints in blue and grey - includes pillow cover AND pillow insert\n' +
        '\n' +
        'This sweet birth announcement keepsake is professionally printed on a removable hand sewn cotton / linen pillow cover, and comes complete with pillow insert size 14 x 14 or 16 x 16. Easy to remove and wash, printed with lasting water based pigment ink that won&#39;t fade, this adorable pillow is intended to be a keepsake that will be cherished for years to come. Super soft and sweet... just ink and natural cotton fabric (no plastic or scratchy vinyl iron on).  These are hand pressed individually and the cases are sewn by hand with an opening in back for easy removal for washing. Designed and handmade by me from beginning to end. :) \n' +
        '\n' +
        'Please list all personalization info under &quot;notes to seller&quot; at checkout:\n' +
        '\n' +
        '* Baby&#39;s Full Name (first name will be top line, full name second line)\n' +
        '* Birth Date\n' +
        '* Birth Time\n' +
        '* Weight (pounds and ounces)\n' +
        '* Length\n' +
        '\n' +
        '_________________________________________________________\n' +
        '\n' +
        'Available in other colors and designs upon request.  \n' +
        '_________________________________________________________\n' +
        '\n' +
        'What is a proof? It&#39;s a digital sample of the image before I print. I don&#39;t typically send a proof for orders.  My graphic design program is complicated and sending the proof is quite a bit of extra work for me, which is where the additional fee comes in. Any misprint that is my fault will be corrected and reshipped at my expense immediately. Unless you&#39;ve made major changes to the design colors or graphics you really don&#39;t need to pay the extra fee for a proof. You can, however, purchase if you&#39;d really like to see it before I print. It&#39;s up to you! Thx!\n' +
        '_________________________________________________________\n' +
        '\n' +
        'My layouts may seem simple, but they are all designed from scratch without looking at other similar items and are 100% from my creative brain. If you&#39;re selling something similar on ETSY please use your own creative skills, not mine. Thanks!\n' +
        '\n' +
        'All Designs (c)2019 Sew Cute by Me Designs, LLC',
      quantity: 19,
      num_favorers: 941,
      tags: [
        'birth announcement',
        'birth pillow',
        'nursery pillow',
        'announcement pillow',
        'pillow',
        'personalized pillow',
        'baby pillow',
        'pillow case',
        'boys birth pillow',
        'boys nursery pillow',
        'boys custom pillow',
        'boys pillow',
        'footprints'
      ],
      processing_min: 7,
      processing_max: 10,
      price: 29.99,
      img: 'https://i.etsystatic.com/5193620/r/il/774bd0/3706747899/il_fullxfull.3706747899_t27g.jpg',
      onSale: true
    },
    {
      title: 'Margaritaville Christmas Concert Shirt - Retro Parrothead Graphic Unisex TShirt - Jimmy Buffett Ugly Holiday',
      description: 'Margaritaville Christmas Concert Unisex Shirt - Retro Parrothead Graphic TShirt - Jimmy Buffett Ugly Holiday\n' +
        '\n' +
        'We&#39;ve launched our new site! Check out new designs and styles at puddinthreads.com!\n' +
        '\n' +
        '**WANT TO SEE MORE MODERN FUN STYLES? CHECK OUT OUR &quot;PUDDINTHREADS&quot; SHOP!!\n' +
        'https://www.etsy.com/shop/PuddinThreadsRetro**\n' +
        '\n' +
        '**ARE YOU A BIBLIOPHILE? CHECK OUT OUR &quot;STROKE THE SPINE&quot; BOOK MERCH SHOP!\n' +
        'https://www.etsy.com/shop/StrokeTheSpine**\n' +
        '\n' +
        'I am 100% STAYING in Margaritaville this winter!!!! I think we ALL deserve a lil&#39; Jimmy downtime...and this sweatshirt will be perfect for it! Whether you&#39;re wearing it everyday...or getting ready for winter island getaway, this is the perfect top for your Jimmy needs.\n' +
        '\n' +
        'This shirt features three parrots in Santa Hats, sipping on a Margarita decorated in Christmas Lights. It reads &quot;Still...Margaritaville.&quot;\n' +
        '\n' +
        'Looking for the non-Christmas version? Check out our sister shop!!\n' +
        'https://www.etsy.com/listing/1008075788/margaritaville-concert-tshirt-retro?ga_search_query=margarita&ref=shop_items_search_1&pro=1\n' +
        '\n' +
        '.: Retail fit\n' +
        '.: 100% Soft cotton (fibre content may vary for different colors)\n' +
        '.: Light fabric (4.2 oz/yd² (142 g/m²))\n' +
        '.: Tear away label\n' +
        '.: Runs true to size\n' +
        '\n' +
        '**REMINDER: When your shirt arrives, it might be a little stiff! This is totally normal! After the first wash, it will loosen up and the print will settle in. **\n' +
        '\n' +
        '** Love this design, but want it on a different product? My pleasure!! Just shoot me a message and I&#39;ll have it up for you super quick! We can do designs on mens, womens and unisex products. We currently offer tanks, hoodies, zip up hoodies, crop top sweatshirts, sweatshirts, tote bags, weekender bags, infant clothing, toddler tees, kids hoodies and tees, backpacks, make up bags, notebooks and blankets! There is no charge for requesting a new product. Customizations with names are an additional $5 per product.***\n' +
        '\n' +
        '**RETURNS/EXCHANGES - Although we do not currently offer returns and/or refunds, we will ABSOLUTELY offer exchanges for any reason. Doesn&#39;t fit? Wish you&#39;d picked a different design? A wonky print quality? You (the customer) will be required to pay for the return label UNLESS it&#39;s a quality issue or technical problem on our side. But we will happily get you an item you are 100% in love with!**',
      quantity: 990,
      num_favorers: 3,
      tags: [
        'margaritaville shirt',
        'parrot tshirt',
        'retro parrothead',
        'jimmy buffett shirt',
        'jimmy buffett music',
        'wasting away again',
        'beach bum tshirt',
        'maragarita tshirt',
        'jimmy buffett gift',
        '2021 concert shirt',
        'parrot head shirt',
        'tropical christmas',
        'ugly sweater'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 29,
      img: 'https://i.etsystatic.com/25405745/r/il/146ca0/3300724617/il_fullxfull.3300724617_d8op.jpg',
      onSale: true
    },
    {
      title: 'It&#39;s The Locs for Me PNG File for Sublimation',
      description: 'It&#39;s The Locs for Me PNG File for Sublimation',
      quantity: 198,
      num_favorers: 5,
      tags: [],
      processing_min: null,
      processing_max: null,
      price: 2,
      img: 'https://i.etsystatic.com/11946435/r/il/0445fc/3638334527/il_fullxfull.3638334527_33vw.jpg',
      onSale: true
    },
    {
      title: 'Kawaii Japanese mousepad Mount Fuji Cherry Blossom Desk Mat, Cute Pink Floral Extended mouse pad, Extra Large Girl gamer Gaming mousepad',
      description: 'Kawaii Japanese mousepad Mount Fuji Cherry Blossom Desk Mat, Cute Pink Floral Extended mouse pad, Extra Large Girl gamer Gaming mousepad\n' +
        '\n' +
        '\n' +
        'This stylish, non-slip desk mat is the perfect finishing touch for your work-from-home or office space. Made with a soft fabric polyester top, the desk mat features a 1/8&quot; thick, non-skid natural rubber backing. This versatile product can also be used as a card playing game mat or counter-surface mat. Add a splash of taste to your workspace with this desk mat.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Personalization is available, please contact me and discuss. (optional)\n' +
        '\n' +
        '⭐Product Details⭐\n' +
        '\n' +
        '\n' +
        'Desk mats / Mouse Pad / Wrist Rest\n' +
        '\n' +
        'Available Sizes: \n' +
        '\n' +
        'Desk Mat:\n' +
        '10x16 inches ; 1/8&quot; thick\n' +
        '\n' +
        '12x18 inches  ; 1/8&quot; thick or 1/4 &quot; (THICK)\n' +
        '                                \n' +
        '14x24 inches ;  1/8&quot; thick or 1/4 &quot; (THICK)\n' +
        '18x36 inches ; 1/8&quot; thick\n' +
        '\n' +
        'Mouse Pad:\n' +
        '8 inch Round ;1/4 thick\n' +
        '\n' +
        'Wrist Rest:\n' +
        '17 3/4 x 4 inch.;1/2&quot; thick\n' +
        '\n' +
        '\n' +
        '\n' +
        'Materials:\n' +
        '\n' +
        'Top - soft fabric neoprene\n' +
        '\n' +
        'Bottom - non-skid natural rubber\n' +
        '\n' +
        'Color-  Pink\n' +
        '\n' +
        '\n' +
        '⭐Features⭐\n' +
        '\n' +
        'Soft neoprene top\n' +
        '\n' +
        'Non-skid natural rubber backing\n' +
        '\n' +
        '1/8&quot; thickness\n' +
        'Care\n' +
        '\n' +
        'Spot clean\n' +
        '\n' +
        '\n' +
        '⭐Print Technique⭐\n' +
        '\n' +
        'Dye Sublimation\n' +
        '\n' +
        '\n' +
        '⭐Packaging⭐\n' +
        '\n' +
        'Poly Bag\n' +
        '\n' +
        'Ref:67',
      quantity: 7979,
      num_favorers: 449,
      tags: [
        'Japanese mousepad',
        'Mount Fuji mousepad',
        'Cute mouse pad',
        'Extended mouse pad',
        'Extra Large desk pad',
        'Girl gamer',
        'Gaming mousepad',
        'Cherry Blossom',
        'sakura tree Desk Mat',
        'Pink Floral mousepad',
        'pink wrist rest',
        'Large desk mat',
        'kawaii mouse pad'
      ],
      processing_min: 4,
      processing_max: 7,
      price: 31.5,
      img: 'https://i.etsystatic.com/7880034/r/il/0d5939/3137403872/il_fullxfull.3137403872_jcyh.jpg',
      onSale: true
    },
    {
      title: 'Colorado Flag Sticker - Pointillism Buffalo',
      description: 'Our newest designs are the Colorado Flag in our Pointillism stickers!  This one is our Buffalo Silhouette.  We partnered up with a good friend of ActiveState Designs, the detail in the pointillism is unreal!  The shadows and textures of the bear are seen and part of the pointillism design.  We know you&#39;ll love it!  The sticker is 4.5&quot; wide, the perfect size for your waterbottle, car, or laptop.\n' +
        '\n' +
        'Don&#39;t stress about quality and durability. Our stickers will withstand exposure to the harshest weather conditions.  Our stickers are printed on durable, high quality UV resistant Vinyl that will stand up to the elements outdoors wherever you place them, they stick with you through snow, rain, and scorching heat for years to come.  Heck, you can even put them in your dishwasher and have them come out looking brand new.',
      quantity: 930,
      num_favorers: 67,
      tags: [
        'Colorado Flag', 'Sticker',
        'CO',            'Colorado C',
        'Colorado',      'Pointillism',
        'Buffalo',       'Bison',
        'Buffaloes',     'CU Buffs',
        'Buffs',         'Boulder'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 3,
      img: 'https://i.etsystatic.com/9039574/r/il/eadc68/1873878200/il_fullxfull.1873878200_1jt3.jpg',
      onSale: true
    },
    {
      title: 'Mix cookie & brownie box',
      description: 'In this mixed cookie & brownie box you will receive: \n' +
        '\n' +
        '- brookie slice \n' +
        '- mini stuffed cookie pie\n' +
        '- bounty bread slice\n' +
        '- 2 x stuffed cookies\n' +
        '- 3 x brownie balls \n' +
        '\n' +
        'General flavour themes will advertised but please just message me if you’d like a particular mix!',
      quantity: 10,
      num_favorers: 0,
      tags: [
        'cookie pie',
        'cookie',
        'chocolate cookie',
        'stuffed cookie',
        'chocolate brownie',
        'Biscoff',
        'oreo',
        'Brownies',
        'brownie',
        'milk chocolate',
        'peanut butter',
        'caramel',
        'cookies'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10,
      img: 'https://i.etsystatic.com/35080144/r/il/d141ee/3859423629/il_fullxfull.3859423629_sb3b.jpg',
      onSale: true
    },
    {
      title: 'Avocado mismatched dangle earrings (miniature food earrings)',
      description: 'This is my first time making miniature avocados from polymer clay! It was a lot of fun making them. I tried to make them as realistic as possible. These are for people who love fun earrings! These earrings are light-weight and comfortable for everyday wearing. \n' +
        '\n' +
        '- Each pair of earrings is individually handmade and designed by me at home! \n' +
        '- Because they are handmade, no two items are exactly the same. There might be some slight imperfections; sizes and shapes might vary slightly\n' +
        '\n' +
        'Product details:\n' +
        '- Materials: polymer clay \n' +
        'I offer two materials for the hooks: stainless steel or 925 sterling silver\n' +
        '\n' +
        '- Weight: each pair is around 0.14 oz (3.67 g)\n' +
        '- Dimensions: \n' +
        '— length of an avocado is around 0.67 inch (1.70 cm)\n' +
        '— total length is around 1.85 inch (4.70 cm)',
      quantity: 2,
      num_favorers: 0,
      tags: [
        'vegetables earrings',
        'fruits earrings',
        'mismatched earrings',
        'birthday gifts',
        'gifts for her',
        'gifts for mom',
        'summer accessories',
        "farmer's market",
        'miniature food',
        'Food earrings',
        'vegetable and fruits',
        'japanese style',
        'korean style'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6,
      img: 'https://i.etsystatic.com/33963422/r/il/f63155/3751586032/il_fullxfull.3751586032_fq1h.jpg',
      onSale: true
    },
    {
      title: 'Greenery Welcome to Our Wedding Sign Template, Boho Welcome Wedding Sign, Printable Wedding Template, DIGITAL DOWNLOAD #N01',
      description: 'Welcome your friends & family to your wedding with this elegant welcome sign. This modern template has a boho theme with neutral tones. It&#39;s also 100% editable - you can even try before you buy! You will receive 3 x templates: 24x18&quot; 30x20&quot; and 36x24&quot;.\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'DIGITAL ITEM:\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'Just a heads up ➡ you will receive an instant digital file only, meaning no physical item(s) will be sent to you. You&#39;ll be able to edit/personalize your chosen template(s) using Templett, which is a free online web browser. \n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'DEMO LINK - TRY BEFORE YOU BUY:\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'Try our free demo template on Templett before you buy and see how easy it is to edit your template! \n' +
        '\n' +
        'All you need to do is copy and paste the demo link below into your web browser:\n' +
        '\n' +
        'https://templett.com/design/demo/serenityprints/4131631,4131658,4131655\n' +
        '\n' +
        'Please use a Mac or laptop/desktop computer to view templates. Templett is not currently supported on mobile devices /IPads etc.\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'FILES INCLUDED:\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        '➡Welcome Sign: 24x18”\n' +
        '➡Welcome Sign: 30x20”\n' +
        '➡Welcome Sign: 36x24”\n' +
        '\n' +
        '➡️ Print with Prints of Love & get FREE envelopes with your order: https://printsoflove.com/ref/_serenityprintdesigns/\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'MATCHING ITEMS\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'Find matching Wedding Bundle here: https://etsy.me/3LlF9TQ\n' +
        '\n' +
        'View all matching items here: https://etsy.me/2VISk94\n' +
        'Or you can search my Etsy shop by using code: N01\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'EDITABLE:\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'WHAT CAN BE EDITED:\n' +
        '➡All text (including wording)\n' +
        '➡Font size, style and color\n' +
        '➡Font placement\n' +
        '➡Background color\n' +
        '➡Resize/rotate graphics/artwork\n' +
        '\n' +
        'WHAT CANNOT BE EDITED:\n' +
        '➡Graphics/artwork\n' +
        '➡Template dimensions\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'HOW IT WORKS:\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        '1️⃣ Purchase templates on Etsy & download instructions\n' +
        '2️⃣ Look for an email from Templett to access templates\n' +
        '3️⃣ Customize template ➡ Save ➡ Download\n' +
        '4️⃣ Print your template!\n' +
        '\n' +
        'Your template does not expire and will always be available to you after your purchase. You can come back at any time and continue editing. Please make sure to save your updates.\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'DOWNLOAD OPTIONS\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'You have the option to download and save your template as PDF, JPEG & PNG.\n' +
        '\n' +
        '➡PDF: use this option to print at home or at a local copy store\n' +
        '➡JPEG: use this option printing online and some local copy stores\n' +
        '➡PNG: use this option for emails, text and social media\n' +
        '\n' +
        '➡Option to download with/without bleed & crop marks\n' +
        '➡Option to download as single or multiples on 8.5x11&quot; or A4 (to save paper)\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'PRINT OPTIONS\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'There are many ways to print your templates, please see below for some recommendations:\n' +
        '➡Print at home\n' +
        '➡Online print vendor (e.g. Walmart Photo, Prints of Love, Shutterfly)\n' +
        '➡Local copy store (e.g. Staples, Office Depot and FedEx)\n' +
        '➡Local print store\n' +
        '\n' +
        '➡️We recommend using a professional printing service for the best quality. Our shop has partnered with Prints of Love to offer fast, high quality yet affordable printing.  Plus free 2-3 day U.S. shipping and free envelopes! \n' +
        '\n' +
        'Simply follow this link: https://printsoflove.com/ref/_serenityprintdesigns/ to select your print options. They handle the rest!\n' +
        '\n' +
        '➡️If you plan on printing at home we recommend printing on high-quality stock paper. Select a stock of at least 100lb or more.\n' +
        '\n' +
        'Templett does not spell check, therefore please make sure to check for any spelling errors before downloading and printing your items 😊\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'RETURNS\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'As you receive instant digital items, we do not offer refunds, exchanges or cancellations on our downloadable templates. Please contact me before purchasing if you have questions.\n' +
        '\n' +
        '-----------------------------------------------------\n' +
        'CONTACT ME\n' +
        '-----------------------------------------------------\n' +
        '\n' +
        'I&#39;m more than happy to help you, so please feel free to contact me if you have any questions, \n' +
        '\n' +
        'Thank you for looking at my shop😊\n' +
        'SerenityPrintDesigns\n' +
        'xxx\n' +
        '\n' +
        '[id:4131631,4131658,4131655]',
      quantity: 14,
      num_favorers: 21,
      tags: [
        'greenery wedding',
        'welcome wedding sign',
        'custom wedding signs',
        'custom wedding sign',
        'digital download',
        'wedding printable',
        'wedding template',
        'boho wedding sign',
        'welcome to our',
        'instant download',
        'wedding signage',
        'wedding decor',
        'green gold wedding'
      ],
      processing_min: null,
      processing_max: null,
      price: 10,
      img: 'https://i.etsystatic.com/17095305/r/il/2413be/2670381506/il_fullxfull.2670381506_a0l1.jpg',
      onSale: true
    },
    {
      title: 'Tulip',
      description: '11 X 14 abstract acrylic painting of pink tulip on stretched canvas.',
      quantity: 1,
      num_favorers: 0,
      tags: [ 'pink tulip', 'abstract', 'painting' ],
      processing_min: 1,
      processing_max: 2,
      price: 35,
      img: 'https://i.etsystatic.com/28824010/r/il/9d94ab/3811902242/il_fullxfull.3811902242_tnfv.jpg',
      onSale: true
    },
    {
      title: 'Wall Planter, Set of 2, Planter for Wall, Wooden Wall Planter, Wall Planter Indoor, Wall Mounted Planter, Floating Plant Shelf with Planters',
      description: 'Perfect for adding that fresh green touch to any home or office. Keep your plants safely on the wall and away from children and those with paws. CAN BE MADE WITHOUT PLASTIC STRIPS IF YOU PREFER - JUST SEND ME A MESSAGE. \n' +
        '\n' +
        'Our wooden wall planters are perfect for herbs, succulents, spiders plants, ferns or even fresh/faux flowers. Hand crafted from natural wood, planed, then hand sanded with meticulous quality our wall planters come with router keyholes in the back for securely hanging on the wall. Comes in a set of two - need one or three? No problem just message us and we can help you out. \n' +
        '\n' +
        'Planters measure 9 5/8 inches long, 5 1/2 inches wide and stand out about 6 1/2 inches from the wall. Need some planters? Choose to add optional plaster terra cotta pots  with your hanging wall planters. \n' +
        '\n' +
        'Personalize your planters to match your home decor. Choose from our color/stain options. Please see pictures for stain/color choices. Please feel free to contact us if you have any questions.\n' +
        '\n' +
        '**PLEASE NOTE PLANTS ARE NOT INCLUDED**',
      quantity: 6,
      num_favorers: 2669,
      tags: [
        'Hanging Wall Planter',
        'Wall mounted planter',
        'indoor wall planter',
        'wooden wall planter',
        'Wood Plant container',
        'Herb wall planter',
        'hanging herb planter',
        'Hanging plant shelf',
        'Wall Planter',
        'plant hanger',
        'floating plant shelf',
        'floating planter',
        'Floating Shelfie'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 38,
      img: 'https://i.etsystatic.com/9200393/r/il/bd77fc/1876112819/il_fullxfull.1876112819_a050.jpg',
      onSale: true
    }
  ];
// Products.insertMany(products)
// .then(() => console.log('success'))
// .catch((err) => console.log(err))
const a = /lighter/
Products.find({ title : a })
.then((data) => console.log(data))
.catch(err => console.log(err))