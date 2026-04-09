module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},71306,(a,b,c)=>{b.exports=a.r(18622)},79847,a=>{a.n(a.i(3343))},9185,a=>{a.n(a.i(29432))},72842,a=>{a.n(a.i(75164))},54897,a=>{a.n(a.i(30106))},56157,a=>{a.n(a.i(18970))},94331,a=>{a.n(a.i(60644))},15988,a=>{a.n(a.i(56952))},25766,a=>{a.n(a.i(77341))},29725,a=>{a.n(a.i(94290))},5785,a=>{a.n(a.i(90588))},74793,a=>{a.n(a.i(33169))},85826,a=>{a.n(a.i(37111))},21565,a=>{a.n(a.i(41763))},65911,a=>{a.n(a.i(8950))},25128,a=>{a.n(a.i(91562))},40781,a=>{a.n(a.i(49670))},69411,a=>{a.n(a.i(75700))},63081,a=>{a.n(a.i(276))},62837,a=>{a.n(a.i(40795))},34607,a=>{a.n(a.i(11614))},96338,a=>{a.n(a.i(21751))},50642,a=>{a.n(a.i(12213))},32242,a=>{a.n(a.i(22693))},88530,a=>{a.n(a.i(10531))},8583,a=>{a.n(a.i(1082))},38534,a=>{a.n(a.i(98175))},70408,a=>{a.n(a.i(9095))},22922,a=>{a.n(a.i(96772))},78294,a=>{a.n(a.i(71717))},16625,a=>{a.n(a.i(85034))},88648,a=>{a.n(a.i(68113))},51914,a=>{a.n(a.i(66482))},25466,a=>{a.n(a.i(91505))},23862,a=>a.a(async(b,c)=>{try{let b=await a.y("pg-587764f78a6c7a9c");a.n(b),c()}catch(a){c(a)}},!0),93385,a=>a.a(async(b,c)=>{try{var d=a.i(23862);a.i(9367);var e=b([d]);[d]=e.then?(await e)():e;let g=null,h=0,i="";function f(){return"https://javavolcano-touroperator.com".replace(/\/$/,"")}a.s(["absoluteAsset",0,function(a){return a?/^https?:\/\//i.test(a)?a:`${f()}/${a.replace(/^\//,"")}`:""},"getPool",0,function(){return!process.env.DATABASE_URL||Date.now()<h?null:(g||(g=new d.Pool({connectionString:process.env.DATABASE_URL,max:3,idleTimeoutMillis:1e4,connectionTimeoutMillis:4e3,ssl:process.env.DATABASE_URL.includes("sslmode=require")||process.env.DATABASE_URL.includes("render.com")||process.env.DATABASE_URL.includes("supabase.co")?{rejectUnauthorized:!1}:void 0})),g)},"getSiteUrl",0,f,"isConnectivityError",0,function(a){let b=a instanceof Error?a.message:String(a);return/ETIMEDOUT|ECONNREFUSED|ENOTFOUND|Connection terminated|timeout/i.test(b)},"markDbUnavailable",0,function(a){let b=a instanceof Error?a.message:String(a);h=Date.now()+6e4,b!==i&&(i=b,console.warn(`[jvto-source] DB mirror temporarily disabled for 60s: ${b}`))}]),c()}catch(a){c(a)}},!1),89272,a=>a.a(async(b,c)=>{try{var d=a.i(9367),e=a.i(93385),f=b([e]);[e]=f.then?(await f)():f,a.s(["buildPageMetadata",0,function(a,b){let c,f,g,h,i,j,{title:k,description:l,canonical:m}=(c=d.SSOT.pages?.[a],f=c?.title_tag||b.title,g=c?.meta_description||b.description,h=function(a){if(/^https?:\/\//i.test(a))return a;let b=a.startsWith("/")?a:`/${a}`;return`${(0,e.getSiteUrl)()}${b}`}(c?.canonical||a),{title:f,description:g,canonical:h});return{title:(i=k.toLowerCase(),j=d.SSOT.organization.name.toLowerCase(),i.includes(j)||/\bjvto\b/i.test(k)?{absolute:k}:k),description:l,alternates:{canonical:m},openGraph:{title:k,description:l,url:m,siteName:d.SSOT.organization.name,type:"website"},twitter:{card:"summary_large_image",title:k,description:l}}}]),c()}catch(a){c(a)}},!1),14488,a=>a.a(async(b,c)=>{try{var d=a.i(717),e=a.i(9367),f=a.i(93385),g=b([f]);[f]=g.then?(await g)():g;let q={surabaya:4,bali:3};function h(a){return a.includes("/from-bali/")?"bali":"surabaya"}function i(a){return"surabaya"===a?"From Surabaya":"From Bali"}function j(a){let b=a.split("/").pop()?.replace(/-\d+d\d+n$/i,"").replace(/taman-safari-prigen/gi,"taman_safari_prigen").replace(/tumpak-sewu/gi,"tumpak_sewu").split("-").filter(Boolean).map(a=>{let b=a.replace(/_/g," ");return({ijen:"Ijen",bromo:"Bromo",madakaripura:"Madakaripura",malang:"Malang",papuma:"Papuma","tumpak sewu":"Tumpak Sewu","taman safari prigen":"Taman Safari Prigen"})[b]||b.replace(/\b\w/g,a=>a.toUpperCase())});return b&&b.length>0?b.join(" -> "):"Private East Java Route"}function k(a){return Array.isArray(a)?a.map(a=>a?.trim()).filter(a=>!!a):[]}function l(a){let b,c=h(a.route);return{id:a.route,name:a.name,slug:a.route.split("/").pop()||a.route,origin:c,originLabel:i(c),href:a.route,routeLabel:a.overview?.route_meta||j(a.route),duration:(b=a.route.match(/(\d+)d(\d+)n/i))?`${b[1]}D / ${b[2]}N`:"Custom route",price:a.price,image:a.image,summary:a.overview?.highlights?.[0]||a.overview?.route_meta||"Private East Java route with controlled handling and clear operational framing.",description:a.overview?.route_meta?`${a.name} follows ${a.overview.route_meta} with private route handling and clear operational framing.`:`${a.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,highlights:a.overview?.highlights||[],crewName:a.crewName,operationalNote:a.overview?.highlights?.[0]||"Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts.",routeHandling:a.overview?.route_meta||"The route is handled privately so timing and safety decisions stay consistent for one group.",healthAccess:a.requirements?.[0]||"Readiness depends on pace, sleep, and honest mobility expectations before the route starts.",environmentalConditions:a.technical_dossier?.risk_level||"Mountain weather and local controls can change the exact route sequence and viewing conditions.",planningNotes:a.itinerary?.map(a=>a.title).slice(0,4)||["Pickup timing and route sequencing should be treated as part of the product."],healthRequirements:a.requirements||["Check pace, sleep, and mobility honestly before confirming the route."],environmentalRisks:a.technical_dossier?.risk_level?[a.technical_dossier.risk_level]:["Mountain weather and local controls can change access timing and viewing conditions."],routeHandlingNotes:a.technical_dossier?.equipment_check?.slice(0,4)||["Private route handling keeps timing and safety decisions consistent for one group."],inclusions:a.includes||[],exclusions:a.excludes||[],itinerary:a.itinerary?.map(a=>({day:a.day,title:a.title,summary:Array.isArray(a.activities)?a.activities.join(" | "):a.title}))||[],technicalDossier:a.technical_dossier}}let r={surabaya:e.SSOT.tours.filter(a=>"surabaya"===h(a.route)).map(l),bali:e.SSOT.tours.filter(a=>"bali"===h(a.route)).map(l)};function m(a,b){var c;let d=k(b.highlights_bullets),g=e.SSOT.tours.find(a=>a.route===`/${b.slug.replace(/^\/+/,"")}`);return{id:String(b.id),name:b.name,slug:b.slug.split("/").pop()||b.slug,origin:a,href:`/${b.slug.replace(/^\/+/,"")}`,duration:`${b.day??0}D / ${b.night??0}N`,price:(c=b.min_price,"number"==typeof c&&c>0?`From IDR ${c.toLocaleString("id-ID")}`:"Price on request"),image:(0,f.absoluteAsset)(b.image_url)||g?.image||r[a][0]?.image||"",summary:b.description?.split(".").at(0)?.trim()||d[0]||"Private East Java route with controlled handling and clear operational framing.",highlights:d.slice(0,3),crewName:g?.crewName}}async function n(a){let b=(0,f.getPool)();return b?(await b.query(`
      select
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        min(pp.price) as min_price,
        primary_asset.url as image_url
      from packages p
      left join durations d on d.id = p.duration_id
      left join package_prices pp on pp.package_id = p.id
      left join lateral (
        select a.url
        from package_assets pa
        join assets a on a.id = pa.asset_id
        where pa.package_id = p.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when coalesce(pa.is_primary, false) then 0 else 1 end, pa.id asc
        limit 1
      ) primary_asset on true
      where coalesce(p.is_publish, false) = true
        and p.deleted_at is null
        and p.start_destination_id = $1
      group by
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        primary_asset.url
      order by coalesce(d.day, 99) asc, p.id asc
    `,[q[a]])).rows.map(b=>m(a,b)):null}async function o(a,b){let c=(0,f.getPool)();if(!c)return null;let d=`tours/from-${a}/${b}`,e=(await c.query(`
      select
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        min(pp.price) as min_price,
        primary_asset.url as image_url
      from packages p
      left join durations d on d.id = p.duration_id
      left join package_prices pp on pp.package_id = p.id
      left join lateral (
        select a.url
        from package_assets pa
        join assets a on a.id = pa.asset_id
        where pa.package_id = p.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when coalesce(pa.is_primary, false) then 0 else 1 end, pa.id asc
        limit 1
      ) primary_asset on true
      where p.slug = $1
        and coalesce(p.is_publish, false) = true
        and p.deleted_at is null
      group by
        p.id,
        p.name,
        p.slug,
        p.description,
        p.highlights_bullets,
        p.operational_complexity_note,
        p.health_requirements,
        p.environmental_risks,
        p.safety_mitigation,
        p.handover_notes,
        d.day,
        d.night,
        primary_asset.url
      limit 1
    `,[d])).rows[0];if(!e)return null;let[g,h,l]=await Promise.all([c.query(`
        select ii.item
        from package_includes pi
        join item_includes ii on ii.id = pi.item_include_id
        where pi.package_id = $1
          and pi.deleted_at is null
          and ii.deleted_at is null
        order by pi.id asc
      `,[e.id]),c.query(`
        select ie.item
        from package_excludes pe
        join item_excludes ie on ie.id = pe.item_exclude_id
        where pe.package_id = $1
          and pe.deleted_at is null
          and ie.deleted_at is null
        order by pe.id asc
      `,[e.id]),c.query(`
        select day_no, title, activity
        from package_itinerary_days
        where package_id = $1
          and deleted_at is null
        order by day_no asc
      `,[e.id])]),n=m(a,e),o=r[a].find(a=>a.slug===b),p=k(e.health_requirements),q=k(e.environmental_risks),s=k(e.safety_mitigation),t=k(e.handover_notes),u=[e.operational_complexity_note?.trim(),...t].filter(a=>!!(a&&a.length>0)),v=[...s,...t].filter((a,b,c)=>!!(a&&c.indexOf(a)===b));return{...n,originLabel:i(a),routeLabel:j(e.slug),description:e.description?.trim()||o?.description||`${e.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,operationalNote:e.operational_complexity_note?.trim()||t[0]||o?.operationalNote||"This route works best when pickup timing, rest windows, and onward transfers are treated as part of the product.",routeHandling:t[0]||s[0]||o?.routeHandling||"The route is handled privately so timing and safety decisions stay consistent for one group.",healthAccess:p[0]||o?.healthAccess||"Readiness depends on pace, sleep, and honest mobility expectations before the route starts.",environmentalConditions:q[0]||o?.environmentalConditions||"Mountain weather and ranger controls can change the exact route sequence and viewing conditions.",planningNotes:u.length>0?u.slice(0,4):o?.planningNotes?.slice(0,4)||["Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts."],healthRequirements:p.length>0?p.slice(0,4):o?.healthRequirements?.slice(0,4)||["Check pace, sleep, and mobility honestly before confirming the route."],environmentalRisks:q.length>0?q.slice(0,4):o?.environmentalRisks?.slice(0,4)||["Mountain weather and local controls can change access timing and viewing conditions."],routeHandlingNotes:v.length>0?v.slice(0,4):o?.routeHandlingNotes?.slice(0,4)||["Private route handling keeps timing and safety decisions consistent for one group."],inclusions:g.rows.map(a=>a.item).slice(0,8),exclusions:h.rows.map(a=>a.item).slice(0,6),itinerary:l.rows.map(a=>({day:a.day_no,title:a.title,summary:a.activity?.trim()||a.title})),technicalDossier:o?.technicalDossier}}function p(a){return a?r[a].map(({description:a,operationalNote:b,routeHandling:c,healthAccess:d,environmentalConditions:e,inclusions:f,exclusions:g,itinerary:h,planningNotes:i,healthRequirements:j,environmentalRisks:k,routeHandlingNotes:l,originLabel:m,routeLabel:n,technicalDossier:o,...p})=>p):[...r.surabaya,...r.bali].map(({description:a,operationalNote:b,routeHandling:c,healthAccess:d,environmentalConditions:e,inclusions:f,exclusions:g,itinerary:h,planningNotes:i,healthRequirements:j,environmentalRisks:k,routeHandlingNotes:l,originLabel:m,routeLabel:n,technicalDossier:o,...p})=>p)}let s=async a=>{try{if(!a){let[a,b]=await Promise.all([n("surabaya"),n("bali")]);if(a&&b)return[...a,...b];return p()}let b=await n(a);return b&&b.length>0?b:p(a)}catch(c){let b=c instanceof Error?c.message:String(c);return(0,f.isConnectivityError)(c)&&(0,f.markDbUnavailable)(c),console.warn(`[tours-data] falling back to bundled tours: ${b}`),p(a)}},t=async(a,b)=>{try{let c=await o(a,b);if(c)return c}catch(d){let c=d instanceof Error?d.message:String(d);(0,f.isConnectivityError)(d)&&(0,f.markDbUnavailable)(d),console.warn(`[tours-data] falling back to bundled detail for ${a}/${b}: ${c}`)}return r[a].find(a=>a.slug===b)||null},u=(0,d.cache)(s),v=(0,d.cache)(t);a.s(["getOriginFromDepartureSegment",0,function(a){return"from-surabaya"===a||"surabaya"===a?"surabaya":"from-bali"===a||"bali"===a?"bali":null},"getTourBySlug",0,v,"getTours",0,u]),c()}catch(a){c(a)}},!1),9934,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/tours/Detail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/tours/Detail.tsx <module evaluation>","default")},69468,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/tours/Detail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/tours/Detail.tsx","default")},57368,a=>{"use strict";a.i(9934);var b=a.i(69468);a.n(b)},28205,a=>a.a(async(b,c)=>{try{var d=a.i(7997);a.i(70396);var e=a.i(73727),f=a.i(57368),g=a.i(14488),h=a.i(89272),i=b([g,h]);async function j({params:a}){let{departure:b,slug:c}=await a,d=(0,g.getOriginFromDepartureSegment)(b);if(!d)return(0,h.buildPageMetadata)(`/tours/${b}/${c}`,{title:"Tour",description:"Private East Java route briefing from Java Volcano Tour Operator."});let e=await (0,g.getTourBySlug)(d,c);return e?(0,h.buildPageMetadata)(e.href,{title:e.name,description:e.summary}):(0,h.buildPageMetadata)(`/tours/${b}/${c}`,{title:"Tour",description:"Private East Java route briefing from Java Volcano Tour Operator."})}async function k({params:a}){let{departure:b,slug:c}=await a,h=(0,g.getOriginFromDepartureSegment)(b);h||(0,e.notFound)();let i=await (0,g.getTourBySlug)(h,c);return i||(0,e.notFound)(),(0,d.jsx)(f.default,{tour:i})}[g,h]=i.then?(await i)():i,a.s(["default",0,k,"generateMetadata",0,j]),c()}catch(a){c(a)}},!1),83231,a=>{a.n(a.i(28205))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_yge04._.js.map