import { c as Le, r as n, R as C, s as d, t as o, u as ee, j as e, G as l, a as De, l as Me } from "./index-5d5ec1ef.js"; import { D as ze, g as Fe, u as Be, a as Ne, b as Re, S as M, c as Ve, d as We, e as Ge, M as c, P as qe, f as He } from "./index-71de8bdf.js"; import { F as p } from "./Flex-c84a7c1e.js"; import { I as Q } from "./Input-01935b11.js"; import { u as Ye } from "./use-uncontrolled-72af9c2e.js"; import { V as Ke } from "./index-23722f67.js"; import "./get-styles-ref-1f22bf7e.js"; function Ue({ data: t, limit: r, value: a, filter: s }) { const u = []; for (let h = 0; h < t.length && (s(a, t[h]) && u.push(t[h]), !(u.length >= r)); h += 1); return u } var Qe = Le(() => ({ wrapper: { position: "relative" } })); const Te = Qe; var Xe = Object.defineProperty, Je = Object.defineProperties, Ze = Object.getOwnPropertyDescriptors, S = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, oe = Object.prototype.propertyIsEnumerable, T = (t, r, a) => r in t ? Xe(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, z = (t, r) => { for (var a in r || (r = {})) te.call(r, a) && T(t, a, r[a]); if (S) for (var a of S(r)) oe.call(r, a) && T(t, a, r[a]); return t }, X = (t, r) => Je(t, Ze(r)), _e = (t, r) => { var a = {}; for (var s in t) te.call(t, s) && r.indexOf(s) < 0 && (a[s] = t[s]); if (t != null && S) for (var s of S(t)) r.indexOf(s) < 0 && oe.call(t, s) && (a[s] = t[s]); return a }; function $e(t, r) { return r.value.toLowerCase().trim().includes(t.toLowerCase().trim()) } const et = { required: !1, size: "sm", shadow: "sm", limit: 5, itemComponent: ze, transitionProps: { transition: "fade", duration: 0 }, initiallyOpened: !1, filter: $e, switchDirectionOnFlip: !1, zIndex: Fe("popover"), dropdownPosition: "flip", maxDropdownHeight: "auto", positionDependencies: [] }, ne = n.forwardRef((t, r) => { const a = Be("Autocomplete", et, t), { inputProps: s, wrapperProps: u, shadow: h, data: m, limit: g, value: L, defaultValue: re, onChange: se, unstyled: F, itemComponent: ie, onItemSubmit: E, onKeyDown: B, onFocus: N, onBlur: R, onClick: V, transitionProps: ae, initiallyOpened: le, classNames: A, styles: y, filter: ce, nothingFound: W, onDropdownClose: de, onDropdownOpen: pe, withinPortal: ue, switchDirectionOnFlip: he, zIndex: xe, dropdownPosition: me, maxDropdownHeight: ge, dropdownComponent: fe, positionDependencies: we, readOnly: G, hoverOnSearchChange: q } = a, je = _e(a, ["inputProps", "wrapperProps", "shadow", "data", "limit", "value", "defaultValue", "onChange", "unstyled", "itemComponent", "onItemSubmit", "onKeyDown", "onFocus", "onBlur", "onClick", "transitionProps", "initiallyOpened", "classNames", "styles", "filter", "nothingFound", "onDropdownClose", "onDropdownOpen", "withinPortal", "switchDirectionOnFlip", "zIndex", "dropdownPosition", "maxDropdownHeight", "dropdownComponent", "positionDependencies", "readOnly", "hoverOnSearchChange"]), { classes: Ce } = Te(null, { classNames: A, styles: y, name: "Autocomplete", unstyled: F }), [O, ke] = n.useState(le), [k, v] = n.useState(-1), [H, ve] = n.useState("column"), Ae = n.useRef(null), [ye, Y] = n.useState(!1), [I, D] = Ye({ value: L, defaultValue: re, finalValue: "", onChange: se }), f = i => { ke(i); const b = i ? pe : de; typeof b == "function" && b() }; Ne(() => { v(q && I ? 0 : -1) }, [I, q]); const be = i => { D(i.value), typeof E == "function" && E(i), f(!1) }, Ee = m.map(i => typeof i == "string" ? { value: i } : i), w = Re({ data: Ue({ data: Ee, value: I, limit: g, filter: ce }) }), Oe = i => { if (ye) return; typeof B == "function" && B(i); const b = H === "column", K = () => { v(j => j < w.length - 1 ? j + 1 : j) }, U = () => { v(j => j > 0 ? j - 1 : j) }; switch (i.key) { case "ArrowUp": { i.preventDefault(), b ? U() : K(); break } case "ArrowDown": { i.preventDefault(), b ? K() : U(); break } case "Enter": { w[k] && O && (i.preventDefault(), D(w[k].value), typeof E == "function" && E(w[k]), f(!1)); break } case "Escape": O && (i.preventDefault(), f(!1)) } }, Ie = i => { typeof N == "function" && N(i), f(!0) }, Pe = i => { typeof R == "function" && R(i), f(!1) }, Se = i => { typeof V == "function" && V(i), f(!0) }, P = O && (w.length > 0 || w.length === 0 && !!W); return C.createElement(Q.Wrapper, X(z({}, u), { __staticSelector: "Autocomplete" }), C.createElement(M, { opened: P, transitionProps: ae, shadow: "sm", withinPortal: ue, __staticSelector: "Autocomplete", onDirectionChange: ve, switchDirectionOnFlip: he, zIndex: xe, dropdownPosition: me, positionDependencies: we, classNames: A, styles: y, unstyled: F, readOnly: G, variant: s.variant }, C.createElement(M.Target, null, C.createElement("div", { className: Ce.wrapper, "aria-controls": s.id, onMouseLeave: () => v(-1), tabIndex: -1 }, C.createElement(Q, X(z(z({ type: "search", autoComplete: "off" }, s), je), { readOnly: G, "data-mantine-stop-propagation": O, ref: Ve(r, Ae), onKeyDown: Oe, classNames: A, styles: y, __staticSelector: "Autocomplete", value: I, onChange: i => { D(i.currentTarget.value), f(!0) }, onFocus: Ie, onBlur: Pe, onClick: Se, onCompositionStart: () => Y(!0), onCompositionEnd: () => Y(!1), role: "combobox", "aria-haspopup": "listbox", "aria-owns": P ? `${s.id}-items` : null, "aria-expanded": P, "aria-autocomplete": "list", "aria-controls": P ? `${s.id}-items` : null, "aria-activedescendant": k >= 0 ? `${s.id}-${k}` : null })))), C.createElement(M.Dropdown, { component: fe || We, maxHeight: ge, direction: H, id: s.id, __staticSelector: "Autocomplete", classNames: A, styles: y }, C.createElement(Ge, { data: w, hovered: k, classNames: A, styles: y, uuid: s.id, __staticSelector: "Autocomplete", onItemHover: v, onItemSelect: be, itemComponent: ie, size: s.size, nothingFound: W, variant: s.variant })))) }); ne.displayName = "@mantine/core/Autocomplete"; const tt = "/assets/iol-49aae1c6.png", J = t => n.createElement("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M14.0092 6.4668L9.66255 10.8135C9.14922 11.3268 8.30922 11.3268 7.79589 10.8135L3.44922 6.4668", stroke: "#292D32", strokeWidth: 1.5, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" })), Z = t => n.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M18.3334 9.99935C18.3334 14.5993 14.6001 18.3327 10.0001 18.3327C5.40008 18.3327 1.66675 14.5993 1.66675 9.99935C1.66675 5.39935 5.40008 1.66602 10.0001 1.66602C14.6001 1.66602 18.3334 5.39935 18.3334 9.99935Z", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M13.0917 12.6495L10.5083 11.1078C10.0583 10.8411 9.69165 10.1995 9.69165 9.67448V6.25781", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), _ = t => n.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M10.0001 18.3327C14.6025 18.3327 18.3334 14.6017 18.3334 9.99935C18.3334 5.39698 14.6025 1.66602 10.0001 1.66602C5.39771 1.66602 1.66675 5.39698 1.66675 9.99935C1.66675 14.6017 5.39771 18.3327 10.0001 18.3327Z", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M10 12.916V7.91602", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M7.5 9.58398L10 7.08398L12.5 9.58398", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), $ = t => n.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M10.0001 18.3327C14.6025 18.3327 18.3334 14.6017 18.3334 9.99935C18.3334 5.39698 14.6025 1.66602 10.0001 1.66602C5.39771 1.66602 1.66675 5.39698 1.66675 9.99935C1.66675 14.6017 5.39771 18.3327 10.0001 18.3327Z", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M10 7.08398V12.084", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M7.5 10.416L10 12.916L12.5 10.416", stroke: "#5F5E5E", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), ot = d.div`
	.courses_info {
		font-family: ${o.fonts.Bold};
		h3 {
			font-weight: 700;
			color: ${o.colours.EerieBlack};
		}
		span.count {
			width: 41px;
			height: 35px;
			border: 1px solid ${o.colours.BrightGray};
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${o.colours.Lotion};
			font-family: ${o.fonts.Medium};
			font-weight: 500;
		}
	}
	.filter_container {
		font-family: ${o.fonts.Medium};
		p {
			font-weight: 500;
			font-size: 14px;
		}
	}
	div[aria-haspopup='menu'] {
		height: 37px;
		padding: 12px 10px;
		margin:10px;
		cursor: pointer;
		background-color: ${o.colours.Sunglow};
		color: ${o.colours.EerieBlack};
		font-weight: 400;
		font-size: 14px;
		border-radius: 16px;
		box-shadow: 0px 4px 0px 0px ${o.colours.Marigold};
		-webkit-box-shadow: 0px 4px 0px 0px ${o.colours.Marigold};
		-moz-box-shadow: 0px 4px 0px 0px ${o.colours.Marigold};
		h4 {
			line-height: 43px;
			margin-bottom: 4px;
		}
	}
	.mantine-Menu-dropdown {
		font-family: ${o.fonts.Regular};
		font-weight: 400;
		border-radius: 17px;
		padding: 0;
		.mantine-Text-root {
			background-color: ${o.colours.BrightGray};
			color: ${o.colours["Grey-body"]};
			padding: 12px 24px;
			border-top-right-radius: 16px;
			border-top-left-radius: 16px;
			font-weight: 400;
			font-size: 12px;
		}
		button {
			padding: 12px 24px;
			font-size: 14px;
			font-weight: 500;
			color: ${o.colours["Grey-body"]};
		}
	}
`; function nt() { const { formatMessage: t } = ee(), [r, a] = n.useState("A-Z"), [s, u] = n.useState("in progress "), h = g => { a(g) }, m = g => { u(g) }; return e.jsx(ot, { children: e.jsxs(l, { children: [e.jsx(l.Col, { xs: 6, children: e.jsxs(p, { align: "center", gap: 16, className: "courses_info", children: [e.jsx("h3", { children: t({ id: "Classes" }) }), e.jsx("span", { className: "count", children: "6" })] }) }), e.jsx(l.Col, { xs: 6, children: e.jsxs(p, { className: "filter_container", align: "center", justify: "flex-end", gap: 32, children: [e.jsxs(p, { align: "center", gap: 8, children: [e.jsx("p", { children: t({ id: "SortBy" }) }), e.jsxs(c, { shadow: "md", children: [e.jsx(c.Target, { children: e.jsxs(p, { gap: 7, align: "center", children: [e.jsx("h4", { children: r }), e.jsx(J, {})] }) }), e.jsxs(c.Dropdown, { children: [e.jsx(c.Label, { children: t({ id: "SortBy" }) }), e.jsx(c.Item, { icon: e.jsx(Z, {}), onClick: () => h(t({ id: "Recent" })), children: t({ id: "Recent" }) }), e.jsx(c.Item, { icon: e.jsx(_, {}), onClick: () => h(t({ id: "AlphabeticalAsc" })), children: t({ id: "AlphabeticalAsc" }) }), e.jsx(c.Item, { icon: e.jsx($, {}), onClick: () => h(t({ id: "AlphabeticalDesc" })), children: t({ id: "AlphabeticalDesc" }) })] })] })] }), e.jsxs(p, { align: "center", gap: 8, children: [e.jsx("p", { children: t({ id: "Status" }) }), e.jsxs(c, { shadow: "md", children: [e.jsx(c.Target, { children: e.jsxs(p, { gap: 7, align: "center", children: [e.jsx("h4", { children: s }), e.jsx(J, {})] }) }), e.jsxs(c.Dropdown, { children: [e.jsx(c.Label, { children: t({ id: "Status" }) }), e.jsx(c.Item, { icon: e.jsx(Z, {}), onClick: () => m(t({ id: "New" })), children: t({ id: "New" }) }), e.jsx(c.Item, { icon: e.jsx(_, {}), onClick: () => m(t({ id: "InProgress" })), children: t({ id: "InProgress" }) }), e.jsx(c.Item, { icon: e.jsx($, {}), onClick: () => m(t({ id: "Completed" })), children: t({ id: "Completed" }) })] })] })] })] }) })] }) }) } const rt = "/assets/Book-9bf290a6.png", st = d.div`
	// border: 1px solid green;
`; d.div`
	// border: 1px solid red;
	border-radius: 36px;
`; d.span`
	display: flex;
	padding: 8px 16px;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	background: white;
	border-radius: 40px;
	border: 1px solid #eee;
`; const it = d.div`
	border-radius: 36px;
	border: 2px solid ${o.colours.Platinum};
	box-shadow: 0px 6px 0px 0px ${o.colours.Platinum};
	padding: 24px;
`, at = d.div`
	padding: 24px;
`, lt = d.div`
	width: 100%;
`, ct = d.h4`
	font-family: ${o.fonts.Medium};
	font-size: 18px;
	line-height: normal;
`, dt = d.p`
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: ${o.colours.black};
	opacity: 0.5;
	font-family: ${o.fonts.Regular};
	`; d.div`
	width: 100%;
	`; const pt = d.span`
	font-family: ${o.fonts.Regular};
	color: ${o.colours.black};
	opacity: 0.5;
	font-size: 14px;
	font-weight: 400;
`; function x() { return e.jsx(it, { children: e.jsxs(p, { justify: "center", align: "center", gap: "xl", direction: "column", children: [e.jsx(at, { children: e.jsx("img", { src: rt, alt: "Book" }) }), e.jsx(lt, { children: e.jsxs(p, { justify: "center", align: "start", gap: 8, direction: "column", children: [e.jsx(ct, { className: "title", children: "Reading" }), e.jsx(dt, { children: "3 units - 10 lessons" }), e.jsxs(l, { align: "center", style: { width: "100%" }, children: [e.jsx(l.Col, { span: 10, children: e.jsx(qe, { color: o.colours.Warning, h: 4, value: 50 }) }), e.jsx(l.Col, { span: 2, children: e.jsx(pt, { children: "50%" }) })] })] }) })] }) }) } const ut = "data:image/png;base64,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", ht = t => n.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M10.0167 2.42578C7.25841 2.42578 5.01674 4.66745 5.01674 7.42578V9.83411C5.01674 10.3424 4.80007 11.1174 4.54174 11.5508L3.58341 13.1424C2.99174 14.1258 3.40007 15.2174 4.48341 15.5841C8.07507 16.7841 11.9501 16.7841 15.5417 15.5841C16.5501 15.2508 16.9917 14.0591 16.4417 13.1424L15.4834 11.5508C15.2334 11.1174 15.0167 10.3424 15.0167 9.83411V7.42578C15.0167 4.67578 12.7667 2.42578 10.0167 2.42578Z", stroke: "#1F1E1E", strokeWidth: 1.5, strokeMiterlimit: 10, strokeLinecap: "round" }), n.createElement("path", { d: "M11.5584 2.66719C11.3001 2.59219 11.0334 2.53385 10.7584 2.50052C9.95843 2.40052 9.19176 2.45885 8.4751 2.66719C8.71676 2.05052 9.31676 1.61719 10.0168 1.61719C10.7168 1.61719 11.3168 2.05052 11.5584 2.66719Z", stroke: "#1F1E1E", strokeWidth: 1.5, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M12.5166 15.8828C12.5166 17.2578 11.3916 18.3828 10.0166 18.3828C9.33327 18.3828 8.69993 18.0995 8.24993 17.6495C7.79993 17.1995 7.5166 16.5661 7.5166 15.8828", stroke: "#1F1E1E", strokeWidth: 1.5, strokeMiterlimit: 10 })), xt = d.div`
	flex: 1;
	.search_wrapper {
		padding: 10px 16px;
		border-radius: 16px;
		background-color: ${o.colours.white};
		input {
			font-family: ${o.fonts.Medium};
			border: none;
			color: ${o.colours.CharlestonGreen};
			::placeholder {
				color: ${o.colours.SpanishGray};
			}
		}
		svg {
			path {
				stroke: ${o.colours.CharlestonGreen};
			}
			&.active {
				cursor: pointer;
				pointer-events: auto;
				path {
					stroke: ${o.colours.LightSeaGreen};
				}
			}
		}
	}
`, mt = t => n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, n.createElement("path", { d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z", stroke: "#292D32", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), n.createElement("path", { d: "M22 22L20 20", stroke: "#292D32", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })); function gt({ placeholder: t, className: r, data: a }) { const { formatMessage: s } = ee(), [u, h] = n.useState(""), m = L => { h(L) }, g = () => { console.log("Search:", u) }; return e.jsx(xt, { children: e.jsx("div", { className: `search_wrapper ${r || ""}`, children: e.jsx(ne, { data: a, rightSection: e.jsx(mt, { onClick: g, className: `${u ? "active" : ""}` }), value: u, onChange: m, placeholder: s({ id: t }) }) }) }) } const ft = d.section`
	position: relative;
	background-color: ${o.colours.PaoloVeroneseGreen};
	padding: 32px 0;
	.wellcome_wrapper {
		color: ${o.colours.white};
		h1 {
			font-size: 32px;
			font-family: ${o.fonts.Bold};
		}
		p {
			font-size: 14px;
			font-family: ${o.fonts.Medium};
		}
	}
	.search_wrapper {
		border: 2px solid ${o.colours.Platinum};
	}
	.notification {
		background-color: ${o.colours.white};
		width: 40px;
		height: 40px;
		border-radius: 16px;
		border: 2px solid ${o.colours.Platinum};
	}
`; function wt() { return e.jsxs(ft, { children: [e.jsxs(l, { mr: 0, align: "center", justify: "space-between", children: [e.jsx(l.Col, { xs: 12, md: 6, children: e.jsxs(p, { direction: "column", align: "flex-start", gap: 8, className: "wellcome_wrapper", children: [e.jsxs(p, { gap: 16, align: "center", children: [e.jsx("h1", { children: "Hi, Ahmed" }), e.jsx("img", { src: ut })] }), e.jsx("p", { children: "Let’s Learn something new today!" })] }) }), e.jsx(l.Col, { xs: 12, md: 6, children: e.jsxs(p, { gap: 32, align: "center", children: [e.jsx(gt, { className: "platinum_shadow", placeholder: "search", data: ["test"] }), e.jsx(p, { align: "center", justify: "center", className: "notification platinum_shadow", children: e.jsx(ht, {}) })] }) })] }), e.jsx(Ke, {})] }) } function Et() { const t = De(Me); return e.jsxs(e.Fragment, { children: [e.jsx(wt, {}), e.jsx(He, { header: e.jsx(nt, {}), children: e.jsx(st, { children: e.jsxs(l, { gutter: 32, children: [e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) }), e.jsx(l.Col, { sm: 6, md: 4, lg: 3, children: e.jsx(x, {}) })] }) }) }), e.jsx("div", { style: { position: "relative" }, children: e.jsx("img", { className: "", src: tt, alt: "logo", width: 150, style: { position: "fixed", bottom: "0px", zIndex: 200, [t === "en" ? "right" : "left"]: "75px" } }) })] }) } export { Et as default };
