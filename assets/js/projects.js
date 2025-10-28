// Contenido editable: proyectos, stack, chips, experiencia, docencia y perfil
export const PROJECTS = [
  {
    title: "Mexico City Metro Network",
    desc: `
      Mexico City metro system is the most important transport.\n
      In this project I'm trying to detect the most influential stations in terms of people moving inside the network.\n
      I use different flavours of network centrality like PageRank.
    `,
    tags: ["Python","Streamlit","Networkx", "Folium"],
    github: "https://github.com/CGarcia8CG/Metro-cdmx",
    demo: "https://metro-cdmx-2nah44unsy3knldg7e6ncq.streamlit.app/",
    image: "assets/img/proj/example_metro_map.png"
  },
  {
    title: "Comparison between cluster and regionalization",
    desc: `In this project we use real crime data of Mexico to demonstrate why \n
     Regionalization is a special case of Clustering and the value of using the former approach\n
     You can navigate it both at the same time`,
    tags: ["Python","Streamlit","Clustering","Folium"],
    github: "https://github.com/CGarcia8CG/crime-geo-clustering/tree/master",
    demo: "https://crime-geo-clustering-dc7ryzj9cdgjjej7aethss.streamlit.app/",
    image: "assets/img/proj/cluster_vs_region.png"
  },
  {
    title: "Comparison of clustering in transport routing",
    desc: `In this project we look how different definitions of clustering have influence in the creation of
    routes origin from a dairy factory to supply various points of sale\n
    If we have the cost of transportation we can compute the economical cost of each cluster.`,
    tags: ["Python","GeoPandas","Clustering","OSM","Logistics"],
    //github: "https://github.com/tu_usuario/movilidad-cdmx",
    demo: "https://colab.research.google.com/drive/1G-oVTf0_U_Hma32jCjN0UffjCD7cNNWv#scrollTo=ZnLk_Y-_w3fB://crime-geo-clustering-dc7ryzj9cdgjjej7aethss.streamlit.app/",
    image: "assets/img/proj/Routing-clustering.png"
  },
  //{
  //  title: "Movilidad CDMX — Flujos (Folium)",
  //  desc: "Mapa interactivo con modelo gravitacional y heatmap de destinos.",
  //  tags: ["Folium","GeoPandas","Mapas"],
  //  github: "https://github.com/tu_usuario/movilidad-cdmx",
  //  image: "assets/img/proyecto-3.jpg"
  //}
];

export const STACK = ["Python","Pandas","scikit-learn","PyTorch","GeoPandas","Folium","PostgreSQL/PostGIS","Streamlit","Dagster/Airflow","Docker","Azure"];
//export const STACK = [
//  { name:"Python",        icon:"assets/img/stack/Python.svg",      url:"https://www.python.org", abbr:"PY" },
//  { name:"Pandas",        icon:"assets/img/stack/pandas.svg",      url:"https://pandas.pydata.org", abbr:"PD" },
//  { name:"scikit-learn",  icon:"assets/img/stack/sklearn.svg",     url:"https://scikit-learn.org", abbr:"SK" },
//  { name:"PyTorch",       icon:"assets/img/stack/pytorch.svg",     url:"https://pytorch.org", abbr:"PT" },
//  { name:"GeoPandas",     icon:"assets/img/stack/geopandas.svg",   url:"https://geopandas.org", abbr:"GEO" },
//  { name:"Folium",        icon:"assets/img/stack/folium.svg",      url:"https://python-visualization.github.io/folium/", abbr:"FL" },
//  { name:"PostgreSQL",    icon:"assets/img/stack/postgresql.svg",  url:"https://www.postgresql.org", abbr:"PG" },
//  { name:"Streamlit",     icon:"assets/img/stack/streamlit.svg",   url:"https://streamlit.io", abbr:"ST" },
//  { name:"Docker",        icon:"assets/img/stack/docker.svg",      url:"https://www.docker.com", abbr:"DK" },
//  { name:"Azure",         icon:"assets/img/stack/azure.svg",       url:"https://azure.microsoft.com", abbr:"AZ" }
//];

