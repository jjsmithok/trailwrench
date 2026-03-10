import { a as ensure_array_like, e as escape_html } from "../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let bikes = [];
    ({ year: (/* @__PURE__ */ new Date()).getFullYear() });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    Array.from({ length: currentYear - 1989 }, (_, i) => currentYear - i);
    $$renderer2.push(`<div class="container svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">🚵 TrailWrench AI</h1> <p class="svelte-1uha8ag">MTB Maintenance Tracker</p></header> `);
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
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let bike = each_array_2[$$index_2];
        $$renderer2.push(`<div class="bike-card svelte-1uha8ag"><div class="bike-info svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(bike.year)} ${escape_html(bike.make)} ${escape_html(bike.model)}</h3> <p class="hours svelte-1uha8ag">${escape_html(bike.totalServiceHours)} service hours</p></div> <div class="bike-actions svelte-1uha8ag"><button class="btn-service svelte-1uha8ag">Start 50-Hour Service</button> <button class="btn-delete svelte-1uha8ag" aria-label="Delete bike">🗑️</button></div></div>`);
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
