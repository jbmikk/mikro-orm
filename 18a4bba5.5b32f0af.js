(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(807)),o={title:"Composite and Foreign Keys as Primary Key",sidebar_label:"Composite Primary Keys"},s={unversionedId:"composite-keys",id:"version-4.1/composite-keys",isDocsHomePage:!1,title:"Composite and Foreign Keys as Primary Key",description:"Support for composite keys was added in version 3.5",source:"@site/versioned_docs/version-4.1/composite-keys.md",slug:"/composite-keys",permalink:"/docs/4.1/composite-keys",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/composite-keys.md",version:"4.1",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1604888989,sidebar_label:"Composite Primary Keys",sidebar:"version-4.1/docs",previous:{title:"Naming Strategy",permalink:"/docs/4.1/naming-strategy"},next:{title:"Custom Types",permalink:"/docs/4.1/custom-types"}},c=[{value:"General Considerations",id:"general-considerations",children:[]},{value:"Primitive Types only",id:"primitive-types-only",children:[]},{value:"Identity through foreign Entities",id:"identity-through-foreign-entities",children:[]},{value:"Use-Case 1: Dynamic Attributes",id:"use-case-1-dynamic-attributes",children:[]},{value:"Use-Case 2: Simple Derived Identity",id:"use-case-2-simple-derived-identity",children:[]},{value:"Use-Case 3: Join-Table with Metadata",id:"use-case-3-join-table-with-metadata",children:[]},{value:"Using QueryBuilder with composite keys",id:"using-querybuilder-with-composite-keys",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Support for composite keys was added in version 3.5")),Object(i.b)("p",null,"MikroORM supports composite primary keys natively. Composite keys are a very powerful\nrelational database concept and we took good care to make sure MikroORM supports as\nmany of the composite primary key use-cases. MikroORM supports composite keys of primitive\ndata-types as well as foreign keys as primary keys. You can also use your composite key\nentities in relationships. "),Object(i.b)("p",null,"This section shows how the semantics of composite primary keys work and how they map\nto the database."),Object(i.b)("h2",{id:"general-considerations"},"General Considerations"),Object(i.b)("p",null,"ID fields have to have their values set before you call ",Object(i.b)("inlineCode",{parentName:"p"},"em.persist(entity)"),"."),Object(i.b)("h2",{id:"primitive-types-only"},"Primitive Types only"),Object(i.b)("p",null,"Suppose you want to create a database of cars and use the model-name and year of\nproduction as primary keys:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Car {\n\n  @PrimaryKey()\n  name: string;\n\n  @PrimaryKey()\n  year: number;\n\n  [PrimaryKeyType]: [string, number]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(name: string, year: number) {\n    this.name = name;\n    this.year = year;\n  }\n\n}\n")),Object(i.b)("p",null,"Now you can use this entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const car = new Car('Audi A8', 2010);\nawait em.persistAndFlush(car);\n")),Object(i.b)("p",null,"And for querying you need to provide all primary keys in the condition or an array of\nprimary keys in the same order as the keys were defined:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const audi1 = await em.findOneOrFail(Car, { name: 'Audi A8', year: 2010 });\nconst audi2 = await em.findOneOrFail(Car, ['Audi A8', 2010]);\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If we want to use the second approach with primary key tuple, we will need to specify\nthe type of entity's primary key via ",Object(i.b)("inlineCode",{parentName:"p"},"PrimaryKeyType")," symbol as shown in the ",Object(i.b)("inlineCode",{parentName:"p"},"Car")," entity.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"PrimaryKeyType")," is not needed when your entity has single scalar primary key under\none of following property names: ",Object(i.b)("inlineCode",{parentName:"p"},"id: number | string | bigint"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_id: any")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"uuid: string"),".")),Object(i.b)("p",null,"You can also use this entity in associations. MikroORM will then generate two foreign\nkeys one for name and to year to the related entities."),Object(i.b)("p",null,"This example shows how you can nicely solve the requirement for existing values before\n",Object(i.b)("inlineCode",{parentName:"p"},"em.persist()"),": By adding them as mandatory values for the constructor."),Object(i.b)("h2",{id:"identity-through-foreign-entities"},"Identity through foreign Entities"),Object(i.b)("p",null,"There are tons of use-cases where the identity of an Entity should be determined by\nthe entity of one or many parent entities."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dynamic Attributes of an Entity (for example ",Object(i.b)("inlineCode",{parentName:"li"},"Article"),"). Each Article has many\nattributes with primary key ",Object(i.b)("inlineCode",{parentName:"li"},"article_id")," and ",Object(i.b)("inlineCode",{parentName:"li"},"attribute_name"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Address")," object of a ",Object(i.b)("inlineCode",{parentName:"li"},"Person"),", the primary key of the address is ",Object(i.b)("inlineCode",{parentName:"li"},"user_id"),". This\nis not a case of a composite primary key, but the identity is derived through a\nforeign entity and a foreign key."),Object(i.b)("li",{parentName:"ul"},"Pivot Tables with metadata can be modelled as Entity, for example connections between\ntwo articles with a little description and a score.")),Object(i.b)("p",null,"The semantics of mapping identity through foreign entities are easy:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only allowed on ",Object(i.b)("inlineCode",{parentName:"li"},"@ManyToOnes")," or ",Object(i.b)("inlineCode",{parentName:"li"},"@OneToOne")," associations."),Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"primary: true")," in the decorator.")),Object(i.b)("h2",{id:"use-case-1-dynamic-attributes"},"Use-Case 1: Dynamic Attributes"),Object(i.b)("p",null,"We keep up the example of an Article with arbitrary attributes, the mapping looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Article {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @OneToMany(() => ArticleAttribute, attr => attr.article, { cascade: Cascade.ALL })\n  attributes = new Collection<ArticleAttribute>(this);\n\n}\n\n@Entity()\nexport class ArticleAttribute {\n\n  @ManyToOne({ primary: true })\n  article: Article;\n\n  @PrimaryKey()\n  attribute: string;\n\n  @Property()\n  value!: string;\n\n  [PrimaryKeyType]: [number, string]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(name: string, value: string, article: Article) {\n    this.attribute = name;\n    this.value = value;\n    this.article = article;\n  }\n\n}\n")),Object(i.b)("h2",{id:"use-case-2-simple-derived-identity"},"Use-Case 2: Simple Derived Identity"),Object(i.b)("p",null,"Sometimes you have the requirement that two objects are related by a ",Object(i.b)("inlineCode",{parentName:"p"},"@OneToOne"),"\nassociation and that the dependent class should re-use the primary key of the class\nit depends on. One good example for this is a user-address relationship:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @OneToOne(() => Address, address => address.user, { cascade: [Cascade.ALL] })\n  address?: Address; // virtual property (inverse side) to allow querying the relation\n\n}\n\n@Entity()\nexport class Address {\n\n  @OneToOne({ primary: true })\n  user!: User;\n\n  [PrimaryKeyType]: number; // this is needed for proper type checks in `FilterQuery`\n\n}\n")),Object(i.b)("h2",{id:"use-case-3-join-table-with-metadata"},"Use-Case 3: Join-Table with Metadata"),Object(i.b)("p",null,"In the classic order product shop example there is the concept of the order item which\ncontains references to order and product and additional data such as the amount of products\npurchased and maybe even the current price."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Order {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  customer: Customer;\n\n  @OneToMany(() => OrderItem, item => item.order)\n  items = new Collection<OrderItem>(this);\n\n  @Property()\n  paid = false;\n\n  @Property()\n  shipped = false;\n\n  @Property()\n  created = new Date();\n\n  constructor(customer: Customer) {\n    this.customer = customer;\n  }\n\n}\n\n@Entity()\nexport class Product {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property()\n  currentPrice!: number;\n\n}\n\n@Entity()\nexport class OrderItem {\n\n  @ManyToOne({ primary: true })\n  order: Order;\n\n  @ManyToOne({ primary: true })\n  product: Product;\n\n  @Property()\n  amount = 1;\n\n  @Property()\n  offeredPrice: number;\n\n  [PrimaryKeyType]: [number, number]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(order: Order, product: Product, amount = 1) {\n    this.order = order;\n    this.product = product;\n    this.offeredPrice = product.currentPrice;\n  }\n\n}\n")),Object(i.b)("h2",{id:"using-querybuilder-with-composite-keys"},"Using QueryBuilder with composite keys"),Object(i.b)("p",null,"Internally composite keys are represented as tuples, containing all the values in the\nsame order as the primary keys were defined. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb1 = em.createQueryBuilder(CarOwner);\nqb1.select('*').where({ car: { name: 'Audi A8', year: 2010 } });\nconsole.log(qb1.getQuery());  // select `e0`.* from `car_owner` as `e0` where `e0`.`name` = ? and `e0`.`year` = ?\n\nconst qb2 = em.createQueryBuilder(CarOwner);\nqb2.select('*').where({ car: ['Audi A8', 2010] });\nconsole.log(qb2.getQuery());  // 'select `e0`.* from `car_owner` as `e0` where (`e0`.`car_name`, `e0`.`car_year`) = (?, ?)'\n\nconst qb3 = em.createQueryBuilder(CarOwner);\nqb3.select('*').where({ car: [['Audi A8', 2010]] });\nconsole.log(qb3.getQuery());  // 'select `e0`.* from `car_owner` as `e0` where (`e0`.`car_name`, `e0`.`car_year`) in ((?, ?))'\n")),Object(i.b)("p",null,"This also applies when you want to get a reference to entity with composite key:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const ref = em.getReference(Car, ['Audi A8', 2010]);\nconsole.log(ref instanceof Car); // true\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/composite-primary-keys.html"}),"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(o,".").concat(y)]||u[y]||d[y]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);