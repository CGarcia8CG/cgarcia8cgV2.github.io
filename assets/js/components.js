// Componentes UI reutilizables (con imagen en cards)
export function el(tag, attrs={}, children=[]) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children])
    .filter(Boolean)
    .forEach(c => node.append(c.nodeType ? c : document.createTextNode(c)));
  return node;
}
export function chip(text){ return el("span",{class:"chip"},text); }
export function tag(text){ return el("span",{class:"tag"},text); }
export function pill(text, href){ return el("a",{class:"pill", href, target:"_blank", rel:"noopener"}, text); }
export function listItem(left, right){ 
  return el("div",{class:"item"},[ el("span",{},left), el("small",{},right) ]); 
}
 //export function card(project){
 // return el("article",{class:"card"},[
 //   project.image ? el("img",{class:"cover", src: project.image, alt:`Portada del proyecto: ${project.title}`}) : null,
 //   el("div",{class:"card-inner"},[
 //     el("h3",{},project.title),
 //     el("p",{},project.desc),
 //     el("div",{class:"tags"}, project.tags?.map(tag) || []),
 //     el("div",{class:"links"},[
 //       project.github ? pill("GitHub", project.github) : null,
 //       project.demo ? pill("Demo", project.demo) : null
 //     ])
 //   ])
 // ]);
//}


export function card(project){
  // <p> de descripción usando textContent (respeta \n con pre-line)
  const descP = el("p", { class: "desc" });
  descP.textContent = (project.desc ?? "").trim();

  return el("article",{class:"card"},[
    project.image ? el("img",{class:"cover", src: project.image, alt:`Portada del proyecto: ${project.title}`}) : null,
    el("div",{class:"card-inner"},[
      el("h3",{},project.title),
      descP,
      el("div",{class:"tags"}, (project.tags ?? []).map(tag)),
      el("div",{class:"links"},[
        project.github ? pill("GitHub", project.github) : null,
        project.demo ? pill("Demo", project.demo) : null
      ])
    ])
  ]);
}


export function stackIcon({ label, src, href }) {
  const img = el("img", { src, alt: label });
  const content = [img, el("span", { class: "stack-label" }, label)];
  return href
    ? el("a", { class: "stack-icon", href, target: "_blank", rel: "noopener" }, content)
    : el("div", { class: "stack-icon" }, content);
}
