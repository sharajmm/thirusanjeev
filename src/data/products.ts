import { Product } from "../types";

export const products: Product[] = [
  // Aluminum Products
  {
    id: "al-001",
    name: "Aluminium Anna Koodai",
    price: 299,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/Rathna-Stores-Aluminium-anna-koodai-02-300x300.jpg",
    category: "aluminum",
    description:
      "Traditional aluminium serving bowl perfect for rice and other dishes.",
    rating: 4.5,
    reviews: 124,
    bestseller: true,
  },
  {
    id: "al-002",
    name: "Aluminium Chipal Plate",
    price: 149,
    image:
      "https://rathnastores.in/wp-content/uploads/2021/03/Aluminium-Chipal-Plate-02-300x300.jpg",
    category: "aluminum",
    description: "Durable aluminium plate ideal for everyday dining.",
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "al-003",
    name: "Aluminium Idli Anai",
    price: 399,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/Rathna-Stores-Aluminium-idli-panai-02-300x300.jpg",
    category: "aluminum",
    description:
      "Traditional aluminium idli steamer for authentic South Indian cooking.",
    rating: 4.2,
    reviews: 67,
  },
  {
    id: "al-004",
    name: "Aluminium Fry Pan",
    price: 249,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/Rathna-Stores-Aluminium-fry-pan-03-300x300.jpg",
    category: "aluminum",
    description: "Lightweight aluminium frying pan for everyday cooking.",
    rating: 4.4,
    reviews: 92,
  },

  // Copper Products
  {
    id: "cu-001",
    name: "Copper Plate",
    price: 599,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/rathna-stores-copper_plate-01-300x300.jpg",
    category: "copper",
    description:
      "Premium copper plate with excellent heat retention and health benefits.",
    rating: 4.8,
    reviews: 156,
    bestseller: true,
  },
  {
    id: "cu-002",
    name: "Copper Thavalai",
    price: 799,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/rathna-stores-copper_thavalai-03-300x300.jpg",
    category: "copper",
    description:
      "Traditional copper thavalai for authentic cooking and serving.",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: "cu-003",
    name: "Sembu",
    price: 1299,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/10/rathna-stores-copper_sembu-02-300x300.jpg",
    category: "copper",
    description: "Traditional copper water pot with health benefits.",
    rating: 4.7,
    reviews: 134,
  },
  {
    id: "cu-004",
    name: "Uttharani",
    price: 449,
    image:
      "https://rathnastores.in/wp-content/uploads/2021/08/Copper-Uttharani-01-300x300.jpg",
    category: "copper",
    description: "Copper uttharani for traditional cooking and serving.",
    rating: 4.5,
    reviews: 89,
  },

  // Brass Products
  {
    id: "br-001",
    name: "Aduku",
    price: 899,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/12/brass-adukku-02-300x300.jpg",
    category: "brass",
    description: "Traditional brass aduku for cooking and food preparation.",
    rating: 4.4,
    reviews: 112,
  },
  {
    id: "br-002",
    name: "Brass Aduku 2",
    price: 1199,
    image:
      "https://rathnastores.in/wp-content/uploads/2020/12/brass-adukku-02-300x300.jpg",
    category: "brass",
    description: "Premium brass aduku with enhanced durability.",
    rating: 4.3,
    reviews: 65,
    bestseller: true,
  },
  {
    id: "br-003",
    name: "Vigrahaam Lord Ganesha",
    price: 2499,
    image:
      "https://rathnastores.in/wp-content/uploads/2021/08/Brass-Vigrahaam-lord-ganesha-left-300x300.jpg",
    category: "brass",
    description: "Beautiful brass Ganesha idol for worship and decoration.",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "br-004",
    name: "Door Bell",
    price: 799,
    image:
      "https://rathnastores.in/wp-content/uploads/2021/08/Brass-Door-Bell-03-300x300.jpg",
    category: "brass",
    description: "Traditional brass door bell with authentic sound.",
    rating: 4.7,
    reviews: 87,
  },

  // Steel Products
  {
    id: "st-001",
    name: "Steel Kunda",
    price: 1899,
    image: "https://rathnastores.in/wp-content/uploads/2022/07/33A-300x300.jpg",
    category: "steel",
    description: "Heavy-duty steel kunda for commercial and domestic cooking.",
    rating: 4.9,
    reviews: 203,
    bestseller: true,
  },
  {
    id: "st-002",
    name: "Steel Kinnam",
    price: 649,
    image:
      "https://rathnastores.in/wp-content/uploads/2022/08/3-16-300x300.jpg",
    category: "steel",
    description: "Stainless steel kinnam for efficient cooking and serving.",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "st-003",
    name: "Steel Idly Set",
    price: 899,
    image:
      "https://rathnastores.in/wp-content/uploads/2022/08/3-118-300x300.jpg",
    category: "steel",
    description:
      "Complete steel idly set for making perfect South Indian idlis.",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "st-004",
    name: "Dish Ambesh",
    price: 549,
    image:
      "https://rathnastores.in/wp-content/uploads/2022/07/A18-2-300x300.jpg",
    category: "steel",
    description: "Elegant steel dish ambesh for serving and presentation.",
    rating: 4.7,
    reviews: 76,
  },
];

export const categories = [
  {
    name: "Aluminum",
    key: "aluminum" as const,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxYbR-qr32OykhlPgXyDoXcWiFEiqLZtsVQ&s",
    description: "Lightweight and durable aluminum kitchenware",
  },
  {
    name: "Copper",
    key: "copper" as const,
    image:
      "https://i.pinimg.com/736x/a4/98/aa/a498aa9a271b54d6e90d4729c0fdd520.jpg",
    description: "Premium copper cookware for professional cooking",
  },
  {
    name: "Brass",
    key: "brass" as const,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnbl4ccYl_ickhTIrKxz4X2Dp6PmJyP_wHg&s",
    description: "Traditional brass items for authentic cooking",
  },
  {
    name: "Steel",
    key: "steel" as const,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp62x950OPUNNqImWkLtxoBFXOUn8EK69pxw&s",
    description: "Durable steel products for professional blacksmith work",
  },
];
