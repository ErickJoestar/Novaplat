/// Labs icons

import { ReactComponent as ScienceLogo } from "../assets/icons/science.svg";
import { ReactComponent as CodeLogo } from "../assets/icons/code.svg";
import { ReactComponent as Design3D } from "../assets/icons/design3d.svg";
import { ReactComponent as Electronics } from "../assets/icons/electronics.svg";
import { ReactComponent as AumentedRel } from "../assets/icons/aumentedReality.svg";
import { ReactComponent as VirtualRel } from "../assets/icons/virtualReality.svg";

/// Labs banners

import scienteBanner from "../assets/images/learn-ciencias.jpg";
import codeBanner from "../assets/images/learn-codificacion.jpg";
import design3dBanner from "../assets/images/learn-diseno.jpg";
import eletronicsBanner from "../assets/images/learn-electronica.jpg";
import aumentedRelBanner from "../assets/images/learn-realidad-aumentada.jpg";
import virtualRelBanner from "../assets/images/learn-realidad-virtual.jpg";

/// External labs info

import praxiLabsImage from "../assets/images/Praxilabs.png";
import coSpacesImage from "../assets/images/CoSpaces.png";
import tinkercadImage from "../assets/images/Tinkercad.jpg";

export const EXTERNAL_LABS = {
  praxiLabs: {
    name: "praxiLabs",
    label: "PraxiLabs",
    url: "https://praxilabs.com/en/",
    icon: praxiLabsImage,
    color: "#CC3333",
  },
  coSpaces: {
    name: "coSpaces",
    label: "CoSpaces",
    url: "https://cospaces.io/edu/",

    icon: coSpacesImage,
    color: "linear-gradient(to right, #E58B5D, #A63CDF)",
  },
  tinkerCad: {
    name: "tinkerCad",
    label: "TinkerCad",
    url: "https://www.tinkercad.com/things",

    icon: tinkercadImage,
    color: "#22B35A",
  },
};

export const LABS_DATA = [
  {
    label: "Ciencias",
    name: "ciencia",
    title: "Laboratorio de ciencias",
    SvgComponent: ScienceLogo,
    bannerUrl: scienteBanner,
    description:
      "Simulaciones 3D para los principales experimentos de biología, química y física.",
    labs: [{ ...EXTERNAL_LABS.praxiLabs }],
  },
  {
    label: "Codificación",
    name: "codificacion",
    title: "Laboratorio de codificación",
    SvgComponent: CodeLogo,
    bannerUrl: codeBanner,
    description: "Lenguajes de script mediante sencillos bloques de código.",
  },
  {
    label: "Diseño 3D",
    name: "diseno3d",
    title: "Laboratorio de diseño 3d",
    SvgComponent: Design3D,
    bannerUrl: design3dBanner,
    description: "Crea, diseña e imprime tus diseño 3D sin ser un experto.",
  },
  {
    label: "Electrónica",
    name: "electronica",
    title: "Laboratorio de electronica",
    SvgComponent: Electronics,
    bannerUrl: eletronicsBanner,
    description: "Diseña y programa circuitos electrónicos para tus proyectos.",
  },
  {
    label: "Realidad Virtual",
    name: "realidad-virtual",
    title: "Laboratorio de realidad virtual",
    SvgComponent: VirtualRel,
    bannerUrl: virtualRelBanner,
    description:
      "Visualiza tus creaciones en un entorno de realidad virtual 360° y 3D.",
  },
  {
    label: "Realidad Aumentada",
    name: "realidad-aumentada",
    title: "Laboratorio de realidad aumentada",
    SvgComponent: AumentedRel,
    bannerUrl: aumentedRelBanner,
    description:
      "Lleva tus diseños virtuales a la realidad mediante un proyector.",
  },
];
