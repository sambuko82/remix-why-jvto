module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},71306,(a,b,c)=>{b.exports=a.r(18622)},79847,a=>{a.n(a.i(3343))},9185,a=>{a.n(a.i(29432))},72842,a=>{a.n(a.i(75164))},54897,a=>{a.n(a.i(30106))},56157,a=>{a.n(a.i(18970))},94331,a=>{a.n(a.i(60644))},15988,a=>{a.n(a.i(56952))},25766,a=>{a.n(a.i(77341))},29725,a=>{a.n(a.i(94290))},5785,a=>{a.n(a.i(90588))},74793,a=>{a.n(a.i(33169))},85826,a=>{a.n(a.i(37111))},21565,a=>{a.n(a.i(41763))},65911,a=>{a.n(a.i(8950))},25128,a=>{a.n(a.i(91562))},40781,a=>{a.n(a.i(49670))},69411,a=>{a.n(a.i(75700))},63081,a=>{a.n(a.i(276))},62837,a=>{a.n(a.i(40795))},34607,a=>{a.n(a.i(11614))},96338,a=>{a.n(a.i(21751))},50642,a=>{a.n(a.i(12213))},32242,a=>{a.n(a.i(22693))},88530,a=>{a.n(a.i(10531))},8583,a=>{a.n(a.i(1082))},38534,a=>{a.n(a.i(98175))},70408,a=>{a.n(a.i(9095))},22922,a=>{a.n(a.i(96772))},78294,a=>{a.n(a.i(71717))},16625,a=>{a.n(a.i(85034))},88648,a=>{a.n(a.i(68113))},51914,a=>{a.n(a.i(66482))},25466,a=>{a.n(a.i(91505))},23862,a=>a.a(async(b,c)=>{try{let b=await a.y("pg-587764f78a6c7a9c");a.n(b),c()}catch(a){c(a)}},!0),93385,a=>a.a(async(b,c)=>{try{var d=a.i(23862);a.i(9367);var e=b([d]);[d]=e.then?(await e)():e;let g=null,h=0,i="";function f(){return"https://javavolcano-touroperator.com".replace(/\/$/,"")}a.s(["absoluteAsset",0,function(a){return a?/^https?:\/\//i.test(a)?a:`${f()}/${a.replace(/^\//,"")}`:""},"getPool",0,function(){return!process.env.DATABASE_URL||Date.now()<h?null:(g||(g=new d.Pool({connectionString:process.env.DATABASE_URL,max:3,idleTimeoutMillis:1e4,connectionTimeoutMillis:4e3,ssl:process.env.DATABASE_URL.includes("sslmode=require")||process.env.DATABASE_URL.includes("render.com")||process.env.DATABASE_URL.includes("supabase.co")?{rejectUnauthorized:!1}:void 0})),g)},"getSiteUrl",0,f,"isConnectivityError",0,function(a){let b=a instanceof Error?a.message:String(a);return/ETIMEDOUT|ECONNREFUSED|ENOTFOUND|Connection terminated|timeout/i.test(b)},"markDbUnavailable",0,function(a){let b=a instanceof Error?a.message:String(a);h=Date.now()+6e4,b!==i&&(i=b,console.warn(`[jvto-source] DB mirror temporarily disabled for 60s: ${b}`))}]),c()}catch(a){c(a)}},!1),89272,a=>a.a(async(b,c)=>{try{var d=a.i(9367),e=a.i(93385),f=b([e]);[e]=f.then?(await f)():f,a.s(["buildPageMetadata",0,function(a,b){let c,f,g,h,i,j,{title:k,description:l,canonical:m}=(c=d.SSOT.pages?.[a],f=c?.title_tag||b.title,g=c?.meta_description||b.description,h=function(a){if(/^https?:\/\//i.test(a))return a;let b=a.startsWith("/")?a:`/${a}`;return`${(0,e.getSiteUrl)()}${b}`}(c?.canonical||a),{title:f,description:g,canonical:h});return{title:(i=k.toLowerCase(),j=d.SSOT.organization.name.toLowerCase(),i.includes(j)||/\bjvto\b/i.test(k)?{absolute:k}:k),description:l,alternates:{canonical:m},openGraph:{title:k,description:l,url:m,siteName:d.SSOT.organization.name,type:"website"},twitter:{card:"summary_large_image",title:k,description:l}}}]),c()}catch(a){c(a)}},!1),43490,a=>a.a(async(b,c)=>{try{var d=a.i(717),e=a.i(9367),f=a.i(93385),g=b([f]);[f]=g.then?(await g)():g;let l={"ijen-crater":{description:"The world's largest acidic crater lake and the home of the rare blue fire phenomenon.",keyHighlights:["Blue Fire Phenomenon","Acidic Crater Lake","Sulfur Miners","Sunrise Views"],safetySummary:"Mandatory health screening required. Gas masks provided.",images:["https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg","https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png","https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg"]},"mount-bromo":{description:"The most iconic sunrise in Indonesia, featuring an active volcano in a vast sea of sand.",keyHighlights:["Sunrise at Penanjakan","Bromo Crater Hike","Sea of Sand","Luhur Poten Temple"],safetySummary:"Active volcano monitoring. Safe viewing zones enforced.",images:["https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-day.jpg","https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg","https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-day.jpg"]},"tumpak-sewu-waterfall":{description:"A thousand waterfalls cascading down a semicircular cliff. A true hidden paradise.",keyHighlights:["Panorama Viewpoint","Bottom of the Falls Hike","Goa Tetes Cave","River Trekking"],safetySummary:"Slippery terrain. Professional guides mandatory.",images:["https://javavolcano-touroperator.com/ops/baratha-hotel-departure-team.jpg","https://javavolcano-touroperator.com/ops/baratha-hotel-departure-team.jpg"]},"madakaripura-waterfall":{description:"The eternal waterfall, believed to be the meditation place of Gajah Mada.",keyHighlights:["Eternal Waterfall","Deep Canyon Trek","Gajah Mada Statue","Sacred Atmosphere"],safetySummary:"Wet conditions. Raincoats and waterproof gear recommended.",images:["https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png","https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png"]},"papuma-beach":{description:"White sands and dramatic rock formations on the southern coast of Jember.",keyHighlights:["White Sand Beach","Rock Formations","Sunset Views","Local Seafood"],safetySummary:"Strong southern currents. Swimming only in designated areas.",images:["https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg","https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg"]}},m=e.SSOT.destinations.map(a=>{let b=l[a.slug]??{},c=a.image||"";return{id:a.slug,slug:a.slug,name:a.name,summary:b.description?.split(".").at(0)?.trim()||a.highlight,description:b.description||a.highlight,highlight:a.highlight,category:a.name.toLowerCase().includes("beach")?"Beach":a.name.toLowerCase().includes("waterfall")?"Waterfall":"Volcano",duration:a.name.toLowerCase().includes("waterfall")||a.name.toLowerCase().includes("beach")?"1 Day":"1-2 Days",difficulty:"tumpak-sewu-waterfall"===a.slug?"Demanding":"Moderate",bestTime:"Dry season mornings",terrain:"Field conditions vary by weather and route access.",temperatureRange:"Variable mountain and tropical conditions",physicalRequirements:"Route suitability depends on pace, footing, and the exact sequence combined with your package.",culturalContext:"This destination should be understood inside the wider East Java route context, not as an isolated postcard stop.",safetyNotes:b.safetySummary?[b.safetySummary]:["Operational safety rules apply on all active route zones."],safetySummary:b.safetySummary||"Operational safety rules apply on all active route zones.",keyHighlights:b.keyHighlights||[a.highlight],requiredGear:["Closed shoes","Light layer","Personal medication"],image:c,imageContext:a.imageContext,images:(b.images&&b.images.length>0?b.images:[c]).filter(Boolean),href:a.route,relatedTours:[]}});function h(a){return Array.isArray(a)?a.map(a=>String(a).trim()).filter(Boolean):[]}function i(a){let b=e.SSOT.destinations.find(b=>b.slug===a.slug);return{id:String(a.id),slug:a.slug,name:a.name,summary:a.summary?.trim()||a.description?.split(".").at(0)?.trim()||a.highlight?.trim()||a.name,highlight:a.highlight?.trim()||a.category?.trim()||"East Java route node",category:a.category?.trim()||"Destination",duration:a.duration?.trim()||"1 Day",difficulty:a.difficulty_level?.trim()||"Variable",bestTime:a.best_time_to_visit?.trim()||"Season-dependent",image:(0,f.absoluteAsset)(a.image_url)||b?.image||"",imageContext:b?.imageContext,href:`/destinations/${a.slug}`}}async function j(){let a=(0,f.getPool)();return a?(await a.query(`
      select
        d.id,
        d.slug,
        d.name,
        d.summary,
        d.description,
        d.highlight,
        d.category,
        d.duration,
        d.difficulty_level,
        d.best_time_to_visit,
        d.terrain,
        d.temperature_range,
        d.physical_requirements,
        d.cultural_context,
        d.safety_notes,
        d.key_highlights,
        d.required_gear,
        coalesce(primary_asset.url, d.featured_image, d.thumbnail_url) as image_url
      from destinations d
      left join lateral (
        select a.url
        from destination_assets da
        join assets a on a.id = da.asset_id
        where da.destination_id = d.id
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when da.type = 'primary' then 0 else 1 end, da.id asc
        limit 1
      ) primary_asset on true
      where coalesce(d.published, false) = true
        and d.deleted_at is null
        and d.slug is not null
        and d.id not in (3, 4)
      order by coalesce(d.featured, false) desc, d.id asc
    `)).rows:null}async function k(a){var b;let c=await j();if(!c)return null;let d=c.find(b=>b.slug===a);if(!d)return null;let e=(0,f.getPool)();if(!e)return null;let[g,k]=await Promise.all([e.query(`
        select
          p.id,
          p.name,
          p.slug,
          dur.day,
          dur.night,
          min(pp.price) as min_price
        from package_destinations pd
        join packages p on p.id = pd.package_id
        left join durations dur on dur.id = p.duration_id
        left join package_prices pp on pp.package_id = p.id
        where pd.destination_id = $1
          and coalesce(p.is_publish, false) = true
          and p.deleted_at is null
        group by p.id, p.name, p.slug, dur.day, dur.night
        order by coalesce(dur.day, 99) asc, p.id asc
        limit 3
      `,[d.id]),e.query(`
        select a.url
        from destination_assets da
        join assets a on a.id = da.asset_id
        where da.destination_id = $1
          and a.type = 'image'
          and coalesce(a.is_active, true) = true
        order by case when da.type = 'primary' then 0 else 1 end, da.id asc
      `,[d.id])]),m=i(d),n=l[a],o=h(d.safety_notes),p=(b=d.key_highlights,Array.isArray(b)?b.map(a=>"string"==typeof a?a.trim():a&&"object"==typeof a&&"title"in a?String(a.title).trim():"").filter(Boolean):[]),q=h(d.required_gear),r=k.rows.map(a=>(0,f.absoluteAsset)(a.url)).filter((a,b,c)=>!!a&&c.indexOf(a)===b),s=n?.images||[];return{...m,description:d.description?.trim()||n?.description||m.summary,terrain:d.terrain?.trim()||"Field conditions vary by weather and route access.",temperatureRange:d.temperature_range?.trim()||"Variable mountain and tropical conditions",physicalRequirements:d.physical_requirements?.trim()||"Route suitability depends on pace, footing, and the exact sequence combined with your package.",culturalContext:d.cultural_context?.trim()||"This destination should be understood in the wider East Java route context, not as an isolated postcard stop.",safetyNotes:o.length>0?o:n?.safetySummary?[n.safetySummary]:[],safetySummary:o[0]||n?.safetySummary||"Operational safety rules apply on all active route zones.",keyHighlights:p.length>0?p:n?.keyHighlights||[m.highlight],requiredGear:q.length>0?q:["Closed shoes","Light layer","Personal medication"],images:r.length>0?r:[m.image,...s].filter((a,b,c)=>!!a&&c.indexOf(a)===b),relatedTours:g.rows.map(a=>{var b;return{id:String(a.id),name:a.name,href:`/${a.slug.replace(/^\/+/,"")}`,duration:`${a.day??0}D / ${a.night??0}N`,price:(b=a.min_price,"number"==typeof b&&b>0?`From IDR ${b.toLocaleString("id-ID")}`:"Price on request")}})}}let n=async()=>{try{let a=await j();if(a&&a.length>0)return a.map(i)}catch(b){let a=b instanceof Error?b.message:String(b);(0,f.isConnectivityError)(b)&&(0,f.markDbUnavailable)(b),console.warn(`[destinations-data] falling back to bundled destinations: ${a}`)}return m.map(({description:a,terrain:b,temperatureRange:c,physicalRequirements:d,culturalContext:e,safetyNotes:f,safetySummary:g,keyHighlights:h,requiredGear:i,images:j,relatedTours:k,...l})=>l)},o=async a=>{try{let b=await k(a);if(b)return b}catch(c){let b=c instanceof Error?c.message:String(c);(0,f.isConnectivityError)(c)&&(0,f.markDbUnavailable)(c),console.warn(`[destinations-data] falling back to bundled destination for ${a}: ${b}`)}return m.find(b=>b.slug===a)||null},p=(0,d.cache)(n),q=(0,d.cache)(o);a.s(["getDestinationBySlug",0,q,"getDestinations",0,p]),c()}catch(a){c(a)}},!1),14488,a=>a.a(async(b,c)=>{try{var d=a.i(717),e=a.i(9367),f=a.i(93385),g=b([f]);[f]=g.then?(await g)():g;let q={surabaya:4,bali:3};function h(a){return a.includes("/from-bali/")?"bali":"surabaya"}function i(a){return"surabaya"===a?"From Surabaya":"From Bali"}function j(a){let b=a.split("/").pop()?.replace(/-\d+d\d+n$/i,"").replace(/taman-safari-prigen/gi,"taman_safari_prigen").replace(/tumpak-sewu/gi,"tumpak_sewu").split("-").filter(Boolean).map(a=>{let b=a.replace(/_/g," ");return({ijen:"Ijen",bromo:"Bromo",madakaripura:"Madakaripura",malang:"Malang",papuma:"Papuma","tumpak sewu":"Tumpak Sewu","taman safari prigen":"Taman Safari Prigen"})[b]||b.replace(/\b\w/g,a=>a.toUpperCase())});return b&&b.length>0?b.join(" -> "):"Private East Java Route"}function k(a){return Array.isArray(a)?a.map(a=>a?.trim()).filter(a=>!!a):[]}function l(a){let b,c=h(a.route);return{id:a.route,name:a.name,slug:a.route.split("/").pop()||a.route,origin:c,originLabel:i(c),href:a.route,routeLabel:a.overview?.route_meta||j(a.route),duration:(b=a.route.match(/(\d+)d(\d+)n/i))?`${b[1]}D / ${b[2]}N`:"Custom route",price:a.price,image:a.image,summary:a.overview?.highlights?.[0]||a.overview?.route_meta||"Private East Java route with controlled handling and clear operational framing.",description:a.overview?.route_meta?`${a.name} follows ${a.overview.route_meta} with private route handling and clear operational framing.`:`${a.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,highlights:a.overview?.highlights||[],crewName:a.crewName,operationalNote:a.overview?.highlights?.[0]||"Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts.",routeHandling:a.overview?.route_meta||"The route is handled privately so timing and safety decisions stay consistent for one group.",healthAccess:a.requirements?.[0]||"Readiness depends on pace, sleep, and honest mobility expectations before the route starts.",environmentalConditions:a.technical_dossier?.risk_level||"Mountain weather and local controls can change the exact route sequence and viewing conditions.",planningNotes:a.itinerary?.map(a=>a.title).slice(0,4)||["Pickup timing and route sequencing should be treated as part of the product."],healthRequirements:a.requirements||["Check pace, sleep, and mobility honestly before confirming the route."],environmentalRisks:a.technical_dossier?.risk_level?[a.technical_dossier.risk_level]:["Mountain weather and local controls can change access timing and viewing conditions."],routeHandlingNotes:a.technical_dossier?.equipment_check?.slice(0,4)||["Private route handling keeps timing and safety decisions consistent for one group."],inclusions:a.includes||[],exclusions:a.excludes||[],itinerary:a.itinerary?.map(a=>({day:a.day,title:a.title,summary:Array.isArray(a.activities)?a.activities.join(" | "):a.title}))||[],technicalDossier:a.technical_dossier}}let r={surabaya:e.SSOT.tours.filter(a=>"surabaya"===h(a.route)).map(l),bali:e.SSOT.tours.filter(a=>"bali"===h(a.route)).map(l)};function m(a,b){var c;let d=k(b.highlights_bullets),g=e.SSOT.tours.find(a=>a.route===`/${b.slug.replace(/^\/+/,"")}`);return{id:String(b.id),name:b.name,slug:b.slug.split("/").pop()||b.slug,origin:a,href:`/${b.slug.replace(/^\/+/,"")}`,duration:`${b.day??0}D / ${b.night??0}N`,price:(c=b.min_price,"number"==typeof c&&c>0?`From IDR ${c.toLocaleString("id-ID")}`:"Price on request"),image:(0,f.absoluteAsset)(b.image_url)||g?.image||r[a][0]?.image||"",summary:b.description?.split(".").at(0)?.trim()||d[0]||"Private East Java route with controlled handling and clear operational framing.",highlights:d.slice(0,3),crewName:g?.crewName}}async function n(a){let b=(0,f.getPool)();return b?(await b.query(`
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
      `,[e.id])]),n=m(a,e),o=r[a].find(a=>a.slug===b),p=k(e.health_requirements),q=k(e.environmental_risks),s=k(e.safety_mitigation),t=k(e.handover_notes),u=[e.operational_complexity_note?.trim(),...t].filter(a=>!!(a&&a.length>0)),v=[...s,...t].filter((a,b,c)=>!!(a&&c.indexOf(a)===b));return{...n,originLabel:i(a),routeLabel:j(e.slug),description:e.description?.trim()||o?.description||`${e.name} is a private East Java route operated with controlled pacing and clear pre-payment expectations.`,operationalNote:e.operational_complexity_note?.trim()||t[0]||o?.operationalNote||"This route works best when pickup timing, rest windows, and onward transfers are treated as part of the product.",routeHandling:t[0]||s[0]||o?.routeHandling||"The route is handled privately so timing and safety decisions stay consistent for one group.",healthAccess:p[0]||o?.healthAccess||"Readiness depends on pace, sleep, and honest mobility expectations before the route starts.",environmentalConditions:q[0]||o?.environmentalConditions||"Mountain weather and ranger controls can change the exact route sequence and viewing conditions.",planningNotes:u.length>0?u.slice(0,4):o?.planningNotes?.slice(0,4)||["Pickup timing, rest windows, and onward transfers should be treated as part of the route, not as afterthoughts."],healthRequirements:p.length>0?p.slice(0,4):o?.healthRequirements?.slice(0,4)||["Check pace, sleep, and mobility honestly before confirming the route."],environmentalRisks:q.length>0?q.slice(0,4):o?.environmentalRisks?.slice(0,4)||["Mountain weather and local controls can change access timing and viewing conditions."],routeHandlingNotes:v.length>0?v.slice(0,4):o?.routeHandlingNotes?.slice(0,4)||["Private route handling keeps timing and safety decisions consistent for one group."],inclusions:g.rows.map(a=>a.item).slice(0,8),exclusions:h.rows.map(a=>a.item).slice(0,6),itinerary:l.rows.map(a=>({day:a.day_no,title:a.title,summary:a.activity?.trim()||a.title})),technicalDossier:o?.technicalDossier}}function p(a){return a?r[a].map(({description:a,operationalNote:b,routeHandling:c,healthAccess:d,environmentalConditions:e,inclusions:f,exclusions:g,itinerary:h,planningNotes:i,healthRequirements:j,environmentalRisks:k,routeHandlingNotes:l,originLabel:m,routeLabel:n,technicalDossier:o,...p})=>p):[...r.surabaya,...r.bali].map(({description:a,operationalNote:b,routeHandling:c,healthAccess:d,environmentalConditions:e,inclusions:f,exclusions:g,itinerary:h,planningNotes:i,healthRequirements:j,environmentalRisks:k,routeHandlingNotes:l,originLabel:m,routeLabel:n,technicalDossier:o,...p})=>p)}let s=async a=>{try{if(!a){let[a,b]=await Promise.all([n("surabaya"),n("bali")]);if(a&&b)return[...a,...b];return p()}let b=await n(a);return b&&b.length>0?b:p(a)}catch(c){let b=c instanceof Error?c.message:String(c);return(0,f.isConnectivityError)(c)&&(0,f.markDbUnavailable)(c),console.warn(`[tours-data] falling back to bundled tours: ${b}`),p(a)}},t=async(a,b)=>{try{let c=await o(a,b);if(c)return c}catch(d){let c=d instanceof Error?d.message:String(d);(0,f.isConnectivityError)(d)&&(0,f.markDbUnavailable)(d),console.warn(`[tours-data] falling back to bundled detail for ${a}/${b}: ${c}`)}return r[a].find(a=>a.slug===b)||null},u=(0,d.cache)(s),v=(0,d.cache)(t);a.s(["getOriginFromDepartureSegment",0,function(a){return"from-surabaya"===a||"surabaya"===a?"surabaya":"from-bali"===a||"bali"===a?"bali":null},"getTourBySlug",0,v,"getTours",0,u]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__0wap8ix._.js.map