// Íconos del stack (empezamos con Python)
export const STACK_ICONS = [
  {
    label: "Python",
    src: "assets/img/stack/python_logo.png",
    href: "https://www.python.org/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "Scikit-learn",
    src: "assets/img/stack/Scikitlearn_logo.png",
    href: "https://scikit-learn.org/1.3/index.html"  // opcional (abre docs al hacer clic)
  },
  {
    label: "Geopandas",
    src: "assets/img/stack/Geopandas_logo.png",
    href: "https://geopandas.org/en/stable/index.html"  // opcional (abre docs al hacer clic)
  },

  {
    label: "PyTorch",
    src: "assets/img/stack/Pytorch_logo.png",
    href: "https://pytorch.org/"   // opcional (abre docs al hacer clic)
  },

  {
    label: "R",
    src: "assets/img/stack/R_logo.png",
    href: "https://www-r--project-org.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "QGIS",
    src: "assets/img/stack/QGIS_logo.png",
    href: "https://qgis.org/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "Docker",
    src: "assets/img/stack/Docker_logo.png",
    href: "https://www.docker.com/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "PowerBI",
    src: "assets/img/stack/Powerbi_logo.png",
    href: "https://www.microsoft.com/es-es/power-platform/products/power-bi"   // opcional (abre docs al hacer clic)
  },
  {
    label: "PostgreSQL",
    src: "assets/img/stack/PostgreSQL_logo.png",
    href: "https://www.postgresql.org/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "Azure",
    src: "assets/img/stack/Azure_logo.png",
    href: "https://azure.microsoft.com/es-mx/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "GitHub",
    src: "assets/img/stack/GitHub.svg",
    href: "https://github.com/"   // opcional (abre docs al hacer clic)
  },
  {
    label: "Streamlit",
    src: "assets/img/stack/Streamlit_logo2.png",
    href: "https://streamlit.io/brand"  // opcional (abre docs al hacer clic)
  },
    {
    label: "NetworkX",
    src: "assets/img/stack/NetworkX_logo.png",
    href: "https://networkx.org/"  // opcional (abre docs al hacer clic)
  },
    {
    label: "Plotly",
    src: "assets/img/stack/Plotly_logo.png",
    href: "https://plotly.com/"  // opcional (abre docs al hacer clic)
  },
    {
    label: "Neo4j",
    src: "assets/img/stack/Neo4j_logo.png",
    href: "https://neo4j.com/"  // opcional (abre docs al hacer clic)
  },
  
  // luego agregas más aquí...
];


// Certificaciones con imagen y link a la credencial (opcional)
export const CERTS = [
  // Ejemplos (cámbialos por los tuyos)
  { label: "Neo4j Professional", src: "assets/img/certs/neo4j_certified_professional.jpeg", href: "https://graphacademy.neo4j.com/c/e00e16dc-af55-405d-a451-4e4d497a48e7/" },
  { label: "AZ-900", src: "assets/img/certs/AZ_fundamentals.png", href: "https://learn.microsoft.com/en-us/users/carlosdavidgarciahernandez-5086/credentials/de7241a9318bf576?ref=https%3A%2F%2Fcgarcia8cg.github.io%2F://www.credly.com/..." },
  { label: "AZ-DP100", src: "assets/img/certs/AZ_DS.png", href: "https://learn.microsoft.com/en-us/users/carlosdavidgarciahernandez-5086/credentials/6ed38074f499249a?ref=https%3A%2F%2Fcgarcia8cg.github.io%2F" },
  { label: "Tiger-Associate", src: "assets/img/certs/TigerGraph_associate.png", href: "https://www.credly.com/badges/79b644b0-c15f-4449-89a3-4408815865c7/public_url" },
  { label: "Tiger-ML", src: "assets/img/certs/TigerGraph_DS.png", href: "https://www.credly.com/badges/5e1a20ad-eadf-4caa-8fc8-7737ec967b1e/public_url" },
  { label: "Jira-Fundamentals", src: "assets/img/certs/Jira_fundamentals.png", href: "https://university.atlassian.com/student/award/7m8g187ZST8owDXqGwfffpk2" },
  { label: "IBM-Methodology", src: "assets/img/certs/IBM_DS.png", href: "https://courses.cognitiveclass.ai/certificates/f21e97aa6b1448de80b9bd40a1ce09b7" },
  //{ label: "Scrum Master",           src: "assets/img/certs/scrum-smc.png", href: "https://scrum.org/..." }
];


