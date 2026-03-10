import { a as ensure_array_like, e as escape_html, b as attr } from "../../chunks/index2.js";
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
    $$renderer2.push(`<div class="container svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">🚵 TrailWrench AI</h1> <p class="svelte-1uha8ag">MTB Maintenance Tracker</p> `);
    if (bikes.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="header-actions svelte-1uha8ag"><button class="btn-header svelte-1uha8ag">📤 Export</button> <label class="btn-header btn-import svelte-1uha8ag">📥 Import <input type="file" accept=".json" hidden=""/></label></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></header> `);
    if (bikes.length === 0 && true) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="empty-state svelte-1uha8ag"><p class="svelte-1uha8ag">No bikes yet. Add your first bike to get started!</p> <button class="btn-primary svelte-1uha8ag">+ Add Your Bike</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (bikes.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="bike-list svelte-1uha8ag"><h2 class="svelte-1uha8ag">Your Bikes</h2> <!--[-->`);
      const each_array_2 = ensure_array_like(bikes);
      for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
        let bike = each_array_2[$$index_3];
        if (editingBike?.id === bike.id) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="bike-card edit-card svelte-1uha8ag"><div class="edit-form svelte-1uha8ag"><div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">Year</label> `);
          $$renderer2.select(
            { value: editForm.year, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`<!--[-->`);
              const each_array_3 = ensure_array_like(years);
              for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
                let year = each_array_3[$$index_2];
                $$renderer3.option({ value: year }, ($$renderer4) => {
                  $$renderer4.push(`${escape_html(year)}`);
                });
              }
              $$renderer3.push(`<!--]-->`);
            },
            "svelte-1uha8ag"
          );
          $$renderer2.push(`</div> <div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">Make</label> <input type="text"${attr("value", editForm.make)} class="svelte-1uha8ag"/></div> <div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">Model</label> <input type="text"${attr("value", editForm.model)} class="svelte-1uha8ag"/></div> <div class="edit-actions svelte-1uha8ag"><button class="btn-secondary svelte-1uha8ag">Cancel</button> <button class="btn-primary svelte-1uha8ag">Save</button></div></div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="bike-card svelte-1uha8ag"><div class="bike-info svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(bike.year)} ${escape_html(bike.make)} ${escape_html(bike.model)}</h3> <p class="hours svelte-1uha8ag">${escape_html(bike.totalServiceHours)} service hours</p></div> <div class="bike-actions svelte-1uha8ag"><button class="btn-service svelte-1uha8ag">Start 50-Hour Service</button> <button class="btn-edit svelte-1uha8ag" aria-label="Edit bike">✏️</button> <button class="btn-delete svelte-1uha8ag" aria-label="Delete bike">🗑️</button></div></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button class="btn-add svelte-1uha8ag">+ Add Another Bike</button>`);
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
