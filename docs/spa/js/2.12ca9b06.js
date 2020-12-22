(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"330a":function(e,a,t){},"8b24":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("q-page",[r("div",{staticClass:"q-pa-md q-gutter-sm"},[r("h4",[e._v(e._s(e.featureModel.name||"Not Found"))]),e.featureModel?r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h6",{staticClass:"q-mt-none q-mb-sm"},[e._v("Feature Tree")]),r("q-tree",{staticClass:"feature-tree",attrs:{nodes:e.featureTree,"node-key":"name","label-key":"name",expanded:e.expandedNodes},on:{"update:expanded":function(a){e.expandedNodes=a}}})],1),r("div",{staticClass:"col-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h6",{staticClass:"q-mt-none q-mb-sm"},[e._v("Subtitle")]),r("q-list",{attrs:{bordered:"",separator:""}},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{rounded:""}},[r("img",{attrs:{src:t("00ef")}})])],1),r("q-item-section",[e._v("Mandatory Feature")])],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{rounded:""}},[r("img",{attrs:{src:t("c131")}})])],1),r("q-item-section",[e._v("Optional Feature")])],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{rounded:""}},[r("img",{attrs:{src:t("7d49")}})])],1),r("q-item-section",[e._v("OR Group")])],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{rounded:""}},[r("img",{attrs:{src:t("e73d")}})])],1),r("q-item-section",[e._v("XOR Group")])],1)],1)],1),r("div",{staticClass:"col-12 q-mt-lg"},[r("h6",{staticClass:"q-mt-none q-mb-sm"},[e._v("Measures")]),r("q-table",{attrs:{data:e.featureModelMeasures,columns:[{field:"measureName",label:"Measure Name"},{field:"measureValue",label:"Value"}],pagination:{rowsPerPage:15},"row-key":"measureName","hide-bottom":""}})],1)])])]):e._e()])])},s=[],u=(t("ddb0"),t("ded3")),i=t.n(u),m=t("2f62"),o={name:"PageIndex",data(){return{expandedNodes:[]}},computed:i()(i()(i()({},Object(m["c"])("featureModel",["featureModel","featureTree"])),Object(m["c"])("measure",["measure","measures"])),{},{featureModelId(){return parseInt(this.$route.params.id||0,10)},featureModelMeasures(){return[{measureName:"Number-of-Features",measureValue:this.measure["Number-of-Features"]},{measureName:"Number-of-Mandatory-Features",measureValue:this.measure["Number-of-Mandatory-Features"]},{measureName:"Number-of-Top-Features",measureValue:this.measure["Number-of-Top-Features"]},{measureName:"Number-of-Leaf-Features",measureValue:this.measure["Number-of-Features"]},{measureName:"Depth-of-Tree-Max",measureValue:this.measure["Depth-of-Tree-Max"]},{measureName:"Cognitive-Complexity-of-Feature-Model",measureValue:this.measure["Cognitive-Complexity-of-Feature-Model"]},{measureName:"Feature-Extensibility",measureValue:this.measure["Feature-Extensibility"]},{measureName:"Flexibility-of-Configuration",measureValue:this.measure["Flexibility-of-Configuration"]},{measureName:"Single-Cylic-Dependent-Features",measureValue:this.measure["Single-Cylic-Dependent-Features"]},{measureName:"Multiple-Cyclic-Dependent-Features",measureValue:this.measure["Multiple-Cyclic-Dependent-Features"]},{measureName:"Number-of-Features-Referenced-in-Constraints-Mean",measureValue:this.measure["Number-of-Features-Referenced-in-Constraints-Mean"]},{measureName:"Ratio-of-Variability",measureValue:this.measure["Ratio-of-Variability"]},{measureName:"Number-of-Valid-Configurations",measureValue:this.measure["Number-of-Valid-Configurations"]},{measureName:"Number-of-Groups-OR",measureValue:this.measure["Number-of-Groups-OR"]},{measureName:"Number-of-Groups-XOR",measureValue:this.measure["Number-of-Groups-XOR"]}]}}),watch:{featureModelId(){this.loadFeatureModel()}},created(){this.fetchFeatureModels(),this.fetchMeasures(),this.loadFeatureModel()},methods:i()(i()(i()({},Object(m["b"])("featureModel",["fetchFeatureModels","fetchFeatureModelById"])),Object(m["b"])("measure",["fetchMeasures","fetchMeasureById"])),{},{loadFeatureModel(){this.fetchFeatureModelById(this.featureModelId),this.fetchMeasureById(this.featureModelId),this.expandedNodes=this.getTreeNodeLabels(this.featureTree)},getTreeNodeLabels(e){let a=[];for(let t=0;t<e.length;t+=1){const r=e[t];a.push(r.name),a=[...a,...this.getTreeNodeLabels(r.children)]}return a}})},l=o,d=(t("a3f8"),t("2877")),n=t("9989"),c=t("7f41"),f=t("1c1c"),p=t("66e5"),h=t("4074"),b=t("cb32"),N=t("eaac"),v=t("714f"),M=t("eebe"),F=t.n(M),q=Object(d["a"])(l,r,s,!1,null,"4caa7d0d",null);a["default"]=q.exports;F()(q,"components",{QPage:n["a"],QTree:c["a"],QList:f["a"],QItem:p["a"],QItemSection:h["a"],QAvatar:b["a"],QTable:N["a"]}),F()(q,"directives",{Ripple:v["a"]})},a3f8:function(e,a,t){"use strict";t("330a")}}]);