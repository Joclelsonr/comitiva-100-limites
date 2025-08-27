export interface LinkData {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

export const links: LinkData[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Fale conosco diretamente",
    url: "https://wa.me/5594981394586",
    icon: "MessageCircle",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Siga nosso perfil",
    url: "https://instagram.com/comitivaos100limites",
    icon: "Instagram",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Curta nossa página",
    url: "https://www.facebook.com/people/Comitiva-100-Limites/61550698467584",
    icon: "Facebook",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: "pedidos",
    title: "Em Breve Pedidos Online",
    description: "Acesse nosso catálogo",
    url: "#",
    icon: "ShoppingBag",
    color: "bg-orange-500 hover:bg-orange-600",
  },
];
