(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,a,s){},29:function(e,a,s){"use strict";s.r(a);var t=s(0),d=s.n(t),n=s(8),r=s.n(n),c=s(4),l=(s(19),s(1));var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("header",{children:[Object(l.jsx)("strong",{children:"\uc560\ud130\ubbf8 \uad50\uc721\uc13c\ud130"}),Object(l.jsx)("span",{children:"KR"})]})})},i=s(5),m=s(6),j=function(e){return Object(l.jsx)("div",{className:"auto-scroll",children:e.children})},g=s(3),u=s.n(g);var p=function(e){var a=e.center,s=e.\uac00\uc838\uc628\ub9f5;return Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"#none",onClick:function(){var e=new kakao.maps.LatLng(a.lat,a.lng);s.setLevel(6),s.panTo(e);var t=u()('<div class="overlay_info" />'),d=u()('<div class="title" />').text(a.centerName),n=u()('<div class="btn-close" title="\ub2eb\uae30" />').text("X").click((function(){o.setMap(null)})),r=u()('<div class="desc" />'),c=u()('<span class="address" />').text(a.address1+a.address2);t.append(d).append(r),r.append(c),d.append(n);var l=t[0],o=new kakao.maps.CustomOverlay({position:e,content:l,xAnchor:.5,yAnchor:1.3});o.setMap(s),kakao.maps.event.addListener(s,"zoom_changed",(function(){s.getLevel()>4?o.setMap(null):o.setMap(s)}))},children:[Object(l.jsx)("strong",{children:a.centerName}),Object(l.jsx)("br",{}),a.address1,a.address2]})})};var N=function(e){var a=e.filteredCenterd,s=e.\uac00\uc838\uc628\ub9f5,t=a.map((function(e,a){return Object(l.jsx)(p,{"\uac00\uc838\uc628\ub9f5":s,center:e},a)}));return Object(l.jsx)("ul",{className:"search-list",children:t})};var b=function(e){var a=e.details,s=e.\uac00\uc838\uc628\ub9f5,d=Object(t.useState)(""),n=Object(c.a)(d,2),r=n[0],o=n[1],i=Object(t.useState)(!1),m=Object(c.a)(i,2),g=m[0],u=m[1],p=a.filter((function(e){return e.centerName.toLowerCase().includes(r.toLowerCase())||e.address1.toLowerCase().includes(r.toLowerCase())||e.address2.toLowerCase().includes(r.toLowerCase())}));return Object(l.jsxs)("section",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"search",placeholder:"\uc13c\ud130\uba85, \uc8fc\uc18c \uac80\uc0c9",onChange:function(e){o(e.target.value),u(!0)}})}),function(){if(g)return Object(l.jsx)(j,{children:Object(l.jsx)(N,{"\uac00\uc838\uc628\ub9f5":s,filteredCenterd:p})})}()]})};var v=function(e){var a=e.\uac00\uc838\uc628\ub9f5,s=e.centerInfo,t=e.setModal;return Object(l.jsx)("div",{className:"modal",children:Object(l.jsxs)("div",{className:"modal-container",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h1",{className:"modal-title",children:"\uc13c\ud130\uac80\uc0c9"}),Object(l.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"modal-close",children:Object(l.jsx)(i.a,{icon:m.c,size:"2x"})})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsx)(b,{"\uac00\uc838\uc628\ub9f5":a,details:s})})]})})};function O(e){var a=Object(t.useState)(null),s=Object(c.a)(a,2),d=s[0],n=s[1],r=Object(t.useRef)(),o=Object(t.useRef)();return Object(t.useEffect)((function(){var a=document.createElement("script");a.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=9d8db804e25748be27d2b3c271de3292&libraries=services,clusterer&autoload=false",document.head.appendChild(a),a.onload=function(){kakao.maps.load((function(){var a={center:new kakao.maps.LatLng(36.503603,127.250751),level:12},s=new kakao.maps.Map(r.current,a);n(s),e.\uac00\uc838\uc628\ub9f5\ubcc0\uacbd(s)}))}}),[r]),Object(t.useEffect)((function(){if(null!==d){var e=new kakao.maps.ZoomControl;d.addControl(e,kakao.maps.ControlPosition.RIGHT)}}),[d]),Object(t.useEffect)((function(){if(null!==d){var a=new kakao.maps.MarkerClusterer({map:d,averageCenter:!0,minLevel:10}),s=e.centerInfo.map((function(e){var a=new kakao.maps.LatLng(e.lat,e.lng),s=new kakao.maps.Marker({map:d,position:a}),t=u()('<div class="overlay_info" />'),n=u()('<div class="title" />').text(e.centerName),r=u()('<div class="btn-close" title="\ub2eb\uae30" />').text("X").click((function(){i.setMap(null)})),c=u()('<div class="desc" />'),l=u()('<span class="address" />').text(e.address1+e.address2);t.append(n).append(c),c.append(l),n.append(r);var o=t[0],i=new kakao.maps.CustomOverlay({position:s.getPosition(),content:o,xAnchor:.5,yAnchor:1.3});return kakao.maps.event.addListener(s,"click",(function(){i.setMap(d),d.setCenter(a),d.setLevel(6)})),s}));a.addMarkers(s)}}),[d,e.centerInfo]),Object(t.useEffect)((function(){var e,a,s;null!==d&&(e=o.current,a="click",s=function(){function e(e){var a=new kakao.maps.Size(14,14),s={offset:new kakao.maps.Point(14,14)},t=new kakao.maps.MarkerImage("https://ssl.pstatic.net/static/maps/m/pin_rd.png",a,s),n=new kakao.maps.Marker({map:d,image:t,position:e});d.setLevel(4),d.setCenter(e),n.setMap(d)}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){var s=a.coords.latitude,t=a.coords.longitude;e(new kakao.maps.LatLng(s,t))})):e(new kakao.maps.LatLng(33.450701,126.570667))},e.addEventListener(a,(function e(t){s.call(this,t),this.removeEventListener(a,e)})))}),[d,o]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{setModal:e.setModal,btnCurrentTarget:o}),Object(l.jsx)("div",{id:"centerMap",ref:r})]})}function f(e){return Object(l.jsxs)("nav",{children:[Object(l.jsxs)("button",{ref:e.btnCurrentTarget,type:"button",className:"btn btn-current-location",children:[Object(l.jsx)(i.a,{icon:m.a,size:"2x"}),Object(l.jsx)("span",{className:"a11y-hidden",children:"\ud604\uc7ac \uc704\uce58\uac80\uc0c9"})]}),Object(l.jsxs)("button",{type:"button",onClick:function(){e.setModal(!0)},className:"btn btn-edu-search",children:[Object(l.jsx)(i.a,{icon:m.b,size:"2x"}),Object(l.jsx)("span",{className:"a11y-hidden",children:"\uc13c\ud130\uac80\uc0c9"})]})]})}var k=[{address1:"\uc804\ub77c\ubd81\ub3c4 \uc775\uc0b0\uc2dc \uc911\uc559\ub85c 48",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\uc775\uc0b0",lat:35.93841603,lng:126.9520428},{address1:"\uc804\ub77c\ubd81\ub3c4 \uc804\uc8fc\uc2dc \uc644\uc0b0\uad6c \ub178\uc1a1\uc5ec\uc6b82\uae38 10",address2:"\ud55c\ud638\ube4c\ub5295\uce35502\ud638",centerName:"\uc804\uc8fc",lat:35.82422869,lng:127.1465482},{address1:"\ub300\uc804\uad11\uc5ed\uc2dc \uc11c\uad6c \uc6d4\ud3c9\uc0c8\ub738\ub85c4\ubc88\uae38 105",address2:"2\uce35 202\ud638",centerName:"\ub300\uc804",lat:36.35447139,lng:127.3572189},{address1:"\uc6b8\uc0b0\uad11\uc5ed\uc2dc \ub0a8\uad6c \uc911\uc559\ub85c 297-1",address2:"5\uce35 \uc560\ud130\ubbf8",centerName:"\uc6b8\uc0b0",lat:35.54716905,lng:129.3089972},{address1:"\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c \uc7a5\uc81c\ub85c 161",address2:"201\ud638 \uc560\ud130\ubbf8",centerName:"\uc778\ucc9c\uc5f0\ud569",lat:37.4999849,lng:126.7302556},{address1:"\uad11\uc8fc\uad11\uc5ed\uc2dc \ub0a8\uad6c \ucc9c\ubcc0\uc88c\ub85c 366-1",address2:"2\uce35",centerName:"\uad11\uc8fc\ube5b\uace0\uc744",lat:35.14586087,lng:126.9119811},{address1:"\uad11\uc8fc \ub3d9\uad6c \ub300\uc778\ub3d9 4-2",address2:"\uc0bc\ud638\ud68c\uad00 606\ud638",centerName:"\uad11\uc8fc\uc911\uc559",lat:35.15530696,lng:126.9123052},{address1:"\uc804\ub77c\ub0a8\ub3c4 \uc21c\ucc9c\uc2dc \uc728\uc0b0\uae38 52",address2:"4\uce35 \uc560\ud130\ubbf8",centerName:"\uc21c\ucc9c",lat:34.94061184,lng:127.5274735},{address1:"\ubd80\uc0b0 \uc11c\uad6c \uad6c\ub355\ub85c296\ubc88\uae38 46",address2:"3\uce35 3\uce35",centerName:"\ubd80\uc0b0\uc911\uc559",lat:35.11122781,lng:129.020018},{address1:"\uacbd\uae30 \uad70\ud3ec\uc2dc \ubc88\uc601\ub85c 508",address2:"205\ud638  \uad70\ud3ec\uc81c\uc77c 2\uce35",centerName:"\uad70\ud3ec\uc81c\uc77c",lat:37.35792164,lng:126.9338914},{address1:"\uc804\ub77c\ub0a8\ub3c4 \uc5ec\uc218\uc2dc \uc7a5\uc1313\uae38 16",address2:"3\uce35 \uc560\ud130\ubbf8",centerName:"\uc5ec\uc218",lat:34.7532318,lng:127.6558157},{address1:"\uc11c\uc6b8 \uac15\ub0a8\uad6c \ud559\ub3d9\ub85c30\uae38 18",address2:"\uc131\ubaa9\ube4c\ub529 4\uce35 4\uce35",centerName:"\uc11c\uc6b8\uc6b0\ub9ac",lat:37.51293506,lng:127.0319644},{address1:"\ub300\uc804 \uc911\uad6c \ubd80\uc0ac\ub3d9 150-11 \ubc88\uc9c0",address2:"2\uce35",centerName:"\ub300\uc804\uc911\uc559",lat:36.31379244,lng:127.4348394},{address1:"\ucda9\ub0a8 \uc544\uc0b0\uc2dc \uccad\uc6b4\ub85c 84 \uc628\ucc9c\ub3d980-14",address2:"2\uce35",centerName:"\uc544\uc0b0\ud558\ubaa8\ub2c8",lat:36.78133436,lng:127.0071747},{address1:"\uc11c\uc6b8 \uc885\ub85c\uad6c \uad00\uc218\ub3d9 20",address2:"\uad6d\uc77c\uad00\ube4c\ub529 8\uce35",centerName:"\uc11c\uc6b8\uc885\ub85c",lat:37.56973371,lng:126.989953},{address1:"\ub300\uc804 \uc11c\uad6c \uc6a9\ubb38\ub3d9 257-15\ubc88\uc9c0",address2:"2\uce35",centerName:"\ub300\uc804\uc6a9\ubb38",lat:36.33730758,lng:127.3940253},{address1:"\uc11c\uc6b8 \uad00\uc545\uad6c \ub0a8\ud604\ub3d9 1062-2",address2:"\uc0b0\uc218\uac11\uc0b0 4\uce35",centerName:"\uc11c\uc6b8",lat:37.4755362,lng:126.9796702},{address1:"\uad11\uc8fc \ub3d9\uad6c \ud559\ub3d9 71-3",address2:"\uc601\ub3d9\ube4c\ub529 502\ud638 \uc560\ud130\ubbf8",centerName:"\ub3d9\uad11\uc8fc",lat:35.1404634,lng:126.9202033},{address1:"\uacbd\uae30\ub3c4 \uace0\uc591\uc2dc \ub355\uc591\uad6c \ud654\uc911\ub85c 96",address2:"209\ud638",centerName:"\ub300\uad6c\uad11\uc7a5",lat:37.63573183,lng:126.8317881},{address1:"\uacbd\uc0c1\ub0a8\ub3c4 \ucc3d\uc6d0\uc2dc \ub9c8\uc0b0\ud569\ud3ec\uad6c \uc0b0\ud638\ub3d9 13-47",address2:"\uc2e0\uc6b0\ucf54\uc544\ube4c\ub529 4\uce35 503",centerName:"\ucc3d\uc6d0\uc81c\uc77c",lat:35.21876515,lng:128.586766},{address1:"\ub300\uc804 \uc11c\uad6c \uad00\uc8002\ub3d9 1122",address2:"1\uce35 \uc560\ud130\ubbf8",centerName:"\ub300\uc804\uc624\uc544\uc2dc\uc2a4",lat:36.30079623,lng:127.3332604},{address1:"\uc11c\uc6b8 \uc740\ud3c9\uad6c \uc9c4\ud765\ub85c 68",address2:"301\ud638 3\uce35",centerName:"\uc740\ud3c9\uac00\ub2a5",lat:37.60300682,lng:126.9216316},{address1:"\uc804\ub77c\ubd81\ub3c4 \uc804\uc8fc\uc2dc \uc644\uc0b0\uad6c \ud604\ubb343\uae38 86",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\uc804\uc8fc\ud5c8\ub2c8\ube44\uc544\ub9ac\uc6b8",lat:35.82306998,lng:127.1491791},{address1:"\uc804\ubd81 \uc804\uc8fc\uc2dc \uc644\uc0b0\uad6c \uc911\uc0b0\uc911\uc559\ub85c6",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\uc804\uc8fc\ud0dc\ud3c9",lat:35.81629294,lng:127.1187576},{address1:"\ub300\uc804 \uc720\uc131\uad6c \ubc18\uc11d\ub3d9 638-1\ubc88\uc9c0",address2:"2\uce35",centerName:"\ub300\ub355\uc8fc\uc2e0",lat:36.39188736,lng:127.3119767},{address1:"\uacbd\ub0a8 \ucc3d\uc6d0\uc2dc \ub9c8\uc0b0 \ud68c\uc6d0\uad6c \ud68c\uc6d01\ub3d9 35-54",address2:"3\uce35 301\ud638",centerName:"\ub9c8\uc0b0",lat:35.22125873,lng:128.5755343},{address1:"\uc804\ub0a8 \uc21c\ucc9c\uc2dc \uc5f0\ud5a5\ub3d9 1601-3",address2:"2\uce35",centerName:"\ub3d9\uc21c\ucc9c",lat:34.94080427,lng:127.5241684},{address1:"\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ubcf5\uc9c0\ub85c 70",address2:"\ubc29\uc120\ubb38\ube4c\ub529 4\uce35",centerName:"\uc81c\uc8fc\uc544\ud06c",lat:33.4872059,lng:126.5251174},{address1:"\uc804\ub77c\ubd81\ub3c4 \uc815\uc74d\uc2dc \uc5f0\uc9c01\uae38 58",address2:"2\uce35",centerName:"\uc815\uc74d\uc911\uc559",lat:35.57371751,lng:126.8450229},{address1:"\uacbd\ub0a8 \uc9c4\uc8fc\uc2dc \uc7a5\ub300\ub85c 70",address2:"\ub3d9\uba85\uc720\ub9ac\uc0f7\uc2dc 3\uce35",centerName:"\uc9c4\uc8fc\uc131\uacf5",lat:35.19742032,lng:128.0868248},{address1:"\uc11c\uc6b8 \uc601\ub4f1\ud3ec\uad6c \ub300\ub9bc\ub3d9 1122\ubc88\uc9c0",address2:"\uc2e0\ub300\ub9bc\uc790\uc774 3\uce35 316\ud638",centerName:"\uc11c\uc6b8\uc7a0\uc2e4",lat:37.48599007,lng:126.9022262},{address1:"\uc804\ub77c\ubd81\ub3c4 \ub0a8\uc6d0\uc2dc \uc758\ucd1d\ub85c 88-1",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\ub0a8\uc6d0",lat:35.40853245,lng:127.3766965},{address1:"\uad11\uc8fc\uad11\uc5ed\uc2dc \ubd81\uad6c \uc6b0\uce58\ub85c 49",address2:"2\uce35",centerName:"\uad11\uc8fc\uc138\uacc4\ube44\uc83c",lat:35.17202258,lng:126.9117269},{address1:"\uacbd\uc0c1\ub0a8\ub3c4 \uc9c4\uc8fc\uc2dc \ub3d7\uace8\ub85c 173",address2:"2\uce35",centerName:"\uc9c4\uc8fc\uc81c\uc77c",lat:35.18370744,lng:128.1117032},{address1:"\uad11\uc8fc\uad11\uc5ed\uc2dc \ubd81\uad6c \ub450\uc554\ub3d9 875-17",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\uad11\uc8fc\uc0c1\ubb34",lat:35.16994324,lng:126.9275148},{address1:"\ucda9\ubd81 \uccad\uc8fc\uc2dc \uc11c\uc6d0\uad6c \uac1c\uc2e0\ub3d9 278-10",address2:"\ud604\ub300\uc0c1\uac00 205\ud638",centerName:"\uccad\uc8fc\uac1c\uc2e0",lat:36.62464856,lng:127.4505927},{address1:"\uad11\uc8fc \uc11c\uad6c \ud654\uc8154\ub3d9 804-13",address2:"2\uce35",centerName:"\uad11\uc8fc\ud638\uc0b0\ub098",lat:35.14367415,lng:126.8728988},{address1:"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc0bc\ub3c41\ub3d9 533-4",address2:"3\uce35",centerName:"\uc81c\uc8fc\uc911\uc559",lat:33.50189331,lng:126.5196668},{address1:"\uc11c\uc6b8 \uc131\ubd81\uad6c \ub3d9\uc120\ub3d94\uac00 121\ubc88\uc9c0",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\uc131\ubd81\ub3c8\uc554",lat:37.59441857,lng:127.0185768},{address1:"\uacbd\ubd81 \uacbd\uc8fc\uc2dc \uc6d0\uc9c0\uae38 20",address2:"\uacc4\ub9bc\uc0c1\uac00 \uac00\ub3d9 201\ud638",centerName:"\uacbd\uc8fc\ud669\uae08",lat:35.86804797,lng:129.2203354},{address1:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uad6c\ubbf8\ub3d9 185-5",address2:"\ub3d9\uc544\ud504\ub77c\uc790702\ud638",centerName:"\ubd84\ub2f9",lat:37.33837925,lng:127.1094053},{address1:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub3d9\ub300\ubb38\uad6c \ud718\uacbd\ub3d9 269-26",address2:"\ud0dc\uc815\ube4c\ub529 5\uce35",centerName:"\ub3d9\ub300\ubb38\ud0d1",lat:37.58957462,lng:127.0613254},{address1:"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc5f0\ub3d9 260-21",address2:"405\ud638",centerName:"\uc81c\uc8fc\ubbf8\ub798",lat:33.4904222,lng:126.4899643},{address1:"\ub300\uad6c \ub3d9\uad6c \ubc29\ucd0c\ub3d9 1002-6",address2:"2\uce35",centerName:"\ub300\uad6c\uc0ac\ub791",lat:35.88365196,lng:128.6610976},{address1:"\uc11c\uc6b8 \uac15\ub3d9\uad6c \uad6c\ucc9c\uba74\ub85c 153",address2:"401\ud638 4\uce35",centerName:"\uc11c\uc6b8\ucc9c\ud638",lat:37.54228895,lng:127.1219657},{address1:"\ub300\uc804\uad11\uc5ed\uc2dc \ub3d9\uad6c \ub3d9\uc11c\ub300\ub85c1668\ubc88\uae38 28",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\ub300\uc804\uc774\ub8f8",lat:36.34717683,lng:127.4349625},{address1:"\uacbd\uc0c1\ubd81\ub3c4 \ud3ec\ud56d\uc2dc \ubd81\uad6c \ub3d9\ube48\ub85c 74",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\ud3ec\ud56d\uac00\uc778",lat:36.04356625,lng:129.3696094},{address1:"\uacbd\uae30 \uc548\uc0b0\uc2dc \uc0c1\ub85d\uad6c \uc0ac\ub3d9 1520-7\ubc88\uc9c0",address2:"2\uce35",centerName:"\uc548\uc0b0\ubcf8\uc624",lat:37.30645985,lng:126.8453853},{address1:"\uc804\ub77c\ubd81\ub3c4 \uc804\uc8fc\uc2dc \ub355\uc9c4\uad6c \uc544\uc911\ub85c 124",address2:"2\uce35",centerName:"\uc804\uc8fc\uac00\uc871",lat:35.82489492,lng:127.1634906},{address1:"\ubd80\uc0b0 \ubd80\uc0b0\uc9c4\uad6c \uc804\ud3ec\ub3d9 635-13",address2:"\uc6b0\uc815\ube4c\ub5297\uce35",centerName:"\ubd80\uc0b0",lat:35.16053812,lng:129.0646954},{address1:"\uc11c\uc6b8 \uae08\ucc9c\uad6c \uc2dc\ud765\ub3d9 \uc0b0173-8",address2:"\uc131\uc9c0\uc0c1\uac00303",centerName:"\uc11c\uc6b8\uae08\ucc9c",lat:37.45090448,lng:126.8979013},{address1:"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ubd80\uc0b0\uc9c4\uad6c \uc804\ud3ec\ub300\ub85c 294",address2:"2\uce35 \uc560\ud130\ubbf8",centerName:"\ubd80\uc0b0\uac08\ub9e4\uae30",lat:35.1628921,lng:129.067282},{address1:"\uacbd\uae30 \ubd80\ucc9c\uc2dc \ubd80\ucc9c\ub85c66\ubc88\uae38 51",address2:"2\uce35",centerName:"\ubd80\ucc9c",lat:37.48855245,lng:126.7862504},{address1:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uad6c\ubbf8\ub3d9 186-6",address2:"JW \ube4c\ub529 5\uce35",centerName:"\ubd84\ub2f9TOP",lat:37.33918815,lng:127.1097843},{address1:"\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c \uc2e0\ud2b8\ub9ac\ub85c6\ubc88\uae38 6",address2:"503\ud638",centerName:"\ubd80\ud3c9\ub0a8\uad11",lat:37.50608028,lng:126.7218425},{address1:"\uacbd\uae30\ub3c4 \uc591\ud3c9\uad70 \ud574\uc624\ub984\uae38 9",address2:"2\uce35",centerName:"\uc591\ud3c9TOP",lat:37.48846601,lng:127.4909556},{address1:"\ub300\uad6c \uc218\uc131\uad6c \uc9c0\uc0b02\ub3d9 1242-1",address2:"2\uce35",centerName:"\ub300\uad6c\ud734\uba3c",lat:35.82352072,lng:128.6280665},{address1:"\uc804\ub77c\ubd81\ub3c4 \uc815\uc74d\uc2dc \uc218\uc1314\ub85c 40",address2:"2\uce35",centerName:"\uc815\uc74d\uc5f0\uc9c0",lat:35.58362767,lng:126.8586521},{address1:"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \uc218\uc815\uad6c \uc131\ub0a8\ub300\ub85c 1222",address2:"6\uce35",centerName:"\uc131\ub0a8\uc6d4\ub4dc",lat:37.43884755,lng:127.1283903},{address1:"\uc804\ub0a8 \uc5ec\uc218\uc2dc \uc2e0\uae30\ub3d9 91-8\ubc88\uc9c0",address2:"2\uce35",centerName:"\uc5ec\uc218\uc5ec\ucc9c",lat:34.75753872,lng:127.6744577},{address1:"\ub300\uad6c \ub2ec\uc11c\uad6c \uc640\ub8e1\ub85c28\uae38 113",address2:"2\uce35",centerName:"\ub300\uad6c\ub2ec\uc11c",lat:35.84483483,lng:128.5435115},{address1:"\uacbd\uae30 \uad70\ud3ec\uc2dc \ud55c\uc138\ub85c44\ubc88\uae38 29",address2:"303\ud638",centerName:"\uc548\uc591\uae08\uc815",lat:37.34736357,lng:126.9553456},{address1:"\uc804\ubd81 \uc804\uc8fc\uc2dc \uc644\uc0b0\uad6c \ud604\ubb341\uae3835",address2:"2\uce35",centerName:"\uc804\uc8fc\uc544\ub9ac\uc6b8",lat:35.82194794,lng:127.1474308},{address1:"\uac15\uc6d0\ub3c4 \uc6d0\uc8fc\uc2dc \ub098\ube44\ud5c8\ub9ac\uae38 127",address2:"3\uce35 \uc560\ud130\ubbf8",centerName:"\uc6d0\uc8fc\ud55c\ub9c8\uc74c",lat:37.32066595,lng:127.9634103},{address1:"\uacbd\uae30 \uc758\uc815\ubd80\uc2dc \uc6a9\ud604\ub3d9554-4",address2:"\uc2e0\uc548\ube4c\ub529 3\uce35",centerName:"\uc758\uc815\ubd80\uc1a1\uc0b0",lat:37.73771056,lng:127.0878309},{address1:"\uc804\ub0a8 \ubaa9\ud3ec\uc2dc \ud558\ub2f9\ub0a8\ubd80\ub85c 28",address2:"\ub300\uc1a1\ube4c\ub529 4\uce35 \uc560\ud130\ubbf8",centerName:"\ubaa9\ud3ec",lat:34.79872278,lng:126.4276048},{address1:"\ucda9\ub0a8 \ucc9c\uc548\uc2dc \ub3d9\ub0a8\uad6c \uad6c\uc131\ub3d9 476-13",address2:"\uc775\uc218\ube4c\ub529 2\uce35",centerName:"\ucc9c\uc548\ub3d9\ub0a8",lat:36.79795648,lng:127.1596861},{address1:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ubd81\uad6c \uc624\ud328\uc0b0\ub85c 396-1",address2:"2\uce35",centerName:"\uc11c\uc6b8\uac15\ubd81\ucd5c\uace0",lat:37.63665894,lng:127.0278387},{address1:"\uc6b8\uc0b0\uad11\uc5ed\uc2dc \ub0a8\uad6c \uc0bc\uc0b0\ub85c 100",address2:"6\uce35 \uc560\ud130\ubbf8",centerName:"\uc6b8\uc0b0\uae00\ub85c\ubc8c",lat:35.53475952,lng:129.3186668},{address1:"\uad11\uc8fc\uad11\uc5ed\uc2dc \uc11c\uad6c \uc8fd\ubd09\ub300\ub85c 29",address2:"3\uce35 \uc560\ud130\ubbf8",centerName:"\uad11\uc8fc\ubb34\ub4f1",lat:35.15602346,lng:126.8828318},{address1:"\uacbd\ub0a8 \uac70\uc81c\uc2dc \uac70\uc81c\uc911\uc559\ub85c 1843",address2:"2\uce35",centerName:"\uac70\uc81c\uace0\ud604",lat:34.88305266,lng:128.6255662},{address1:"\uc11c\uc6b8 \uc11c\ucd08\uad6c \ub3d9\uc791\ub300\ub85c 72",address2:"5\uce35",centerName:"\uc11c\uc6b8\ubc29\ubc30\ube45",lat:37.48299684,lng:126.9823652}];var h=function(){var e=Object(t.useState)(!1),a=Object(c.a)(e,2),s=a[0],d=a[1],n=Object(t.useState)(k),r=Object(c.a)(n,2),i=r[0],m=(r[1],Object(t.useState)({})),j=Object(c.a)(m,2),g=j[0],u=j[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(O,{"\uac00\uc838\uc628\ub9f5\ubcc0\uacbd":u,centerInfo:i,setModal:d}),!0===s?Object(l.jsx)(v,{"\uac00\uc838\uc628\ub9f5":g,centerInfo:i,setModal:d}):null]})},x=s(13),C=s(14),L=Object(C.a)((function(){return[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2}]}));r.a.render(Object(l.jsx)(d.a.StrictMode,{children:Object(l.jsx)(x.a,{store:L,children:Object(l.jsx)(h,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6b0c96cd.chunk.js.map