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
    color:
      "bg-[linear-gradient(135deg,hsl(120_69%_47%)_0%,hsl(120_69%_37%)_100%)] hover:shadow-[0_0_20px_hsl(120_69%_47%_/_0.3)]",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Siga nosso perfil",
    url: "https://instagram.com/comitivaos100limites",
    icon: "Instagram",
    color:
      "bg-[linear-gradient(135deg,hsl(295_85%_60%)_0%,hsl(45_93%_47%)_50%,hsl(351_95%_71%)_100%)] hover:shadow-[0_0_20px_hsl(295_85%_60%_/_0.3)]",
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Curta nossa página",
    url: "https://www.facebook.com/people/Comitiva-100-Limites/61550698467584",
    icon: "Facebook",
    color:
      "bg-[linear-gradient(135deg,hsl(221_83%_53%)_0%,hsl(221_83%_43%)_100%)] hover:shadow-[0_0_20px_hsl(221_83%_53%_/_0.3)]",
  },
  {
    id: "cd",
    title: "Baixe nosso CD",
    description: "Baixe nosso CD",
    url: "https://suamusica.com.br/comitiva100limites/comitiva-100-limites-2025",
    icon: "Disc3",
    color:
      "bg-[linear-gradient(135deg,hsl(200_80%_60%)_0%,hsl(280_70%_65%)_50%,hsl(0_0%_100%)_100%)] hover:shadow-[0_0_20px_hsl(200_80%_60%_/_0.3)]",
  },
  {
    id: "pedidos",
    title: "Em Breve Pedidos Online",
    description: "Acesse nosso catálogo",
    url: "#",
    icon: "ShoppingBag",
    color:
      "bg-[linear-gradient(135deg,hsl(45_93%_47%)_0%,hsl(35_91%_62%)_100%)] hover:shadow-[0_0_20px_hsl(45_93%_47%_/_0.3)]",
  },
];
