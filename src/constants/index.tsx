import {linkedin, twitter, github, pvpfImage, faceMaskImage, emergentImage, kornerpieceImage, computerVisionImage } from "../assets";

export const navLinks = [
  {
    id: "arne",
    title: "Arne",
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

export const projects = [
  {
    id: "project-1",
    image: pvpfImage,
    title: "Photovoltaic Power Forecasting using sky images and sun motion",
    content:
      "Published Paper in IEEE on extracting and adding physical information to improve state of the art photovoltaic power forecasting CNN models. Used Python, TensorFlow, and OpenCV.",
    button1: "GitHub",
    button1Link: "https://github.com/arne-be/Photovoltaic-Power-Forecasting",
    button2: "Paper",
    button2Link: "https://ieeexplore.ieee.org/document/10448183",
  },
  {
    id: "project-2",
    image: faceMaskImage,
    title: "Face Mask Detection",
    content:
      "Using transfer learning to train faster R-CNN and yolov5 on a face mask dataset for real-time face and face mask detection. Finally reaching 87% Precision. Used Python, PyTorch, and OpenCV.",
    button2: "GitHub",
    button2Link: "https://github.com/arne-be/Face-Mask-Detection",
  },
  {
    id: "project-3",
    image: kornerpieceImage,
    title: "kornerpiece",
    content:
      "Created own Brand Identity and design in Figma. Built using React, TailwindCSS, and Vite.",
    button1: "Figma",
    button1Link: "https://www.figma.com/file/eRm61GfmVomxcfsajx9vPZ/CornerPiece?type=design&node-id=0%3A1&mode=design&t=zybEupXQtzkPrkE7-1",
    button2: "GitHub",
    button2Link: "",
  },
  {
    id: "project-4",
    image: emergentImage,
    title: "Data Science Student Consulting Project",
    content:
      "Worked closely with client, ArmenTeKort, to extract business insights from volunteer journey data. Applied ML techniques (Decision Tree, Random Forest, Logisitic Regression) in Python to predict volunteer retention.",
    button1: "Client",
    button1Link: "https://www.armentekort.be/",
    button2: "Emergent",
    button2Link: "https://emergentleuven.be/",
  },
  {
    id: "project-5",
    image: computerVisionImage,
    title: "Machine Learning & Computer Vision Projects",
    content:
      "Various projects on Customer classification, Eigenfaces, non-rigid reconstruction and Autoencoders using MatLab, Python, PyTorch, OpenCV, and more.",
    button2: "GitHub",
    button2Link: "https://github.com/arne-be/My-Projects",
  },
];

export const about = [
  {
    title: "About Me",
    text: "",
  },
  {
    title: "Why kornerpiece?",
    text: "",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "email",
    icon: linkedin,
    link: "mailto:arne.berresheimgmail.com",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/arne-be",
  },
  {
    id: "github",
    icon: github,
    link: "https://www.github.com/",
  },
  {
    id: "twitter",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];