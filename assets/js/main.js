//import { PROJECTS, STACK, CERTS, STACK_ICONS, CHIPS, PROBLEMS, EXPERIENCE, TEACHING, PROFILE } from "./projects.js";
//import { PROJECTS, STACK, CERTS, STACK_ICONS, CHIPS, EXPERIENCE, TEACHING, PROFILE } from "./projects.js";
import { PROJECTS, STACK, STACK_ICONS, CERTS, EVENTS_MAP, CHIPS, EXPERIENCE, TEACHING, PROFILE } from "./projects.js";
import { card, chip, tag, listItem, stackIcon } from "./components.js";
//import { card, chip, listItem, stackIcon } from "./components.js";

function $(sel){ return document.querySelector(sel); }
function render(){
  const chipsBox = $("#chips"); CHIPS.forEach(c => chipsBox.appendChild(chip(c)));
  const grid = $("#projects-grid"); PROJECTS.forEach(p => grid.appendChild(card(p)));  
  
  //const stackBox = $("#stack-tags"); STACK.forEach(s => stackBox.appendChild(tag(s)));
  // ANTES:
  // const stackBox = $("#stack-tags");
  // STACK.forEach(s => stackBox.appendChild(tag(s)));
  // AHORA:
  // Stack: usa íconos si existen, si no, fallback a tags de texto
  const stackBoxIcons = document.querySelector("#stack-icons");
  const stackBoxTags  = document.querySelector("#stack-tags");

  if (Array.isArray(STACK_ICONS) && STACK_ICONS.length && stackBoxIcons) {
    stackBoxIcons.innerHTML = "";
    STACK_ICONS.forEach(item => stackBoxIcons.appendChild(stackIcon(item)));
  if (stackBoxTags) stackBoxTags.style.display = "none";
    } else if (Array.isArray(STACK) && STACK.length && stackBoxTags) {
    stackBoxTags.style.display = "";
    STACK.forEach(s => stackBoxTags.appendChild(tag(s)));
  }

  //const probList = $("#problem-list"); PROBLEMS.forEach(p => probList.appendChild(listItem(p.text, p.small)));
  // Stack (iconos)
  //const stackBox = $("#stack-icons");
  //STACK_ICONS.forEach(item => stackBox.appendChild(stackIcon(item)));

  // Certifications (iconos)
  const certBox = $("#cert-icons");
  if (certBox && Array.isArray(CERTS)) {
  CERTS.forEach(item => certBox.appendChild(stackIcon(item)));
  }

  // Mapa de conferencias/publicaciones
  if (window.L && document.querySelector("#events-map")) {
  initEventsMap(EVENTS_MAP);
  }


  const expList = $("#exp-list"); EXPERIENCE.forEach(e => expList.appendChild(listItem(e.role, e.when)));
  const teachList = $("#teach-list"); TEACHING.forEach(t => teachList.appendChild(listItem(t.role, t.when)));
  $("#year").textContent = new Date().getFullYear();
  const gh = `https://github.com/${PROFILE.user}`;
  const li = `https://www.linkedin.com/in/${PROFILE.linkedin}`;
  document.querySelectorAll('a').forEach(a=>{
    if(a.textContent.includes("GitHub") && a.getAttribute("href")?.includes("TU_USUARIO")) a.href = gh;
    if(a.textContent.includes("LinkedIn") && a.getAttribute("href")?.includes("TU_LINKEDIN")) a.href = li;
  });
  const cv = $("#cv-link"); if (PROFILE.cv && PROFILE.cv !== "#") cv.href = PROFILE.cv;
  setupAvatar(PROFILE.avatar);
  loadStars(PROFILE.user).catch(()=>{});
}
function setupAvatar(avatarPath){
  const img = $("#avatar-img");
  const fallback = $("#avatar-fallback");
  if(!avatarPath || avatarPath === "#"){ img.style.display = "none"; fallback.style.display = "flex"; return; }
  img.addEventListener("load", () => { img.style.display = "block"; fallback.style.display = "none"; });
  img.addEventListener("error", () => { img.style.display = "none"; fallback.style.display = "flex"; });
  img.src = avatarPath;
}
async function loadStars(user){
  if(!user || user === "TU_USUARIO") return;
  const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`);
  const repos = await res.json();
  const stars = repos.reduce((acc,r)=>acc + (r.stargazers_count||0),0);
  $("#kpi-stars").textContent = stars.toLocaleString("es-MX");
}

function loadAvatar(){
  const imgEl = document.getElementById("avatar-img");
  const fbEl  = document.getElementById("avatar-fallback");
  if (!imgEl || !fbEl) return;

  if (!PROFILE.avatar){
    imgEl.style.display = "none";
    fbEl.style.display  = "flex";
    return;
  }

  // cache-busting por si el navegador guardó una versión vieja
  const src = PROFILE.avatar + (PROFILE.avatar.includes("?") ? "&" : "?") + "v=" + Date.now();

  imgEl.onload  = () => { imgEl.style.display = "block"; fbEl.style.display = "none"; };
  imgEl.onerror = () => { imgEl.style.display = "none";  fbEl.style.display = "flex";  };
  imgEl.src = src;
}

// dentro de render(), después de montar el DOM:
loadAvatar();


document.addEventListener("DOMContentLoaded", render);



function initEventsMap(items){
  // Centro/zoom inicial
const START_CENTER = [22.3964694, -97.0875478]; // el centro que prefieras
const START_ZOOM   = 5;         // más grande = más cerca (ej. 6–8)

const map = L.map("events-map", { zoomControl:true })
  .setView(START_CENTER, START_ZOOM);

  // Capa base OSM
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap",
    maxZoom: 25
  }).addTo(map);

  // Colores por tipo
  const COLORS = {
    conference: { color:"#ef4444", fillColor:"#ef4444" },  // rojo
    publication:{ color:"#3b82f6", fillColor:"#3b82f6" },  // azul
    award:      { color:"#f59e0b", fillColor:"#f59e0b" }   // dorado
  };

  const bounds = [];
  items.forEach(e => {
    if (typeof e.lat !== "number" || typeof e.lng !== "number") return;
    const style = COLORS[e.type] || COLORS.publication;

    const marker = L.circleMarker([e.lat, e.lng], {
      radius: 8, weight: 2, opacity: 1, ...style, fillOpacity: 0.9
    }).addTo(map);

    //marker.bindPopup(popupHtml(e), { className: "popup" });
    marker.bindPopup(popupHtml(e), { className: "evt-popup", maxWidth: 220, minWidth: 180 });
    bounds.push([e.lat, e.lng]);
  });

  // Ajusta el mapa a los pines
  //if (bounds.length) map.fitBounds(bounds, { padding: [30, 30] });

  // Pequeña leyenda
  addLegend(map);
}

function popupHtml(e){
  const safe = (s) => s ? String(s).replace(/</g,"&lt;").replace(/>/g,"&gt;") : "";
  const kind =
    e.type === "conference" ? "Conference" :
    e.type === "award"      ? "Award" :
    "Publication";

  const linkHtml = e.link && e.link !== "#"
    ? `<a href="${e.link}" target="_blank" rel="noopener">Open link</a>`
    : `<span>No link</span>`;

  return `
    <div class="evt-popup">
      <h4>${safe(e.title)}</h4>
      <p class="meta">${kind} — ${safe(e.date)}</p>
      ${e.desc ? `<p class="desc">${safe(e.desc)}</p>` : ""}
      ${linkHtml}
    </div>
  `;
}

function addLegend(map){
  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = function(){
    const div = L.DomUtil.create("div", "legend");
    div.style.background = "rgba(0,0,0,.35)";
    div.style.backdropFilter = "blur(4px)";
    div.style.padding = "6px 8px";
    div.style.border = "1px solid var(--border)";
    div.style.borderRadius = "8px";
    div.style.color = "var(--text)";
    div.style.fontSize = "12px";

    const items = [
      {label:"Conference",  color:"#ef4444"},
      {label:"Publication", color:"#3b82f6"},
      {label:"Award",       color:"#f59e0b"}
    ];

    div.innerHTML = items.map(i => `
      <span style="display:inline-flex;align-items:center;margin-right:10px;gap:6px">
        <span style="width:10px;height:10px;border-radius:50%;background:${i.color};display:inline-block;"></span>
        ${i.label}
      </span>
    `).join("");

    return div;
  };
  legend.addTo(map);
}
