import { e as escape_html, a as ensure_array_like, b as attr, c as attr_class, d as stringify } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let bikes = [];
    ({ year: (/* @__PURE__ */ new Date()).getFullYear() });
    let editingBike = null;
    let editForm = { year: 0, make: "", model: "" };
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const years = Array.from({ length: currentYear - 1989 }, (_, i) => currentYear - i);
    function getServiceStatus(bike) {
      if (!bike.lastServiceDate) return "due";
      const lastService = new Date(bike.lastServiceDate);
      const monthsSinceService = (Date.now() - lastService.getTime()) / (1e3 * 60 * 60 * 24 * 30);
      if (monthsSinceService < 2) return "ok";
      if (monthsSinceService < 4) return "due";
      return "overdue";
    }
    function getServiceStatusText(status) {
      switch (status) {
        case "ok":
          return "Good";
        case "due":
          return "Due Soon";
        case "overdue":
          return "Overdue";
      }
    }
    $$renderer2.push(`<header class="header"><h1>🔧 Trail<span>Wrench</span></h1> <p class="subtitle">Mountain Bike Service Tracker</p></header> <nav class="nav"><button class="nav-item active">🚲 My Bikes</button> <button class="nav-item">📅 History</button> <button class="nav-item">⚙️ Settings</button></nav> <main class="content">`);
    if (bikes.length === 0 && true) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="empty-state"><div class="empty-state-icon">🚲</div> <h3>No Bikes Yet</h3> <p>Add your first bike to start tracking service intervals</p> <button class="btn btn-primary">+ Add Your First Bike</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex justify-between items-center mb-4"><h2 style="margin: 0; font-size: 20px;">Your Bikes (${escape_html(bikes.length)})</h2> <button class="btn btn-primary btn-small">+ Add Bike</button></div> <div class="bike-list"><!--[-->`);
      const each_array = ensure_array_like(bikes);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let bike = each_array[$$index_1];
        if (editingBike?.id === bike.id) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="card"><div class="form-group"><label class="form-label">Year</label> `);
          $$renderer2.select({ class: "form-select", value: editForm.year }, ($$renderer3) => {
            $$renderer3.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(years);
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let year = each_array_1[$$index];
              $$renderer3.option({ value: year }, ($$renderer4) => {
                $$renderer4.push(`${escape_html(year)}`);
              });
            }
            $$renderer3.push(`<!--]-->`);
          });
          $$renderer2.push(`</div> <div class="form-group"><label class="form-label">Make</label> <input class="form-input" type="text"${attr("value", editForm.make)} placeholder="Santa Cruz, Trek, Specialized..."/></div> <div class="form-group"><label class="form-label">Model</label> <input class="form-input" type="text"${attr("value", editForm.model)} placeholder="Tallboy, Bronson, Ripmo..."/></div> <div class="flex gap-2"><button class="btn btn-secondary">Cancel</button> <button class="btn btn-primary">Save</button></div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="bike-item"><div class="bike-icon">🚲</div> <div class="bike-info"><div class="bike-name">${escape_html(bike.year)} ${escape_html(bike.make)} ${escape_html(bike.model)}</div> <div class="bike-meta">${escape_html(bike.totalServiceHours || 0)} service hours</div></div> <span${attr_class(`bike-status ${stringify(getServiceStatus(bike))}`)}>${escape_html(getServiceStatusText(getServiceStatus(bike)))}</span></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></main>`);
  });
}
export {
  _page as default
};
