(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{473:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),l=(a(0),a(807)),b={id:"sqliteplatform",title:"Class: SqlitePlatform",sidebar_label:"SqlitePlatform"},c={unversionedId:"api/classes/sqliteplatform",id:"api/classes/sqliteplatform",isDocsHomePage:!1,title:"Class: SqlitePlatform",description:"Hierarchy",source:"@site/docs/api/classes/sqliteplatform.md",slug:"/api/classes/sqliteplatform",permalink:"/docs/next/api/classes/sqliteplatform",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/sqliteplatform.md",version:"current",sidebar_label:"SqlitePlatform",sidebar:"API",previous:{title:"Class: SqliteExceptionConverter",permalink:"/docs/next/api/classes/sqliteexceptionconverter"},next:{title:"Class: SqliteSchemaHelper",permalink:"/docs/next/api/classes/sqliteschemahelper"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"exceptionConverter",id:"exceptionconverter",children:[]},{value:"schemaHelper",id:"schemahelper",children:[]}]},{value:"Methods",id:"methods",children:[{value:"convertsJsonAutomatically",id:"convertsjsonautomatically",children:[]},{value:"getCurrentTimestampSQL",id:"getcurrenttimestampsql",children:[]},{value:"processDateProperty",id:"processdateproperty",children:[]},{value:"quoteValue",id:"quotevalue",children:[]},{value:"quoteVersionValue",id:"quoteversionvalue",children:[]},{value:"requiresNullableForAlteringColumn",id:"requiresnullableforalteringcolumn",children:[]},{value:"requiresValuesKeyword",id:"requiresvalueskeyword",children:[]},{value:"usesDefaultKeyword",id:"usesdefaultkeyword",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"any"),Object(l.b)("p",{parentName:"li"},"\u21b3 ",Object(l.b)("strong",{parentName:"p"},"SqlitePlatform")))),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"exceptionconverter"},"exceptionConverter"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(l.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(l.b)("strong",{parentName:"p"},"exceptionConverter"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sqliteexceptionconverter"}),"SqliteExceptionConverter")," = new SqliteExceptionConverter()"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L11"}),"packages/sqlite/src/SqlitePlatform.ts:11"))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"schemahelper"},"schemaHelper"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(l.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(l.b)("strong",{parentName:"p"},"schemaHelper"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sqliteschemahelper"}),"SqliteSchemaHelper")," = new SqliteSchemaHelper()"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L10"}),"packages/sqlite/src/SqlitePlatform.ts:10"))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"convertsjsonautomatically"},"convertsJsonAutomatically"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"convertsJsonAutomatically"),"(): boolean"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L25"}),"packages/sqlite/src/SqlitePlatform.ts:25"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getcurrenttimestampsql"},"getCurrentTimestampSQL"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"getCurrentTimestampSQL"),"(",Object(l.b)("inlineCode",{parentName:"p"},"length"),": number): string"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L21"}),"packages/sqlite/src/SqlitePlatform.ts:21"))),Object(l.b)("h4",{id:"parameters"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"length")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," string"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"processdateproperty"},"processDateProperty"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"processDateProperty"),"(",Object(l.b)("inlineCode",{parentName:"p"},"value"),": unknown): string ","|"," number ","|"," Date"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L35"}),"packages/sqlite/src/SqlitePlatform.ts:35"))),Object(l.b)("p",null,"This is used to narrow the value of Date properties as they will be stored as timestamps in sqlite.\nWe use this method to convert Dates to timestamps when computing the changeset, so we have the right\ndata type in the payload as well as in original entity data. Without that, we would end up with diffs\nincluding all Date properties, as we would be comparing Date object with timestamp."),Object(l.b)("h4",{id:"parameters-1"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"value")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," string ","|"," number ","|"," Date"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"quotevalue"},"quoteValue"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"quoteValue"),"(",Object(l.b)("inlineCode",{parentName:"p"},"value"),": any): string"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L55"}),"packages/sqlite/src/SqlitePlatform.ts:55"))),Object(l.b)("h4",{id:"parameters-2"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"value")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," string"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"quoteversionvalue"},"quoteVersionValue"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"quoteVersionValue"),"(",Object(l.b)("inlineCode",{parentName:"p"},"value"),": Date ","|"," number, ",Object(l.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"): Date ","|"," string ","|"," number"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L43"}),"packages/sqlite/src/SqlitePlatform.ts:43"))),Object(l.b)("h4",{id:"parameters-3"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"value")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date ","|"," number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"prop")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," Date ","|"," string ","|"," number"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"requiresnullableforalteringcolumn"},"requiresNullableForAlteringColumn"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"requiresNullableForAlteringColumn"),"(): boolean"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L13"}),"packages/sqlite/src/SqlitePlatform.ts:13"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"requiresvalueskeyword"},"requiresValuesKeyword"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"requiresValuesKeyword"),"(): boolean"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L51"}),"packages/sqlite/src/SqlitePlatform.ts:51"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"usesdefaultkeyword"},"usesDefaultKeyword"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"usesDefaultKeyword"),"(): boolean"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/471a5f9/packages/sqlite/src/SqlitePlatform.ts#L17"}),"packages/sqlite/src/SqlitePlatform.ts:17"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," boolean"))}p.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,O=s["".concat(b,".").concat(u)]||s[u]||m[u]||l;return a?n.a.createElement(O,c(c({ref:t},o),{},{components:a})):n.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);