// Eventos para el mapa: conferencias (rojo) y publicaciones (azul)
export const EVENTS_MAP = [
  // --- Conferences (rojo) ---
  {
    type: "conference",                    // "conference" | "publication"
    title: "SACSCOC 2024 — New Orleans",
    desc: "Two days invitation to present Tec de Monterrey early alerts system used to identify potential churning students.",
    date: "Jul-2024",
    lat: 29.9478943,                          // Nueva Orleans (aprox)
    lng: -90.0720366,
    link: null,                            // sin enlace
    //photo: "assets/img/icons/favicon.svg"  // placeholder
  },
  {
    type: "conference",
    title: "Mexico City Museums Recommender — UPIICSA, Iztacalco",
    desc: "Recommender system for Mexico City museums using matrix factorization as a proposal to increase visitors.",
    date: "Oct-2020",
    lat: 19.3956329,                           // UPIICSA (aprox)
    lng: -99.094001,
    link: null,                             // placeholder de enlace
    //photo: "assets/img/icons/favicon.svg"  // placeholder
  },
  {
    type: "conference",                    // "conference" | "publication"
    title: "Kick-off 2026",
    desc: "Tec de Monterrey meeting to present the new admissions-enrollment algorithm",
    date: "Sep-2025",
    lat: 19.5932625,                          // CEM
    lng: -99.2317306,
    link: null,                            // sin enlace
    //photo: "assets/img/icons/favicon.svg"  // placeholder
  },
  
  // --- Publications (azul) ---
  {
    type: "publication",
    title: "Mexico City Museums Recommender — UPIICSA, Iztacalco",
    desc: "Recommender system for Mexico City museums using matrix factorization as a proposal to increase visitors.",
    date: "Nov-2020",
    lat: 19.3964694,                           // UPIICSA (aprox)
    lng: -99.0875478,
    link: "ISBN: 978-958-771-986-4",                             // placeholder de enlace
    //photo: "assets/img/icons/favicon.svg"  // placeholder
  },
  {
    type: "award",
    title: "Tec Awards 2025",
    desc: "Award for innovation in key institutional processes (scolarships and enrollment)",
    date: "Aug-2025",
    lat: 25.6513835,                           // Rectoria ITESM (aprox)
    lng: -100.2912695,
    link: "#",                             // placeholder de enlace
    //photo: "assets/img/icons/favicon.svg"  // placeholder
  }
];



export const CHIPS = ["Data Science","Applied ML","Fairness","Geointelligence","Bayesian Stats","Economics", "Visualization"];
export const PROBLEMS = [
  {text: "Predicción de reinscripción/admisión", small: "ML aplicado a educación"},
  {text: "Asignación y optimización de recursos", small: "Algoritmos genéticos"},
  {text: "Mapas y análisis de movilidad", small: "Modelos gravitacionales"},
  {text: "ML justo", small: "Adversarial debiasing"}
];
export const EXPERIENCE = [
  {role:"Data Scientist — Tecnológico de Monterrey", when:"Aug 2022–Present"},
  {role:"Part Time Professor — UNAM", when:"Aug 2022–Present"},
  {role:"Data Scientist (consultancy) — Banco BASE", when:"Mar 2022– Aug 2022"},
  {role:"Data Scientist — Mercadotecnia Ideas y Tecnología", when:"Jan 2021– Mar 2022"},
  {role:"Research Student — Laboratorio Nacional de Geointeligencia", when:"Apr 2020– Aug 2020"},
  {role:"Data Analyst — Cultura Colectiva", when:"Feb 2017– Aug 2017"},
];
export const TEACHING = [
  {role:"Técnicas de Análisis Espacial con Datos Geo-Referenciados", when:"Curso"},
  {role:"Fairness en IA aplicada a becas", when:"Charla"}
];
export const PROFILE = {
  user: "CGarcia8CG",
  linkedin: "https://www.linkedin.com/in/cgarcia8cg/",
  cv: "#",
  avatar: "assets/img/cropped_carlos.jpg"
};
