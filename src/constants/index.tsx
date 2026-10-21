export const navLinks = [
  {
    id: "now",
    title: "Now",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type Project = {
  id: string;
  label: string;
  title: string;
  content: string;
  tags: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "home-optimiser",
    label: "Powernaut · 2025–now",
    title: "Home energy optimiser",
    content:
      "Optimiser for batteries, PV and EV charging, running across 500+ residential homes and earning about €300 per household per year in trading revenue.",
    tags: "Optimisation · Python · EMS",
  },
  {
    id: "intraday-trading",
    label: "Powernaut · 2025–now",
    title: "Intraday trading algorithms",
    content:
      "Led the development of intraday trading algorithms for PV forecast updates, cutting the portfolio's imbalance exposure by 4.4%.",
    tags: "Intraday · Trading · Imbalance",
  },
  {
    id: "flexibility-value",
    label: "Powernaut · 2025–now",
    title: "Trading value of flexibility",
    content:
      "The evaluation behind pilots with 3 of Belgium's largest B2C energy suppliers and the basis for the positive business case.",
    tags: "Evaluation · Data · Business case",
  },
  {
    id: "pv-forecasting-service",
    label: "Powernaut · 2024–25",
    title: "PV forecasting service",
    content:
      "Co-built the service forecasting 921 PV assets (179.7 MW) for day-ahead and intraday orders, with 35% lower error than the naive baseline.",
    tags: "Forecasting · PyTorch · AWS",
  },
  {
    id: "heat-pumps",
    label: "KU Leuven · 2024",
    title: "Heat pumps vs. price signals",
    content:
      "MSc thesis: economic evaluation of heat pump controls on day-ahead and imbalance price signals.",
    tags: "Flexibility · Simulation",
  },
  {
    id: "pv-sky-images",
    label: "UPF · IEEE ICASSP 2024",
    title: "PV forecasting with sky images",
    content:
      "Published paper: adding sun-motion physics to CNN-based PV power forecasting. Bachelor thesis, 10/10.",
    tags: "TensorFlow · OpenCV",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/10448183" },
      { label: "GitHub", href: "https://github.com/arne-be/Photovoltaic-Power-Forecasting" },
    ],
  },
  {
    id: "volunteer-forecasting",
    label: "Emergent · KU Leuven",
    title: "Volunteer-success forecasting",
    content:
      "Student consulting project for ArmenTeKort: predicting volunteer retention from journey data with decision trees, random forests and logistic regression.",
    tags: "Python · scikit-learn",
    links: [
      { label: "Client", href: "https://www.armentekort.be/" },
      { label: "Emergent", href: "https://emergentleuven.be/" },
    ],
  },
  {
    id: "kornerpiece",
    label: "Personal",
    title: "kornerpiece",
    content:
      "This site. Own brand identity and design in Figma, built with TypeScript, React, Tailwind CSS and Vite.",
    tags: "Figma · React · Tailwind",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/eRm61GfmVomxcfsajx9vPZ/CornerPiece",
      },
      { label: "GitHub", href: "https://github.com/arne-be/kornerpiece-website" },
    ],
  },
  {
    id: "face-mask",
    label: "Student project",
    title: "Face mask detection",
    content:
      "Transfer learning with Faster R-CNN and YOLOv5 for real-time face and face mask detection, reaching 87% precision.",
    tags: "PyTorch · OpenCV",
    links: [{ label: "GitHub", href: "https://github.com/arne-be/Face-Mask-Detection" }],
  },
  {
    id: "ml-cv",
    label: "Coursework",
    title: "ML & computer vision projects",
    content:
      "Customer classification, eigenfaces, non-rigid reconstruction and autoencoders.",
    tags: "MATLAB · Python · PyTorch",
    links: [{ label: "GitHub", href: "https://github.com/arne-be/My-Projects" }],
  },
];
