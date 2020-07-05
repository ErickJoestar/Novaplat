import { ReactComponent as ScienceLogo } from "../assets/icons/science.svg";
import { ReactComponent as CodeLogo } from "../assets/icons/code.svg";
import { ReactComponent as Design3D } from "../assets/icons/design3d.svg";
import { ReactComponent as Electronics } from "../assets/icons/electronics.svg";
import { ReactComponent as AumentedRel } from "../assets/icons/aumentedReality.svg";
import { ReactComponent as VirtualRel } from "../assets/icons/virtualReality.svg";

import scienteBanner from "../assets/images/learn-ciencias.jpg";
import codeBanner from "../assets/images/learn-codificacion.jpg";
import design3dBanner from "../assets/images/learn-diseno.jpg";
import eletronicsBanner from "../assets/images/learn-electronica.jpg";
import aumentedRelBanner from "../assets/images/learn-realidad-aumentada.jpg";
import virtualRelBanner from "../assets/images/learn-realidad-virtual.jpg";

export const LABS_DATA = [
  {
    label: "Ciencias",
    name: "ciencia",
    title: "Laboratorio de ciencias",
    SvgComponent: ScienceLogo,
    bannerUrl: scienteBanner,
  },
  {
    label: "Codificación",
    name: "codificacion",
    title: "Laboratorio de codificación",
    SvgComponent: CodeLogo,
    bannerUrl: codeBanner,
  },
  {
    label: "Diseño 3D",
    name: "diseno3d",
    title: "Laboratorio de diseño 3d",
    SvgComponent: Design3D,
    bannerUrl: design3dBanner,
  },
  {
    label: "Electrónica",
    name: "electronica",
    title: "Laboratorio de electronica",
    SvgComponent: Electronics,
    bannerUrl: eletronicsBanner,
  },
  {
    label: "Realidad Virtual",
    name: "realidad-virtual",
    title: "Laboratorio de realidad virtual",
    SvgComponent: VirtualRel,
    bannerUrl: virtualRelBanner,
  },
  {
    label: "Realidad Aumentada",
    name: "realidad-aumentada",
    title: "Laboratorio de realidad aumentada",
    SvgComponent: AumentedRel,
    bannerUrl: aumentedRelBanner,
  },
];
